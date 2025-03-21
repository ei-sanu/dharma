import React from 'react';
import { Github, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">About</h3>
            <p className="text-gray-400">
              Educational resource dedicated to understanding and preventing SQL injection attacks.
              Stay informed and protect your applications.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#overview" className="text-gray-400 hover:text-white">Overview</a></li>
              <li><a href="#attack-methods" className="text-gray-400 hover:text-white">Attack Methods</a></li>
              <li><a href="#prevention" className="text-gray-400 hover:text-white">Prevention</a></li>
              <li><a href="#resources" className="text-gray-400 hover:text-white">Resources</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="https://github.com" className="text-gray-400 hover:text-white">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://twitter.com" className="text-gray-400 hover:text-white">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com" className="text-gray-400 hover:text-white">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-400">© {new Date().getFullYear()} SQL Injection Guide. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;