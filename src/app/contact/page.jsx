'use client';
import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { submitContact } from '../lib/firebase/contact';

export default function ContactPage() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

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
      await submitContact(form);
      setSuccess(true);
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      setError('Failed to send message.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#10131a] text-white min-h-screen flex flex-col items-center px-4 md:px-8 lg:px-12">
      {/* Header Section */}
      <section className="container mx-auto px-4 md:px-8 lg:px-12 py-24 text-center mb-1">
        <h1 className="text-5xl font-extrabold mb-6" data-aos="fade-down">
          Contact Us
        </h1>
        <p className="text-lg max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="200">
          We&apos;d love to hear from you! Please fill out the form below and our team will get back to you shortly.
        </p>
      </section>
      {/* Contact Form with Map */}
      <section className="py-16 bg-white text-gray-800 w-full flex flex-col items-center justify-center px-4 md:px-8 lg:px-12 mb-12">
        <div className="container mx-auto px-0 md:px-4 lg:px-8 flex flex-col md:flex-row gap-8" data-aos="fade-up">
          {/* Contact Form */}
          <div className="w-full md:w-1/2 space-y-6">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-lg font-medium mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  required
                  value={form.name}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block text-lg font-medium mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  required
                  value={form.email}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block text-lg font-medium mb-2">Message</label>
                <textarea
                  rows="5"
                  name="message"
                  placeholder="Your Message"
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  required
                  value={form.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-700 cursor-pointer text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-800 transition"
                disabled={loading}
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
              {success && <div className="text-green-600 text-center font-semibold">Message sent!</div>}
              {error && <div className="text-red-600 text-center font-semibold">{error}</div>}
            </form>
          </div>
          {/* Google Map */}
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.337735604388!2d77.03202311440608!3d28.679079582397536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d04c038fe1e91%3A0x7499afcb450a070a!2sGurugram%2C%20Haryana%2C%20India!5e0!3m2!1sen!2sin!4v1699352500000!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg shadow-lg"
            ></iframe>
          </div>
        </div>
      </section>
      {/* Office Locations */}
      <section className="py-16 w-full bg-gray-100 text-gray-900 px-4 md:px-8 lg:px-12">
        <div className="container mx-auto px-0 md:px-4 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-12" data-aos="fade-up">Our Offices</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Office 1 */}
            <div className="p-6 bg-white rounded-lg shadow hover:scale-105 transition" data-aos="fade-up">
              <h3 className="text-xl font-bold mb-2 text-blue-700">India</h3>
              <p>Gurugram, Haryana, India</p>
            </div>
            {/* Office 2 */}
            <div className="p-6 bg-white rounded-lg shadow hover:scale-105 transition" data-aos="fade-up" data-aos-delay="200">
              <h3 className="text-xl font-bold mb-2 text-blue-700">UAE</h3>
              <p>Sharjah, UAE</p>
            </div>
            {/* Office 3 */}
            <div className="p-6 bg-white rounded-lg shadow hover:scale-105 transition" data-aos="fade-up" data-aos-delay="400">
              <h3 className="text-xl font-bold mb-2 text-blue-700">USA</h3>
              <p>New Mexico, USA</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 