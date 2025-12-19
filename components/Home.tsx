import React, { useState } from 'react';
import { Logo } from './Logo';
import { SERVICES, PROJECTS, CLIENTS } from '../constants';
import { BrandMarquee } from './BrandMarquee';
import { AiIdeaGenerator } from './AiIdeaGenerator';
import { FlipWords } from './FlipWords';
import { Menu, X, ArrowRight, CheckCircle2, Phone, Mail, Instagram, Linkedin, Facebook, Youtube, MousePointer2, Zap, FlaskConical, ArrowUpRight } from 'lucide-react';

interface HomeProps {
  onProjectSelect: (projectId: string) => void;
  onNavToCaseStudies: () => void;
}


// SVG Components for the Methodology Section
const IconAssess = () => (
  <svg viewBox="0 0 100 100" className="w-20 h-20 stroke-gray-800 fill-none stroke-[1.5]">
    <circle cx="50" cy="50" r="30" />
    <circle cx="50" cy="50" r="15" className="stroke-brand-red" />
    <circle cx="71" cy="29" r="6" className="fill-white stroke-gray-800" />
  </svg>
);

const IconPilot = () => (
  <svg viewBox="0 0 100 100" className="w-20 h-20 stroke-gray-800 fill-none stroke-[1.5]">
    <circle cx="40" cy="50" r="25" className="opacity-20" />
    <circle cx="50" cy="50" r="25" className="opacity-40" />
    <circle cx="60" cy="50" r="25" className="opacity-60" />
    <circle cx="70" cy="50" r="25" className="stroke-brand-red" />
  </svg>
);

const IconCoCreation = () => (
  <svg viewBox="0 0 100 100" className="w-20 h-20 stroke-gray-800 fill-none stroke-[1.5]">
    <circle cx="50" cy="35" r="25" className="stroke-brand-red" />
    <circle cx="50" cy="65" r="25" />
  </svg>
);

