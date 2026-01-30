"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Maximize2, Minimize2, X } from "lucide-react";

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // ===== Prevent background scroll =====
  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;
    const prevent = (e) => e.preventDefault();

  // useEffect(() => {
  //   if (isOpen) setIsLoading(true);
  // }, [isOpen]);  

    if (isOpen) {
      html.classList.add("overflow-hidden");
      body.classList.add("overflow-hidden");
      document.addEventListener("touchmove", prevent, { passive: false });
      document.addEventListener("wheel", prevent, { passive: false });
    } else {
      html.classList.remove("overflow-hidden");
      body.classList.remove("overflow-hidden");
      document.removeEventListener("touchmove", prevent);
      document.removeEventListener("wheel", prevent);
    }

    return () => {
      html.classList.remove("overflow-hidden");
      body.classList.remove("overflow-hidden");
      document.removeEventListener("touchmove", prevent);
      document.removeEventListener("wheel", prevent);
    };
  }, [isOpen]);

  const closeChat = useCallback(() => {
    setIsOpen(false);
    setIsExpanded(false);
  }, []);

  return (
    <>
      {/* Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.button
            aria-label="Close chat"
            onClick={closeChat}
            className="fixed inset-0 bg-black/30 z-[60]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        )}
      </AnimatePresence>

      {/* Chat Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="chat-panel"
            className="fixed z-[70] bottom-5 right-5"
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
          >
            <div
              className={[
                "flex flex-col overflow-hidden rounded-2xl shadow-2xl border border-black/10 bg-white relative", 
                isExpanded
                  ? "w-[min(320px)] h-[min(400px)]"
                  : "w-[min(300px,85vw)] h-[min(500px,60vh)] sm:w-[min(310px,75vw)] sm:h-[min(600px,70vh)]",
              ].join(" ")}
            >
              {/* Close Overlay Button */}
              <button
                aria-label="Close chat"
                onClick={closeChat}
                className="absolute top-2 right-2 z-10 bg-white rounded-full p-0 shadow-md hover:bg-gray-100 transition"
              >
                <X className="h-3 w-3 text-gray-700" />
              </button>

              {/* Iframe */}
              <div className="flex-grow relative overflow-hidden bg-white rounded-b-2xl">
                {isLoading && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-50 z-20">
                    {/* Spinner Icon */}
                    <div className="animate-spin rounded-full h-10 w-10 border-4 border-purple-200 border-t-purple-600"></div>
                    <p className="mt-2 text-xs text-gray-400 font-medium">Initializing AI...</p>
                  </div>
                )}
              <iframe
                src="https://bot.avasuite.ai/?websiteId=matchbestgroup"
                title="Helpdesk Chatbot"
                onLoad={() => setIsLoading(false)}
                style={{
                    width: "168.37%",   
                    height: "168.37%",  
                    transform: "scale(0.6)", 
                    transformOrigin: "top left", 
                    border: "none"
                }}
                className={`w-full h-full transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`} 
                allow="microphone; camera"
              />
            </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button (Hidden when chat is open) */}
      {!isOpen && (
        <motion.button
          aria-label="Open chat"
          onClick={() => setIsOpen(true)}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="fixed bottom-5 right-5 z-[75] w-10 h-10 sm:w-12 sm:h-12 rounded-full shadow-xl flex items-center justify-center"
        >
          {/* Use your uploaded icon */}
          <img src="/chatbot-icon.webp" alt="Chatbot" className="w-full h-full object-contain cursor-pointer" />
        </motion.button>
      )}
    </>
  );
}
