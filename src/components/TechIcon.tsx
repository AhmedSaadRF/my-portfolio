"use client";

import React from 'react';

export const TechIcon = ({ component }: { component: React.ReactNode }) => {
  const gradientId = React.useId(); // More reliable than random ID generation

  return (
    <>
      <div className="size-10">
        {React.isValidElement(component)
          ? React.cloneElement(component as React.ReactElement, {
              fill: `url(#${gradientId})`,
            })
          : component}
      </div>
      
      <svg className="size-0 absolute">
        <linearGradient id={gradientId}>
          <stop offset="0%" stopColor="rgb(110 231 183)" />
          <stop offset="100%" stopColor="rgb(56 189 248)" />
        </linearGradient>
      </svg>
    </>
  );
};