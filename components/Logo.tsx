import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`flex items-center select-none ${className}`}>
      <img
        src="/ideaye-logo.png"
        alt="Ideaye"
        className="h-10 md:h-12 w-auto object-contain"
      />
    </div>
  );
};