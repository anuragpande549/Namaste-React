import React from 'react';
import { useRouteError } from 'react-router-dom';

function Error() {
  const myError = useRouteError();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 to-blue-500 p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-lg w-full">
        <h1 className="text-4xl font-bold text-gray-700 mb-4">Oops! Something went wrong.</h1>
        <p className="text-lg text-gray-600 mb-6">We couldn't find the page you're looking for.</p>
        <div className="text-gray-500 mb-4">
          <strong>Status Code: </strong>{myError?.status || "Unknown Error"}
        </div>
        <div className="text-gray-500 mb-6">
          <strong>Message: </strong>{myError?.message || "An unexpected error occurred."}
        </div>
        <a
          href="/"
          className="inline-block px-6 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition duration-300"
        >
          Go Back Home
        </a>
      </div>
    </div>
  );
}

export default Error;
