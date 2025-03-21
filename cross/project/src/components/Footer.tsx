import React from 'react';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">XSS Security</h3>
            <p className="text-gray-400">
              Protecting web applications from cross-site scripting vulnerabilities.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white">About XSS</a></li>
              <li><a href="#types" className="text-gray-400 hover:text-white">Types of XSS</a></li>
              <li><a href="#prevention" className="text-gray-400 hover:text-white">Prevention</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="https://owasp.org/www-community/attacks/xss/" className="text-gray-400 hover:text-white">OWASP XSS</a></li>
              <li><a href="https://www.sans.org/" className="text-gray-400 hover:text-white">SANS Institute</a></li>
              <li><a href="https://portswigger.net/" className="text-gray-400 hover:text-white">PortSwigger</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <Github className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer" />
              <Twitter className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer" />
              <Linkedin className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer" />
              <Mail className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer" />
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} XSS Security. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;