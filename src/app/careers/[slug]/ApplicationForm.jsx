"use client";

import { useState, useRef } from "react";

export default function ApplicationForm({ jobTitle }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    resume: null,
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const fileInputRef = useRef();

  // Validation functions
  const validateForm = () => {
    const newErrors = {};

    // Name validation
    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    } else if (form.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    } else if (form.name.trim().length > 50) {
      newErrors.name = "Name must be less than 50 characters";
    } else if (!/^[a-zA-Z\s]+$/.test(form.name.trim())) {
      newErrors.name = "Name can only contain letters and spaces";
    }

    // Email validation
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      newErrors.email = "Please enter a valid email address";
    }

    // Phone validation
    if (!form.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[\+]?[1-9][\d]{0,15}$/.test(form.phone.replace(/[\s\-\(\)]/g, ''))) {
      newErrors.phone = "Please enter a valid phone number";
    }

    // Resume validation
    if (form.resume) {
      const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (!allowedTypes.includes(form.resume.type)) {
        newErrors.resume = "Only PDF, DOC, and DOCX files are allowed";
      } else if (form.resume.size > 5 * 1024 * 1024) {
        newErrors.resume = "File size should not exceed 5MB";
      }
    }

    // Message validation (optional but with limits if provided)
    if (form.message && form.message.length > 1000) {
      newErrors.message = "Message must be less than 1000 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setSuccess(false);

    if (!validateForm()) {
      return;
    }

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
        name: form.name.trim(),
        email: form.email.trim(),
        phone: form.phone.trim(),
        message: form.message.trim(),
      };

      if (form.resume) {
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
      setErrors({});
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
      <h1 className="text-2xl font-extrabold mb-1 text-[#5f12c6] text-center">Apply for {jobTitle}</h1>
      <h2 className="text-gray-500 text-center mb-4">Fill out the form below and we'll get in touch soon.</h2>

      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-gray-700 flex items-center gap-2" htmlFor="name">
          <span className="material-icons text-[#5f12c6]">Name *</span> 
        </label>
        <input
          id="name"
          maxLength={50}
          placeholder="Enter Your Name"
          value={form.name}
          onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
          className={`px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 bg-transparent text-white placeholder-gray-400 ${
            errors.name ? 'border-red-500 focus:ring-red-500' : 'border-gray-700 focus:ring-[#5f12c6]'
          }`}
        />
        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-gray-700 flex items-center gap-2" htmlFor="email">
          <span className="material-icons text-[#5f12c6]">Email *</span> 
        </label>
        <input
          id="email"
          type="email"
          placeholder="your.email@example.com"
          value={form.email}
          onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
          className={`px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 bg-transparent text-white placeholder-gray-400 ${
            errors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-700 focus:ring-[#5f12c6]'
          }`}
        />
        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-gray-700 flex items-center gap-2" htmlFor="phone">
          <span className="material-icons text-[#5f12c6]"> Phone *</span>
        </label>
        <input
          id="phone"
          placeholder="1234567890"
          value={form.phone}
          onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
          className={`px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 bg-transparent text-white placeholder-gray-400 ${
            errors.phone ? 'border-red-500 focus:ring-red-500' : 'border-gray-700 focus:ring-[#5f12c6]'
          }`}
        />
        {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-gray-700 flex items-center gap-2" htmlFor="resume">
          <span className="material-icons text-[#5f12c6]">Resume (PDF, DOC, DOCX - Max 5MB)</span> 
        </label>
        <input
          ref={fileInputRef}
          id="resume"
          type="file"
          accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
          onChange={e => setForm(f => ({ ...f, resume: e.target.files[0] }))}
          className={`px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 bg-transparent text-white file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-[#5f12c6] file:text-white hover:file:bg-[#7c3aed] ${
            errors.resume ? 'border-red-500 focus:ring-red-500' : 'border-gray-700 focus:ring-[#5f12c6]'
          }`}
        />
        {errors.resume && <p className="text-red-500 text-xs mt-1">{errors.resume}</p>}
        {form.resume && !errors.resume && (
          <p className="text-green-400 text-xs mt-1">✓ {form.resume.name} selected</p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-gray-700 flex items-center gap-2" htmlFor="message">
          <span className="material-icons text-[#5f12c6]">Message or Cover Letter (Optional)</span> 
        </label>
        <textarea
          id="message"
          maxLength={1000}
          placeholder="Tell us why you're interested in this position..."
          value={form.message}
          onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
          className={`px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 bg-transparent text-white placeholder-gray-400 min-h-[80px] ${
            errors.message ? 'border-red-500 focus:ring-red-500' : 'border-gray-700 focus:ring-[#5f12c6]'
          }`}
        />
        <div className="flex justify-between">
          {errors.message && <p className="text-red-500 text-xs">{errors.message}</p>}
          <p className="text-gray-400 text-xs ml-auto">{form.message.length}/1000</p>
        </div>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full mt-2 px-4 py-3 rounded-xl bg-[#5f12c6] text-white font-bold shadow-lg hover:bg-[#7c3aed] transition-colors text-lg disabled:bg-gray-400 disabled:cursor-not-allowed cursor-pointer"
      >
        {isSubmitting ? 'Submitting...' : 'Submit Application'}
      </button>

      {success && <p className="text-green-600 text-center font-semibold">Application submitted successfully!</p>}
      {error && <p className="text-red-600 text-center font-semibold">{error}</p>}
    </form>
  );
}
