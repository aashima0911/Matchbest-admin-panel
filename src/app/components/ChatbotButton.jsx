'use client';
import { useState, useEffect } from 'react';
import { FiMaximize, FiMinimize, FiMessageSquare, FiX } from 'react-icons/fi';

export default function ChatbotButton() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const toggleChat = () => {
    setIsChatOpen((prev) => !prev);
    if (isChatOpen) {
      setIsExpanded(false);
    }
  };

  const toggleSize = () => {
    setIsExpanded((prev) => !prev);
  };

  if (!isMounted) {
    return null;
  }

  return (
    <>
      {/* Toggle Button - only show when chat is closed */}
      {!isChatOpen && (
        <button
          onClick={toggleChat}
          title="Chat with us"
          className="fixed bottom-4 right-4 z-[9999] w-16 h-16 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 bg-blue-500 hover:bg-blue-600"
        >
          <FiMessageSquare className="text-white text-4xl" />
        </button>
      )}

      {/* Chat Iframe */}
      {isChatOpen && (
        <div
          className={`fixed ${
            isExpanded
              ? 'bottom-4 right-4 w-[400px] h-[600px]'
              : 'bottom-24 right-4 w-[calc(100%-2rem)] max-w-[400px] h-[600px]'
          } z-[10000] shadow-2xl rounded-xl overflow-hidden bg-white flex flex-col transition-all duration-500 ease-in-out`}
        >
          {/* Header */}
          <div className="bg-[#10131a] text-white p-3 flex justify-between items-center text-sm font-bold">
            <span>MatchBest Group Chatbot</span>
            <div className="flex gap-3 items-center">
              <button
                onClick={toggleSize}
                className="text-white text-xl hover:text-gray-300 transition-colors duration-300"
                title={isExpanded ? 'Minimize' : 'Expand'}
              >
                {isExpanded ? <FiMinimize /> : <FiMaximize />}
              </button>
              <button
                onClick={toggleChat}
                className="text-white text-xl hover:text-gray-300 transition-colors duration-300"
                title="Close"
              >
                <FiX />
              </button>
            </div>
          </div>

          {/* Iframe Container */}
          <div className="flex-grow">
            <iframe
              src="https://chat-bot-match-best.vercel.app/?websiteId=matchbestgroup"
              title="Helpdesk Chatbot"
              className="w-full h-full border-none"
              allow="microphone; camera"
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
}