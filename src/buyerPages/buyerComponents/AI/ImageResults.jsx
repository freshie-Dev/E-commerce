// ImageResults.js
import React from 'react';

function ImageResults({ results }) {
  return (
    <div>
      <h2>Recognized Products</h2>
      <ul>
        {results.map((result, index) => (
          <li key={index}>{result}</li>
        ))}
      </ul>
    </div>
  );
}

export default ImageResults;
