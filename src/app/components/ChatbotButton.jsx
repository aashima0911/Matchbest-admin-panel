'use client';
import { useState } from 'react';
import { FiMaximize, FiMinimize } from 'react-icons/fi';

export default function ChatbotButton() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleChat = () => {
    setIsChatOpen((prev) => !prev);
    if (isChatOpen) {
      setIsExpanded(false);
    }
  };

  const toggleSize = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={toggleChat}
        title={isChatOpen ? 'Close Chat' : 'Chat with us'}
        className="fixed bottom-4 right-4 z-[9999] bg-[#595959] text-white w-16 h-16 text-2xl rounded-full shadow-lg flex items-center justify-center transition-all duration-300"
      >
        {isChatOpen ? '💬' : '💬'}
      </button>

      {/* Chat Iframe */}
      {isChatOpen && (
        <div
          className={`fixed right-4 ${isExpanded ? 'top-4 bottom-0 w-[90%] sm:w-[50%] h-[85%]' : 'top-28 w-[90%] sm:w-[450px] h-[70%] sm:h-[500px]'} z-[10000] shadow-2xl ${isExpanded ? 'rounded-none' : 'rounded-xl'} overflow-hidden bg-white flex flex-col transition-all duration-500 ease-in-out`}
        >
          {/* Header */}
          <div className="bg-[#10131a] text-white p-3 flex justify-between items-center text-sm font-bold">
            <span>MatchBest Group Chatbot</span>
            <div className="flex gap-3 items-center">
              <button
                onClick={toggleSize}
                className="text-white text-xl hover:text-gray-300"
                title={isExpanded ? 'Minimize' : 'Expand'}
              >
                {isExpanded ? <FiMinimize /> : <FiMaximize />}
              </button>
              <button
                onClick={toggleChat}
                className="text-white text-2xl hover:text-gray-300"
                title="Close"
              >
                &times;
              </button>
            </div>
          </div>

          {/* Iframe */}
          <iframe
            src="https://matchbest-com-chatbot.vercel.app/"
            title="Helpdesk Chatbot"
            className="w-full h-full border-none"
            allow="microphone; camera"
          ></iframe>
        </div>
      )}
    </>
  );
}