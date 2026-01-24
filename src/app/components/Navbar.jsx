'use client';
import { useState, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { FaBars, FaTimes } from 'react-icons/fa';
import LanguageSelector from '../../components/LanguageSelector';
import SolutionsMenu from './SolutionsMenu';
import ResourcesMenu from './ResourcesMenu';

export default function Navbar() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const pathname = usePathname();

  const navLinks = useMemo(() => pathname === '/byteplus-partnership'
    ? [
        { href: '/byteplus-partnership', label: t('navbar.byteplusPartnership') },
      ]
    : pathname === '/matchbest-byteplus-webinar'
    ? [
        { href: '/matchbest-byteplus-webinar', label: 'Matchbest x Byteplus Webinar' },
      ]
    : [
        { href: '/', label: t('navbar.home', 'Home') },
        { href: '/about', label: t('navbar.about', 'About Us') },
        { href: '', label: 'Solutions' },
        { href: '/press-releases', label: 'Press Releases' },
        { href: '/Career', label: 'Careers' },
      ], [pathname, t]);

  const handleToggle = useCallback(() => setIsOpen((prev) => !prev), []);
  const handleClose = useCallback(() => setIsOpen(false), []);
  const handleMobileDropdown = (name) => {
  setOpenDropdown(openDropdown === name ? null : name);
};

  return (
    <nav className="bg-black fixed w-full z-30 top-0 left-0 py-4 px-0 md:px-0">
      <div className="container mx-auto flex items-center justify-between px-4 md:px-8">
        
        {/* Logo */}
        <Link href="/" className="flex items-center mr-6 md:mr-10" onClick={handleClose}>
          <Image
            src="/assets/match.png"
            alt="MatchBest Group Logo"
            className="h-12 w-auto object-contain"
            width={1200}
            height={48}
            priority
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 lg:space-x-10 items-center ml-auto">
          {navLinks.map((link) => {
            // === CASE 1: SOLUTIONS ===
            // if (link.label === 'Solutions' || link.label === 'solutions') {
            //   return (
            //     <li key={link.label}>
            //       <Link
            //         href={link.href}
            //         className={`
            //           relative font-['Space_Grotesk'] font-normal text-[16px] leading-[32px] tracking-normal text-white transition-colors duration-300

            //           /* Dot Animation Styles (Jo aapka pehle tha) */
            //           after:content-['']
            //           after:absolute
            //           after:left-1/2
            //           after:-translate-x-1/2
            //           after:-bottom-3
            //           after:w-1.5
            //           after:h-1.5
            //           after:bg-purple-500
            //           after:rounded-full
            //           after:opacity-0
            //           hover:after:opacity-100
            //           after:transition-all
            //           after:duration-300

            //           ${pathname === link.href ? 'text-purple-900 ' : 'hover:text-white'}
            //         `}
            //         aria-current={pathname === link.href ? 'page' : undefined}
            //       >
            //         {link.label}
            //       </Link>
            //     </li>
            //   );
            // }
            if (link.label === 'Solutions' || link.label === 'solutions') {
              return (
                <li key={link.label} className="h-full flex items-center">
                  <SolutionsMenu />
                </li>
              );
            }
            
            // === CASE 2: RESOURCES (NEW) ===
            // if (link.label === 'Resources' || link.label === 'resources') {
            //   return (
            //     <li key={link.label} className="h-full flex items-center">
            //       <ResourcesMenu />
            //     </li>
            //   );
            // }

            

            // === CASE 3: NORMAL LINKS (Home, About, Contact) ===
            return (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className={`
                    relative font-['Space_Grotesk'] font-normal text-[16px] leading-[32px] tracking-normal text-white transition-colors duration-300
                    
                    /* Dot Animation Styles (Jo aapka pehle tha) */
                    after:content-[''] 
                    after:absolute 
                    after:left-1/2 
                    after:-translate-x-1/2 
                    after:-bottom-3
                    after:w-1.5 
                    after:h-1.5 
                    after:bg-purple-500 
                    after:rounded-full 
                    after:opacity-0 
                    hover:after:opacity-100 
                    after:transition-all 
                    after:duration-300

                    ${pathname === link.href ? 'text-purple-900 ' : 'hover:text-white'}
                  `}
                  aria-current={pathname === link.href ? 'page' : undefined}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
          
          <li className="ml-0"> 
            <LanguageSelector />
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-2xl cursor-pointer text-white ml-2"
          onClick={handleToggle}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-black transition-[max-height] duration-500 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-96 py-4 px-6' : 'max-h-0 py-0 px-6'
        }`}
      >
        <ul className="flex flex-col items-center space-y-4 text-white">
        {navLinks.map((link) => (
          <li key={link.label} className="w-full">
            {/* Agar label Solutions ya Resources hai to dropdown logic dikhao */}
            {link.label === 'Solutions' ? (
              <div className="w-full text-center">
                <button
                  onClick={() => handleMobileDropdown(link.label.toLowerCase())}
                  className="w-full py-2 text-white font-['Space_Grotesk'] text-[16px] flex justify-center items-center gap-2"
                >
                  {link.label}
                  <span className={`transition-transform duration-300 ${openDropdown === link.label.toLowerCase() ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </button>
                
                {/* Tap karne par ye content khulega */}
                <div className={`overflow-hidden transition-all duration-500 ${openDropdown === link.label.toLowerCase() ? 'max-h-60 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                  <div className="bg-zinc-900/50 py-4 rounded-xl flex flex-col items-center space-y-4 text-sm text-gray-300">
                    {link.label === 'Solutions' ? (
                      <>
                        <Link href="https://www.matchbestsoftware.com/" target="_blank" onClick={handleClose}>MatchBest Software Pvt. Ltd.</Link>
                        <Link href="https://xelta.ai/" target="_blank" onClick={handleClose}>Xelta</Link>
                        <Link href="https://healnova.ai/" target="_blank" onClick={handleClose}>Healnova</Link>
                        <Link href="https://streamplay.ai/" target="_blank" onClick={handleClose}>Streamplay</Link>
                        <Link href="https://www.vitaay.ai/" target="_blank" onClick={handleClose}>Vitaay</Link>
                        <Link href="https://www.elitemaverick.com/" target="_blank" onClick={handleClose}>Elite Maverick</Link>
                      </>
                    ) : (
                      <>
                        <Link href="/blog" onClick={handleClose}>Blog</Link>
                        <Link href="/press-releases" onClick={handleClose}>Press Releases</Link>
                        <Link href="/press-releases" onClick={handleClose}>Career</Link>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ) : (
            
              <Link
                href={link.href}
                className={`font-['Space_Grotesk'] font-normal text-[16px] leading-[32px] block w-full text-center hover:text-purple-400 py-2 ${
                  pathname === link.href ? 'text-purple-400' : ''
                }`}
                onClick={handleClose}
              >
                {link.label}
              </Link>
            )}
          </li>
        ))}
        {/* Language Selector fix for mobile */}
        <li className="pt-4 border-t border-white/10 w-full flex justify-center">
          <LanguageSelector />
        </li>
      </ul>
      </div>
    </nav>
  );
}