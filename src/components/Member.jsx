import React from 'react';
import { Link } from 'react-router-dom';
function Member({ name, image, designation }) {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="flex items-center justify-center bg-blue-500 p-4">
        <img 
          className="w-32 h-32 rounded-full object-cover border-4 border-white pointer-events-none select-none" 
          src={image} 
          alt={name} 
        />
      </div>
      <div className="p-6 text-center">
        <h2 className="text-2xl font-semibold text-gray-800">{name}</h2>
        <p className="text-gray-600 mt-2">{designation}</p>
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition duration-300">
        <Link to='/contact'> Connect</Link> 
        </button>
      </div>
    </div>
  );
}

export default Member;
