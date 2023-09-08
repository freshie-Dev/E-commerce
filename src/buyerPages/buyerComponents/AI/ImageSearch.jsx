import React, { useState } from 'react';
import axios from 'axios';

function ImageSearch() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [recognizedProducts, setRecognizedProducts] = useState([]);

  const handleImageUpload = async (event) => {
    const imageFile = event.target.files[0];

    if (imageFile) {
      const formData = new FormData();
      formData.append('image', imageFile);

      try {
        const response = await axios.post('/api/recognize', formData);
        setRecognizedProducts(response.data);
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      {recognizedProducts.map((product) => (
        <div key={product.id}>{product.name}</div>
      ))}
    </div>
  );
}

export default ImageSearch;
