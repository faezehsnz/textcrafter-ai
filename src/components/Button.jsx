import React from 'react';

export const Button = ({ onClick, children, loading }) => (
  <button
    onClick={onClick}
    disabled={loading}
    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-xl disabled:opacity-50"
  >
    {loading ? 'Processing...' : children}
  </button>
);
