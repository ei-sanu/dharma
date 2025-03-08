import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { motion } from 'framer-motion';

interface Message {
  text: string;
  isBot: boolean;
}

const sqlInjectionKnowledge = {
  "what is sql injection": "SQL injection is a type of security vulnerability that occurs when an attacker is able to insert malicious SQL code into a query that an application sends to its database. This can result in unauthorized access to data or manipulation of the database.",
  "how to prevent sql injection": "To prevent SQL injection: 1. Use parameterized queries 2. Input validation 3. Escape special characters 4. Use ORMs 5. Implement proper access controls 6. Regular security audits",
  "example of sql injection": "A classic example is entering ' OR '1'='1 as a password in a login form. This might result in a query like: SELECT * FROM users WHERE username='admin' AND password='' OR '1'='1'",
};

export default function Chatbot() {
  const [messages, setMessages] = useState<Message[]>([
    { text: "Hi! Ask me anything about SQL injection!", isBot: true }
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { text: input, isBot: false };
    setMessages(prev => [...prev, userMessage]);

    // Simple response logic
    const lowercaseInput = input.toLowerCase();
    let response = "I'm not sure about that. Try asking about what SQL injection is, how to prevent it, or examples of SQL injection.";

    for (const [key, value] of Object.entries(sqlInjectionKnowledge)) {
      if (lowercaseInput.includes(key)) {
        response = value;
        break;
      }
    }

    setTimeout(() => {
      setMessages(prev => [...prev, { text: response, isBot: true }]);
    }, 500);

    setInput("");
  };

  return (
    <div className="w-full max-w-2xl bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="h-[400px] overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
          >
            <div
              className={`max-w-[80%] p-3 rounded-lg ${
                message.isBot
                  ? 'bg-blue-100 text-blue-900'
                  : 'bg-green-100 text-green-900'
              }`}
            >
              {message.text}
            </div>
          </motion.div>
        ))}
      </div>
      <div className="border-t p-4 bg-gray-50">
        <div className="flex space-x-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask about SQL injection..."
            className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleSend}
            className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            <Send size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}