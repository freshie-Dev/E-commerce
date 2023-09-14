import React, { useState } from 'react';

function ImageUpload({ handleImageUpload }) {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      <button onClick={() => handleImageUpload(selectedImage)}>Upload Image</button>
    </div>
  );
}

export default ImageUpload;