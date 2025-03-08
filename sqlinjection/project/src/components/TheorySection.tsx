import React from 'react';
import { motion } from 'framer-motion';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { AlertTriangle, Shield, Terminal } from 'lucide-react';

const codeExample = `-- Vulnerable Query
$query = "SELECT * FROM users WHERE username = '" + username + "' AND password = '" + password + "'";

-- Attack Input
username: admin' --
password: anything

-- Resulting Query
SELECT * FROM users WHERE username = 'admin' --' AND password = 'anything'`;

export default function TheorySection() {
  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-lg shadow-lg p-6"
      >
        <div className="flex items-center space-x-2 mb-4">
          <AlertTriangle className="text-red-500" size={24} />
          <h2 className="text-2xl font-bold">What is SQL Injection?</h2>
        </div>
        <p className="text-gray-700 leading-relaxed">
          SQL Injection is a critical security vulnerability that occurs when an application fails to properly validate or sanitize user input that is used in SQL queries. Attackers can exploit this vulnerability to manipulate the database, potentially gaining unauthorized access to sensitive data or performing malicious operations.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white rounded-lg shadow-lg p-6"
      >
        <div className="flex items-center space-x-2 mb-4">
          <Terminal className="text-blue-500" size={24} />
          <h2 className="text-2xl font-bold">Example Attack</h2>
        </div>
        <SyntaxHighlighter
          language="sql"
          style={atomOneDark}
          className="rounded-lg"
        >
          {codeExample}
        </SyntaxHighlighter>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-white rounded-lg shadow-lg p-6"
      >
        <div className="flex items-center space-x-2 mb-4">
          <Shield className="text-green-500" size={24} />
          <h2 className="text-2xl font-bold">Prevention Techniques</h2>
        </div>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Use parameterized queries or prepared statements</li>
          <li>Implement proper input validation and sanitization</li>
          <li>Apply the principle of least privilege for database users</li>
          <li>Regular security audits and penetration testing</li>
          <li>Keep database systems and applications up to date</li>
          <li>Use Web Application Firewalls (WAF)</li>
        </ul>
      </motion.div>
    </div>
  );
}