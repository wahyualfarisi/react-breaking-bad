import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/ui/header';
import axios from 'axios';
import CharactesGrid from './components/characters/CharactesGrid';
import Search from './components/ui/Search';

const App = () =>  {
  const [items, setItems] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  const [query, setQuery] = useState('')

  useEffect( () => {
    const fetchItems = async () => {
      const results = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`);

      setItems(results.data);
      setIsLoading(false);
    }

    fetchItems();

  }, [query]);

   

  return (
    <div className="container">
      <Header />
      <Search getQuery={(q) => setQuery(q) } />
      <CharactesGrid isLoading={isLoading} items={items} />
    </div>
  );
}

export default App;