export const Home: React.FC<HomeProps> = ({ onProjectSelect, onNavToCaseStudies }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'brand' | 'celebrity' | 'movie'>('brand');

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-brand-dark selection:bg-brand-red selection:text-white overflow-x-hidden">

      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm transition-all duration-300">
        <div className="container mx-auto px-6 h-24 flex items-center justify-between">
          <Logo />

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            <button
              onClick={onNavToCaseStudies}
              className="text-sm font-semibold text-gray-600 hover:text-brand-red transition-colors uppercase tracking-wide"
            >
              Case Studies
            </button>
            <button
              onClick={() => scrollToSection('#services')}
              className="text-sm font-semibold text-gray-600 hover:text-brand-red transition-colors uppercase tracking-wide"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('#contact')}
              className="bg-brand-dark text-white px-8 py-3 font-bold text-sm hover:bg-brand-red transition-colors duration-300 rounded-none shadow-md hover:shadow-lg"
            >
              Get in touch
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-brand-dark"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav Overlay */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-24 left-0 w-full bg-white border-b border-gray-100 shadow-xl p-6 flex flex-col gap-4 animate-in slide-in-from-top-10">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onNavToCaseStudies();
              }}
              className="text-left py-3 text-lg font-bold text-gray-800 border-b border-gray-50"
            >
              Case Studies
            </button>
            <button
              onClick={() => scrollToSection('#services')}
              className="text-left py-3 text-lg font-bold text-gray-800 border-b border-gray-50"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('#contact')}
              className="text-left py-3 text-lg font-bold text-brand-red"
            >
              Get in touch
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-48 md:pb-24 bg-white relative overflow-hidden">
        {/* Subtle Background Animation */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-20%] right-[10%] w-[600px] h-[600px] bg-brand-red/5 rounded-full blur-3xl animate-pulse delay-700"></div>
          <div className="absolute bottom-[-10%] left-[20%] w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 mb-20">
          {/* Lead Hooking Text - Center Aligned */}
          <div className="text-center mx-auto max-w-5xl">
            <h1 className="text-6xl md:text-8xl font-black text-brand-dark leading-[1.1] tracking-tight mb-8">
              We Scale <br />
              <FlipWords />
            </h1>
            <p className="text-xl md:text-2xl text-gray-500 font-medium max-w-3xl mx-auto leading-relaxed">
              Data-driven growth strategies for India's most ambitious brands.
              Strategy driven, intellectually elegant, visually powerful.
            </p>
          </div>
        </div>

        {/* Brand Marquee */}
        <div className="relative z-10 w-full border-y border-gray-100 bg-white/50 backdrop-blur-sm">
          <BrandMarquee onProjectSelect={onProjectSelect} />
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-bold text-brand-dark mb-20 max-w-2xl leading-tight">
            The way we work <br />
            is not an accident.
          </h2>

          <div className="grid md:grid-cols-3 gap-12">
            {/* Assess & Consult */}
            <div className="space-y-6">
              <div className="mb-8">
                <IconAssess />
              </div>
              <h3 className="text-2xl font-bold text-brand-dark">Assess & consult</h3>
              <ul className="space-y-3 text-gray-500 text-sm font-medium">
                <li className="flex gap-3">
                  <span className="block w-1.5 h-1.5 bg-gray-300 mt-1.5 shrink-0"></span>
                  <p>we help you identify your biggest impact points</p>
                </li>
                <li className="flex gap-3">
                  <span className="block w-1.5 h-1.5 bg-gray-300 mt-1.5 shrink-0"></span>
                  <p>we consult your strategy, architecture and technology</p>
                </li>
              </ul>
            </div>

            {/* Pilot */}
            <div className="space-y-6">
              <div className="mb-8">
                <IconPilot />
              </div>
              <h3 className="text-2xl font-bold text-brand-dark">Pilot</h3>
              <ul className="space-y-3 text-gray-500 text-sm font-medium">
                <li className="flex gap-3">
                  <span className="block w-1.5 h-1.5 bg-gray-300 mt-1.5 shrink-0"></span>
                  <p>using fast prototyping we quickly test your idea</p>
                </li>
                <li className="flex gap-3">
                  <span className="block w-1.5 h-1.5 bg-gray-300 mt-1.5 shrink-0"></span>
                  <p>with minimal investment we deliver value within weeks</p>
                </li>
              </ul>
            </div>

            {/* Solution Co-creation */}
            <div className="space-y-6">
              <div className="mb-8">
                <IconCoCreation />
              </div>
              <h3 className="text-2xl font-bold text-brand-dark">Solution co-creation</h3>
              <ul className="space-y-3 text-gray-500 text-sm font-medium">
                <li className="flex gap-3">
                  <span className="block w-1.5 h-1.5 bg-gray-300 mt-1.5 shrink-0"></span>
                  <p>we work side by side with you to create your solution</p>
                </li>
                <li className="flex gap-3">
                  <span className="block w-1.5 h-1.5 bg-gray-300 mt-1.5 shrink-0"></span>
                  <p>during the engagement we transfer our know how and enable you to be independent in the future</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-brand-red font-bold tracking-widest uppercase mb-2">What We Do</h2>
            <h3 className="text-4xl md:text-5xl font-black text-brand-dark mb-6">Service Overview</h3>
            <p className="text-gray-600 text-lg">
              Strategy driven, intellectually elegant, visually powerful, technology geeks.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <div key={service.id} className="bg-white p-8 shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 group">
                <div className="w-16 h-16 bg-red-50 flex items-center justify-center text-brand-red mb-6 group-hover:bg-brand-red group-hover:text-white transition-colors">
                  {service.icon}
                </div>
                <h4 className="text-xl font-bold mb-3">{service.title}</h4>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed min-h-[60px]">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.points.slice(0, 3).map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-500">
                      <CheckCircle2 className="w-4 h-4 text-green-50 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Tool Section */}
      <AiIdeaGenerator />

      {/* NEW: Work Section (Case Studies) */}
      <section id="work" className="py-24 bg-white border-t border-gray-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="max-w-xl">
              <h2 className="text-brand-red font-bold tracking-widest uppercase mb-4 text-sm">Selected Work</h2>
              <h3 className="text-5xl md:text-6xl font-black text-brand-dark leading-tight">
                Crafting Digital <br /> Experiences.
              </h3>
            </div>
            <div className="md:text-right hidden md:block">
              <p className="text-gray-500 font-medium text-lg">We build brands that matter.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
            {PROJECTS.map((project, idx) => (
              <div
                key={project.id}
                className="group cursor-pointer"
                onClick={() => onProjectSelect(project.id)}
              >
                {/* Image Container */}
                <div className="overflow-hidden mb-6 aspect-[4/3] relative bg-gray-100">
                  <div className={`w-full h-full ${project.images[0]} transition-transform duration-700 ease-out group-hover:scale-105`}></div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>

                  {/* Overlay Arrow */}
                  <div className="absolute bottom-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 bg-white flex items-center justify-center text-brand-dark shadow-xl">
                      <ArrowUpRight size={24} />
                    </div>
                  </div>
                </div>

                {/* Text Content */}
                <div className="flex justify-between items-start border-b border-transparent group-hover:border-gray-200 pb-4 transition-colors">
                  <div>
                    <h4 className="text-3xl font-bold text-brand-dark mb-2 group-hover:text-brand-red transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-gray-500 text-lg">{project.subtitle}</p>
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-gray-400 mt-2 bg-gray-50 px-2 py-1">
                    {project.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW: Clients Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h3 className="text-3xl font-black text-brand-dark">Whom We've Worked With</h3>
            </div>

            <div className="flex gap-2 bg-white p-1 border border-gray-200">
              {(['brand', 'celebrity', 'movie'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-2 text-sm font-bold uppercase transition-all ${activeTab === tab
                    ? 'bg-brand-red text-white'
                    : 'text-gray-500 hover:text-gray-900'
                    }`}
                >
                  {tab}s
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-0 border-t border-l border-gray-200 bg-white">
            {CLIENTS.filter(c => c.category === activeTab).map((client, idx) => (
              <div
                key={idx}
                className="aspect-square border-r border-b border-gray-200 flex items-center justify-center p-4 hover:bg-gray-50 transition-colors group relative"
              >
                <span className="font-bold text-gray-400 text-center group-hover:text-brand-dark transition-colors duration-300">
                  {client.name}
                </span>
              </div>
            ))}

            {/* "And Many More" Placeholder */}
            <div className="aspect-square border-r border-b border-gray-200 bg-brand-dark text-white flex items-center justify-center p-4">
              <span className="font-bold text-center text-sm">and many more...</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="md:w-1/2">
              <h2 className="text-6xl md:text-7xl font-black mb-8 text-brand-dark">
                REACH OUT <br /> TO <span className="text-brand-red">US</span>
              </h2>
              <div className="space-y-6 text-lg">
                <a href="mailto:hello@ideaye.co" className="flex items-center gap-4 text-gray-600 hover:text-brand-red transition-colors">
                  <div className="w-12 h-12 bg-red-50 flex items-center justify-center text-brand-red rounded-none">
                    <Mail />
                  </div>
                  <span className="font-semibold">hello@ideaye.co</span>
                </a>
                <a href="tel:+919100117027" className="flex items-center gap-4 text-gray-600 hover:text-brand-red transition-colors">
                  <div className="w-12 h-12 bg-red-50 flex items-center justify-center text-brand-red rounded-none">
                    <Phone />
                  </div>
                  <span className="font-semibold">(+91) 9100117027</span>
                </a>
              </div>

              <div className="flex gap-4 mt-12">
                {[Instagram, Facebook, Linkedin, Youtube].map((Icon, idx) => (
                  <a key={idx} href="#" className="w-10 h-10 border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-brand-red hover:text-white hover:border-brand-red transition-all rounded-none">
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            <div className="md:w-1/2 w-full bg-gray-50 p-8 md:p-12">
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Name</label>
                  <input type="text" className="w-full px-4 py-3 border border-gray-200 focus:border-brand-red focus:ring-1 focus:ring-brand-red outline-none transition-all rounded-none" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-3 border border-gray-200 focus:border-brand-red focus:ring-1 focus:ring-brand-red outline-none transition-all rounded-none" placeholder="john@company.com" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                  <textarea rows={4} className="w-full px-4 py-3 border border-gray-200 focus:border-brand-red focus:ring-1 focus:ring-brand-red outline-none transition-all rounded-none" placeholder="Tell us about your project..."></textarea>
                </div>
                <button className="w-full bg-brand-dark text-white py-4 font-bold hover:bg-brand-red transition-colors flex items-center justify-center gap-2 rounded-none">
                  Send Message <ArrowRight size={18} />
                </button>
              </form>
            </div>
          </div>
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
