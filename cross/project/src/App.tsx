import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { AlertTriangle, ShieldAlert, Shield, Code2 } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="pt-20 bg-gradient-to-r from-gray-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Understanding Cross-Site Scripting (XSS)</h1>
            <p className="text-xl mb-8">Learn about one of the most common web security vulnerabilities and how to prevent it</p>
          </div>
        </div>
      </section>

      {/* About XSS Section */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">What is Cross-Site Scripting?</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-700 mb-4">
                Cross-Site Scripting (XSS) is a security vulnerability that allows attackers to inject malicious scripts into web pages viewed by other users. These scripts can steal sensitive information, hijack user sessions, or deface websites.
              </p>
              <div className="flex items-center space-x-2 text-red-600">
                <AlertTriangle className="h-6 w-6" />
                <span className="font-semibold">High-Risk Security Threat</span>
              </div>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Impact of XSS Attacks</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-2">
                  <ShieldAlert className="h-5 w-5 text-red-500" />
                  <span>Cookie theft and session hijacking</span>
                </li>
                <li className="flex items-center space-x-2">
                  <ShieldAlert className="h-5 w-5 text-red-500" />
                  <span>Keylogging and data theft</span>
                </li>
                <li className="flex items-center space-x-2">
                  <ShieldAlert className="h-5 w-5 text-red-500" />
                  <span>Website defacement</span>
                </li>
                <li className="flex items-center space-x-2">
                  <ShieldAlert className="h-5 w-5 text-red-500" />
                  <span>Malware distribution</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Types of XSS Section */}
      <section id="types" className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Types of XSS Attacks</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Shield className="h-12 w-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Reflected XSS</h3>
              <p className="text-gray-600">Non-persistent attacks where malicious scripts are reflected off a web server through error messages or search results.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Shield className="h-12 w-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Stored XSS</h3>
              <p className="text-gray-600">Persistent attacks where malicious scripts are permanently stored on target servers and executed when users access the content.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Shield className="h-12 w-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3">DOM-based XSS</h3>
              <p className="text-gray-600">Client-side attacks where the vulnerability exists in client-side code rather than server-side code.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Prevention Section */}
      <section id="prevention" className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">XSS Prevention</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-semibold mb-4">Input Validation</h3>
              <div className="bg-gray-800 text-gray-100 p-4 rounded-lg">
                <Code2 className="h-6 w-6 mb-2" />
                <pre className="text-sm">
                  <code>
                    // Example of input sanitization{'\n'}
                    const sanitizeInput = (input) => {'{'}
                      return input.replace(/[<>]/g, '');
                    {'}'};
                  </code>
                </pre>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Security Best Practices</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-green-500" />
                  <span>Use Content Security Policy (CSP)</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-green-500" />
                  <span>Encode output data</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-green-500" />
                  <span>Validate input on server-side</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-green-500" />
                  <span>Use security headers</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Video Demo Section */}
      <section id="demo" className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">XSS Attack Demonstration</h2>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              className="w-full aspect-video rounded-lg shadow-lg"
              src="https://www.youtube.com/embed/EoaDgUgS6QA"
              title="Understanding Cross-Site Scripting (XSS)"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;
  )
}