import React from 'react';
import { Camera } from 'lucide-react';

const TradeFairPage = () => {
  const originalImages = [
    '/trade-fair/Untitled - June 01, 2026 at 12.09.13 (1).png',
    '/trade-fair/Untitled - June 01, 2026 at 12.09.13 (2).png',
    '/trade-fair/Untitled - June 01, 2026 at 12.09.13 (3).png',
    '/trade-fair/Untitled - June 01, 2026 at 12.09.13.png'
  ];

  // Quadruple the array to ensure the screen is always filled during the loop
  const images = [...originalImages, ...originalImages, ...originalImages, ...originalImages];

  return (
    <div className="pt-24 md:pt-32 pb-16 md:pb-24 bg-gray-50 min-h-screen overflow-hidden flex flex-col">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-50% - 1rem)); }
        }
        .animate-marquee {
          display: flex;
          gap: 2rem;
          width: max-content;
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
      
      <div className="container mx-auto px-6 max-w-full lg:max-w-[90vw] mb-12">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto px-4 relative z-10">
          <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-white shadow-md text-primary mb-6 md:mb-8 border border-gray-100">
            <Camera size={32} className="md:hidden" />
            <Camera size={40} className="hidden md:block" />
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-gray-900 mb-4 md:mb-6 tracking-tight uppercase">Trade Fair Participation</h1>
          <p className="text-base md:text-xl text-gray-600 leading-relaxed font-medium md:whitespace-nowrap">
            Explore our presence and engagements at global trade fairs and industry exhibitions.
          </p>
        </div>
      </div>

      {/* Infinite Marquee Slider */}
      <div className="relative w-full flex-1 flex items-center min-h-[500px]">
        {/* Left/Right Fade out gradient for smooth edge transitions */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />

        <div className="flex w-full absolute left-0 h-[50vh] md:h-[500px] overflow-hidden">
          <div className="animate-marquee px-8">
            {images.map((imgSrc, index) => (
              <div 
                key={index} 
                className="w-[85vw] md:w-[700px] h-full shrink-0 bg-white p-4 rounded-[2rem] md:rounded-[3rem] border border-gray-200 shadow-xl"
              >
                <div className="w-full h-full rounded-2xl md:rounded-[2rem] overflow-hidden bg-gray-100 group relative cursor-pointer">
                  <img loading="lazy" decoding="async"
                    src={imgSrc}
                    alt={`Trade Fair ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Subtle overlay on hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 text-white font-black tracking-widest uppercase px-6 py-2 bg-primary/80 rounded-full transition-opacity duration-500">
                      View
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TradeFairPage;
