// src/app/careers/[id]/page.jsx
"use client";
import React, { useState } from 'react';
import { jobsData } from '../../../data/jobsData';
import { CheckCircle2, UploadCloud, Mail, Phone } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default function JobDetailsPage({ params }) {
  // 1. URL se ID nikali (params.id string hoti h, use Number m badla)
  const job = jobsData.find((j) => j.id === Number(params.id));

  // Agar job nahi mili (galat ID), to 404 page dikhao
  if (!job) {
    return <div className="text-white text-center pt-40">Job not found!</div>;
  }

  return (
    <div className="min-h-screen bg-[#050505] text-white pt-40 pb-20 px-4 md:px-8 lg:px-16">
      
      {/* Title */}
      <div className="max-w-7xl mx-auto mb-16">
        <h1 className="text-3xl md:text-4xl text-center font-bold">
          {job.title}
        </h1>
      </div>

      {/* Main Content Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
        
        {/* === LEFT SIDE: JOB DETAILS === */}
        <div className="lg:col-span-2">
          
          {/* Header */}
          <div className="mb-6">
            {/* <span className="text-purple-400 text-sm font-bold uppercase tracking-wider border border-purple-500/30 px-3 py-1 rounded-full bg-purple-500/10">
              {job.category}
            </span> */}
            {/* <h1 className="text-3xl md:text-4xl text-center font-bold mt-4 mb-4">
              {job.title}
            </h1> */}
            <div className="flex gap-4 text-gray-400 text-sm">
               <span className='flex gap-2 items-center flex-wrap'>
                 {job.tools && job.tools.map((tool, index) => (
                   <React.Fragment key={tool}>
                     <span className="text-gray-300">{tool}</span>
                     {index < job.tools.length - 1 && <span className="text-gray-500">|</span>}
                   </React.Fragment>
                 ))}
               </span>
               {/* <span>💼 {job.type}</span>
               <span>💰 {job.salary}</span> */}
            </div>
          </div>

          {/* Description */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4 font-['Space_Grotesk'] text-white">About The Role:</h3>
            <p className="text-gray-300 leading-relaxed font-light text-base">
              {job.desc}
            </p>
          </div>

          {/* Requirements */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 font-['Space_Grotesk'] text-white">Job Requirements:</h3>
            <ul className="space-y-4">
              {job.requirements && job.requirements.map((req, index) => (
                <li key={index} className="flex gap-3 text-gray-300 font-light text-base">
                  <CheckCircle2 className="text-purple-500 w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tools Required */}
          {/* <div className="mb-12">
            <h3 className="text-2xl font-bold mb-4 font-['Space_Grotesk'] text-white">Tool Set:</h3>
            <ul className="space-y-2 text-gray-300 font-light">
              {job.tools && job.tools.map((tool) => (
                <li key={tool} className="flex gap-3 text-base">
                  <span className="text-purple-500">•</span>
                  <span>{tool}</span>
                </li>
              ))}
            </ul>
          </div> */}

        </div>

        {/* === RIGHT SIDE: CONTACT CARD === */}
        <div className="lg:col-span-1">
          {/* Info Block with Vertical Line */}
          <div className="mb-8 flex gap-6 pl-6 border-l-[1px] border-white">
            <div className="flex flex-col gap-4">
              <div>
                <p className="text-gray-500 text-sm font-bold tracking-wider mb-1">Location:</p>
                <p className="text-white text-base font-medium">{job.location || 'Not specified'}</p>
              </div>
              <div>
                <p className="text-gray-500 text-sm font-bold tracking-wider mb-1">Job Posted Date:</p>
                <p className="text-white text-base font-medium">{job.postedDate}</p>
              </div>
              <div>
                <p className="text-gray-500 text-sm font-bold tracking-wider mb-1">Expiry Date:</p>
                <p className="text-white text-base font-medium">{job.expiryDate || 'Open'}</p>
              </div>
            </div>
          </div>

          {/* Contact Card */}
          <div className="bg-white rounded-3xl p-6 text-center sticky top-28">
            <h4 className="text-black text-lg font-bold mb-2">Have any questions?</h4>
            <p className="text-gray-600 text-xs mb-4">Contact us and we'll get back to you soon.</p>
            
            <a href="mailto:askus@example.com" className="flex items-center justify-center gap-2 text-black font-semibold mb-4 text-sm hover:text-purple-600 transition-colors">
              <Mail size={16} />
              biz@matchbest.ai
            </a>

            {/* Illustration Placeholder */}
            <div className="w-full h-48 rounded-2xl flex items-center justify-center mt-6" style={{backgroundImage: 'url(/assets/illustration.png)'}}></div>
          </div>
        </div>

      </div>

      {/* === APPLY FORM SECTION === */}
      <div className="flex justify-center mt-10 px-4 md:px-8 lg:px-20">
        <div className="w-full max-w-6xl bg-[#1A1A1A]/50 border border-white/10 rounded-3xl p-10 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            
            {/* LEFT: FORM */}
            <div>
              <h2 className="text-2xl md:text-3xl mb-2">Apply for {job.title}</h2>
              <p className="text-gray-400 text-base mb-8">Fill out the form below and we'll get in touch soon.</p>

              <form className="space-y-5">
                
                {/* Full Name */}
                <div>
                  <input 
                    type="text" 
                    placeholder="Enter Your Full Name" 
                    required
                    className="w-full bg-[#050505] border border-white/10 rounded-lg p-4 text-white placeholder-gray-600 focus:border-white/30 outline-none transition-colors"
                  />
                </div>

                {/* Email */}
                <div>
                  <input 
                    type="email" 
                    placeholder="Enter Your Email" 
                    required
                    className="w-full bg-[#050505] border border-white/10 rounded-lg p-4 text-white placeholder-gray-600 focus:border-white/30 outline-none transition-colors"
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <input 
                    type="tel" 
                    placeholder="Enter Your Phone Number" 
                    required
                    className="w-full bg-[#050505] border border-white/10 rounded-lg p-4 text-white placeholder-gray-600 focus:border-white/30 outline-none transition-colors"
                  />
                </div>

                {/* Resume Upload */}
                <div>
                  <label className="text-xs text-gray-500 uppercase font-bold mb-2 block">Resume (PDF, DOC, DOCX - Max 5MB)</label>
                  <div className="border border-white/10 rounded-lg p-4 flex items-center justify-center cursor-pointer hover:bg-white/2 transition-colors group bg-[#050505]">
                    <div className="text-center flex flex-col items-center">
                      <div className="w-10 h-10 bg-white rounded-md flex items-center justify-center mb-2 group-hover:bg-white/30 transition-colors">
                        <UploadCloud className="text-black w-5 h-5 group-hover:text-white" />
                      </div>
                      <span className="text-white font-semibold text-sm">Upload File</span>
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <textarea 
                    placeholder="Message and Cover Letter (Optional)" 
                    required
                    rows="4"
                    className="w-full bg-[#050505] border border-white/10 rounded-lg p-4 text-white placeholder-gray-600 focus:border-white/30 outline-none transition-colors resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-purple-500 text-white font-bold py-3 rounded-lg hover:from-purple-700 hover:to-purple-600 mt-6 flex items-center justify-center gap-2"
                >
                  Submit Application
                  <span>↗</span>
                </button>

              </form>
            </div>

            {/* RIGHT: GRADIENT IMAGE */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="w-full h-full rounded-2xl flex flex-col items-center justify-between overflow-hidden relative min-h-96 bg-cover bg-center" style={{backgroundImage: 'url(/assets/contact_bg.svg)'}}>
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="z-10 text-center px-6 w-full pb-8 flex items-end justify-center h-full">
                  <p className="py-5 text-white text-base font-light italic">Great software is built one thoughtful line at a time</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}