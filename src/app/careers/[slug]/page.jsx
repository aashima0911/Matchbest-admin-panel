"use client";
import { useEffect, useState, useRef } from "react";
import { useParams } from "next/navigation";
import { db } from "../../lib/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import { NextResponse } from "next/server";
import DarkMarkdownRenderer from '../../components/DarkMarkdownRenderer';

function ApplicationForm({ jobTitle }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    resume: null,
    message: "",
  });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const fileInputRef = useRef();

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setSuccess(false);
    setIsSubmitting(true);

    try {
        const toBase64 = file => new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        });
        
        const payload = {
            jobTitle,
            name: form.name,
            email: form.email,
            phone: form.phone,
            message: form.message,
        };

        if (form.resume) {
            if (form.resume.size > 5 * 1024 * 1024) {
                throw new Error("File size should not exceed 5MB.");
            }
            payload.resume = await toBase64(form.resume);
            payload.resumeName = form.resume.name;
        }
        
        const res = await fetch('/api/careers/apply', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload)
        });

        const data = await res.json();

        if (!res.ok) {
            throw new Error(data.error || 'Something went wrong!');
        }

        setSuccess(true);
        setForm({ name: "", email: "", phone: "", resume: null, message: "" });
        if (fileInputRef.current) fileInputRef.current.value = "";
        e.target.reset();
    } catch (err) {
        setError(err.message);
    } finally {
        setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5 border border-gray-200 shadow-xl rounded-2xl p-8 max-w-xl mx-auto mt-8">
      <h2 className="text-2xl font-extrabold mb-1 text-[#5f12c6] text-center">Apply for {jobTitle}</h2>
      <p className="text-gray-500 text-center mb-4">Fill out the form below and we’ll get in touch soon.</p>
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-gray-700 flex items-center gap-2" htmlFor="name">
          <span className="material-icons text-[#5f12c6]">person</span> Name
        </label>
        <input id="name" required placeholder="Your Name" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} className="px-4 py-2 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#5f12c6] bg-transparent text-white placeholder-gray-400" />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-gray-700 flex items-center gap-2" htmlFor="email">
          <span className="material-icons text-[#5f12c6]">email</span> Email
        </label>
        <input id="email" required type="email" placeholder="Your Email" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} className="px-4 py-2 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#5f12c6] bg-transparent text-white placeholder-gray-400" />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-gray-700 flex items-center gap-2" htmlFor="phone">
          <span className="material-icons text-[#5f12c6]">call</span> Phone
        </label>
        <input id="phone" required placeholder="Your Phone" value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))} className="px-4 py-2 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#5f12c6] bg-transparent text-white placeholder-gray-400" />
      </div>
      
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-gray-700 flex items-center gap-2" htmlFor="resume">
          <span className="material-icons text-[#5f12c6]">attach_file</span> Resume (PDF, DOC, etc.)
        </label>
        <input
          ref={fileInputRef}
          id="resume"
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={e => setForm(f => ({ ...f, resume: e.target.files[0] }))}
          className="px-4 py-2 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#5f12c6] bg-transparent text-white placeholder-gray-400"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-gray-700 flex items-center gap-2" htmlFor="message">
          <span className="material-icons text-[#5f12c6]">message</span> Message or Cover Letter
        </label>
        <textarea id="message" placeholder="Message or Cover Letter" value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))} className="px-4 py-2 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#5f12c6] bg-transparent text-white placeholder-gray-400 min-h-[80px]" />
      </div >
      <button type="submit" disabled={isSubmitting} className="w-full mt-2 px-4 py-3 rounded-xl bg-[#5f12c6] text-white font-bold shadow-lg hover:bg-[#7c3aed] transition-colors text-lg disabled:bg-gray-400 disabled:cursor-not-allowed cursor-pointer">
        {isSubmitting ? 'Submitting...' : 'Submit Application'}
      </button>
      {success && <p className="text-green-600 text-center font-semibold">Application submitted!</p>}
      {error && <p className="text-red-600 text-center font-semibold">{error}</p>}
    </form>
  );
}

export default function CareerDetailsPage() {
  const params = useParams();
  const slug = params.slug;
  const [career, setCareer] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCareer = async () => {
      if (!slug) {
        setError("Slug is required");
        setLoading(false);
        return;
      }
      try {
        const q = query(collection(db, "careers"), where("jobSlug", "==", slug));
        const querySnapshot = await getDocs(q);
        if (querySnapshot.empty) {
          setError("Career not found");
          setLoading(false);
          return;
        }
        const careerData = querySnapshot.docs[0].data();
        setCareer(careerData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCareer();
  }, [slug]);

  if (loading) {
    return <div className="text-center py-10 min-h-screen">Loading...</div>;
  }

  if (error) {
    return <div className="text-center py-10 text-red-500 min-h-screen">{error}</div>;
  }

  if (!career) {
    return <div className="text-center py-10 text-red-500 min-h-screen">Career not found.</div>;
  }

  return (
    <div className="bg-gradient-to-b from-[#0F0722] to-black text-white pt-24 pb-24 sm:pt-32 sm:pb-32 min-h-screen">
      <div className="max-w-2xl mx-auto p-6">
        {/* Job Details Section */}
        <div className="space-y-4 mb-8">
          {career.imageURL?.imageURL && (
            <div className="flex flex-col items-center">
              <img src={career.imageURL.imageURL} alt={career.jobTitle} className="rounded-full mb-2 shadow" />
              
            </div>
          )}
          <div>
            <span className="font-semibold text-purple-300">Job Title:</span>
            <span className="ml-2">{career.jobTitle}</span>
          </div>
          <div>
            <span className="font-semibold text-purple-300">Slug:</span>
            <span className="ml-2">{career.jobSlug}</span>
          </div>
          <div>
            <span className="font-semibold text-purple-300">Short Description:</span>
            <span className="ml-2">{career.description}</span>
          </div>
          <div>
            <span className="font-semibold text-purple-300">Department:</span>
            <span className="ml-2">{career.departmentId}</span>
          </div>
          <div>
            <span className="font-semibold text-purple-300">Location:</span>
            <span className="ml-2">{career.location}</span>
          </div>
          <div>
            <span className="font-semibold text-purple-300">Job Posted Date:</span>
            <span className="ml-2">{career.postedDate}</span>
          </div>
          <div>
            <span className="font-semibold text-purple-300">Expiry Date:</span>
            <span className="ml-2">{career.expiryDate}</span>
          </div>
          {career.requirements && (
            <div>
              <span className="font-semibold text-purple-300">Job Requirements:</span>
              <div className="ml-2 text-gray-200">
                <DarkMarkdownRenderer content={career.requirements} />
              </div>
            </div>
          )}
        </div>
        {/* Application Form */}
        <ApplicationForm jobTitle={career.jobTitle} />
      </div>
    </div>
  );
} 