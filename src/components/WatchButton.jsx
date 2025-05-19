
import React from 'react';
import { cn } from "@/lib/utils";

const WatchButton = ({ provider, className }) => {
  // Mapear provedores para suas cores específicas
  const providerStyles = {
    Netflix: "bg-netflix-red hover:bg-netflix-redHover",
    Amazon: "bg-blue-700 hover:bg-blue-800",
    Disney: "bg-blue-900 hover:bg-blue-950",
    Max: "bg-purple-700 hover:bg-purple-800",
    Globoplay: "bg-red-600 hover:bg-red-700",
  };

  const style = providerStyles[provider] || "bg-blue-500 hover:bg-blue-600";

  return (
    <button 
      className={cn(
        `${style} text-white font-bold py-2 px-4 rounded mt-4 flex items-center justify-center transition-all duration-200 shadow-lg`, 
        className
      )}
    >
      <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 12L9 19.5V4.5L21 12Z" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      Assistir no {provider}
    </button>
  );
};

export default WatchButton;
