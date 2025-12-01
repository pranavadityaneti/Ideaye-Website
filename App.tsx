import React, { useState } from 'react';
import { Logo } from './components/Logo';
import { NAV_ITEMS, SERVICES, CLIENTS, PRICING } from './constants';
import { AiIdeaGenerator } from './components/AiIdeaGenerator';
import { Menu, X, ArrowRight, CheckCircle2, Phone, Mail, Instagram, Linkedin, Facebook, Youtube, Award, Zap, FlaskConical, MousePointer2 } from 'lucide-react';

// Helper to render a bento grid item
const BentoItem = ({ 
  className = "", 
  children, 
  bgClass = "bg-gray-100" 
}: { 
  className?: string, 
  children?: React.ReactNode, 
  bgClass?: string 
}) => (
  <div className={`relative overflow-hidden p-6 group transition-all duration-300 hover:shadow-lg ${bgClass} ${className}`}>
    {children}
  </div>
);

// SVG Components for the Methodology Section
const IconAssess = () => (
  <svg viewBox="0 0 100 100" className="w-20 h-20 stroke-gray-800 fill-none stroke-[1.5]">
    <circle cx="50" cy="50" r="30" />
    <circle cx="50" cy="50" r="15" className="stroke-blue-600" />
    <circle cx="71" cy="29" r="6" className="fill-white stroke-gray-800" />
  </svg>
);

const IconPilot = () => (
  <svg viewBox="0 0 100 100" className="w-20 h-20 stroke-gray-800 fill-none stroke-[1.5]">
    <circle cx="40" cy="50" r="25" className="opacity-20" />
    <circle cx="50" cy="50" r="25" className="opacity-40" />
    <circle cx="60" cy="50" r="25" className="opacity-60" />
    <circle cx="70" cy="50" r="25" className="stroke-blue-600" />
  </svg>
);

const IconCoCreation = () => (
  <svg viewBox="0 0 100 100" className="w-20 h-20 stroke-gray-800 fill-none stroke-[1.5]">
    <circle cx="50" cy="35" r="25" className="stroke-blue-600" />
    <circle cx="50" cy="65" r="25" />
  </svg>
);

