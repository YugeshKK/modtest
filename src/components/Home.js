// Home.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { searchWord } from '../actions/wordActions';


const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchTerm) {
      dispatch(searchWord(searchTerm))
      navigate(`/word/${searchTerm}`); 
    }
  };

  return (
    <div id='cc'>
      <input className='in'
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <p>If its not Loading , its due to the api call, please try fetching one more time...</p>
    </div>
  );
};

export default Home;
