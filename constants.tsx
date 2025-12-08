import React from 'react';
import { Service, ClientItem, NavItem, Project } from './types';
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

export const PROJECTS: Project[] = [
  {
    id: 'amazon',
    title: 'Amazon',
    subtitle: 'The Great Indian Sale',
    category: 'Brand Work',
    description: 'A 360-degree digital transformation for one of the world\'s largest retailers during their peak season.',
    brief: 'To maximize visibility and conversion rates during the Great Indian Festival Sale, targeting tier-2 and tier-3 cities while maintaining premium brand appeal.',
    overview: 'We orchestrated a multi-channel campaign focusing on hyper-local content and influencer partnerships. The campaign utilized AI-driven targeting to reach potential customers with personalized offers.',
    approach: 'Our strategy centered on "Relatability at Scale". We moved away from generic ads to storytelling that resonated with diverse Indian households. We leveraged data analytics to identify high-intent user segments.',
    execution: 'Deployed over 500 unique creative assets across social media and display networks. Implemented real-time bid adjustments based on inventory levels. Collaborated with 50+ micro-influencers to create authentic unboxing and review content.',
    highlights: [
      '200% Increase in CTR',
      'Reached 50M+ Unique Users',
      'Highest ever Tier-2 city engagement',
      'Award-winning creative strategy'
    ],
    images: ['bg-gradient-to-br from-orange-400 to-yellow-500', 'bg-gray-100', 'bg-gray-800']
  },
  {
    id: 'spotify',
    title: 'Spotify',
    subtitle: 'Music for Every Mood',
    category: 'Campaign',
    description: 'Launching regional playlists to capture the diverse musical landscape of South India.',
    brief: 'Increase daily active users in South Indian markets by promoting regional curated playlists and showcasing Spotify as the ultimate destination for local music.',
    overview: 'A vibrant, music-first campaign that celebrated local artists and cultural moments. We used meme marketing and interactive social contests to drive app installs and playlist streams.',
    approach: 'We adopted a "Culture-First" approach, integrating deep cultural nuances into our creatives. Instead of translating global ads, we created original content featuring local idioms and pop-culture references.',
    execution: 'Launched the "Tune into Culture" challenge on Instagram Reels. Partnered with regional movie stars for playlist curation. Created dynamic audio ads that changed based on the user\'s time of day and weather.',
    highlights: [
      '3M+ App Installs',
      '#1 Music App in target regions',
      'Viral hashtag challenge',
      '30% lower CPI than industry avg'
    ],
    images: ['bg-[#1DB954]', 'bg-black', 'bg-green-200']
  },
  {
    id: 'baahubali',
    title: 'Baahubali',
    subtitle: 'The Conclusion',
    category: 'Movie Marketing',
    description: 'Digital mandate for India\'s biggest blockbuster franchise.',
    brief: 'Create sustained hype leading up to the release of "The Conclusion" and manage the massive online community of fans.',
    overview: 'We managed the official digital presence, creating an immersive world for fans. From character reveals to behind-the-scenes content, every post was crafted to be an event in itself.',
    approach: 'Fandom activation was key. We treated fans as part of the Mahishmati kingdom. The strategy involved revealing content in layers to maintain mystery and excitement.',
    execution: 'Developed an interactive AR filter allowing fans to wear the armor. Hosted live Q&A sessions with the cast. Created a "Question of the Day" series that kept engagement high for 6 months pre-release.',
    highlights: [
      'Most trended movie hashtag',
      '10M+ Trailer views in 24hrs',
      'Built a community of 5M+ fans',
      'Global digital coverage'
    ],
    images: ['bg-amber-700', 'bg-amber-900', 'bg-black']
  },
  {
    id: 'gillette',
    title: 'Gillette',
    subtitle: 'Precision & Style',
    category: 'Product Launch',
    description: 'Reintroducing the classic shave to a younger, beard-loving generation.',
    brief: 'Position the new Mach 3 Turbo as the essential tool for the modern man, balancing the trend of beards with the need for clean grooming.',
    overview: 'A sleek, masculine campaign focusing on the "Sharpest Look". We positioned shaving not as a chore, but as a ritual of self-care and confidence.',
    approach: 'We targeted the "grooming conscious" male demographic. The content mix included educational grooming tips, style guides, and testimonials from style icons.',
    execution: 'Produced a series of high-quality "Get Ready with Me" videos. Executed a targeted LinkedIn campaign for corporate professionals. Launched a "Sharpest Look" contest.',
    highlights: [
      '15% Sales uplift in Q3',
      'High engagement on LinkedIn',
      'Successful re-positioning',
      'Best Grooming Campaign Award'
    ],
    images: ['bg-blue-900', 'bg-gray-200', 'bg-blue-600']
  }
];