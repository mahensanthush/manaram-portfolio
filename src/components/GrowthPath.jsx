import { motion } from 'framer-motion';

export default function GrowthPath() {
  return (
    <section id="process" className="relative py-32 px-10 max-w-7xl mx-auto bg-[#0a0a0f] overflow-hidden">
      
     
      <div className="text-center max-w-2xl mx-auto mb-20 relative z-20">
        <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">Growth Path</h2>
        <p className="text-slate-400 text-xs md:text-sm leading-relaxed font-medium">
          Instead of standard cards, experience an immersive digital growth path designed to elevate your brand identity and drive conversions.
        </p>
      </div>

      
      <div className="relative w-full">
        
        
        <div className="absolute top-24 left-0 w-full h-32 -translate-y-1/2 z-0 hidden md:block">
          <svg width="100%" height="100%" viewBox="0 0 1200 100" preserveAspectRatio="none">
             <defs>
               <linearGradient id="pulse-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                 <stop offset="0%" stopColor="#00f0ff" />
                 <stop offset="50%" stopColor="#7a00ff" />
                 <stop offset="100%" stopColor="#ff00aa" />
               </linearGradient>
             </defs>
             
             <path 
                d="M-50,50 L200,50 L230,10 L270,90 L310,10 L340,50 L550,50 L580,0 L620,100 L650,50 L860,50 L890,20 L920,80 L950,50 L1250,50" 
                fill="none" 
                stroke="url(#pulse-grad)" 
                strokeWidth="3" 
                strokeLinecap="round"
                strokeLinejoin="round"
                className="drop-shadow-[0_0_12px_rgba(0,240,255,0.6)]" 
             />
          </svg>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 relative z-10">
          
          
          <div className="flex flex-col items-center md:items-start text-left">
            <div className="w-full h-48 flex items-center justify-center md:justify-start mb-6">
              <motion.img 
                animate={{ y: [-5, 5, -5] }} 
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                src="/assets/branding-cube.png" 
                alt="Branding Cube" 
                className="h-65 w-65 object-contain drop-shadow-[0_0_20px_rgba(0,240,255,0.3)] bg-white/5 rounded-xl border border-white/10 md:bg-transparent md:border-none"
              />
            </div>
            
            <div className="flex items-baseline gap-3 mb-1">
              <span className="text-5xl font-light text-[#00f0ff] drop-shadow-[0_0_10px_rgba(0,240,255,0.4)]">1</span>
              <span className="text-[10px] font-bold text-[#00f0ff] tracking-[0.2em] uppercase">WE DEFINE:</span>
            </div>
            <h3 className="text-3xl font-black text-white mb-3">Branding.</h3>
            <p className="text-slate-400 text-[11px] leading-relaxed max-w-[220px]">
              Building a solid foundation. We create striking logos, cohesive identities, and visual systems that scale.
            </p>
          </div>

         
          <div className="flex flex-col items-center md:items-start text-left">
            <div className="w-full h-48 flex items-center justify-center md:justify-start mb-6">
              <motion.img 
                animate={{ scale: [0.95, 1.05, 0.95] }} 
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                src="/assets/marketing-sphere.png" 
                alt="Marketing Sphere" 
                className="h-38 w-38 object-contain drop-shadow-[0_0_25px_rgba(168,85,247,0.4)] bg-white/5 rounded-full border border-white/10 md:bg-transparent md:border-none"
              />
            </div>
            
            <div className="flex items-baseline gap-3 mb-1">
              <span className="text-5xl font-light text-[#7a00ff] drop-shadow-[0_0_10px_rgba(122,0,255,0.4)]">2</span>
              <span className="text-[10px] font-bold text-[#7a00ff] tracking-[0.2em] uppercase">WE AMPLIFY:</span>
            </div>
            <h3 className="text-3xl font-black text-white mb-3">Marketing.</h3>
            <p className="text-slate-400 text-[11px] leading-relaxed max-w-[220px]">
              Instead of standard tactics, we pulse targeted digital campaigns that reach your audience and drive engagement.
            </p>
          </div>

          
          <div className="flex flex-col items-center md:items-start text-left">
            <div className="w-full h-48 flex items-center justify-center md:justify-start mb-6">
             
              <motion.img 
                animate={{ y: [-5, 5, -5] }} 
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                src="/assets/web-wireframe.png" 
                alt="Web Design Wireframe" 
                className="h-69 w-69 object-contain drop-shadow-[0_0_25px_rgba(255,0,170,0.4)] bg-white/5 rounded-xl border border-white/10 md:bg-transparent md:border-none"
              />
            </div>
            
            <div className="flex items-baseline gap-3 mb-1">
              <span className="text-5xl font-light text-[#ff00aa] drop-shadow-[0_0_10px_rgba(255,0,170,0.4)]">3</span>
              <span className="text-[10px] font-bold text-[#ff00aa] tracking-[0.2em] uppercase">WE CONVERT:</span>
            </div>
            <h3 className="text-3xl font-black text-white mb-3">Web & Design.</h3>
            <p className="text-slate-400 text-[11px] leading-relaxed max-w-[220px]">
              Abstract ideas become reality. We build fast, mobile-optimized digital experiences that drive your business.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
