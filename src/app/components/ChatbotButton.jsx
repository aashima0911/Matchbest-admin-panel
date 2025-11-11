"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Maximize2, Minimize2, X } from "lucide-react";

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  // ===== Prevent background scroll =====
  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;
    const prevent = (e) => e.preventDefault();

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
                "flex flex-col overflow-hidden rounded-2xl shadow-2xl border border-black/10 bg-white",
                isExpanded
                  ? "w-[min(420px,96vw)] h-[min(80vh,92vh)]"
                  : "w-[min(320px,85vw)] h-[min(480px,75vh)] sm:w-[min(380px,92vw)] sm:h-[min(560px,85vh)]",
              ].join(" ")}
            >
              {/* Header */}
              <div className="flex items-center justify-between px-4 py-2 bg-[#663c9a] text-white">
                <div className="flex items-center gap-2">
                  <span className="inline-block h-2 w-2 rounded-full bg-white/70" />
                  <h2 className="text-sm font-semibold tracking-wide">Helpdesk</h2>
                </div>
                <div className="flex items-center gap-1">
                  {/* Expand / Shrink */}
                  <button
                    aria-label={isExpanded ? "Shrink chat" : "Expand chat"}
                    onClick={() => setIsExpanded((v) => !v)}
                    className="p-1 rounded-md hover:bg-white/10 transition"
                  >
                    {isExpanded ? (
                      <Minimize2 className="h-5 w-5" />
                    ) : (
                      <Maximize2 className="h-5 w-5" />
                    )}
                  </button>
                  {/* Close */}
                  <button
                    aria-label="Close chat"
                    onClick={closeChat}
                    className="p-1 rounded-md hover:bg-white/10 transition"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              </div>

              {/* Iframe */}
              <div className="flex-grow">
                <iframe
                  src="https://chat-bot-match-best.vercel.app/?websiteId=matchbestgroup"
                  title="Helpdesk Chatbot"
                  className="w-full h-full border-none"
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
          className="fixed bottom-5 right-5 z-[75] w-12 h-12 sm:w-14 sm:h-14 rounded-full shadow-xl flex items-center justify-center"
        >
          {/* Use your uploaded icon */}
          <img src="/chatbot-icon.webp" alt="Chatbot" className="w-15 h-13 cursor-pointer" />
        </motion.button>
      )}
    </>
  );
}
