import React from 'react';
import './Suggestion.css';

export default function Suggestion({ suggestions }) {
  return (
    <div className='sug_outer'>
      {suggestions && suggestions.map((suggestion, index) => (
        <div className='sug_box' key={index}>
          <h5 style={{ color: "black" }}>{suggestion.suggestion}</h5>
        </div>
      ))}
    </div>
  );
}
