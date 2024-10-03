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

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

app.post('/save-movie', async (req, res) => {
  const { movieData } = req.body; // Get movie data from the request
  const secretKey = 'thismykey';  // Your encryption key
  
  try {
    // Encrypt movie data
    const encryptedData = CryptoJS.AES.encrypt(JSON.stringify(movieData), secretKey).toString();

    await client.connect();
    const database = client.db('myDatabase'); // Replace with your actual database name
    const collection = database.collection('movies'); // Replace with your actual collection name

    // Insert encrypted data into MongoDB
    await collection.insertOne({ data: encryptedData });
    res.status(200).send('Movie data saved to MongoDB!');
  } catch (error) {
    console.error('Error saving data to MongoDB:', error.message); // Log detailed error message
    res.status(500).send('Error saving data to MongoDB: ' + error.message);
  } finally {
    await client.close(); // Close the MongoDB connection
  }
});
// Assuming you already have a MongoDB collection set up for movies
app.get('/movies/:type', async (req, res) => {
  const { type } = req.params;
  
  try {
    await client.connect();
    const database = client.db('myDatabase'); // Use your database name
    const collection = database.collection('movies'); // Use your collection name

    // Retrieve data based on the type
    const movies = await collection.find({ type }).toArray();
    res.status(200).json(movies);
  } catch (error) {
    console.error('Error retrieving movies:', error);
    res.status(500).send('Error retrieving movies');
  } finally {
    await client.close();
  }
});


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
