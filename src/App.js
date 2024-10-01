import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from "./Main";
import Admin from "./Admin";

function App() {
  return (
    <Router>
      <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path="/admin"element={<Admin/>}/>
      </Routes>
    </Router>
  );
}

export default App;
