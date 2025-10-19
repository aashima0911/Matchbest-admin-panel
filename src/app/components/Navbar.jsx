'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { FaBars, FaTimes } from 'react-icons/fa';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/blogs', label: 'Blogs' },
  // { href: '/services', label: 'Services' },
  { href: '/byteplus-partnership', label: 'MBSL × BytePlus' },
  { href: '/careers', label: 'Careers' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const handleToggle = () => setIsOpen((prev) => !prev);
  const handleClose = () => setIsOpen(false);

  return (
    <nav className="bg-[#10131a] shadow-lg border-b  fixed w-full z-30 top-0 left-0 py-3 md:py-4 px-0 md:px-0">
      <div className="container mx-auto flex items-center justify-between px-4 md:px-8 py-2 md:py-0">
        {/* Logo */}
        <Link href="/" className="flex items-center mr-6 md:mr-10" onClick={handleClose}>
          <Image
            src="/assets/match.jpg"
            alt="MatchBest Group Logo"
            className="h-12 w-auto rounded-lg shadow-md border "
            width={1200}
            height={48}
            priority
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-4 lg:space-x-6 font-medium text-white items-center">
          {navLinks.map((link) => (
            <li key={link.href} className="my-1">
              <Link
                href={link.href}
                className={`hover:text-purple-400 transition-colors duration-300 px-3 py-2 rounded-lg ${
                  pathname === link.href
                    ? 'text-purple-400 font-semibold'
                    : ''
                }`}
                aria-current={pathname === link.href ? 'page' : undefined}
              >
                {link.label}
              </Link>
            </li>
          ))}
          {/* Optional CTA Button */}
          <li className="ml-4">
            <Link
              href="/contact"
              className="px-5 py-2 bg-purple-700 hover:bg-purple-600 text-white rounded-lg font-semibold shadow transition-all duration-300 border border-purple-800"
            >
              Get in Touch
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-3xl cursor-pointer text-white ml-2"
          onClick={handleToggle}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-[#10131a] transition-[max-height] duration-500 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-96 py-4 px-6' : 'max-h-0 py-0 px-6'
        }`}
      >
        <ul className="flex flex-col items-center space-y-4 font-medium text-white">
          {navLinks.map((link) => (
            <li key={link.href} className="w-full">
              <Link
                href={link.href}
                className={`block w-full text-center hover:text-purple-400 transition-colors duration-300 px-3 py-3 rounded-lg ${
                  pathname === link.href
                    ? 'text-purple-400 font-semibold'
                    : ''
                }`}
                aria-current={pathname === link.href ? 'page' : undefined}
                onClick={handleClose}
              >
                {link.label}
              </Link>
            </li>
          ))}
          {/* Optional CTA Button */}
          <li className="w-full mt-2">
            <Link
              href="/contact"
              className="block w-full text-center px-5 py-3 bg-purple-700 hover:bg-purple-600 text-white rounded-lg font-semibold shadow transition-all duration-300 border border-purple-800"
              onClick={handleClose}
            >
              Get in Touch
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
} 