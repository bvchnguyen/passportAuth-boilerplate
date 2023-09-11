import React from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import Signup from './pages/Signup';

axios.defaults.baseURL = 'http://localhost:3005/';
axios.withCredentials = true;

function App() {
  return (
    <div className="App">
        <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<Signup />} />
        </Routes>
    </div>
  );
}

export default App;
