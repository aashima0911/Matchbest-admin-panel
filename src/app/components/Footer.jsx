'use client';
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  return (
    <div className="w-full">
      <footer className="bg-[#10131a] text-white py-10 text-center space-y-6">
         <a href="/about">
        <img src="/assets/match.jpg" alt="MatchBest Group Logo" className="h-12 w-auto rounded-lg shadow-md mx-auto"  />
        </a>
        <div className="flex justify-center space-x-6">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/about" className="hover:underline">About</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
          <Link href="/careers" className="hover:underline">Careers</Link>
          {/* <a href="/sitemap.xml" className="hover:underline" target="_blank" rel="noopener noreferrer">Sitemap</a> */}
        </div>

        <div className="flex justify-center space-x-6 text-2xl">
          <a href="https://www.instagram.com/matchbestgroup/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400"><FaInstagram /></a>
          <a href="https://www.linkedin.com/company/matchbest-group/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400"><FaLinkedin /></a>
          <a href="https://www.facebook.com/profile.php?id=61581622601986" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400"><FaFacebook /></a>
          <a href="https://www.youtube.com/@matchbestgroup" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400"><FaYoutube /></a>
          <a href="https://www.tiktok.com/@matchbest.group?_t=ZS-90GhVEIK5nY&_r=1" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400"><FaTiktok /></a>
        </div>

        <p className="text-sm">&copy; {new Date().getFullYear()} MatchBest. All rights reserved.</p>
      </footer>

    </div>
  );
}
