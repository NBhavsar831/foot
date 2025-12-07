import React from 'react';
import { FaExclamationTriangle } from 'react-icons/fa';

const ErrorBoundary = ({ error }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-red-50">
      <div className="text-center text-red-600 max-w-md mx-auto p-8">
        <FaExclamationTriangle className="w-16 h-16 mx-auto mb-4" />
        <h2 className="text-2xl font-bold mb-4">Something went wrong</h2>
        <p className="mb-6">{error?.message || 'An unexpected error occurred'}</p>
        <button 
          onClick={() => window.location.reload()}
          className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors"
        >
          Reload Page
        </button>
      </div>
    </div>
  );
};

export default ErrorBoundary;