import React from 'react';

export const Textarea = ({ value, onChange }) => (
  <textarea
    className="w-full h-40 p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 mb-4"
    placeholder="Type or paste your text here..."
    value={value}
    onChange={onChange}
  />
);
