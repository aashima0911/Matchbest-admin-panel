'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { Facebook, Instagram, Linkedin, Youtube, Twitter, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0B1120] text-white pt-4 pb-4 font-calibri border-t border-gray-800">
      <div className="container mx-4 px-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-12">
        
        {/* Column 1: Brand & About */}
        <div className="col-span-2 md:col-span-1 space-y-6">
          <Link href="/" className="text-2xl font-bold tracking-tight text-blue-500">
            <Image 
              src="/assets/match.jpg" 
              alt="MatchBest Group - Enterprise AI Solutions" 
              width={180} 
              height={60} 
              className="rounded-lg opacity-90 hover:opacity-100 transition"
            />
          </Link>
          <p className="text-sm leading-relaxed text-gray-400">
            Empowering global enterprises with next-gen AI Automation, Secure Cloud Infrastructure, and Custom Software Solutions since 2024.
          </p>
          <div className="flex space-x-4">
            <SocialLink href="https://www.linkedin.com/company/matchbest-group/" icon={<Linkedin size={20} />} label="LinkedIn" />
            <SocialLink href="https://www.instagram.com/matchbestgroup/" icon={<Instagram size={20} />} label="Instagram" />
            <SocialLink href="https://www.facebook.com/profile.php?id=61581622601986" icon={<Facebook size={20} />} label="Facebook" />
            <SocialLink href="https://www.youtube.com/@matchbestgroup" icon={<Youtube size={20} />} label="YouTube" />
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="col-span-1 space-y-4">
          <h3 className="text-white font-bold text-lg mb-6">Company</h3>
          <ul className="space-y-4 text-sm">
            <li><FooterLink href="/" label={t('footer.home', 'Home')} /></li>
            <li><FooterLink href="/about" label={t('footer.about', 'About Us')} /></li>
            <li><FooterLink href="/careers" label={t('footer.careers', 'Careers')} /></li>
            <li><FooterLink href="/blogs" label={t('footer.blog', 'Latest Insights')} /></li>
            <li><FooterLink href="/contact" label={t('footer.contact', 'Contact Support')} /></li>
          </ul>
        </div>

        {/* Column 3: Services (SEO Keywords) */}
        <div className="col-span-1 space-y-4">
          <h3 className="text-white font-bold text-lg mb-6">Our Expertise</h3>
          <ul className="space-y-4 text-sm">
            <li><span className="text-gray-500 cursor-default">Generative AI Solutions</span></li>
            <li><span className="text-gray-500 cursor-default">Cloud Migration (AWS/Azure)</span></li>
            <li><span className="text-gray-500 cursor-default">Custom Software Development</span></li>
            <li><span className="text-gray-500 cursor-default">Cybersecurity & VAPT</span></li>
            <li><span className="text-gray-500 cursor-default">Mobile App Development</span></li>
          </ul>
        </div>

        {/* Column 4: Contact Info */}
        <div className="col-span-2 md:col-span-1 space-y-4 text-left">
            <h3 className="text-lg font-bold mb-4">Headquarters</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Tower-B3, Spaze I-Tech Park, Sohna Road, Gurugram, India
            </p>
            <p className="text-blue-400 font-medium text-sm pt-2">biz@matchbest.ai</p>
          </div>
      </div>

      {/* Bottom Bar: Copyright & Legal */}
      <div className="border-t border-gray-800 ">
        <div className="max-w-1xl mx-auto px-6 py-1 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>&copy; 2024, MatchBest Group. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition">Terms of Service</Link>
          </div>
        </div>
      </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, label }) {
  return (
    <Link href={href} className="text-gray-400 hover:text-purple-400 transition-colors duration-200">
      {label}
    </Link>
  );
}

function SocialLink({ href, icon, label }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer" 
      aria-label={label}
      className="bg-gray-800 p-2 rounded-full hover:bg-purple-600 hover:text-white transition-all duration-300 text-gray-400"
    >
      {icon}
    </a>
  );
}