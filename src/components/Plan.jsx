import React from 'react';
import { Link } from 'react-router-dom';
function Plan({ image, name, price, data, speed }) {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-xs mx-auto p-6 ">

      <img 
        className="w-full h-32 object-cover rounded-t-lg" 
        src={image} 
        alt={name} 
      />
      <div className="p-4 text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">{name}</h2>
        <p className="text-lg font-bold text-gray-900 mb-2">{price}</p>
        <p className="text-gray-600 mb-2">Data: {data}</p>
        <p className="text-gray-600 mb-4">Speed: {speed}</p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300">
         <Link to="/contact" >Choose Plan</Link></button>
        
      </div>
    </div>
  );
}

export default Plan;
