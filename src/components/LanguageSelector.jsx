"use client";
import React, { useState, useRef, useEffect, useMemo, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { languages } from "../constants/languages";
import { setLanguage } from "../store/languageSlice";
import { FaGlobe, FaSearch, FaTimes } from "react-icons/fa";

export default function LanguageSelector() {
  const dispatch = useDispatch();
  const currentLang = useSelector((state) => state.language);
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const dropdownRef = useRef(null);

  const handleLanguageSelect = useCallback((lang) => {
    dispatch(setLanguage(lang));
    setIsOpen(false);
    setSearchTerm("");
  }, [dispatch]);

  const filteredLanguages = useMemo(() => languages.filter((lang) =>
    lang.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
    lang.name.toLowerCase().includes(searchTerm.toLowerCase())
  ), [searchTerm]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
        setSearchTerm("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  return (
    <>
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center space-x-10 p-2 bg-black text-white rounded-md"
        >
          <FaGlobe className="h-4 w-4" />
          {/* <span className="text-sm">{currentLang?.flag}</span> */}
          <span className="text-sm">{currentLang?.code?.toUpperCase()}</span>
        </button>

        {/* Desktop Dropdown */}
        {!isMobile && isOpen && (
          <div className="absolute right-0 mt-2 w-64 bg-black/50 backdrop-blur-md rounded-md shadow-lg border border-white/20 z-50">
            <div className="max-h-64 overflow-y-auto scrollbar-hide">
              {filteredLanguages.length > 0 ? (
                filteredLanguages.map((lang, index) => (
                  <button
                    key={index}
                    onClick={() => handleLanguageSelect(lang)}
                    className={`w-full text-left px-4 py-2 hover:bg-white/10 flex items-center space-x-2 ${
                      currentLang?.code === lang.code ? "bg-white/20" : ""
                    }`}
                  >
                    <span>{lang.flag}</span>
                    <div>
                      <div className="font-medium text-white">{lang.country}</div>
                      <div className="text-sm text-gray-300">{lang.name}</div>
                    </div>
                  </button>
                ))
              ) : (
                <div className="px-4 py-8 text-center text-gray-400">
                  No languages found
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Mobile Modal */}
      {isMobile && isOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="bg-black/50 backdrop-blur-md rounded-lg shadow-lg w-full max-w-md max-h-[80vh] overflow-hidden border border-white/20">
            <div className="flex items-center justify-between p-4 border-b border-white/20">
              <h3 className="text-lg font-semibold text-white">Select Language</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-300 hover:text-white"
              >
                <FaTimes className="h-5 w-5" />
              </button>
            </div>
            <div className="max-h-64 overflow-y-auto">
              {filteredLanguages.length > 0 ? (
                filteredLanguages.map((lang, index) => (
                  <button
                    key={index}
                    onClick={() => handleLanguageSelect(lang)}
                    className={`w-full text-left px-4 py-3 hover:bg-white/10 flex items-center space-x-3 ${
                      currentLang?.code === lang.code ? "bg-white/20" : ""
                    }`}
                  >
                    <span className="text-lg">{lang.flag}</span>
                    <div>
                      <div className="font-medium text-white">{lang.country}</div>
                      <div className="text-sm text-gray-300">{lang.name}</div>
                    </div>
                  </button>
                ))
              ) : (
                <div className="px-4 py-8 text-center text-gray-400">
                  No languages found
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
