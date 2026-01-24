'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full bg-[#090909] pt-3 pb-2 border-t border-white/20">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* LOGO SECTION */}
        <div className="flex justify-center py-0">   
          <div className="relative w-74 h-22">
            <Image 
              src="/assets/footer-logo.png"
              alt="MatchBest Group" 
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Divider Line */}
        <div className="w-full h-px bg-white/20 mb-8"></div>

        {/* MIDDLE CONTENT */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-0">
          
          {/* Contact Info */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-12 text-sm text-gray-400 w-full lg:w-auto">
            
            {/* Contact Us Link */}
            <Link href="/contact">
              <div className="flex items-center gap-3 hover:text-white transition-colors cursor-pointer pb-1 border-b border-white/10 min-w-[150px]">
                <Phone className="w-5 h-5 text-[rgba(80, 107, 232, 1), rgba(97, 104, 222, 1), rgba(126, 97, 200, 1), rgba(182, 111, 234, 1)]"
                      fill="currentColor"  
                      stroke="black"
                      strokeWidth={1.5}   /> 
                <span className="text-white">Contact Us</span>
              </div>
            </Link>
            
            {/* Email */}
            <div className="flex items-center gap-3 hover:text-white transition-colors cursor-pointer pb-1 border-b border-white/20 min-w-[150px]">
              <Mail className="w-5 h-5 text-[rgba(80, 107, 232, 1), rgba(97, 104, 222, 1), rgba(126, 97, 200, 1), rgba(182, 111, 234, 1)]"
                    fill="currentColor"  
                    stroke="black"
                    strokeWidth={1.5}   /> 
              <span className="text-white">biz@matchbest.ai</span>
            </div>
            
            {/* Address */}
            {/* <div className="flex items-center gap-3 text-center md:text-left  pb-3 border-b border-white/10 min-w-[170px]">
              <MapPin className="w-5 h-5 text-[rgba(80, 107, 232, 1), rgba(97, 104, 222, 1), rgba(126, 97, 200, 1), rgba(182, 111, 234, 1)] flex-shrink-0"
                      fill="currentColor" 
                      stroke="black" 
                      strokeWidth={1.5} /> 
              <span className="text-white">Gurugram, Haryana</span>
            </div> */}

          </div>

        {/* Social Links */}
        <div className="flex items-center gap-6 mt-4 lg:mt-0">
        {/* <span className="text-white text-sm font-medium">Stay Connected</span> */}

        <div className="flex gap-3">
          {[
            { 
              name: 'insta', 
              src: '/assets/instagram.png', 
              link: 'https://www.instagram.com/matchbestgroup/',
              target: "_blank"
            },
            { 
              name: 'linkedin', 
              src: '/assets/linkedin.png', 
              link: 'https://www.linkedin.com/company/matchbest-group/?viewAsMember=true',
              target: "_blank"
            },
            { 
              name: 'facebook', 
              src: '/assets/facebook.png', 
              link: 'https://www.facebook.com/matchbestgroup1/',
              target: "_blank" 
            },
            { 
              name: 'youtube', 
              src: '/assets/youtube.png', 
              link: 'https://www.youtube.com/@Matchbest_group',
              target: "_blank"
            },
            { 
              name: 'tiktok', 
              src: '/assets/tiktok.png', 
              link: 'https://www.tiktok.com/@matchbest.group?_t=ZS-90GhVEIK5nY&_r=1',
              target: "_blank"    
            },
          ].map((social, index) => (
            <a
              key={index}
              href={social.link} 
              target="_blank"    
              rel="noopener noreferrer" 
              className="w-10 h-10 bg-[#1a1a1a] rounded-lg flex items-center justify-center hover:bg-[#252525] hover:scale-110 transition-all duration-300 border border-white/5"
            >
              <div className="relative w-5 h-5">
                <Image
                  src={social.src}
                  alt={social.name}
                  fill
                  className="object-contain"
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>

        {/* BOTTOM: COPYRIGHT */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 text-xs tracking-wide">
            © 2026 MatchBest. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;