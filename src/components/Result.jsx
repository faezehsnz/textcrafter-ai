import React from 'react';

export const Result = ({ text }) => (
  <div className="mt-6 p-4 bg-gray-100 border border-gray-200 rounded-xl">
    <h2 className="text-lg font-semibold mb-2 text-gray-700">Enhanced Text:</h2>
    <p className="text-gray-800 whitespace-pre-wrap">{text}</p>
  </div>
);
