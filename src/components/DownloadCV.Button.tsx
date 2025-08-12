// مكون معدل مع تتبع
'use client';

import React from 'react';



const DownloadCVButton = () => {
  const cvUrl = '/cv/Ahmed-Saad-FlowCV-Resume-20250809.pdf'; // Use public folder path

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    // Open in new tab
    window.open(cvUrl, '_blank', 'noopener,noreferrer');
    // Trigger download
    const link = document.createElement('a');
    link.href = cvUrl;
    link.setAttribute('download', 'Ahmed-Saad-FlowCV-Resume-20250809.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <a
      href={cvUrl}
      onClick={handleClick}
      className="inline-flex items-center gap-2 border border-white/15 px-5 h-12 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-semibold shadow transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-400"
    >
      <span className="font-semibold">Download CV</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="size-7"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4"
        />
      </svg>
    </a>
  );
};

export default DownloadCVButton;
