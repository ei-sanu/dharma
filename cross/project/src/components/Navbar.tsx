import React, { useState } from 'react';
import { Menu, X, Shield } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Shield className="h-8 w-8 text-blue-500" />
            <span className="ml-2 text-xl font-bold">XSS Security</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="hover:text-blue-500">Home</a>
            <a href="#about" className="hover:text-blue-500">About XSS</a>
            <a href="#types" className="hover:text-blue-500">Types</a>
            <a href="#prevention" className="hover:text-blue-500">Prevention</a>
            <a href="#demo" className="hover:text-blue-500">Video Demo</a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-900">
            <a href="#home" className="block px-3 py-2 hover:bg-gray-800 rounded">Home</a>
            <a href="#about" className="block px-3 py-2 hover:bg-gray-800 rounded">About XSS</a>
            <a href="#types" className="block px-3 py-2 hover:bg-gray-800 rounded">Types</a>
            <a href="#prevention" className="block px-3 py-2 hover:bg-gray-800 rounded">Prevention</a>
            <a href="#demo" className="block px-3 py-2 hover:bg-gray-800 rounded">Video Demo</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;