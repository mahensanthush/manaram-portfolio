import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function EcoBrand() {
  const [activeTab, setActiveTab] = useState('challenge');

  const caneImages = {
    challenge: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=1200&auto=format&fit=crop",
    insight: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    result: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1200&auto=format&fit=crop"
  };

  const processContent = {
    challenge: "The traditional cane industry in Sri Lanka struggled with a lack of digital presence, making it impossible for local artisans to reach a modern, high-end market.",
    insight: "Research showed that buyers wanted premium, sustainable furniture but couldn't find a trusted platform that handled professional logistics and quality verification.",
    result: "We launched 'Cane Industry Hub'—a full-scale e-commerce ecosystem connecting artisans directly to global buyers, creating a streamlined digital marketplace. 🎉"
  };

  return (
    <section className="relative pt-28 pb-16 px-6 max-w-5xl mx-auto bg-[#0a0a0f]">
      
      <div id="work" className="absolute -top-[110px] left-0 w-full h-1 pointer-events-none" />

      
      <div className="text-center max-w-2xl mx-auto mb-16 relative z-20">
        <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">Featured Case Study</h2>
        <p className="text-slate-400 text-xs md:text-sm leading-relaxed font-medium">
          Transforming the traditional cane industry through a modern digital marketplace and strategic market positioning.
        </p>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative w-full glass rounded-[1.5rem] border border-white/5 p-6 md:p-8 shadow-2xl flex flex-col lg:flex-row gap-10 overflow-hidden bg-[#0a0a0f]/40 backdrop-blur-3xl"
      >
        
        
        <div className="w-full lg:w-[55%] flex flex-col">
          <div className="mb-4">
            <span className="text-[9px] text-[#00f0ff] uppercase tracking-[0.3em] font-bold">Cane Industry Hub</span>
            <h2 className="text-2xl font-black text-white tracking-tight mt-1 italic">Market Transformation</h2>
          </div>

          <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-white/10 bg-black/40">
            <AnimatePresence mode="wait">
              <motion.img 
                key={activeTab}
                src={caneImages[activeTab]} 
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6 }}
                className="w-full h-full object-cover grayscale-[0.3] hover:grayscale-0 transition-all duration-700"
              />
            </AnimatePresence>
          </div>
        </div>

        
        <div className="w-full lg:w-[45%] flex flex-col justify-center space-y-6">
          <div className="flex flex-col gap-3">
            {['challenge', 'insight', 'result'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-left uppercase font-black tracking-tighter transition-all duration-300 ${
                  activeTab === tab 
                  ? 'text-[2.2rem] opacity-100' 
                  : 'text-[1.8rem] opacity-20 hover:opacity-50'
                }`}
                style={{ 
                  color: tab === 'challenge' && activeTab === tab ? '#ff00aa' : 
                         tab === 'insight' && activeTab === tab ? '#00f0ff' : 'white' 
                }}
              >
                The {tab}
              </button>
            ))}
          </div>
          
          <div className="min-h-[100px] border-t border-white/5 pt-4">
            <AnimatePresence mode="wait">
              <motion.p 
                key={activeTab}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                className="text-[12px] text-slate-400 leading-relaxed font-medium"
              >
                {processContent[activeTab]}
              </motion.p>
            </AnimatePresence>
          </div>

         
          <div className="flex gap-2">
             <div className={`h-1.5 rounded-full transition-all duration-500 ${activeTab === 'challenge' ? 'w-8 bg-[#ff00aa]' : 'w-2 bg-white/10'}`} />
             <div className={`h-1.5 rounded-full transition-all duration-500 ${activeTab === 'insight' ? 'w-8 bg-[#00f0ff]' : 'w-2 bg-white/10'}`} />
             <div className={`h-1.5 rounded-full transition-all duration-500 ${activeTab === 'result' ? 'w-8 bg-white' : 'w-2 bg-white/10'}`} />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
