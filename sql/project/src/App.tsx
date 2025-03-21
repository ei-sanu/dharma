import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { AlertTriangle, Shield, Terminal, BookOpen } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gray-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Understanding SQL Injection Attacks</h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Learn about one of the most critical web security vulnerabilities and how to protect against it.
              </p>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section id="overview" className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8">What is SQL Injection?</h2>
            <div className="prose max-w-none">
              <p className="text-lg text-gray-700 mb-6">
                SQL injection is a code injection technique that might destroy your database.
                It's one of the most common web hacking techniques and a major security threat to web applications.
              </p>
              
              {/* Video Section */}
              <div className="aspect-w-16 aspect-h-9 mb-8">
                <iframe
                  className="w-full h-[400px]"
                  src="https://www.youtube.com/embed/ciNHn38EyRc"
                  title="SQL Injection Explained"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        {/* Attack Methods Section */}
        <section id="attack-methods" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8">Common Attack Methods</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <Terminal className="w-8 h-8 text-red-500 mb-4" />
                <h3 className="text-xl font-bold mb-4">In-band SQLi</h3>
                <p className="text-gray-700">
                  The attacker uses the same communication channel to launch their attack
                  and gather results. This includes Error-based and Union-based SQLi.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <AlertTriangle className="w-8 h-8 text-yellow-500 mb-4" />
                <h3 className="text-xl font-bold mb-4">Blind SQLi</h3>
                <p className="text-gray-700">
                  The attacker sends payloads to the server and observes the response
                  behavior to determine the structure of the database.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Prevention Section */}
        <section id="prevention" className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8">Prevention Techniques</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow">
                <Shield className="w-8 h-8 text-green-500 mb-4" />
                <h3 className="text-xl font-bold mb-4">Input Validation</h3>
                <p className="text-gray-700">
                  Implement strict input validation and sanitization on all user inputs.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <BookOpen className="w-8 h-8 text-blue-500 mb-4" />
                <h3 className="text-xl font-bold mb-4">Prepared Statements</h3>
                <p className="text-gray-700">
                  Use parameterized queries and prepared statements to separate SQL logic from data.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <Shield className="w-8 h-8 text-purple-500 mb-4" />
                <h3 className="text-xl font-bold mb-4">Least Privilege</h3>
                <p className="text-gray-700">
                  Apply the principle of least privilege to database accounts.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Resources Section */}
        <section id="resources" className="py-16 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8">Additional Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold mb-4">OWASP Guidelines</h3>
                <p className="text-gray-700 mb-4">
                  Comprehensive guide on SQL injection prevention from OWASP.
                </p>
                <a 
                  href="https://owasp.org/www-community/attacks/SQL_Injection"
                  className="text-blue-600 hover:text-blue-800"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn More →
                </a>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold mb-4">Practice Platforms</h3>
                <p className="text-gray-700 mb-4">
                  Hands-on platforms to practice SQL injection in a safe environment.
                </p>
                <ul className="list-disc list-inside text-gray-700">
                  <li>DVWA (Damn Vulnerable Web Application)</li>
                  <li>WebGoat</li>
                  <li>SQLZoo</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;