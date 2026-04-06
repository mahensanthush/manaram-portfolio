import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex flex-col justify-center items-center overflow-hidden bg-[#0a0a0f]">
      
      
      <div className="absolute inset-0 pointer-events-none z-0" style={{ perspective: '1200px' }}>
        
        
        <motion.div 
          animate={{ y: [-15, 15, -15], rotateZ: [18, 20, 18] }}
          transition={{ duration: 8.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[35%] left-[-5%] w-[360px] h-[200px] glass border-[1.5px] border-[#00f0ff]/50 shadow-[0_0_50px_rgba(0,240,255,0.25)]"
          style={{ rotateX: 40, rotateY: -35, skewX: '-20deg', background: 'linear-gradient(135deg, rgba(0,240,255,0.18) 0%, transparent 100%)' }}
        />

        
        <motion.div 
          animate={{ y: [-10, 10, -10], rotateZ: [15, 18, 15] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] left-[8%] w-[300px] h-[180px] glass border-[1.5px] border-[#00f0ff]/40 shadow-[0_0_40px_rgba(0,240,255,0.15)]"
          style={{ rotateX: 30, rotateY: -30, skewX: '-15deg', background: 'linear-gradient(135deg, rgba(0,240,255,0.12) 0%, transparent 100%)' }}
        />

        
        <motion.div 
          animate={{ y: [0, -6, 0], rotateZ: [-5, -8, -5] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[15%] left-[12%] w-20 h-20 flex items-center justify-center"
          style={{ rotateX: 20, rotateY: 15 }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible stroke-[#00f0ff] drop-shadow-[0_0_6px_rgba(0,240,255,0.4)]">
            <path d="M10,10 L90,10 L90,90 L10,90 Z" fill="none" strokeWidth="0.8" />
            <path d="M10,10 L30,30 L70,30 L90,10" fill="none" strokeWidth="0.6" strokeDasharray="1,1" />
            <path d="M30,30 L30,70 L10,90" fill="none" strokeWidth="0.6" strokeDasharray="1,1" />
            <path d="M70,30 L70,70 L90,90" fill="none" strokeWidth="0.6" strokeDasharray="1,1" />
          </svg>
        </motion.div>

        
        <motion.div 
          animate={{ y: [10, -10, 10], rotateZ: [10, 15, 10] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[40%] left-[10%] w-40 h-40 border border-[#ff00aa]/40 shadow-[0_0_30px_rgba(255,0,170,0.18)] backdrop-blur-md"
          style={{ rotateX: 30, rotateY: 15, background: 'linear-gradient(135deg, rgba(255,0,170,0.2) 0%, rgba(122,0,255,0.1) 50%, transparent 100%)' }}
        />
        
        
        <motion.div 
          animate={{ y: [0, 8, 0], rotateZ: [15, 18, 15] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[55%] left-[5%] w-16 h-24"
          style={{ rotateX: 35, rotateY: 10 }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible stroke-[#7a00ff] drop-shadow-[0_0_6px_rgba(122,0,255,0.4)]">
             <path d="M50,10 L10,90 L90,90 Z" fill="none" strokeWidth="0.8" />
             <path d="M10,90 L50,50 L90,90" fill="none" strokeWidth="0.6" strokeDasharray="1,1" />
          </svg>
        </motion.div>

        
        <motion.div 
          animate={{ y: [-12, 12, -12], rotateZ: [-10, -8, -10] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[10%] left-[2%] w-[220px] h-[130px] glass border-[1.5px] border-white/20 backdrop-blur-xl"
          style={{ rotateX: 25, rotateY: -20, skewY: '10deg', background: 'linear-gradient(225deg, rgba(0,240,255,0.08) 0%, rgba(168,85,247,0.05) 50%, transparent 100%)' }}
        />
        
        
        <motion.div 
          animate={{ y: [8, -8, 8], rotateZ: [5, 10, 5] }}
          transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[35%] left-[18%] w-24 h-24"
          style={{ rotateX: -15, rotateY: 10 }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible stroke-[#00f0ff] drop-shadow-[0_0_6px_rgba(0,240,255,0.3)]">
             <path d="M50,10 L10,90 L90,90 L50,10 Z" fill="none" strokeWidth="0.8" />
             <path d="M10,90 L50,50 L90,90 Z" fill="none" strokeWidth="0.6" strokeDasharray="1,1" />
          </svg>
        </motion.div>

        
        <motion.div 
          animate={{ y: [12, -12, 12], rotateZ: [-15, -12, -15] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[5%] left-[8%] w-[340px] h-[240px] glass border-[1.5px] border-[#ff00aa]/40 shadow-[0_0_50px_rgba(255,0,170,0.15)]"
          style={{ rotateX: 40, rotateY: 25, skewX: '20deg', background: 'linear-gradient(135deg, rgba(255,0,170,0.15) 0%, rgba(122,0,255,0.08) 50%, transparent 100%)' }}
        />

        
        <div className="absolute top-[65%] left-[12%] w-48 h-48" style={{ perspective: 300 }}>
          <div className="absolute top-0 left-0 w-6 h-10 glass border-[#00f0ff]/30 transform rotate-12"></div>
          <div className="absolute top-8 left-8 w-5 h-8 border border-[#ff00aa]/30 transform rotate-[-30deg]"></div>
          <div className="absolute top-16 left-16 w-8 h-8 glass border-[#7a00ff]/30 transform rotate-[-45deg]"></div>
        </div>


        
        <motion.div 
          animate={{ y: [-5, 5, -5], rotateZ: [10, 15, 10] }}
          transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] right-[2%] w-48 h-48"
          style={{ rotateX: -20, rotateY: -10 }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible stroke-[#ff00aa] drop-shadow-[0_0_8px_rgba(255,0,170,0.4)]">
             <path d="M10,50 L50,10 L90,50 L50,90 Z" fill="none" strokeWidth="0.5" />
             <path d="M10,50 L90,50 M50,10 L50,90" fill="none" strokeWidth="0.2" stroke="rgba(255,255,255,0.2)" />
             <path d="M30,30 L70,30 L70,70 L30,70 Z" fill="none" strokeWidth="0.2" strokeDasharray="1,1" />
          </svg>
        </motion.div>

        
        <motion.div 
          animate={{ y: [-12, 12, -12], rotateZ: [-10, -12, -10] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[10%] right-[5%] w-[260px] h-[180px] glass border-[1.5px] border-white/10 backdrop-blur-xl"
          style={{ rotateX: 20, rotateY: 30, skewX: '-10deg', background: 'linear-gradient(135deg, rgba(122,0,255,0.1) 0%, rgba(0,240,255,0.05) 50%, transparent 100%)' }}
        />

        
        <motion.div 
          animate={{ y: [5, -5, 5], rotateZ: [15, 18, 15] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[40%] right-[20%] w-20 h-20"
        >
          <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible stroke-[#7a00ff] drop-shadow-[0_0_6px_rgba(122,0,255,0.3)]">
             <path d="M50,10 L10,90 L90,90 L50,10 Z" fill="none" strokeWidth="0.8" />
             <path d="M10,90 L50,50 L90,90 Z" fill="none" strokeWidth="0.6" strokeDasharray="1,1" />
          </svg>
        </motion.div>

        
        <motion.div 
          animate={{ y: [15, -15, 15], rotateZ: [-15, -12, -15] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[45%] right-[-10%] w-[300px] h-[220px] glass border-[1.5px] border-white/20 shadow-[0_0_50px_rgba(255,0,170,0.2)]"
          style={{ rotateX: 35, rotateY: -25, skewY: '-15deg', background: 'linear-gradient(135deg, rgba(255,0,170,0.15) 0%, rgba(122,0,255,0.1) 50%, transparent 100%)' }}
        />

        
        <motion.div 
          animate={{ y: [10, -10, 10], rotateZ: [5, 10, 5] }}
          transition={{ duration: 8.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[5%] right-0 w-[18rem] h-[18rem] flex items-center justify-center"
          style={{ rotateX: 20, rotateY: -25 }}
        >
          <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full overflow-visible">
            <path d="M30,10 L90,10 L90,70 L30,70 Z" stroke="rgba(168,85,247,0.5)" strokeWidth="0.5" fill="none" />
            <path d="M10,30 L30,10 M70,30 L90,10 M70,90 L90,70 M10,90 L30,70" stroke="rgba(168,85,247,0.6)" strokeWidth="0.5" fill="none" />
            <path d="M10,30 L70,30 L70,90 L10,90 Z" stroke="#00f0ff" strokeWidth="0.5" fill="none" className="drop-shadow-[0_0_5px_#00f0ff]" />
            <path d="M10,30 L70,90 M10,90 L70,30" stroke="#00f0ff" strokeWidth="0.5" fill="none" className="drop-shadow-[0_0_5px_#00f0ff]" />
          </svg>
          <div className="absolute w-[120%] h-6 border border-[#ff00aa] shadow-[0_0_20px_rgba(255,0,170,0.5)]" style={{ transform: 'rotate(-15deg) translateZ(20px)', background: 'linear-gradient(90deg, rgba(122,0,255,0.4), rgba(255,0,170,0.4))' }}></div>
        </motion.div>

        
        <motion.div 
          animate={{ y: [-15, 15, -15], rotateZ: [-25, -20, -25] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[5%] right-[-15%] w-[260px] h-[180px] glass border-[1.5px] border-[#7a00ff]/50 shadow-[0_0_40px_rgba(168,85,247,0.15)]"
          style={{ rotateX: 25, rotateY: 35, skewX: '15deg', background: 'linear-gradient(225deg, rgba(168,85,247,0.15) 0%, transparent 100%)' }}
        />

      </div>

      
      <div className="z-10 flex flex-col items-center justify-center w-full px-10 relative bg-[radial-gradient(ellipse_at_center,_rgba(10,10,15,0.6)_0%,_transparent_60%)] py-20">
        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-[4.5rem] md:text-[7.5rem] lg:text-[9rem] font-black tracking-[-0.03em] leading-[0.85] text-center relative z-20"
        >
          <span className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">DESIGN.</span><br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#ffffff] via-[#00f0ff] to-[#0088ff] drop-shadow-[0_0_20px_rgba(0,240,255,0.4)]">MARKET.</span><br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#7a00ff] via-[#d900ff] to-[#ff00aa] drop-shadow-[0_0_20px_rgba(255,0,170,0.4)]">ELEVATE.</span>
        </motion.h1>
      </div>

      
      <div className="absolute bottom-10 w-full px-10 md:px-20 flex justify-between items-end z-20 pointer-events-none">
        <div className="hidden md:block w-32"></div>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex flex-col items-center text-slate-400 text-xs font-semibold tracking-widest flex-1 uppercase"
        >
          <span>Scroll to Explore</span>
          <motion.svg animate={{ y: [0, 6, 0] }} transition={{ duration: 2, repeat: Infinity }} className="w-5 h-5 mt-2 stroke-slate-400" fill="none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </motion.svg>
        </motion.div>
        
        
      </div>

    </section>
  );
}
