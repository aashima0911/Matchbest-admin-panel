'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
  Loader
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

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
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
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      setError('Failed to send message.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='bg-gradient-to-r from-[#0b0515] to-[#3c2461] min-h-screen'>
      <div className="min-h-screen max-w-7xl mx-auto text-white pt-20 px-6 md:px-16">
        {/* Hero Section */}
        <motion.section
          className="py-10 text-center"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            Contact <span className="text-gradient">Us</span>
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-lg text-gray-300 max-w-2xl mx-auto">
            We'd love to hear from you! Please fill out the form below and our team will get back to you shortly.
          </motion.p>
        </motion.section>

        {/* Contact Form with Map */}
        <motion.section
          className="py-5"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="grid gap-8 md:grid-cols-2 max-w-6xl mx-auto">
            {/* Contact Form */}
            <motion.div variants={fadeInUp} className="glass-effect p-8 bg-black/40 rounded-2xl">
              <h2 className="text-2xl font-bold mb-6 text-gradient">Get In Touch</h2>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 text-white"
                    required
                    value={form.name}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 text-white"
                    required
                    value={form.email}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">Message</label>
                  <textarea
                    rows="5"
                    name="message"
                    placeholder="Your Message"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 text-white"
                    required
                    value={form.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#4B6CEB] to-[#9159B7] text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition flex items-center justify-center"
                  disabled={loading}
                >
                  {loading ? <Loader className="w-5 h-5 animate-spin mr-2" /> : <Send className="w-5 h-5 mr-2" />}
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
                {success && (
                  <div className="flex items-center text-green-400 text-center font-semibold">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    Message sent!
                  </div>
                )}
                {error && (
                  <div className="flex items-center text-red-400 text-center font-semibold">
                    <AlertCircle className="w-5 h-5 mr-2" />
                    {error}
                  </div>
                )}
              </form>
            </motion.div>

            {/* Google Map */}
            <motion.div variants={fadeInUp} className="glass-effect p-8 bg-black/40 rounded-2xl">
              <h2 className="text-2xl font-bold mb-6 text-gradient">Our Location</h2>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.337735604388!2d77.03202311440608!3d28.679079582397536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d04c038fe1e91%3A0x7499afcb450a070a!2sGurugram%2C%20Haryana%2C%20India!5e0!3m2!1sen!2sin!4v1699352500000!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              ></iframe>
            </motion.div>
          </div>
        </motion.section>

        {/* Office Locations */}
        <motion.section
          className="py-10"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-center mb-12 text-gradient">
            Our Offices
          </motion.h2>
          <motion.div variants={container} className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
            {/* Office 1 */}
            <motion.div
              variants={fadeInUp}
              className="glass-effect p-6 bg-black/40 rounded-2xl hover:scale-[1.02] transition"
            >
              <div className="flex items-center mb-4">
                <MapPin className="w-6 h-6 mr-3 text-cyan-400" />
                <h3 className="text-xl font-semibold text-gradient">India</h3>
              </div>
              <p className="text-gray-300">Gurugram, Haryana, India</p>
            </motion.div>
            {/* Office 2 */}
            <motion.div
              variants={fadeInUp}
              className="glass-effect p-6 bg-black/40 rounded-2xl hover:scale-[1.02] transition"
            >
              <div className="flex items-center mb-4">
                <MapPin className="w-6 h-6 mr-3 text-cyan-400" />
                <h3 className="text-xl font-semibold text-gradient">UAE</h3>
              </div>
              <p className="text-gray-300">Sharjah, UAE</p>
            </motion.div>
            {/* Office 3 */}
            <motion.div
              variants={fadeInUp}
              className="glass-effect p-6 bg-black/40 rounded-2xl hover:scale-[1.02] transition"
            >
              <div className="flex items-center mb-4">
                <MapPin className="w-6 h-6 mr-3 text-cyan-400" />
                <h3 className="text-xl font-semibold text-gradient">USA</h3>
              </div>
              <p className="text-gray-300">New Mexico, USA</p>
            </motion.div>
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
}
