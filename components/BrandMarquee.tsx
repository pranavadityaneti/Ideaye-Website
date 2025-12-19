import React from 'react';
import { PROJECTS } from '../constants';
import { ArrowUpRight } from 'lucide-react';

interface BrandMarqueeProps {
    onProjectSelect: (projectId: string) => void;
}

export const BrandMarquee: React.FC<BrandMarqueeProps> = ({ onProjectSelect }) => {
    // Multiply list to have enough items for smoother scrolling on wide screens
    const marqueeItems = [...PROJECTS, ...PROJECTS, ...PROJECTS];

    return (
        <div className="w-full overflow-hidden bg-white py-12">
            <div className="relative w-full">
                {/* Increased duration for smoother, slower scroll of larger cards */}
                <div className="flex w-max animate-marquee hover:pause-marquee">
                    {marqueeItems.map((project, index) => (
                        <div
                            key={`${project.id}-${index}`}
                            onClick={() => onProjectSelect(project.id)}
                            className="flex-shrink-0 w-80 md:w-96 mx-6 cursor-pointer group"
                        >
                            {/* Taller Aspect Ratio (3:4) & Grayscale Effect */}
                            <div className="relative aspect-[3/4] overflow-hidden bg-gray-100 mb-6 shadow-sm group-hover:shadow-xl transition-all duration-500">
                                <div
                                    className={`w-full h-full ${project.images[0]} bg-cover bg-center 
                  grayscale group-hover:grayscale-0 
                  transition-all duration-700 ease-out 
                  group-hover:scale-105`}
                                ></div>

                                {/* Overlay gradient only on non-hover to help text legibility, removed on hover for full color goodness? 
                    Actually, let's keep a subtle overlay for text if needed, better yet: clean image.
                */}
                                <div className="absolute inset-0 bg-black/0 transition-colors duration-300"></div>

                                {/* Hover Reveal Content */}
                                <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0">
                                    <span className="text-white text-xs font-bold uppercase tracking-widest mb-1 block">
                                        {project.category}
                                    </span>
                                    <h4 className="text-2xl font-bold text-white leading-tight">
                                        {project.title}
                                    </h4>
                                </div>

                                <div className="absolute top-4 right-4 bg-white text-brand-dark p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-[-10px] group-hover:translate-y-0 shadow-lg">
                                    <ArrowUpRight size={20} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 60s linear infinite;
        }
        .hover\\:pause-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
        </div>
    );
};
