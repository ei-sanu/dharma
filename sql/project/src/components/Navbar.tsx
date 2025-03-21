import React, { useState } from 'react';
import { Menu, X, ShieldAlert } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <ShieldAlert className="w-8 h-8 text-red-500" />
            <span className="ml-2 text-xl font-bold">SQL Injection Guide</span>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#overview" className="hover:bg-gray-700 px-3 py-2 rounded-md">Overview</a>
              <a href="#attack-methods" className="hover:bg-gray-700 px-3 py-2 rounded-md">Attack Methods</a>
              <a href="#prevention" className="hover:bg-gray-700 px-3 py-2 rounded-md">Prevention</a>
              <a href="#resources" className="hover:bg-gray-700 px-3 py-2 rounded-md">Resources</a>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="#overview" className="block hover:bg-gray-700 px-3 py-2 rounded-md">Overview</a>
          <a href="#attack-methods" className="block hover:bg-gray-700 px-3 py-2 rounded-md">Attack Methods</a>
          <a href="#prevention" className="block hover:bg-gray-700 px-3 py-2 rounded-md">Prevention</a>
          <a href="#resources" className="block hover:bg-gray-700 px-3 py-2 rounded-md">Resources</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;