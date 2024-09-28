// src/components/GeneratedResponse.tsx
import React from 'react';

interface GeneratedResponseProps {
  response: string;
  onInsert: (text: string) => void;
}

const GeneratedResponse: React.FC<GeneratedResponseProps> = ({ response, onInsert }) => {
  return (
    <div className="mt-4">
      <p className="text-gray-800">{response}</p>
      <button
        className="mt-2 bg-green-500 text-white px-4 py-2 rounded"
        onClick={() => onInsert(response)}
      >
        Insert
      </button>
    </div>
  );
};

export default GeneratedResponse;
