import React from "react";
import ModalImage from "react-modal-image";

const images = [
  { src: "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D", title: "Annual Sports Day" },
  { src: "https://images.unsplash.com/photo-1518152006812-edab29b069ac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D", title: "Science Exhibition" },
  { src: "https://images.unsplash.com/photo-1770129703548-e1ced0e4f118?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D", title: "Art & Craft Workshop" },
  { src: "https://plus.unsplash.com/premium_photo-1670267552055-8f33a55c1af0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D", title: "Cultural Festival" },
  { src: "https://images.unsplash.com/photo-1530099486328-e021101a494a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D", title: "Debate Competition" },
  { src: "https://plus.unsplash.com/premium_photo-1676637656166-cb7b3a43b81a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D", title: "Robotics Club Showcase" },
];

const Gallery = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-semibold mb-6 text-gray-800">
          school Activities Gallery
        </h2>
        <p className="text-lg text-gray-600 mb-12">
          Explore the vibrant activities and events held at our school.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-lg shadow-lg"
          >
            <ModalImage
              small={image.src}
              large={image.src}
              alt={image.title}
              className="w-full h-60 object-cover transform transition duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
              <p className="text-white text-lg font-semibold">{image.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
