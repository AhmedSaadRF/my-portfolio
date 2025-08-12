'use client';

import React from 'react';

const DownloadCVButton = () => {
  const cvUrl = '/cv/Ahmed-Saad-FlowCV-Resume-20250809.pdf'; // Ensure this file exists in public/cv/
  
  const handleClick = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    
    try {
      // First, try to open in new tab
      const newTab = window.open(cvUrl, '_blank', 'noopener,noreferrer');
      
      // If popup was blocked, fallback to direct download
      if (!newTab) {
        console.log('Popup blocked, attempting direct download...');
      }
      
      // Trigger download regardless
      const link = document.createElement('a');
      link.href = cvUrl;
      link.setAttribute('download', 'Ahmed-Saad-FlowCV-Resume-20250809.pdf');
      link.style.display = 'none'; // Hide the element
      
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      console.log('Download initiated for:', cvUrl);
    } catch (error) {
      console.error('Error downloading CV:', error);
      // Fallback: direct navigation
      window.location.href = cvUrl;
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
