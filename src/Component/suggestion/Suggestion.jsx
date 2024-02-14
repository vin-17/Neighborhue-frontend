import React from 'react';
import './Suggestion.css';

export default function Suggestion({ suggestions }) {
  return (
    <div className='sug_outer'>
      {suggestions && suggestions.map((suggestion, index) => (
        <div className='sug_box' key={index}>
          <h6 style={{ color: "black" }}>{suggestion.suggestion}</h6>
        </div>
      ))}
    </div>
  );
}
