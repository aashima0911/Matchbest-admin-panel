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
          className="flex items-center space-x-2 p-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
        >
          <FaGlobe className="h-4 w-4" />
          <span className="text-sm">{currentLang?.flag}</span>
          <span className="text-sm hidden sm:inline">{currentLang?.code?.toUpperCase()}</span>
        </button>

        {/* Desktop Dropdown */}
        {!isMobile && isOpen && (
          <div className="absolute right-0 mt-2 w-64 bg-black rounded-md shadow-lg border z-50">
            {/* <div className="p-3 border-b border-gray-700">
              <div className="relative">
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <input
                  type="text"
                  placeholder="Search languages..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-gray-800 text-white rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                  autoFocus
                />
              </div>
            </div> */}
            <div className="max-h-64 overflow-y-auto scrollbar-hide">
              {filteredLanguages.length > 0 ? (
                filteredLanguages.map((lang, index) => (
                  <button
                    key={index}
                    onClick={() => handleLanguageSelect(lang)}
                    className={`w-full text-left px-4 py-2 hover:bg-gray-900 flex items-center space-x-2 ${
                      currentLang?.code === lang.code ? "bg-gray-700" : ""
                    }`}
                  >
                    <span>{lang.flag}</span>
                    <div>
                      <div className="font-medium">{lang.country}</div>
                      <div className="text-sm text-gray-400">{lang.name}</div>
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
          <div className="bg-black rounded-lg shadow-lg w-full max-w-md max-h-[80vh] overflow-hidden">
            <div className="flex items-center justify-between p-4 border-b border-gray-700">
              <h3 className="text-lg font-semibold text-white">Select Language</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white"
              >
                <FaTimes className="h-5 w-5" />
              </button>
            </div>
            {/* <div className="p-4 border-b border-gray-700">
              <div className="relative">
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <input
                  type="text"
                  placeholder="Search languages..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-gray-800 text-white rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                  autoFocus
                />
              </div>
            </div> */}
            <div className="max-h-64 overflow-y-auto">
              {filteredLanguages.length > 0 ? (
                filteredLanguages.map((lang, index) => (
                  <button
                    key={index}
                    onClick={() => handleLanguageSelect(lang)}
                    className={`w-full text-left px-4 py-3 hover:bg-gray-900 flex items-center space-x-3 ${
                      currentLang?.code === lang.code ? "bg-gray-700" : ""
                    }`}
                  >
                    <span className="text-lg">{lang.flag}</span>
                    <div>
                      <div className="font-medium">{lang.country}</div>
                      <div className="text-sm text-gray-400">{lang.name}</div>
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
