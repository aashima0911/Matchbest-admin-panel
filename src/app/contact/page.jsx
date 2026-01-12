'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
  Loader,
  Clock
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
    <div className='bg-gradient-to-r from-[#0b0515] to-[#3c2461] min-h-screen'>
      <div className="min-h-screen max-w-7xl mx-auto text-white pt-20 px-6 md:px-16">
        
        {/* --- HERO SECTION --- */}
        <motion.section
          className="py-10 text-center"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            Start Your <span className="text-gradient">Digital Transformation</span>
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-lg text-gray-300 max-w-2xl mx-auto">
            Ready to scale? Whether you need custom software, AI automation, or cloud consulting, our team is ready to help.
          </motion.p>
        </motion.section>

        {/* --- CONTACT GRID --- */}
        <motion.section
          className="py-5"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="grid gap-8 md:grid-cols-2 max-w-6xl mx-auto ">
            
            {/* Contact Form */}
            <motion.div variants={fadeInUp} className="glass-effect p-8 bg-black/40 rounded-2xl border border-white/10 hover:border-cyan-500/30 transition-colors shadow-lg hover:shadow-cyan-500/20 transition-all duration-0 hover:-translate-y-2">
              <h2 className="text-2xl font-bold mb-6 text-white">Send us a Message</h2>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-500"
                    required
                    value={form.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-300">Email</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="john@company.com"
                      className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-500"
                      required
                      value={form.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-300">Mobile</label>
                    <input
                      type="number"
                      name="mobile"
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-500"
                      required
                      value={form.mobile}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">Project Details</label>
                  <textarea
                    rows="4"
                    name="message"
                    placeholder="Tell us about your project requirements..."
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-500"
                    required
                    value={form.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#6823f0] to-[#4B6CEB] text-white px-6 py-4 rounded-xl font-bold hover:shadow-lg hover:shadow-purple-500/30 transition-all flex items-center justify-center"
                  disabled={loading}
                >
                  {loading ? <Loader className="w-5 h-5 animate-spin mr-2" /> : <Send className="w-5 h-5 mr-2" />}
                  {loading ? 'Sending...' : 'Get Free Consultation'}
                </button>
                
                {success && (
                  <div className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg flex items-center text-green-400">
                    <CheckCircle className="w-5 h-5 mr-3 flex-shrink-0" />
                    <span>Thank you! Our team will contact you within 24 hours.</span>
                  </div>
                )}
                {error && (
                  <div className="p-4 bg-red-500/20 border border-red-500/50 rounded-lg flex items-center text-red-400">
                    <AlertCircle className="w-5 h-5 mr-3 flex-shrink-0" />
                    <span>{error}</span>
                  </div>
                )}
              </form>
            </motion.div>

            {/* Map & Direct Info */}
            <div className="flex flex-col gap-6">
                
                {/* Contact Info Block */}
                <motion.div variants={fadeInUp} className="glass-effect p-8 bg-gradient-to-br from-purple-900/40 to-black/40 rounded-2xl border border-white/10 hover:border-cyan-500/30 transition-colors shadow-lg hover:shadow-cyan-500/20 transition-all duration-0 hover:-translate-y-2">
                    <h3 className="text-xl font-bold mb-4 text-white">Contact Information</h3>
                    <div className="space-y-4">
                        <div className="flex items-start">
                            <Mail className="w-6 h-6 text-cyan-400 mr-4 mt-1" />
                            <div>
                                <p className="text-gray-400 text-sm">Email Us</p>
                                <a href="mailto:biz@matchbest.ai" className="text-lg font-semibold text-white hover:text-cyan-400 transition">biz@matchbest.ai</a>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <Clock className="w-6 h-6 text-purple-400 mr-4 mt-1" />
                            <div>
                                <p className="text-gray-400 text-sm">Business Hours</p>
                                <p className="text-white">Mon - Fri: 9:00 AM - 7:00 PM (IST)</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Fixed Map Section */}
                <motion.div variants={fadeInUp} className="glass-effect p-2 bg-black/40 rounded-2xl flex-1 border border-white/10 overflow-hidden min-h-[300px]">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d219.32580377827534!2d77.04373125218143!3d28.412833302456853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d229aeba0bcbb%3A0xc7c82ac32b24b289!2sSPAZE%20ITECH%20PARK%2C%20Sector%2049%2C%20Gurugram%2C%20Haryana%20122018!5e0!3m2!1sen!2sin!4v1767088202316!5m2!1sen!2sin"
                    width="100%" 
                    height="100%" 
                    style={{border:0, minHeight: '300px'}} 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-xl grayscale hover:grayscale-0 transition-all duration-500"
                ></iframe>
                </motion.div>
            </div>
          </div>
        </motion.section>

        {/* --- GLOBAL OFFICES --- */}
        <motion.section
          className="py-16 border-t border-white/5 mt-8 "
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-center mb-12 text-gradient">
            Global Presence
          </motion.h2>
          <motion.div variants={container} className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
            
            {/* Office 1 */}
            <motion.div
              variants={fadeInUp}
              className="glass-effect p-6 bg-black/40 rounded-2xl hover:border-cyan-500/30 border border-white/10 transition group hover:border-cyan-500/30 transition-colors shadow-lg hover:shadow-cyan-500/20 transition-all duration-0 hover:-translate-y-2"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center mr-4 group-hover:bg-cyan-500/20 transition">
                    <MapPin className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                    <h3 className="text-xl font-bold text-white">India (HQ)</h3>
                    <p className="text-cyan-400 text-xs uppercase tracking-wider">Research & Development</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Spaze i-Tech Park, Sohna Road,<br/> Gurugram, Haryana 122018
              </p>
            </motion.div>

            {/* Office 2 */}
            <motion.div
              variants={fadeInUp}
              className="glass-effect p-6 bg-black/40 rounded-2xl hover:border-purple-500/30 border border-white/10 transition group hover:border-cyan-500/30 transition-colors shadow-lg hover:shadow-cyan-500/20 transition-all duration-0 hover:-translate-y-2"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center mr-4 group-hover:bg-purple-500/20 transition">
                    <MapPin className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                    <h3 className="text-xl font-bold text-white">UAE</h3>
                    <p className="text-purple-400 text-xs uppercase tracking-wider">Sales & Operations</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Sharjah Media City (Shams),<br/> Al Messaned, Sharjah, UAE
              </p>
            </motion.div>

            {/* Office 3 */}
            <motion.div
              variants={fadeInUp}
              className="glass-effect p-6 bg-black/40 rounded-2xl hover:border-blue-500/30 border border-white/10 transition group hover:border-cyan-500/30 transition-colors shadow-lg hover:shadow-cyan-500/20 transition-all duration-0 hover:-translate-y-2"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center mr-4 group-hover:bg-blue-500/20 transition">
                    <MapPin className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                    <h3 className="text-xl font-bold text-white">USA</h3>
                    <p className="text-blue-400 text-xs uppercase tracking-wider">Client Relations</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                1200 Smith Street, Suite 1600,<br/> Houston, TX 77002
              </p>
            </motion.div>

          </motion.div>
        </motion.section>
      </div>
    </div>
  );
}
