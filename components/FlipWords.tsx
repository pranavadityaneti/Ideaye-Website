import React, { useEffect, useState } from 'react';

const DEFAULT_WORDS = [
    "Digital Revenue",
    "Small Businesses",
    "Global Brands",
    "Growth Startups",
    "Market Reach",
    "User Engagement",
    "Brand Identity"
];

interface FlipWordsProps {
    words?: string[];
}

export const FlipWords: React.FC<FlipWordsProps> = ({ words = DEFAULT_WORDS }) => {
    const [index, setIndex] = useState(0);
    const [isFlipping, setIsFlipping] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsFlipping(true);
            setTimeout(() => {
                setIndex((prev) => (prev + 1) % words.length);
                setIsFlipping(false);
            }, 500); // Wait for half the animation to switch word
        }, 2500); // Change word every 2.5 seconds

        return () => clearInterval(interval);
    }, [words]);

    return (
        <span className="inline-block relative h-[1.1em] w-full md:w-auto text-brand-red overflow-hidden align-top">
            <span
                key={index}
                className={`block transition-all duration-500 transform ${isFlipping ? 'animate-flip-out' : 'animate-flip-in'
                    }`}
            >
                {words[index]}
            </span>

            <style>{`
        @keyframes flip-in {
          0% { transform: translateY(100%); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        @keyframes flip-out {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(-100%); opacity: 0; }
        }
        .animate-flip-in {
            animation: flip-in 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        .animate-flip-out {
            animation: flip-out 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
      `}</style>
        </span>
    );
};
