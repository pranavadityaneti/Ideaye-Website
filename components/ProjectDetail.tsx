import React, { useEffect } from 'react';
import { Project } from '../types';
import { ArrowLeft, ArrowRight, CheckCircle2, ChevronLeft, ChevronRight, X } from 'lucide-react';

interface ProjectDetailProps {
  project: Project;
  onBack: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onBack, onNext, onPrev }) => {
  // Scroll to top when project changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [project.id]);

  return (
    <div className="min-h-screen bg-white animate-in slide-in-from-right duration-500">
      {/* Navigation Header */}
      <div className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-gray-500 hover:text-brand-dark transition-colors font-medium text-sm group"
          >
            <div className="p-2 border border-gray-200 group-hover:border-brand-dark transition-colors">
              <ArrowLeft size={16} />
            </div>
            <span>Back to Projects</span>
          </button>
          
          <div className="flex items-center gap-2">
            <button 
              onClick={onPrev}
              className="p-3 border border-gray-200 hover:bg-gray-50 hover:border-brand-dark transition-all"
              title="Previous Project"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={onNext}
              className="p-3 border border-gray-200 hover:bg-gray-50 hover:border-brand-dark transition-all"
              title="Next Project"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        {/* Project Header */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
               <div className="inline-block bg-brand-red text-white text-xs font-bold px-3 py-1 mb-4 uppercase tracking-wider">
                 {project.category}
               </div>
               <h1 className="text-5xl md:text-7xl font-black text-brand-dark mb-2 tracking-tight">
                 {project.title}
               </h1>
               <p className="text-xl md:text-2xl text-gray-500 font-light">
                 {project.subtitle}
               </p>
            </div>
          </div>
        </div>

        {/* Bento Box Images */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1 mb-20 h-[600px] md:h-[500px]">
          {/* Main Large Image */}
          <div className={`md:col-span-2 h-full w-full ${project.images[0]} p-8 flex items-end relative group overflow-hidden`}>
             <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
             <h3 className="text-white font-bold text-lg relative z-10 opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 duration-300">
               Campaign Visual
             </h3>
          </div>
          
          {/* Side Stacked Images */}
          <div className="flex flex-col gap-1 h-full">
            <div className={`flex-1 w-full ${project.images[1] || 'bg-gray-100'} p-6 relative group overflow-hidden`}>
               <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors"></div>
               <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity">
                 <p className="text-xs font-bold uppercase tracking-wider bg-white px-2 py-1 text-black">Social Asset</p>
               </div>
            </div>
            <div className={`flex-1 w-full ${project.images[2] || 'bg-gray-200'} p-6 relative group overflow-hidden`}>
               <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors"></div>
               <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity">
                 <p className="text-xs font-bold uppercase tracking-wider bg-white px-2 py-1 text-black">Merchandise</p>
               </div>
            </div>
          </div>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          
          {/* Left Column: 4 Sections */}
          <div className="md:col-span-2 space-y-16">
            <div className="group">
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4 group-hover:text-brand-red transition-colors">01. The Brief</h3>
              <p className="text-lg text-gray-800 leading-relaxed border-l-2 border-gray-100 pl-6 group-hover:border-brand-red transition-colors">
                {project.brief}
              </p>
            </div>

            <div className="group">
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4 group-hover:text-brand-red transition-colors">02. Overview</h3>
              <p className="text-lg text-gray-800 leading-relaxed border-l-2 border-gray-100 pl-6 group-hover:border-brand-red transition-colors">
                {project.overview}
              </p>
            </div>

            <div className="group">
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4 group-hover:text-brand-red transition-colors">03. Our Approach</h3>
              <p className="text-lg text-gray-800 leading-relaxed border-l-2 border-gray-100 pl-6 group-hover:border-brand-red transition-colors">
                {project.approach}
              </p>
            </div>

            <div className="group">
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4 group-hover:text-brand-red transition-colors">04. Execution</h3>
              <p className="text-lg text-gray-800 leading-relaxed border-l-2 border-gray-100 pl-6 group-hover:border-brand-red transition-colors">
                {project.execution}
              </p>
            </div>
          </div>

          {/* Right Column: Highlights Sidebar */}
          <div className="md:col-span-1">
            <div className="bg-gray-50 p-8 sticky top-24 border border-gray-100">
              <h3 className="text-2xl font-black mb-8 text-brand-dark">Project Highlights</h3>
              <ul className="space-y-6">
                {project.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-3 group">
                    <CheckCircle2 className="w-6 h-6 text-brand-red shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="text-gray-700 font-medium group-hover:text-brand-dark transition-colors">{highlight}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-12 pt-8 border-t border-gray-200">
                <p className="text-sm text-gray-500 mb-4">Interested in similar results?</p>
                <button 
                  onClick={() => window.location.href = '#contact'}
                  className="w-full bg-brand-dark text-white py-4 font-bold hover:bg-brand-red transition-colors flex items-center justify-center gap-2"
                >
                  Start a Project
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
      
      {/* Footer Minimal */}
      <div className="border-t border-gray-100 py-8 text-center text-sm text-gray-400">
        &copy; Ideaye - Driven by Ideas
      </div>
    </div>
  );
};