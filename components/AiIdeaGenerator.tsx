import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";
import { Sparkles, Loader2, Copy, Check } from 'lucide-react';

export const AiIdeaGenerator: React.FC = () => {
  const [topic, setTopic] = useState('');
  const [idea, setIdea] = useState('');
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState('');

  const generateIdea = async () => {
    if (!topic.trim()) return;

    setLoading(true);
    setError('');
    setIdea('');

    try {
      // Using process.env.API_KEY as strictly required
      if (!process.env.API_KEY) {
        // Fallback for demo purposes if key isn't present in environment
        // In a real scenario, we'd handle this differently or show an error
        console.warn("API Key not found in env, using simulation.");
        await new Promise(resolve => setTimeout(resolve, 2000));
        setIdea(`Simulated AI Response: "The ${topic} Revolution" - A campaign focusing on human-centric stories connecting everyday users with ${topic} in unexpected ways.`);
        setLoading(false);
        return;
      }

      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: `Generate a short, punchy, creative marketing campaign hook (max 2 sentences) for a brand focused on: ${topic}. The tone should be modern, "Human to Human" (H2H), and witty.`,
      });

      setIdea(response.text || "Could not generate idea. Try again.");
    } catch (err) {
      console.error(err);
      setError("Failed to connect to the Ideay-tor. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(idea);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div id="ai-tool" className="py-20 bg-brand-dark text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-brand-red/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-red/20 text-brand-red text-sm font-semibold mb-6">
            <Sparkles size={16} />
            <span>AI-Powered Workflow</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-orange-500">Ideay-tor</span>
          </h2>
          <p className="text-gray-400 mb-10 text-lg">
            Experience our AI capabilities firsthand. Enter a keyword, and watch our neural networks generate a "Human to Human" campaign hook instantly.
          </p>

          <div className="bg-white/5 backdrop-blur-lg p-2 md:p-4 border border-white/10 shadow-2xl">
            <div className="flex flex-col md:flex-row gap-4">
              <input 
                type="text" 
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                placeholder="e.g., Organic Coffee, Luxury Sneakers, Fintech App..."
                className="flex-1 bg-black/20 border border-white/10 px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-red transition-all"
                onKeyDown={(e) => e.key === 'Enter' && generateIdea()}
              />
              <button 
                onClick={generateIdea}
                disabled={loading || !topic}
                className="bg-brand-red hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-4 px-8 transition-all duration-300 flex items-center justify-center gap-2 min-w-[160px]"
              >
                {loading ? <Loader2 className="animate-spin" /> : <Sparkles size={20} />}
                {loading ? 'Thinking...' : 'Ideate'}
              </button>
            </div>

            {error && (
              <div className="mt-4 p-4 bg-red-500/20 text-red-200 text-sm">
                {error}
              </div>
            )}

            {idea && (
              <div className="mt-6 p-6 bg-gradient-to-br from-gray-900 to-black border border-white/10 text-left animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <p className="text-xs text-brand-red font-bold uppercase tracking-wider mb-2">Generated Concept</p>
                    <p className="text-xl md:text-2xl font-serif italic text-white leading-relaxed">
                      "{idea}"
                    </p>
                  </div>
                  <button 
                    onClick={copyToClipboard}
                    className="p-2 hover:bg-white/10 transition-colors text-gray-400 hover:text-white"
                    title="Copy to clipboard"
                  >
                    {copied ? <Check size={20} className="text-green-500" /> : <Copy size={20} />}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};