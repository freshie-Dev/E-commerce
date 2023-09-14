// App.js
import React, { useState, useEffect } from 'react';
import ImageUpload from './ImageUpload';
import ImageResults from './ImageResults';
import ImageRecognition from './imageRecognition';

function App() {
  const [results, setResults] = useState([]);
  const [imageRecognition, setImageRecognition] = useState(null);

  useEffect(() => {
    const initializeImageRecognition = async () => {
      const recognition = new ImageRecognition();
      await recognition.loadModel();
      setImageRecognition(recognition);
    };

    initializeImageRecognition();
  }, []);

  const handleImageUpload = async (imageFile) => {
    if (imageRecognition && imageFile) {
      const image = document.createElement('img');
      image.src = URL.createObjectURL(imageFile);

      const result = await imageRecognition.recognizeImage(image);
      setResults((prevResults) => [...prevResults, result]);
    }
  };

  return (
    <div>
      <h1>Image Recognition App</h1>
      <ImageUpload handleImageUpload={handleImageUpload} />
      <ImageResults results={results} />
    </div>
  );
}

export default App;
