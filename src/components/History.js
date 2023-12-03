// History.js
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const History = () => {
  const historyList = useSelector((state) => state.wordDetails.history);
  console.log(historyList)
  return (
    <div>
      <h2>Search History</h2>
      <ul>
        {historyList.map((word) => (
          <li key={word}>
            <Link to={`/word/${word}`}>{word}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default History;
