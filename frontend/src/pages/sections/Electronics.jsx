import { useState, useEffect } from "react";

const API_KEY = "FQSzpUOgzFrc7XpAXbFruAkXDmUToEURO19peBU32A8RCrJn6ZghZvtl";

export default function ImageGallery() {
  const [images, setImages] = useState([]);
 
  const query="smart phone";
  useEffect(() => {
    fetch(`https://api.pexels.com/v1/search?query=${query}&per_page=1`, {
      headers: { Authorization: API_KEY },
    })
      .then(response => response.json())
      .then(data => setImages(data.photos))
      .catch(error => console.error("Error fetching images:", error));
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4">
      {images.map(photo => (
        <img key={photo.id} src={photo.src.medium} alt={photo.photographer} className="rounded-lg shadow-md" />
      ))}
    </div>
  );
}
