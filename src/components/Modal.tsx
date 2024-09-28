// src/components/Modal.tsx
import React, { useState } from 'react';
import GeneratedResponse from './GenerateResponse';

interface ModalProps {
  onClose: () => void;
  onInsert: (text: string) => void;
}

const Modal: React.FC<ModalProps> = ({ onClose, onInsert }) => {
  const [command, setCommand] = useState('');
  const [response, setResponse] = useState('');

  const handleGenerate = () => {
    // Dummy response as per requirements
    const dummyResponse = "Thank you for the opportunity! If you have any more questions or if there's anything else I can help you with, feel free to ask.";
    setResponse(dummyResponse);
  };

  return (
    <div
      className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50"
      onClick={onClose}
    >
      <div
        className="bg-white p-6 rounded-lg shadow-lg w-96"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-xl mb-4">Generate Reply</h2>
        <input
          type="text"
          className="w-full border border-gray-300 p-2 rounded mb-4"
          placeholder="Enter your command"
          value={command}
          onChange={(e) => setCommand(e.target.value)}
        />
        <div className="flex justify-end space-x-2">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={handleGenerate}
          >
            Generate
          </button>
          <button
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded"
            disabled
          >
            Regenerate
          </button>
        </div>
        {response && <GeneratedResponse response={response} onInsert={onInsert} />}
      </div>
    </div>
  );
};

export default Modal;

