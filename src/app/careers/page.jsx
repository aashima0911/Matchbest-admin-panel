'use client';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from 'next/link';

const positions = [
  {
    title: 'Frontend Developer',
    location: 'Remote',
    type: 'Full-time',
    id: 1,
  },
  {
    title: 'Backend Engineer',
    location: 'Remote',
    type: 'Full-time',
    id: 2,
  },
  {
    title: 'UI/UX Designer',
    location: 'Remote',
    type: 'Contract',
    id: 3,
  },

];

export default function CareersPage() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <main className="min-h-screen bg-gray-900 text-white pt-24 px-4 md:px-8 lg:px-12 font-sans">
      {/* Hero */}
      <section className="text-center mb-16" data-aos="fade-up">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Join Our Team</h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-300">
          We’re on a mission to build cutting-edge solutions. If you’re passionate about technology,
          innovation, and impact, we’d love to meet you.
        </p>
      </section>

      {/* Open Positions */}
      <section className="max-w-6xl mx-auto mb-24" data-aos="fade-up" data-aos-delay="100">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Open Positions</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {positions.map((pos, idx) => (
            <div
              key={pos.id}
              className="bg-[#181c25] border border-purple-700 rounded-xl p-8 flex flex-col shadow hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <h3 className="text-xl font-semibold mb-2 text-purple-400">{pos.title}</h3>
              <p className="text-gray-400 mb-4">{pos.location} • {pos.type}</p>
              <div className="mt-auto">
                <Link
                  href="#application-form"
                  className="inline-block bg-purple-700 hover:bg-purple-600 text-white px-5 py-3 rounded-lg font-medium transition-all duration-300"
                >
                  Apply Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="max-w-6xl mx-auto mb-24" data-aos="fade-up" data-aos-delay="200">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Why Work With Us?</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            { title: 'Remote-first Culture', icon: '🏡' },
            { title: 'Cutting-edge Projects', icon: '🚀' },
            { title: 'Growth Opportunities', icon: '📈' },
            { title: 'Flexible Hours', icon: '⏰' },
            { title: 'Supportive Team', icon: '🤝' },
            { title: 'Competitive Pay', icon: '💰' },
          ].map((benefit, idx) => (
            <div
              key={idx}
              className="bg-[#181c25] border border-purple-700 rounded-xl p-8 flex flex-col items-center text-center shadow hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-lg font-semibold text-gray-200">{benefit.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Application Form */}
      <section id="application-form" className="py-16  text-gray-900 w-full flex flex-col items-center justify-center px-4 md:px-8 lg:px-12" data-aos="fade-up" data-aos-delay="300">
        <div className="container mx-auto px-0 md:px-4 lg:px-8 max-w-3xl">
          <h2 className="text-3xl text-gray-100 md:text-4xl font-bold text-center mb-8">Apply Now</h2>
          <form action="https://api.web3forms.com/submit" method="POST" className="space-y-6 bg-gray-100 p-8 rounded-xl shadow">
            <input type="hidden" name="access_key" value="c8dd467c-7ae2-4240-8ef5-29564a08caab" />
            <div>
              <label className="block font-medium mb-2">Name</label>
              <input type="text" name="name" required placeholder="Your Name" className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600" />
            </div>
            <div>
              <label className="block font-medium mb-2">Email</label>
              <input type="email" name="email" required placeholder="you@example.com" className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600" />
            </div>
            <div>
              <label className="block font-medium mb-2">Position</label>
              <select name="position" required defaultValue="" className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600">
                <option value="" disabled>Select a role</option>
                {positions.map(p => (
                  <option key={p.id} value={p.title}>{p.title}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block font-medium mb-2">Message</label>
              <textarea name="message" rows="5" placeholder="Tell us why you're a great fit" className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600" required></textarea>
            </div>
            <button type="submit" className="bg-purple-700 text-white px-6 py-3 rounded-full font-semibold hover:bg-purple-800 transition">Submit Application</button>
          </form>
        </div>
      </section>

   <div className='h-10'></div>
    </main>
  );
} 