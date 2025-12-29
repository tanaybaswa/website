"use client";

/** Main Imports */
import React, { useState, useEffect } from "react";

/** Components */
import RightNavBar from "@/components/RightNavBar";
import Image from "next/image";
import { FaGoogleScholar } from "react-icons/fa6";
import Script from "next/script";

/** Fonts */
import { Inter, DM_Sans } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
const dmSans = DM_Sans({ subsets: ['latin'] });

declare global {
  interface Window {
    grecaptcha: {
      ready: (callback: () => void) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
    };
  }
}

export default function Contact() {
  const [isVerified, setIsVerified] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [recaptchaLoaded, setRecaptchaLoaded] = useState(false);

  // Get reCAPTCHA site key from environment variable
  const recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || '';

  useEffect(() => {
    // Check if reCAPTCHA is already loaded
    const checkRecaptcha = () => {
      if (window.grecaptcha && window.grecaptcha.ready) {
        setRecaptchaLoaded(true);
      }
    };
    
    checkRecaptcha();
    // Also check periodically in case script loads after component mounts
    const interval = setInterval(checkRecaptcha, 100);
    
    return () => clearInterval(interval);
  }, []);

  const handleVerify = async () => {
    if (!recaptchaSiteKey) {
      console.error('reCAPTCHA site key not configured');
      alert('reCAPTCHA is not configured. Please add NEXT_PUBLIC_RECAPTCHA_SITE_KEY to your environment variables.');
      return;
    }

    if (!window.grecaptcha || !window.grecaptcha.ready) {
      console.error('reCAPTCHA script not loaded');
      alert('reCAPTCHA is still loading. Please wait a moment and try again.');
      return;
    }

    setIsLoading(true);
    
    try {
      window.grecaptcha.ready(async () => {
        try {
          const token = await window.grecaptcha.execute(recaptchaSiteKey, { action: 'contact' });
          
          // Verify token with backend (you'll need to implement this API route)
          // For now, we'll just check if token exists
          if (token) {
            // In production, verify the token with your backend
            // const response = await fetch('/api/verify-recaptcha', {
            //   method: 'POST',
            //   body: JSON.stringify({ token }),
            // });
            // const data = await response.json();
            // if (data.success) {
            //   setIsVerified(true);
            // }
            
            // For now, if token exists, consider it verified
            // In production, you should verify on the backend
            setIsVerified(true);
          }
        } catch (error: any) {
          console.error('reCAPTCHA verification error:', error);
          // Check if it's a domain/configuration error
          if (error.message && error.message.includes('Invalid site key')) {
            alert('reCAPTCHA site key is invalid or not configured for this domain. For localhost, please add "localhost" to your allowed domains in the reCAPTCHA admin console.');
          } else {
            alert('Verification failed. Please try again.');
          }
        } finally {
          setIsLoading(false);
        }
      });
    } catch (error) {
      console.error('Error verifying reCAPTCHA:', error);
      setIsLoading(false);
    }
  };

  return (
    <div className={`min-h-screen bg-white ${inter.className}`}>
      <RightNavBar />
      <main className="lg:ml-64 container mx-auto px-6 sm:px-8 lg:px-12 py-16 max-w-4xl">
        <div className="space-y-12">
          {/* Header Section */}
          <div className="space-y-2">
            <h1 className={`text-4xl sm:text-5xl font-light tracking-tight ${dmSans.className} leading-tight text-[#212121]`}>
              Contact
            </h1>
            <p className={`text-base sm:text-lg text-[#212121]/70 font-light tracking-wide ${inter.className}`}>
              Connect with me or send a message
            </p>
          </div>

          {/* Social Links */}
          <div className="space-y-6">
            <p className={`text-base text-[#212121] font-light leading-relaxed tracking-wide ${dmSans.className}`}>
              Find me on
            </p>
            <div className="space-y-10">
              {/* Text links with usernames and icons */}
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
                <a 
                  href="https://www.linkedin.com/in/tanaybaswa/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 text-base text-[#212121] hover:opacity-70 font-light transition-opacity ${inter.className}`}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  <span>LinkedIn / tanaybaswa</span>
                </a>
                <a 
                  href="https://github.com/tanaybaswa" 
                  target="_blank"
                  rel="noopener noreferrer" 
                  className={`flex items-center gap-2 text-base text-[#212121] hover:opacity-70 font-light transition-opacity ${inter.className}`}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  <span>GitHub / tanaybaswa</span>
                </a>
                <a 
                  href="https://x.com/Tanay_Baswa"
                  target="_blank"
                  rel="noopener noreferrer" 
                  className={`flex items-center gap-2 text-base text-[#212121] hover:opacity-70 font-light transition-opacity ${inter.className}`}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                  <span>X / Tanay_Baswa</span>
                </a>
              </div>
              
              {/* Research links with icons */}
              <div className="space-y-2">
                <p className={`text-base text-[#212121] font-light leading-relaxed tracking-wide ${dmSans.className}`}>
                  My Research
                </p>
                <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
                  <a 
                    href="https://scholar.google.com/citations?user=g3zrMN0AAAAJ&hl=en" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 text-base text-[#212121] hover:opacity-70 font-light transition-opacity ${inter.className}`}
                  >
                    <FaGoogleScholar className="w-5 h-5" />
                    <span>Google Scholar</span>
                  </a>
                  <a 
                    href="https://arxiv.org/search/cs?searchtype=author&query=Baswa,+T" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 text-base text-[#212121] hover:opacity-70 font-light transition-opacity ${inter.className}`}
                  >
                    <Image 
                      src="/arxiv-logo.svg" 
                      alt="arXiv" 
                      width={20}
                      height={20}
                      className="mt-0.5"
                    />
                    <span>ArXiv</span>
                  </a>
                  <a 
                    href="https://openreview.net/profile?id=~Tanay_Baswa1" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 text-base text-[#212121] hover:opacity-70 font-light transition-opacity ${inter.className}`}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                    </svg>
                    <span>OpenReview</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Email Section with reCAPTCHA */}
          <div className="space-y-6">
            <p className={`text-base text-[#212121] font-light leading-relaxed tracking-wide ${dmSans.className}`}>
              Email
            </p>
            {!isVerified ? (
              <div className="space-y-3">
                <button
                  onClick={handleVerify}
                  disabled={isLoading || !recaptchaLoaded}
                  className={`px-0 py-1 border-b border-[#212121]/20 hover:border-[#212121] 
                    transition-colors text-sm text-[#212121] font-light ${inter.className} 
                    ${isLoading || !recaptchaLoaded ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  {isLoading ? 'Verifying...' : 'Verify to reveal email'}
                </button>
              </div>
            ) : (
              <div className="space-y-2">
                <a 
                  href="mailto:tanay@enkryptai.com"
                  className={`flex items-center gap-2 text-base text-[#212121] hover:opacity-70 font-light transition-opacity ${inter.className}`}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>tanay@enkryptai.com</span>
                </a>
                <a 
                  href="mailto:tanay_baswa@yahoo.com"
                  className={`flex items-center gap-2 text-base text-[#212121] hover:opacity-70 font-light transition-opacity ${inter.className}`}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>tanay_baswa@yahoo.com</span>
                </a>
              </div>
            )}
          </div>
        </div>
      </main>
      
      {/* Load reCAPTCHA script */}
      {recaptchaSiteKey && (
        <Script
          src={`https://www.google.com/recaptcha/api.js?render=${recaptchaSiteKey}`}
          onLoad={() => {
            if (window.grecaptcha) {
              setRecaptchaLoaded(true);
            }
          }}
          onError={() => {
            console.error('Failed to load reCAPTCHA script');
          }}
          strategy="lazyOnload"
        />
      )}
    </div>
  );
}
