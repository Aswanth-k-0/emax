const express = require('express');
const { MongoClient } = require('mongodb');
const CryptoJS = require('crypto-js');
const cors = require('cors');

const app = express();
const port = 3001; // Your server port

app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Parse JSON requests

// MongoDB URI (replace <db_password> with your actual password)
const uri = 'mongodb+srv://aswanth1611:UsongYJJCUMFdGx9@emax.go4pk.mongodb.net/?retryWrites=true&w=majority&appName=emax';
const secretKey = 'thismykey';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

//save movie
app.post('/save-movie', async (req, res) => {
  const { movieData } = req.body; // Get movie data from the request

  try {
    const movieId = movieData.id; // Extract the movie ID
    console.log(`Movie Id: ${movieId}`);
    // Remove the 'id' from movieData for encryption (since id is not to be encrypted)
    const {...dataToEncrypt } = movieData;

    // Encrypt the rest of the movie data (excluding id)
    const encryptedData = CryptoJS.AES.encrypt(JSON.stringify(dataToEncrypt), secretKey).toString();

    await client.connect();
    const database = client.db('myDatabase'); // Replace with your actual database name
    const collection = database.collection('movies'); // Replace with your actual collection name

    // Check if the movie with the same id already exists
    const existingMovie = await collection.findOne({ id: movieId });

    if (existingMovie) {
      res.status(400).send('Movie already exists in the database!');
    } else {
      // Insert the movie data with 'id' unencrypted and 'data' encrypted
      await collection.insertOne({ id: movieId, data: encryptedData });
      res.status(200).send('Movie data saved to MongoDB!'+movieId+'success');
    }
  } catch (error) {
    console.error('Error saving data to MongoDB:', error.message); // Log detailed error message
    res.status(500).send('Error saving data to MongoDB: ' + error.message);
  } finally {
    await client.close(); // Close the MongoDB connection
  }
});


// GET Endpoint to retrieve and decrypt movies
app.get('/get-movies', async (req, res) => {
  try {
    await client.connect();
    const database = client.db('myDatabase'); // Use your actual database name
    const collection = database.collection('movies'); // Use your actual collection name

    const movies = await collection.find({}).toArray(); // Fetch all movie documents

    // Decrypt the data field for each movie
    const decryptedMovies = movies.map(movie => {
      const bytes = CryptoJS.AES.decrypt(movie.data, secretKey);
      const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
      return {...decryptedData,_id:movie._id}; // Return the decrypted movie data
    });

    res.status(200).json(decryptedMovies); // Send the decrypted movies back in the response
  } catch (error) {
    console.error('Error fetching data from MongoDB:', error);
    res.status(500).send('Error fetching data from MongoDB: ' + error.message);
  } finally {
    await client.close(); // Close the MongoDB connection
  }
});
//delete route
app.delete('/delete-movie/:id', async (req, res) => {
  const movieId = parseInt(req.params.id, 10); // Convert the movie ID from string to integer
  console.log("Received movie ID for deletion:", movieId); // Log the movie ID for debugging

  try {
    await client.connect();
    const database = client.db('myDatabase');
    const collection = database.collection('movies');

    // Find and delete the movie by its unencrypted 'id' field
    const deleteResult = await collection.deleteOne({ id: movieId });

    if (deleteResult.deletedCount === 1) {
      res.status(200).send('Movie deleted successfully');
    } else {
      res.status(404).send('Movie not found');
    }
  } catch (error) {
    console.error('Error deleting movie:', error.message);
    res.status(500).send('Error deleting movie: ' + error.message);
  } finally {
    await client.close();
  }
});



app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
