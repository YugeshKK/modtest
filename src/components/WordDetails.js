
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import Home from './Home';
import { searchWord } from '../actions/wordActions';
import { useEffect } from 'react';

const WordDetails = () => {
  const { word } = useParams();
  var wordDetails = wordDetails=useSelector((state) => state.wordDetails); ;
  
  if(!wordDetails.wordDetails){
    return <p>Waiting...</p>
  }
  return (
    <>
    <Home/>
    <div className='info'>
      <h2>{wordDetails.wordDetails.word}</h2>
      {wordDetails.wordDetails ? (
        <div>

          {wordDetails.wordDetails.phonetics.map(data=>(
            <div>
              <p>{data.text}</p>
              <audio controls>
              <source src={data.audio} type="audio/mpeg" />
              Your browser does not support the audio tag.
            </audio>
            </div>
          ))}

          <h3>Meanings:</h3>
          {wordDetails.wordDetails.meanings.map((meaning, index) => (
            <div key={index}>
              <h4>Part of Speech: {meaning.partOfSpeech}</h4>
              <ul>
                {meaning.definitions.map((definition, idx) => (
                  <li key={idx}>
                    <h5>Definition: {definition.definition}</h5>
                    {definition.example && <p>Example: {definition.example}</p>}
                    {definition.synonyms && (
                      <p>Synonyms: {definition.synonyms.join(', ')}</p>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
    </>
  );
};

export default WordDetails;
