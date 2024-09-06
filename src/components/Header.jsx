// Header.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Adjust if you're using a different routing library
import { Helmet } from 'react-helmet';
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    <Helmet>
        <meta name="description" content="UniSkyLink - Providing reliable internet connections and service plans." />
        <meta name="keywords" content="Wi-Fi plans, internet, UniSkyLink, connections, members" />
        <meta name="author" content="Vimal Negi" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
        <meta property="og:title" content="UniSkyLink Internet Services" />
        <meta property="og:description" content="Check out UniSkyLink's services, including connections, members, and contact details." />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
    <header className="bg-gray-900 text-white relative z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link to="/" className="flex items-center">
            <img src="/logo2.jpg" alt="Logo" className="h-8 mr-2" />
            UniSkyLink
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-gray-400">Plans</Link>
          <Link to="/members" className="hover:text-gray-400">Members</Link>
          <Link to="/contact" className="hover:text-gray-400">Contact Us</Link>
          <Link to="/connections" className="hover:text-gray-400">Connections</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden flex items-center" 
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed top-0 right-0 w-64 bg-gray-800 text-white h-full transform transition-transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex justify-end p-4">
          <button onClick={() => setIsOpen(false)}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <nav className="flex flex-col items-center">
          <Link to="/" className="py-4" onClick={() => setIsOpen(false)}>Plans</Link>
          <Link to="/members" className="py-4" onClick={() => setIsOpen(false)}>Members</Link>
          <Link to="/contact" className="py-4" onClick={() => setIsOpen(false)}>Contact Us</Link>
          <Link to="/connections" className="py-4" onClick={() => setIsOpen(false)}>Connections</Link>
        </nav>
      </div>
    </header>
    </>
  );
};

export default Header;
