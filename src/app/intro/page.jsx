'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Script from 'next/script';
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  Zap,
  Award,
  ChevronRight,
  Mail,
  Phone,
  Globe,
  Star,
  CheckCircle,
} from 'lucide-react';

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

// Icons
const IconCalendar = () => <Calendar className="w-8 h-8 text-cyan-600" />;
const IconClock = () => <Clock className="w-8 h-8 text-cyan-600" />;
const IconMapPin = () => <MapPin className="w-8 h-8 text-cyan-600" />;

// Countdown Timer
const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const target = new Date('2025-11-18T10:00:00').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = target - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-4 gap-2 md:gap-4 text-center">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="bg-gradient-to-r from-indigo-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 disabled:opacity-50 rounded-xl p-2 md:p-3">
          <div className="text-lg md:text-xl lg:text-2xl font-bold text-white">{value}</div>
          <div className="text-xs text-white uppercase">{unit}</div>
        </div>
      ))}
    </div>
  );
};

export default function WebinarLanding() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    experience: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    let filteredValue = value;

    if (name === 'name') {
      // Allow only letters and spaces
      filteredValue = value.replace(/[^A-Za-z\s]/g, '');
    } else if (name === 'phone') {
      // Allow only numbers, spaces, hyphens, plus, parentheses
      filteredValue = value.replace(/[^0-9\s\-\+\(\)]/g, '');
    } else if (name === 'email') {
      // Allow only valid email characters: letters, numbers, @, ., _, -
      filteredValue = value.replace(/[^a-zA-Z0-9@._-]/g, '').toLowerCase();
    }

    setFormData(prev => ({ ...prev, [name]: filteredValue }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const response = await fetch('/api/webinar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setShowSuccessPopup(true);
        setFormData({ name: '', email: '', phone: '', company: '', experience: '' });
      } else {
        setSubmitMessage('Registration failed. Please try again.');
      }
    } catch (error) {
      setSubmitMessage('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>

      {/* Success Popup */}
      {showSuccessPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md mx-4 text-center">
            <div className="mb-4">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Registration Successful!</h3>
            <p className="text-gray-600 mb-6">
              Thank you for registering. Please check your email for confirmation.
            </p>
            <button
              onClick={() => setShowSuccessPopup(false)}
              className="bg-gradient-to-r from-indigo-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-white font-bold py-3 px-8 rounded-full shadow-lg transition transform hover:scale-105"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white py-6 px-4 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">

          {/* Promotional Content and Form */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start mb-12">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              className="lg:col-span-2"
            >
              <div className="bg-gradient-to-br from-indigo-50 to-cyan-50 p-8 rounded-2xl border border-indigo-100 shadow-lg w-full min-h-96 flex flex-col justify-center">
                <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                  Are You Struggling to Personalize User Experience at Scale?
                </h1>
                <div className="mb-6">
                  <h2 className="text-xl lg:text-2xl font-semibold text-indigo-700 mb-2">
                    Meet BytePlus — Your AI Engine for Real-Time Customer Excellence
                  </h2>
                  <p className="text-gray-700 text-lg">
                    Just enter your prompt — get stunning videos & images in seconds with BytePlus
                  </p>
                </div>
                <div className="bg-white p-4 rounded-xl border border-indigo-200">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Want More Information About BytePlus?
                  </h3>
                  <p className="text-gray-600">
                    Share your details and our team will connect with you with the right solutions, demos & documents
                  </p>
                </div>
              </div>
            </motion.div>

            {/* ---------- RIGHT: FORM ---------- */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              className="lg:col-span-1 flex items-center justify-center"
            >
              <div className="bg-white rounded-3xl shadow-2xl p-4 lg:p-6 w-full max-w-sm border min-h-96">
                <h2 className="text-xl lg:text-2xl font-bold text-gray-800 text-center mb-4">
                  Want More Information About BytePlus?
                </h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-medium text-gray-700">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter name"
                      pattern="[A-Za-z\s]+"
                      title="Please enter only letters and spaces"
                      className="mt-1 w-full px-3 py-2 border border-indigo-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition"
                      required
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-medium text-gray-700">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="you@company.com"
                      className="mt-1 w-full px-3 py-2 border border-indigo-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition"
                      required
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-medium text-gray-700">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Phone number"
                      pattern="[0-9\s\-\+\(\)]+"
                      title="Please enter a valid phone number"
                      className="mt-1 w-full px-3 py-2 border border-indigo-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition"
                      required
                    />
                  </div>

                  {/* Company/Organization */}
                  <div>
                    <label className="block text-xs font-medium text-gray-700">
                      Company/Organization <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Company or organization name"
                      className="mt-1 w-full px-3 py-2 border border-indigo-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition"
                      required
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="cursor-pointer w-full bg-gradient-to-r from-indigo-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 disabled:opacity-50 text-white font-bold text-sm py-3 rounded-full shadow-lg flex items-center justify-center gap-2 transition transform hover:scale-105"
                  >
                    {isSubmitting ? 'Submitting...' : 'Continue Webinar'}
                    <ChevronRight className="w-4 h-4" />
                  </button>

                  {/* Submit Message */}
                  {submitMessage && (
                    <p className={`text-sm text-center mt-4 ${submitMessage.includes('successful') ? 'text-green-600' : 'text-red-600'}`}>
                      {submitMessage}
                    </p>
                  )}

                </form>
              </div>
            </motion.div>
          </div>

          {/* Featured Videos Section */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="space-y-6 text-center"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Featured Videos</h2>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
              {/* Video 1 */}
              <div className="bg-gray-900 rounded-xl shadow-lg border h-68 overflow-hidden lg:col-span-2">
                <video
                  src="https://assets.byteplus.com/obj/byteplus-assets/seedance/1.mp4"
                  playsInline
                  muted
                  autoPlay
                  loop
                  className="w-full h-full object-cover rounded-xl"
                  preload="metadata"
                />
              </div>
              {/* Video 2 */}
              <div className="bg-gray-900 rounded-xl shadow-lg border h-68 overflow-hidden lg:col-span-1">
                <video
                  src="https://assets.byteplus.com/obj/byteplus-assets/seedance/9.mp4"
                  playsInline
                  muted
                  autoPlay
                  loop
                  className="w-full h-full object-cover rounded-xl"
                  preload="metadata"
                />
              </div>
              {/* Video 3 */}
              <div className="bg-gray-900 rounded-xl shadow-lg border h-68 overflow-hidden lg:col-span-1">
                <video
                  src="https://assets.byteplus.com/obj/byteplus-assets/seedance/16.mp4"
                  playsInline
                  muted
                  autoPlay
                  loop
                  className="w-full h-full object-cover rounded-xl"
                  preload="metadata"
                />
              </div>
              {/* Video 4 */}
              <div className="bg-gray-900 rounded-xl shadow-lg border h-68 overflow-hidden lg:col-span-2">
                <video
                  src="https://assets.byteplus.com/obj/byteplus-assets/seedance/6.mp4"
                  playsInline
                  muted
                  autoPlay
                  loop
                  className="w-full h-full object-cover rounded-xl"
                  preload="metadata"
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>


    </>
  );
}
