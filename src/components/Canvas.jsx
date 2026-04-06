import { motion } from 'framer-motion';

export default function Canvas() {
  return (
    <section id="services" className="relative py-24 px-10 max-w-7xl mx-auto flex flex-col items-center bg-[#0a0a0f] overflow-hidden">
      
      {/* Background Depth Orbs */}
      <div className="absolute top-[20%] left-[5%] w-96 h-96 bg-[#00f0ff]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[5%] w-96 h-96 bg-[#7a00ff]/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Main Glass Panel */}
      <div className="relative w-full aspect-[21/9] min-h-[500px] glass rounded-[2.5rem] border border-[#00f0ff]/20 overflow-hidden flex flex-col justify-between p-8 shadow-[0_0_60px_rgba(0,240,255,0.06)] backdrop-blur-[30px]">
        
        {/* Header */}
        <div className="flex justify-between items-center w-full z-20">
          <span className="text-white text-sm font-semibold tracking-wide">Campaign Canvas</span>
          <span className="text-slate-500 hover:text-white cursor-pointer transition-colors text-3xl font-light leading-none">
            &times;
          </span>
        </div>

        {/* Center Text (Pushed to Z-0 and opacity drastically reduced to fix clashing) */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white/[0.03] text-center tracking-[0.4em] uppercase leading-relaxed select-none">
            Drag to Build<br />Your Campaign
          </h2>
        </div>

        {/* --- Floating 3D Objects (Rebalanced to fill left and right) --- */}
        
        {/* LEFT SIDE Elements */}
        <div className="absolute top-[25%] left-[12%] flex flex-col gap-10 z-10">
             {/* Simulated Glossy Purple Megaphone */}
             <motion.div 
               animate={{ y: [0, -15, 0] }} 
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} 
               className="w-24 h-20 glass rounded-2xl bg-[#7a00ff]/10 flex items-center justify-center relative shadow-[0_0_20px_rgba(168,85,247,0.3),_inset_0_0_15px_rgba(168,85,247,0.15)] transform rotate-[-15deg]"
               style={{ perspective: 500, rotateX: 10, rotateY: 20 }}
             >
                <div className="relative z-10 w-1/2 h-2/3 rounded-lg bg-gradient-to-br from-[#7a00ff] to-[#00f0ff] shadow-[0_0_10px_#00f0ff]" />
             </motion.div>

             {/* Simulated Pink 'M' Abstract */}
             <motion.div 
               animate={{ y: [0, 12, 0] }} 
               transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }} 
               className="w-16 h-16 glass rounded-xl bg-[#ff00aa]/10 border border-[#ff00aa]/50 flex items-center justify-center font-black text-3xl text-[#ff00aa] shadow-[0_0_20px_rgba(255,0,170,0.4),_inset_0_0_10px_rgba(255,0,170,0.1)] transform rotate-[10deg] ml-10"
               style={{ perspective: 500, rotateX: -20, rotateY: -10 }}
             >
               M
             </motion.div>
        </div>

        {/* RIGHT SIDE Elements */}
        <div className="absolute top-[20%] right-[15%] flex flex-col gap-12 z-10">
             {/* Simulated Dark Gray Cart */}
             <motion.div 
               animate={{ y: [0, 10, 0] }} 
               transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }} 
               className="w-20 h-20 glass rounded-2xl bg-slate-800/80 border border-slate-600 flex items-center justify-center text-4xl shadow-2xl transform rotate-[12deg] ml-8"
               style={{ perspective: 500, rotateX: 15, rotateY: -10 }}
             >
               🛒
             </motion.div>

             {/* Simulated Glossy Cyan Gear */}
             <motion.div 
               animate={{ y: [0, -10, 0] }} 
               transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.7 }} 
               className="w-20 h-20 glass rounded-full bg-[#00f0ff]/10 border border-[#00f0ff]/50 flex items-center justify-center text-sm font-black tracking-wider text-[#00f0ff] shadow-[0_0_20px_#00f0ff,_inset_0_0_15px_rgba(0,240,255,0.4)] transform rotate-[-8deg]"
               style={{ perspective: 500, rotateX: -10, rotateY: 15 }}
             >
               SEO
             </motion.div>
        </div>
        {/* --- End Floating Objects --- */}


        {/* Bottom Section (Progress Meter & Submit) */}
        <div className="w-full flex flex-col items-center z-20 mt-auto">
          <span className="text-[11px] font-bold text-white tracking-[0.25em] mb-4">BRAND POTENTIAL</span>
          
          {/* EKG Path Meter */}
          <div className="w-3/4 h-16 relative flex items-center justify-center mb-6">
             <svg width="100%" height="100%" viewBox="0 0 500 80" preserveAspectRatio="none" className="absolute inset-0">
                {/* Background Track */}
                <path d="M 0 60 L 150 60 L 180 30 L 350 30 L 500 30" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                {/* Active Neon Pulse */}
                <path d="M 0 60 L 150 60 L 180 30 L 280 30" fill="none" stroke="url(#active-gradient)" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-[0_0_10px_#00f0ff]" />
                
                <defs>
                   <linearGradient id="active-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#00f0ff" />
                      <stop offset="100%" stopColor="#7a00ff" />
                   </linearGradient>
                </defs>
             </svg>
             
             {/* Track Checkpoints */}
             <div className="absolute left-[5%] top-6 w-6 h-6 bg-[#00f0ff] rounded shadow-[0_0_20px_#00f0ff,_inset_0_0_10px_white/50]"></div>
             <div className="absolute left-[15%] top-6 w-6 h-6 bg-slate-800 border-2 border-slate-600 rounded"></div>
             <div className="absolute left-[28%] top-6 w-6 h-6 bg-slate-800 border-2 border-slate-600 rounded"></div>
          </div>

          {/* Submit Button */}
          <button className="glass px-10 py-3 rounded border border-[#00f0ff]/50 hover:bg-[#00f0ff]/10 transition-all group relative overflow-hidden mt-4 shadow-[0_0_15px_rgba(0,240,255,0.1)] backdrop-blur-md">
             <div className="absolute inset-0 bg-[#00f0ff] opacity-0 group-hover:opacity-10 blur-md transition-opacity" />
             <span className="text-xs font-black tracking-[0.2em] text-[#00f0ff] relative z-10 group-hover:text-white transition-colors">
              [ SUBMIT MY VISION ]
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}