const App: React.FC = () => {
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
      <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-6 h-24 flex items-center justify-between">
          <Logo />
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <button 
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-sm font-semibold text-gray-600 hover:text-brand-red transition-colors uppercase tracking-wide"
              >
                {item.label}
              </button>
            ))}
            <button 
              onClick={() => scrollToSection('#contact')}
              className="bg-brand-dark text-white px-8 py-3 font-bold text-sm hover:bg-brand-red transition-colors duration-300 rounded-none"
            >
              Get Started
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
            {NAV_ITEMS.map((item) => (
              <button 
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-left py-3 text-lg font-bold text-gray-800 border-b border-gray-50"
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section - Extended Bento Grid */}
      <section className="pt-36 pb-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[240px] gap-1">
            
            {/* Item 1: Main Hero Message (2x2) */}
            <BentoItem className="md:col-span-2 md:row-span-2 flex flex-col justify-between bg-brand-red text-white">
              <div className="flex justify-between items-start">
                <Award className="w-10 h-10 text-white/90" />
                <div className="flex gap-1">
                   <span className="w-2 h-2 bg-white/40"></span>
                   <span className="w-2 h-2 bg-white"></span>
                   <span className="w-2 h-2 bg-white/40"></span>
                </div>
              </div>
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl font-black leading-tight">
                  We are the <br/>Ideay-tors!
                </h1>
                <p className="text-white/80 font-medium max-w-sm">
                  The Gladiator to your Rome & A Kaleidoscope of Ideas.
                </p>
              </div>
            </BentoItem>

            {/* Item 2: Portfolio Item (1x1) */}
            <BentoItem className="flex items-center justify-center group bg-gray-100">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 transition-transform duration-500 group-hover:scale-105"></div>
              <div className="relative z-10 text-center">
                <span className="block text-4xl font-black text-gray-400 group-hover:text-brand-dark transition-colors opacity-30 group-hover:opacity-100">AMAZON</span>
                <span className="text-xs font-bold uppercase tracking-widest mt-2 block text-gray-500">Brand Work</span>
              </div>
            </BentoItem>

            {/* Item 3: Portfolio Item (1x1) */}
            <BentoItem className="flex items-center justify-center group bg-gray-50">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-green-100 via-gray-100 to-gray-100 transition-transform duration-500 group-hover:scale-105"></div>
              <div className="relative z-10 text-center">
                <span className="block text-4xl font-black text-gray-400 group-hover:text-[#1DB954] transition-colors opacity-30 group-hover:opacity-100">Spotify</span>
                <span className="text-xs font-bold uppercase tracking-widest mt-2 block text-gray-500">Campaign</span>
              </div>
            </BentoItem>

            {/* Item 4: Service Highlight (1x1) */}
            <BentoItem className="flex flex-col justify-between bg-gray-50">
              <Zap className="w-8 h-8 text-brand-dark" />
              <div>
                <h3 className="text-xl font-bold mb-1">Growth Marketing</h3>
                <p className="text-xs text-gray-500">Driving ROI with data.</p>
              </div>
            </BentoItem>

            {/* Item 5: Portfolio Item (1x1) */}
            <BentoItem className="flex items-center justify-center group overflow-hidden bg-gray-100">
               <div className="absolute inset-0 bg-brand-dark group-hover:bg-brand-red transition-colors duration-500"></div>
               <div className="relative z-10 p-6 border-2 border-white/20 h-[80%] w-[80%] flex items-center justify-center">
                 <span className="text-2xl font-serif text-white font-bold text-center leading-none">BAAHUBALI</span>
               </div>
            </BentoItem>

            {/* Item 6: Portfolio Item (1x1) */}
            <BentoItem className="flex items-center justify-center group bg-gray-50">
              <div className="absolute inset-0 bg-gradient-to-bl from-blue-50 to-gray-100"></div>
              <div className="relative z-10 text-center">
                 <span className="block text-3xl font-black text-gray-400 group-hover:text-blue-600 transition-colors opacity-50 group-hover:opacity-100">Hotstar</span>
                 <span className="text-xs font-bold uppercase tracking-widest mt-2 block text-gray-500">Digital</span>
              </div>
            </BentoItem>

            {/* Item 7: Service Highlight (1x1) */}
            <BentoItem className="flex flex-col justify-between bg-gray-100">
              <MousePointer2 className="w-8 h-8 text-brand-dark" />
              <div>
                <h3 className="text-xl font-bold mb-1">Web Design</h3>
                <p className="text-xs text-gray-500">UI/UX that converts.</p>
              </div>
            </BentoItem>

            {/* Item 8: Secondary Message (2x2) */}
            <BentoItem className="md:col-span-2 md:row-span-2 flex flex-col justify-between bg-gray-50">
              <FlaskConical className="w-10 h-10 text-brand-dark" />
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-dark leading-tight">
                  Strategy driven, intellectually elegant.
                </h2>
                <p className="text-gray-500 max-w-sm">
                  We blend visual power with technology to create human-to-human conversations.
                </p>
                <div className="flex gap-2 pt-4">
                   <span className="w-2 h-2 bg-brand-dark"></span>
                   <span className="w-2 h-2 bg-gray-300"></span>
                   <span className="w-2 h-2 bg-gray-300"></span>
                </div>
              </div>
            </BentoItem>

             {/* Item 9: Portfolio Item (1x1) */}
             <BentoItem className="flex items-center justify-center group bg-gray-900">
              <div className="absolute inset-0 bg-gray-900 group-hover:bg-brand-red transition-colors duration-500"></div>
               <span className="relative z-10 text-2xl font-bold text-white group-hover:scale-110 transition-transform">Gillette</span>
            </BentoItem>

            {/* Item 10: Call to Action (1x1) */}
            <BentoItem className="flex flex-col justify-center items-center text-center cursor-pointer hover:bg-brand-dark hover:text-white transition-colors bg-gray-200">
               <span className="text-lg font-bold mb-2">View All Work</span>
               <ArrowRight className="w-6 h-6 animate-pulse" />
            </BentoItem>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-bold text-brand-dark mb-20 max-w-2xl leading-tight">
            The way we work <br/>
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
                      <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
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

      {/* Portfolio / Work Section */}
      <section id="work" className="py-20 bg-white">
        <div className="container mx-auto px-6">
           <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="text-brand-red font-bold tracking-widest uppercase mb-2">Our Portfolio</h2>
              <h3 className="text-4xl md:text-5xl font-black text-brand-dark">Whom We've Worked With</h3>
            </div>
            
            <div className="flex gap-2 bg-gray-100 p-1 overflow-x-auto max-w-full">
              {(['brand', 'celebrity', 'movie'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-2 text-sm font-bold uppercase transition-all ${
                    activeTab === tab 
                      ? 'bg-brand-red text-white shadow-md' 
                      : 'text-gray-500 hover:text-gray-900'
                  }`}
                >
                  {tab}s
                </button>
              ))}
            </div>
           </div>

           <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
             {CLIENTS.filter(c => c.category === activeTab).map((client, idx) => (
               <div 
                  key={idx} 
                  className="aspect-square bg-gray-50 border border-gray-100 flex items-center justify-center p-4 hover:border-brand-red/30 transition-colors group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-brand-red/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <span className="font-bold text-gray-800 text-center group-hover:scale-110 transition-transform duration-300">
                    {client.name}
                  </span>
               </div>
             ))}
             
             {/* "And Many More" Placeholder */}
             <div className="aspect-square bg-brand-dark text-white flex items-center justify-center p-4">
               <span className="font-bold text-center">and many more...</span>
             </div>
           </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-brand-red font-bold tracking-widest uppercase mb-2">Commercials</h2>
            <h3 className="text-4xl md:text-5xl font-black mb-6">Transparent Pricing</h3>
            <p className="text-gray-400">Choose the package that fits your growth stage.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {PRICING.map((pkg, idx) => (
              <div 
                key={idx} 
                className={`relative p-8 border ${
                  pkg.isHighlight 
                    ? 'bg-brand-red border-brand-red transform md:-translate-y-4 shadow-2xl shadow-red-900/50' 
                    : 'bg-gray-800 border-gray-700'
                }`}
              >
                {pkg.isHighlight && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-brand-red px-4 py-1 text-xs font-bold uppercase tracking-wider shadow-lg">
                    Best Value
                  </div>
                )}
                
                <h4 className="text-2xl font-bold mb-1">{pkg.title}</h4>
                <p className={`text-sm mb-6 ${pkg.isHighlight ? 'text-red-100' : 'text-gray-400'}`}>
                  {pkg.subtitle}
                </p>
                
                <div className="mb-8">
                  <span className="text-4xl font-black">₹{pkg.price}</span>
                  <span className={`text-sm ml-2 ${pkg.isHighlight ? 'text-red-100' : 'text-gray-500'}`}>
                    / {pkg.period}
                  </span>
                </div>

                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3 text-sm">
                      <CheckCircle2 className={`w-5 h-5 shrink-0 ${pkg.isHighlight ? 'text-white' : 'text-brand-red'}`} />
                      <span className={pkg.isHighlight ? 'text-white' : 'text-gray-300'}>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-4 font-bold transition-all ${
                  pkg.isHighlight 
                    ? 'bg-white text-brand-red hover:bg-gray-100' 
                    : 'bg-brand-red text-white hover:bg-red-700'
                }`}>
                  Choose Plan
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="md:w-1/2">
              <h2 className="text-6xl md:text-7xl font-black mb-8 text-brand-dark">
                REACH OUT <br/> TO <span className="text-brand-red">US</span>
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

export default App;