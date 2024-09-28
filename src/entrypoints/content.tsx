// src/content/contentScript.tsx
import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client'; // Correct import for React 18
import AiIcon from '../components/AiIcon';
import Modal from '../components/Modal';
import '../styles/index.css';

const App: React.FC = () => {
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const messageInputSelector = 'div[aria-label="Message"] textarea'; // Adjust selector as needed

  useEffect(() => {
    const inputElement = document.querySelector(messageInputSelector);

    if (!inputElement) return;

    const handleFocus = () => setIsInputFocused(true);
    const handleBlur = () => setIsInputFocused(false);

    inputElement.addEventListener('focus', handleFocus);
    inputElement.addEventListener('blur', handleBlur);

    return () => {
      inputElement.removeEventListener('focus', handleFocus);
      inputElement.removeEventListener('blur', handleBlur);
    };
  }, []);

  const handleInsert = (text: string) => {
    const inputElement = document.querySelector(messageInputSelector) as HTMLTextAreaElement;
    if (inputElement) {
      inputElement.value = text;
      // Trigger input event if necessary
      inputElement.dispatchEvent(new Event('input', { bubbles: true }));
    }
    setIsModalOpen(false);
  };

  return (
    <>
      {isInputFocused && <AiIcon onClick={() => setIsModalOpen(true)} />}
      {isModalOpen && <Modal onClose={() => setIsModalOpen(false)} onInsert={handleInsert} />}
    </>
  );
};

// Create a mount point for the React app
const mountPoint = document.createElement('div');
document.body.appendChild(mountPoint);

// Render the App using createRoot
const root = createRoot(mountPoint);
root.render(<App />);
