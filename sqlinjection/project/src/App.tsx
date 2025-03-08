import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, MessageSquare, BookOpen } from 'lucide-react';
import Chatbot from './components/Chatbot';
import TheorySection from './components/TheorySection';

function App() {
  const [activeTab, setActiveTab] = useState<'theory' | 'chat'>('theory');

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-blue-600 text-white py-16"
      >
        <div className="container mx-auto px-4 text-center">
          <Shield className="w-16 h-16 mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-4">SQL Injection Learning Hub</h1>
          <p className="text-xl opacity-90">Master database security through interactive learning</p>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Navigation Tabs */}
        <div className="flex justify-center mb-8 space-x-4">
          <button
            onClick={() => setActiveTab('theory')}
            className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-colors ${
              activeTab === 'theory'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            <BookOpen size={20} />
            <span>Theory</span>
          </button>
          <button
            onClick={() => setActiveTab('chat')}
            className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-colors ${
              activeTab === 'chat'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            <MessageSquare size={20} />
            <span>Chat Assistant</span>
          </button>
        </div>

        {/* Content Area */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="flex justify-center"
        >
          {activeTab === 'theory' ? <TheorySection /> : <Chatbot />}
        </motion.div>
      </div>
    </div>
  );
}

export default App;