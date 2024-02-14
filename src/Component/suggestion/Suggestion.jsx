import React from 'react';
import './Suggestion.css';

export default function Suggestion({ suggestions }) {
  return (
    <div className='sug_outer'>
      {suggestions && suggestions.map((suggestion, index) => (
        <div className='sug_box' key={index}>
          <h5 style={{ color: "#1e1e1e" }}>{suggestion.suggestion}</h5>
          <button><i class="fa-solid fa-circle-xmark" style={{color: "#FFD43B"}}></i></button>
        </div>
      ))}
    </div>
  );
}
