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

      <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white py-6 px-14 md:px-18 lg:px-22">

      {/* ==== HERO + FORM SECTION ==== */}
      <section className="py-8 md:py-2 lg:py-6 px-4 md:px-8 lg:px-12">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* ---------- LEFT: INFO ---------- */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="space-y-4"
          >

            {/* Title */}
            <h1 className="text-xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-gray-900 leading-tight">
              <span className="text-indigo-600">Agentic AI</span> transforming enterprise content creation with automation.
            </h1>

            <p className="text-lg md:text-xl text-gray-600 ">
              Join <strong className="text-indigo-600">BytePlus x Matchbest</strong> to see how autonomous AI agents are revolutionizing content creation for marketers, creators, and brands.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-3 ">
              {['30 Minutes', 'Online', 'Free Access'].map((tag) => (
                <span
                  key={tag}
                  className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Countdown */}
            <div className="py-6 ">
              <p className="text-sm font-medium text-gray-700 mb-3">Webinar Starts In</p>
              <CountdownTimer />
            </div>

            {/* Event Details */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { Icon: IconCalendar, title: 'Date', desc: '18 Nov 2025 (Tue)' },
                { Icon: IconClock, title: 'Time', desc: '10:00 AM CST' },
                { Icon: IconMapPin, title: 'Location', desc: 'Online (Teams)' },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-2xl p-5 shadow-sm border">
                  <item.Icon />
                  <h3 className="mt-2 font-semibold text-gray-800">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Speaker */}
            <div className="flex items-center gap-4 bg-gradient-to-r from-indigo-50 to-cyan-50 rounded-2xl p-5">
              <img
                src="https://media.licdn.com/dms/image/v2/C4D03AQFHeA7elEmjHg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1653906703330?e=2147483647&v=beta&t=370EfUPxypWRGVO5VgNjWxRslugsabZBWiS35Toddrw"
                alt="Vivek Ganesh"
                className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover border-4 border-white shadow-md flex-shrink-0"
              />
              <div className="min-w-0">
                <p className="font-bold text-gray-900 text-sm md:text-base">Vivek Ganesh</p>
                <p className="text-xs md:text-sm text-indigo-700">CTO, BytePlus</p>
              </div>
            </div>

            {/* CTA */}
            {/* <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLScX2eGiZrmZCjbN1SSPGNYd9_voqLTmlpQOP2yMrMeX5W6ZHg/viewform"
              target="_blank"
            >
              <button className="w-full sm:w-auto bg-gradient-to-r from-indigo-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-white font-bold text-lg px-8 py-4 rounded-full shadow-xl transition transform hover:scale-105 flex items-center justify-center gap-2">
                RSVP Now – Free Seat
                <ChevronRight className="w-5 h-5" />
              </button>
            </Link> */}
          </motion.div>

          {/* ---------- RIGHT: FORM (Perfect Design) ---------- */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="flex items-center justify-center"
          >
            <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-10 w-full max-w-lg border">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 text-center mb-6">
                Book Your Free Seat
              </h2>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
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
                    className="mt-1 w-full px-4 py-3 border border-indigo-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition"
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="you@company.com"
                    className="mt-1 w-full px-4 py-3 border border-indigo-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition"
                    required
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
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
                    className="mt-1 w-full px-4 py-3 border border-indigo-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition"
                    required
                  />
                </div>

                {/* Company/Organization */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Company/Organization <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Company or organization name"
                    className="mt-1 w-full px-4 py-3 border border-indigo-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition"
                    required
                  />
                </div>

                {/* Experience */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Experience <span className="text-red-500">*</span>
                  </label>
                  <div className="mt-2 space-y-2">
                    {[
                      'Industry Professional – Technical Role',
                      'Industry Professional – Non-Technical Role',
                      'Aspiring Professional - Career Switcher',
                      'Educator - Academic',
                      'Other - Curious Learner',
                    ].map((opt) => (
                      <label
                        key={opt}
                        className="flex items-center space-x-3 cursor-pointer"
                      >
                        <input
                          type="radio"
                          name="experience"
                          value={opt}
                          checked={formData.experience === opt}
                          onChange={handleInputChange}
                          className="w-4 h-4 text-cyan-600 focus:ring-cyan-500"
                        />
                        <span className="text-sm text-gray-700">{opt}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="cursor-pointer w-full bg-gradient-to-r from-indigo-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 disabled:opacity-50 text-white font-bold text-lg py-4 rounded-full shadow-lg flex items-center justify-center gap-2 transition transform hover:scale-105"
                >
                  {isSubmitting ? 'Submitting...' : 'Continue Webinar'}
                  <ChevronRight className="w-5 h-5" />
                </button>

                {/* Submit Message */}
                {submitMessage && (
                  <p className={`text-sm text-center mt-4 ${submitMessage.includes('successful') ? 'text-green-600' : 'text-red-600'}`}>
                    {submitMessage}
                  </p>
                )}

                {/* Consent */}
                <p className="text-xs text-gray-500 text-center mt-4">
                  I authorise BytePlus & Matchbest to contact me via{' '}
                  <Mail className="inline w-3 h-3" /> Email,{' '}
                  <Phone className="inline w-3 h-3" /> SMS,{' '}
                  <Globe className="inline w-3 h-3" /> WhatsApp.

                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ==== AGENDA SECTION ==== */}
      <section className="py-8 px-4 md:px-8 lg:px-12 bg-gray-50">
        <div className="container mx-auto">
          <motion.h2
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            className="text-3xl lg:text-4xl font-extrabold text-center mb-12 text-gray-900"
          >
            What You'll Learn
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="w-10 h-10 text-cyan-600" />,
                title: 'AI-Powered Marketing',
                desc: 'Reinvent automation & personalization with generative AI.',
              },
              {
                icon: <Users className="w-10 h-10 text-indigo-600" />,
                title: 'Next-Gen Workflows',
                desc: 'From idea to publish in seconds with autonomous agents.',
              },
              {
                icon: <Award className="w-10 h-10 text-violet-600" />,
                title: 'Live Demo & Q&A',
                desc: 'See the platform in action, ask anything to Vivek Ganesh.',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition"
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==== BENEFITS SECTION ==== */}
      <section className="py-8 px-4 md:px-8 lg:px-12">
        <div className="container mx-auto">
          <motion.h2
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            className="text-3xl lg:text-4xl font-extrabold text-center mb-12 text-gray-900"
          >
            Why Attend?
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'Cut Production Time 90%',
              'Unlimited Creative Variants',
              'Enterprise-Grade Security',
              'Free Lifetime Updates',
            ].map((benefit, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                className="flex items-center gap-3 bg-indigo-50 rounded-xl p-4"
              >
                <CheckCircle className="w-6 h-6 text-cyan-600 flex-shrink-0" />
                <p className="font-medium text-gray-800">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      </div>
    </>
  );
}
