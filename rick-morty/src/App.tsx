import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importe o componente Routes
import axios from 'axios';
import CharacterList from './components/CharacterList';
import Header from './components/Header'; 
import './App.css';

const App = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('https://rickandmortyapi.com/api/character/');
      setCharacters(response.data.results);
    };

    fetchData();
  }, []);

  return (
    <Router>
      <div className="background">
      <Header/>
      <Routes>
        <Route path="/" element={<CharacterList characters={characters} />} />
      </Routes>
      </div>
    </Router>
  );
};

export default App;
