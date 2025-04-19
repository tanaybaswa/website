"use client";

/** Main Imports */
import React, { useState } from "react";

/** Components */
import Navbar from "@/components/NavBar";

/** Fonts */
import { Inter, DM_Sans } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
const dmSans = DM_Sans({ subsets: ['latin'] });

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    position: "",
    email: "",
    message: ""
  });
  
  const [isHuman, setIsHuman] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<{
    success?: boolean;
    message?: string;
  }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateHuman = () => {
    // Simple human verification - in a real implementation, use reCAPTCHA or similar
    setIsHuman(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isHuman) {
      setFormStatus({
        success: false,
        message: "Please verify you're human first."
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Here you would typically send the form data to your backend
      // For demo purposes, we'll simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setFormStatus({
        success: true,
        message: "Thank you for your message! I'll get back to you soon."
      });
      
      // Reset form
      setFormData({
        name: "",
        company: "",
        position: "",
        email: "",
        message: ""
      });
    } catch (error) {
      setFormStatus({
        success: false,
        message: "There was an error sending your message. Please try again."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 ${inter.className}`}>
      <Navbar />
      <main className="container mx-auto px-4 py-24 max-w-3xl">
        <div className="space-y-16">
          {/* Header Section */}
          <div className="text-center">
            <h1 className={`text-4xl font-medium tracking-tight ${dmSans.className}`}>
              Contact
            </h1>
            <p className="mt-4 text-xl text-gray-700 dark:text-gray-300 font-light tracking-wide">
              Connect with me or send a message
            </p>
          </div>

          {/* Social Links Section */}
          <div className="max-w-lg mx-auto">
            <h2 className={`text-2xl mb-6 font-medium ${dmSans.className}`}>Find me on</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <a 
                href="https://www.linkedin.com/in/tanaybaswa/" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 transition-all hover:shadow-md"
              >
                <div className="mr-3 text-[#0077B5]">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <span className={`${dmSans.className} text-md`}>tanaybaswa</span>
              </a>
              
              <a 
                href="https://github.com/tanaybaswa" 
                target="_blank"
                rel="noopener noreferrer" 
                className="flex items-center p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 transition-all hover:shadow-md"
              >
                <div className="mr-3 text-[#333] dark:text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </div>
                <span className={`${dmSans.className} text-md`}>tanaybaswa</span>
              </a>
              
              <a 
                href="https://x.com/TanayBaswa"
                target="_blank"
                rel="noopener noreferrer" 
                className="flex items-center p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 transition-all hover:shadow-md"
              >
                <div className="mr-3 text-black">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </div>
                <span className={`${dmSans.className} text-md`}>TanayBaswa</span>
              </a>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="max-w-lg mx-auto">
            <h2 className={`text-2xl mb-6 font-medium ${dmSans.className}`}>Send me a message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className={`block mb-2 ${dmSans.className}`}>
                  Name
                </label>
                <input 
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#00521d] focus:ring-1 focus:ring-[#00521d] focus:outline-none transition-colors bg-white/90 dark:bg-gray-800 dark:border-gray-700"
                />
              </div>
              
              <div>
                <label htmlFor="email" className={`block mb-2 ${dmSans.className}`}>
                  Email
                </label>
                <input 
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#00521d] focus:ring-1 focus:ring-[#00521d] focus:outline-none transition-colors bg-white/90 dark:bg-gray-800 dark:border-gray-700"
                />
              </div>
              
              <div>
                <label htmlFor="company" className={`block mb-2 ${dmSans.className}`}>
                  Company/Institution
                </label>
                <input 
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#00521d] focus:ring-1 focus:ring-[#00521d] focus:outline-none transition-colors bg-white/90 dark:bg-gray-800 dark:border-gray-700"
                />
              </div>
              
              <div>
                <label htmlFor="position" className={`block mb-2 ${dmSans.className}`}>
                  Position
                </label>
                <input 
                  type="text"
                  id="position"
                  name="position"
                  value={formData.position}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#00521d] focus:ring-1 focus:ring-[#00521d] focus:outline-none transition-colors bg-white/90 dark:bg-gray-800 dark:border-gray-700"
                />
              </div>
              
              <div>
                <label htmlFor="message" className={`block mb-2 ${dmSans.className}`}>
                  Message
                </label>
                <textarea 
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#00521d] focus:ring-1 focus:ring-[#00521d] focus:outline-none transition-colors bg-white/90 dark:bg-gray-800 dark:border-gray-700"
                />
              </div>
              
              <div className="flex items-center">
                <button 
                  type="button"
                  onClick={validateHuman}
                  className={`mr-4 px-5 py-2 rounded-lg border border-gray-300 hover:bg-gray-100 transition-colors ${isHuman ? 'bg-green-50 border-green-200 text-green-700' : ''}`}
                >
                  {isHuman ? '✓ Verified Human' : 'I am human'}
                </button>
                <span className="text-sm text-gray-500">
                  {isHuman ? 'You can now submit the form' : 'Click to verify you\'re human'}
                </span>
              </div>
              
              {formStatus.message && (
                <div className={`p-4 rounded-lg ${formStatus.success ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'}`}>
                  {formStatus.message}
                </div>
              )}
              
              <div>
                <button 
                  type="submit"
                  disabled={isSubmitting || !isHuman}
                  className={`px-6 py-3 rounded-xl bg-[#00521d] hover:bg-[#003d15] text-white font-medium transition-colors ${dmSans.className} ${(isSubmitting || !isHuman) ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
