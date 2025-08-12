'use client';

import React, { useState, useEffect } from 'react';

const DownloadCVButton = () => {
  const [cvUrl, setCvUrl] = useState('/cv/Ahmed-Saad-FlowCV-Resume-20250809.pdf');
  
  useEffect(() => {
    // Only run this in the browser
    if (typeof window !== 'undefined') {
      // Check if we're on localhost or production
      const isLocalhost = window.location.hostname === 'localhost' || 
                         window.location.hostname === '127.0.0.1';
      
      const url = isLocalhost 
        ? '/cv/Ahmed-Saad-FlowCV-Resume-20250809.pdf'
        : `${window.location.origin}/cv/Ahmed-Saad-FlowCV-Resume-20250809.pdf`;
      setCvUrl(url);
    }
  }, []);
  
  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    
    try {
      // First, check if the file exists
      const response = await fetch(cvUrl, { method: 'HEAD' });
      
      if (!response.ok) {
        console.error('CV file not found:', response.status);
        alert('Sorry, the CV file is currently unavailable. Please contact me directly.');
        return;
      }
      
      // If file exists, proceed with download
      console.log('CV file found, initiating download...');
      
      // Try to open in new tab first
      const newTab = window.open(cvUrl, '_blank', 'noopener,noreferrer');
      
      // Small delay then trigger download
      setTimeout(() => {
        const link = document.createElement('a');
        link.href = cvUrl;
        link.setAttribute('download', 'Ahmed-Saad-FlowCV-Resume.pdf');
        link.style.display = 'none';
        
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        console.log('Download completed for:', cvUrl);
      }, 500);
      
    } catch (error) {
      console.error('Error accessing CV:', error);
      
      // Ultimate fallback - try direct navigation
      try {
        window.location.href = cvUrl;
      } catch (fallbackError) {
        console.error('All download methods failed:', fallbackError);
        alert('Unable to download CV. Please contact me directly for a copy.');
      }
    }
  };

  return (
    <button
      onClick={handleClick}
      className="inline-flex items-center gap-2 border border-white/15 px-5 h-12 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-semibold shadow transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-400 cursor-pointer"
      aria-label="Download Ahmed Saad's CV"
    >
      <span className="font-semibold">Download CV</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-7 h-7"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4"
        />
      </svg>
    </button>
  );
};

export default DownloadCVButton;