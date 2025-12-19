import React from 'react';
import { Logo } from './Logo';
import { PROJECTS } from '../constants';
import { FlipWords } from './FlipWords';
import { Menu, X, ArrowUpRight, ArrowLeft } from 'lucide-react';

interface CaseStudiesProps {
    onBack: () => void;
    onProjectSelect: (projectId: string) => void;
}

export const CaseStudies: React.FC<CaseStudiesProps> = ({ onBack, onProjectSelect }) => {
    // Creating a larger list of projects to demonstrate the grid
    const allProjects = [...PROJECTS, ...PROJECTS, ...PROJECTS];

    return (
        <div className="min-h-screen bg-white font-sans text-brand-dark selection:bg-brand-red selection:text-white">
            {/* Header */}
            <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
                <div className="container mx-auto px-6 h-24 flex items-center justify-between">
                    <Logo />
                    <button
                        onClick={onBack}
                        className="flex items-center gap-2 text-gray-500 hover:text-brand-dark transition-colors font-medium"
                    >
                        <ArrowLeft size={20} /> Back to Home
                    </button>
                </div>
            </nav>

            {/* Hero Section - Increased Breathing Space */}
            <section className="pt-48 pb-32 container mx-auto px-6">
                <div className="max-w-5xl">
                    <h1 className="text-6xl md:text-8xl font-black text-brand-dark leading-[1.1] mb-8">
                        Projects <br />
                        <FlipWords words={["We Scaled", "We Built", "With Impact", "That Define Us", "With ROI"]} />
                    </h1>
                    <p className="text-xl text-gray-500 max-w-2xl mt-8">
                        A curated selection of our most impactful work across branding, digital marketing, and technology.
                        We don't just deliver projects; we solve problems.
                    </p>
                </div>
            </section>

            {/* Projects Grid - TopNotch/Editorial Style */}
            <section className="pb-32 container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
                    {allProjects.map((project, index) => {
                        // Pattern: Wide (col-span-2) -> Tall (col-span-1) -> Tall (col-span-1)
                        const isWide = index % 3 === 0;

                        if (isWide) {
                            // Wide Card Layout: Left Image, Right Text
                            return (
                                <div
                                    key={`${project.id}-${index}`}
                                    onClick={() => onProjectSelect(project.id)}
                                    className="group cursor-pointer md:col-span-2 border-t border-gray-100 pt-8 grid md:grid-cols-2 gap-8 items-center"
                                >
                                    {/* Image - Reduced Height */}
                                    <div className="overflow-hidden bg-gray-100 w-full aspect-[16/9] md:aspect-[3/2] relative">
                                        <div className={`w-full h-full ${project.images[0]} bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105`}></div>
                                    </div>

                                    {/* Content - Text Outside */}
                                    <div className="flex flex-col justify-center h-full">
                                        <h2 className="text-4xl md:text-5xl font-black text-brand-dark mb-4 group-hover:text-brand-red transition-colors">
                                            {project.title}
                                        </h2>
                                        <p className="text-gray-500 text-lg mb-6 line-clamp-3">
                                            {project.description}
                                        </p>

                                        <div className="flex flex-wrap gap-2 mb-6">
                                            <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider border border-gray-200 text-gray-400">
                                                {project.category}
                                            </span>
                                            {/* Add highlights as tags */}
                                            {project.highlights.slice(0, 2).map((tag, i) => (
                                                <span key={i} className="px-3 py-1 text-xs font-bold uppercase tracking-wider border border-gray-200 text-gray-400">
                                                    {tag.split(' ').slice(0, 2).join(' ')}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-brand-dark group-hover:gap-4 transition-all">
                                            View Case Study <ArrowUpRight size={16} />
                                        </div>
                                    </div>
                                </div>
                            );
                        } else {
                            // Standard/Tall Card Layout: Top Image, Bottom Text
                            return (
                                <div
                                    key={`${project.id}-${index}`}
                                    onClick={() => onProjectSelect(project.id)}
                                    className="group cursor-pointer col-span-1 border-t border-gray-100 pt-8 flex flex-col"
                                >
                                    {/* Image - Reduced Height (Squarer aspect ratio) */}
                                    <div className="overflow-hidden bg-gray-100 w-full aspect-[4/3] mb-6 relative">
                                        <div className={`w-full h-full ${project.images[0]} bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105`}></div>
                                    </div>

                                    {/* Content - Text Outside */}
                                    <div>
                                        <h2 className="text-3xl font-bold text-brand-dark mb-3 group-hover:text-brand-red transition-colors">
                                            {project.title}
                                        </h2>
                                        <p className="text-gray-500 text-base mb-4 line-clamp-2">
                                            {project.subtitle}
                                        </p>

                                        <div className="flex flex-wrap gap-2">
                                            <span className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider border border-gray-200 text-gray-400 bg-gray-50">
                                                {project.category}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            );
                        }
                    })}
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-brand-dark text-white py-12 border-t border-gray-800">
                <div className="container mx-auto px-6 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-6">
                    <div>
                        <Logo className="text-white scale-75 origin-left" />
                        <p className="text-gray-500 text-sm mt-2">Driven by Ideas. Powered by Technology.</p>
                    </div>
                    <p className="text-gray-600 text-sm">
                        &copy; {new Date().getFullYear()} Ideaye. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
};
