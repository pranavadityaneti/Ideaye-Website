import React from 'react';
import { Service, ClientItem, PricingPackage, NavItem } from './types';
import { 
  BarChart3, 
  Globe, 
  Search, 
  Share2, 
  Cpu, 
  Megaphone 
} from 'lucide-react';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'AI Ideator', href: '#ai-tool' },
  { label: 'Contact', href: '#contact' },
];

export const SERVICES: Service[] = [
  {
    id: 'digital-marketing',
    title: 'Digital & Growth Marketing',
    description: 'Comprehensive digital and growth marketing solutions tailored to meet specific brand needs.',
    points: [
      'Tailored services for brand goals',
      'Expert team for spectrum-wide growth',
      'Potential 40-60% increase in conversions',
      'Personalized strategy formulation'
    ],
    icon: <BarChart3 className="w-8 h-8" />
  },
  {
    id: 'web-dev',
    title: 'Website Design & Dev',
    description: 'Developing responsive, user-friendly, and visually appealing websites optimized for SEO.',
    points: [
      'Responsive & mobile-friendly design',
      'Research-based UX design',
      'Fast loading & clear navigation',
      'Boosts conversions by 30-50%'
    ],
    icon: <Globe className="w-8 h-8" />
  },
  {
    id: 'seo',
    title: 'SEO',
    description: 'Improving website visibility on search engines to drive organic traffic.',
    points: [
      'Keyword research & on-page optimization',
      'Link building & guest posting',
      '50-100% organic traffic increase (6-12 mo)',
      'Regular blog updates'
    ],
    icon: <Search className="w-8 h-8" />
  },
  {
    id: 'smm',
    title: 'Social Media Management',
    description: 'Establishing strong presence on Instagram, Facebook, LinkedIn, and YouTube.',
    points: [
      'Customized monthly strategies',
      'Content creation & profile management',
      'Audience engagement & analysis',
      '40-60% annual following growth'
    ],
    icon: <Share2 className="w-8 h-8" />
  },
  {
    id: 'performance',
    title: 'Performance Marketing',
    description: 'Targeted digital advertising campaigns with agreed objectives.',
    points: [
      'Google, Facebook, LinkedIn Ads',
      '25-50% higher ROI on ad spend',
      'Lead generation & traffic driving',
      'Continuous campaign optimization'
    ],
    icon: <Megaphone className="w-8 h-8" />
  },
  {
    id: 'ai-workflow',
    title: 'AI Workflow Development',
    description: 'Leveraging Artificial Intelligence to automate and enhance marketing processes.',
    points: [
      'Automated content generation pipelines',
      'Predictive analytics for campaigns',
      'Custom AI Chatbot integration',
      'Data-driven strategy refinement'
    ],
    icon: <Cpu className="w-8 h-8" />
  }
];

export const CLIENTS: ClientItem[] = [
  // Brands
  { name: 'Amazon', category: 'brand' },
  { name: 'Hotstar', category: 'brand' },
  { name: 'Prime Video', category: 'brand' },
  { name: 'Gillette', category: 'brand' },
  { name: 'Spotify', category: 'brand' },
  { name: 'Nykaa', category: 'brand' },
  { name: 'TikTok', category: 'brand' },
  { name: 'Gaana', category: 'brand' },
  // Celebrities
  { name: 'Rajinikanth', category: 'celebrity' },
  { name: 'Salman Khan', category: 'celebrity' },
  { name: 'Mahesh Babu', category: 'celebrity' },
  { name: 'Akshay Kumar', category: 'celebrity' },
  { name: 'Jr NTR', category: 'celebrity' },
  { name: 'Anushka Shetty', category: 'celebrity' },
  { name: 'Kajal Aggarwal', category: 'celebrity' },
  // Movies
  { name: 'Baahubali', category: 'movie' },
  { name: 'Gully Boy', category: 'movie' },
  { name: 'Arjun Reddy', category: 'movie' },
  { name: 'Kabir Singh', category: 'movie' },
  { name: 'Saaho', category: 'movie' },
  { name: 'Darbar', category: 'movie' },
  { name: 'Thappad', category: 'movie' },
];

export const PRICING: PricingPackage[] = [
  {
    title: 'Package 1',
    subtitle: 'Comprehensive Growth',
    price: '75,000',
    period: 'Per Month',
    isHighlight: true,
    features: [
      'SMM (15 Posts + Reels)',
      'Performance Marketing',
      'Brand Promotions worth Rs. 10,000',
      'Website SEO and Blogs',
      'Photoshoot (Studio Photos, Videos, Reels)'
    ]
  },
  {
    title: 'Package 2',
    subtitle: 'Essential Presence',
    price: '50,000',
    period: 'Per Month',
    features: [
      'SMM (25 Posts + Reels)',
      'Brand Promotions worth Rs. 5,000',
      'SEO, Blog Content, Guest Posting',
      'Meme Marketing',
      'Performance Marketing'
    ]
  },
  {
    title: 'Web Design & Dev',
    subtitle: 'One Time Project',
    price: '50,000',
    period: 'One Time',
    features: [
      'Comprehensive Design & Dev',
      'Mobile-Friendly & Responsive',
      'Research-based UX Design',
      'Modern Development Systems',
      'FREE 1 Year Server & Maintenance'
    ]
  }
];
