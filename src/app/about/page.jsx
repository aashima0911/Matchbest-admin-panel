'use client';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';

export default function AboutPage() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="bg-[#10131a] py-10 text-white min-h-screen flex flex-col px-4 md:px-8 lg:px-12">
      {/* Header Section */}
      <section className="container mx-auto px-4 md:px-8 lg:px-12 py-24 flex flex-col-reverse lg:flex-row items-center justify-between gap-8 mb-12">
        {/* Text Content */}
        <div className="lg:w-1/2 text-center lg:text-left" data-aos="fade-right">
          <h1 className="text-4xl lg:text-5xl font-extrabold mb-6"> About MatchBest Group</h1>
          <p className="text-base lg:text-lg mb-6 max-w-xl mx-auto lg:mx-0 text-gray-300">
            At MatchBest Group, we are passionate about creating impactful, scalable, and user-centric products that drive growth. Our team of skilled developers, designers, and technology experts work collaboratively to build solutions that align with our clients’ visions and market needs.
          </p>
          <p className="text-base lg:text-lg mb-6 max-w-xl mx-auto lg:mx-0 text-gray-300">
            With a strong focus on innovation, security, and scalability, we help clients transform their digital vision into reality with our specialized solutions across industries.
          </p>
        </div>
        {/* Image */}
        <div className="lg:w-1/2 flex justify-center" >
          <Image src="/assets/8.jpg" alt="About MatchBest" width={600} height={400} className="w-80 md:w-[500px] lg:w-[600px] border-2 border-[#10131a] rounded-lg shadow-lg" />
        </div>
      </section>
      {/* Mission and Vision Section */}
      <section className="py-16 bg-[#10131a] w-full flex flex-col items-center justify-center px-4 md:px-8 lg:px-12 mb-12">
        <div className="container mx-auto px-0 md:px-4 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-12" data-aos="fade-up">Our Mission & Vision</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="p-6 border border-purple-500 rounded-lg text-center hover:shadow-lg transition" data-aos="fade-up">
              <h3 className="text-2xl font-semibold mb-4 text-white">Our Mission</h3>
              <p className="text-white ">
                To empower businesses with technology-driven solutions that deliver measurable success, improved efficiency, and long-term growth.
              </p>
            </div>
            {/* Vision */}
            <div className="p-6 border border-purple-500 rounded-lg text-center hover:shadow-lg transition" data-aos="fade-up" data-aos-delay="200">
              <h3 className="text-2xl font-semibold mb-4 text-white">Our Vision</h3>
              <p className="text-white ">
                To become a global leader in digital transformation, building smart,scalable,and innovative platforms that connect people and businesses worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Core Values Section */}
      <section className="py-12 md:py-16 w-full px-4 md:px-8 lg:px-12 flex flex-col items-center justify-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Core Values</h2>
        {/* Scrollable Flex Container */}
        <div className="w-full flex gap-6 overflow-x-auto px-2 scroll-smooth pb-4 snap-x snap-mandatory">
          {[
            "✔️ Innovation and Creativity",
            "✔️ Customer-Centric Approach",
            "✔️ Integrity and Transparency",
            "✔️ Quality and Excellence",
            "✔️ Continuous Improvement"
          ].map((value, index) => (
            <div
              key={index}
              className="min-w-[250px] snap-center p-6 border border-purple-500 rounded-lg bg-gray-800 hover:bg-gray-700 transition flex items-center justify-center text-center"
              data-aos="fade-right"
              data-aos-delay={100 * (index + 1)}
            >
              <h3 className="text-lg md:text-xl font-semibold text-white">{value}</h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
} 