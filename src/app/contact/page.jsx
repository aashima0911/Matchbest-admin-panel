'use client';
import { useState } from 'react';
import Image from "next/image";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight
} from 'lucide-react';

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const locations = [
  {
    country: "USA",
    role: "Client Relations",
    image: "/assets/cloud.png", 
    addressTitle: "Client Relations",
    address: "1200 Smith Street, Suite 1600, Houston, TX 77002",
    top: "35%", 
    left: "25%", 
    align: "top" 
  },
  {
    country: "SAUDI ARABIA",
    role: "Expansion 2025",
    image: "/assets/cloud.png", 
    addressTitle: "London Office",
    address: "Expansion 2025",
    top: "46%", 
    left: "58%", 
    align: "top" , md:"top-left"
  },
  {
    country: "UAE",
    role: "Sales & Operations",
    image: "/assets/cloud.png", 
    addressTitle: "London Office",
    address: "Lettsom House, 11 Chandos Pl, London W1G 9DP, UK",
    top: "50%", 
    left: "62%", 
    align: "top-right"
  },
  {
    country: "INDIA",
    role: "Research & Development",
    // image: "/assets/cloud.png",
    addressTitle: "R&D Center",
    address: "Tech Park, Sector 126, Noida, Uttar Pradesh 201304",
    top: "50%", 
    left: "67%", 
    align: "bottom"
  },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', mobile: '', message: '' });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async e => {
    e.preventDefault();
    setError('');
    setSuccess(false);
    setLoading(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        throw new Error('Failed to send message.');
      }

      setSuccess(true);
      setForm({ name: '', email: '', mobile: '', message: '' });
    } catch (err) {
      setError('Failed to send message.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='w-full bg-black text-white min-h-screen flex flex-col overflow-x-hidden relative'>
      
      {/* Hero Section */}  
        <section className="w-full pt-24 px-4 md:px-12 lg:px-18 flex justify-center">
        {/* === CARD CONTAINER === */}
        <div 
          className="relative w-full max-w-[1300px] h-[150px] md:h-[200px] rounded-[32px] overflow-hidden flex items-center justify-center shadow-2xl border border-white/5">

          <div className="absolute inset-0 z-0" 
            style={{
            background: 'linear-gradient(40deg, #020010 0%, #0a0a4a 10%, #391671 25%, #471671 30%, #000000 45%, #000000 55%, #471671 75%, #391671 80%, #0a0a4a 90%, #020010 100%)',
            filter: 'blur(80px)', 
            transform: 'scale(1.2)'
          }}> 

          </div>
          
          {/* === CONTENT LAYER === */}
          <div className="relative z-10 text-center px-6">
            {/* Main Heading */}
            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-['Inter'] font-normal mb-6 tracking-tight drop-shadow-lg">
              Contact Us
            </h1>
          </div>

        </div>
      </section>

      

      {/* Content Section */}
      <section className="w-full py-8 md:py-10 px-4 md:px-12 lg:px-18 ">
      
      {/* === Background Glow Effect === */}
      <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-purple-900/30 blur-[120px] rounded-full pointer-events-none "></div>

      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* === LEFT SIDE: TEXT CONTENT === */}
        <div className="space-y-12">
          
          <div className="space-y-6 ">
            <h2 className="text-3xl md:text-4xl font-normal leading-tight tracking-tight">
              Start Your Digital <br /> Transformation
            </h2>
            <p className="text-gray-400 text-md font-light leading-relaxed max-w-lg">
              Ready to scale? Whether you need custom software, AI automation, or cloud consulting, our team is ready to help.
            </p>
          </div>

          {/* === MAP === */}
          <motion.div variants={fadeInUp} className="glass-effect p-2 bg-black/40 rounded-2xl flex-1 border border-white/10 overflow-hidden min-h-[250px] md:min-h-[480px]">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224569.1177830458!2d76.82492675883871!3d28.42250146256614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19d582e38859%3A0x2cf5fe8e5c64b1e!2sGurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1768984917502!5m2!1sen!2sin"
              width="100%" 
              height="100%" 
              style={{border:0, minHeight: '480px'}} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-xl grayscale hover:grayscale-0 transition-all duration-500"
          ></iframe>
        </motion.div>  
      </div>


        {/* === RIGHT SIDE: FORM CARD === */}
        <div className="bg-white text-black rounded-[24px] p-4 md:p-8 shadow-2xl w-full">
          
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-medium mb-3">Have something in mind?</h3>
            <p className="text-gray-500 font-light">Send us a message and let's connect.</p>
          </div>

          <form className="space-y-4">
            
            {/* Full Name */}
            <div className="space-y-2">
               <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Full name <span className="text-red-500">*</span></label>
               <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-400 text-black placeholder-gray-500"
                    required
                    value={form.name}
                    onChange={handleChange}
                  />
            </div>

            {/* Email */}
            <div className="space-y-2">
               <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">E-mail <span className="text-red-500">*</span></label>
               <div className="relative">
                 <input
                      type="email"
                      name="email"
                      placeholder="yourmail@gmail.com"
                      className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-400 text-black placeholder-gray-500"
                      required
                      value={form.email}
                      onChange={handleChange}
                    />
                 <Mail className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
               </div>
            </div>

            {/* Phone */}
            <div className="space-y-2">
               <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Phone <span className="text-red-500">*</span></label>
               <div className="relative">
                <PhoneInput
                    country={'in'} 
                    required
                    value={form.mobile}
                    onChange={(phone) => handleChange({ target: { name: 'mobile', value: phone } })}
                    containerClass="!w-full"
                    inputClass="!w-full !h-[50px] !bg-gray-50 !border-gray-200 !rounded-xl !text-black !text-base !pl-[50px] focus:!border-gray-400 !outline-none"
                    buttonClass="!bg-gray-100 !border-gray-200 !rounded-l-xl !border-r-0"
                    dropdownClass="!bg-white !shadow-lg !rounded-xl"
                    placeholder="00000 00000"
                />

                <Phone className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
            </div>
               {/* <div className="flex bg-gray-50 border border-gray-200 rounded-xl overflow-hidden">
                  <div className="flex items-center gap-2 px-4 border-r border-gray-200 bg-gray-100">
                    <img src="https://flagcdn.com/w20/in.png" alt="India" className="w-5 h-auto rounded-sm" />
                    <span className="text-sm font-medium text-gray-600">+91</span>
                  </div>
                  <input
                      type="number"
                      name="mobile"
                      placeholder="00000 00000"
                      className="w-full px-4 py-3 bg-gray-50 rounded-lg focus:outline-none text-black placeholder-gray-500"
                      required
                      value={form.mobile}
                      onChange={handleChange}
                    />
                  <Phone className="mr-4 my-auto focus:ring-1 focus:ring-gray-400 text-gray-400 w-5 h-5" />
               </div> */}
            </div>

            {/* Project Details */}
            <div className="space-y-2">
               <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Project Details <span className="text-red-500">*</span></label>
               <textarea 
                 rows="4" 
                 placeholder="Your message" 
                 className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-4 focus:outline-none focus:ring-1 focus:ring-gray-400 transition-all placeholder:text-gray-400 resize-none"
               ></textarea>
            </div>

            {/* Submit Button */}
            <button className="w-full bg-gradient-to-r from-[#4B6CEB] to-[#9159B7] text-white text-lg py-2 rounded-xl shadow-lg shadow-purple-200 flex items-center justify-center gap-2 mt-4">
              Get Free Consultation <ArrowUpRight className="w-5 h-5" />
            </button>

          </form>
        </div>
      </div>
    </section>  


    <section className="w-full bg-black py-6 px-4 md:px-8 overflow-hidden">
      
          {/* === HEADING SECTION === */}
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-white text-4xl md:text-5xl font-['Manrope'] font-normal mb-6">
              Our Global Presence
            </h2>
            <p className="text-gray-400 text-lg font-light leading-relaxed">
              Our reach across key international markets, enabling us to collaborate seamlessly, serve diverse clients, and deliver consistent value worldwide.
            </p>
          </div>
    
          {/* === MAP CONTAINER === */}
          <div className="relative w-1x1 max-w-3xl mx-auto aspect-[16/9] md:aspect-[2/1]">
            
            {/* Map  */}
            <div className="absolute inset-0 opacity-100">
               <Image 
                 src="/assets/map.svg" 
                 alt="World Map" 
                 fill
                 className="object-contain invert brightness-0"
               />
            </div>
    
            {/* Locations Markers */}
            {locations.map((loc, index) => (
              <div 
                key={index}
                className="absolute flex flex-col items-center group cursor-pointer z-10 "
                style={{ top: loc.top, left: loc.left }}
              >
                
                {/* --- THE DOT --- */}
                <div className="relative flex items-center justify-center w-6 h-6 mb-2">
                  <div className="absolute w-full h-full rounded-full opacity-100"></div>
                  <div className="relative w-2 h-2 bg-purple-500 rounded-full"></div>
                </div>
    
                {/* --- THE WHITE CARD --- */}
                
                <div 
                  className={`
                    absolute bg-white rounded-md min-w-[100px] text-center
                    transition-all duration-300 
    
                    ${loc.align.includes('top') ? 'items-end' : ''}
                    ${loc.align.includes('bottom') ? 'items-start' : ''}
                    ${loc.align === 'left' || loc.align === 'right' ? 'items-center' : ''}
                    
                    ${loc.align === 'top' ? 'bottom-full mb-6' : ''}
                    ${loc.align === 'bottom' ? 'top-full mt-6' : ''}
                    ${loc.align === 'left' ? 'right-full mr-10 -top-2' : ''}
                    ${loc.align === 'top-right' ? 'left-full ml-10 -top-10' : ''}
                    ${loc.align === 'top-left' ? 'right-full mr-10 -top-15' : ''}
                  `}
                >
                <div className="text-center">  {/* block group-hover:hidden */}
                  <h4 className="text-black font-bold text-sm md:text-md uppercase font-['Manrope']">
                    {loc.country}
                  </h4>
                  <p className="text-gray-500 text-xs scale-75 font-medium whitespace-nowrap">
                    {loc.role}
                  </p>
                </div>  
                {/* <div className="hidden group-hover:block h-20 text-center p-1 w-full">
                <div className="relative w-20 h-10 mx-auto rounded-2x1 overflow-hidden">
                  <Image
                    src={`https://loremflickr.com/400/300/${loc.country.replace(" ", "+")},city,architectur all`}
                    alt={`${loc.country} View`}
                    fill
                    className="object-cover"
                    unoptimized={true}/>
                  </div>
    
                  
                  <p className="w-full text-gray-700 text-xs scale-50 font-normal px-1">
                    {loc.address}
                  </p>
                </div> */}
                  {/* Connector Lines */}
                  <div 
                    className={`
                      absolute bg-[#9747FF] z-[-1]
                      ${loc.align === 'top' ? 'w-[1px] h-10 top-full left-1/2 -translate-x-1/2' : ''}
                      ${loc.align === 'bottom' ? 'w-[1px] h-10 bottom-full left-1/2 -translate-x-1/2' : ''}
                      ${loc.align === 'left' ? 'h-[1px] w-10 left-full top-1/2 -translate-y-1/2' : ''}
                      ${loc.align === 'top-right' ? 'w-[1px] h-14 bg-[#9747FF] top-full left-0 origin-top-left rotate-75' : ''}
                      ${loc.align === 'top-left' ? 'w-[1px] h-14 bg-[#9747FF] top-full right-0 origin-top-right -rotate-75' : ''}
                    `}
                  ></div>
                </div>
    
              </div>
            ))}
    
          </div>
    
        </section>

  </div>
  );
}