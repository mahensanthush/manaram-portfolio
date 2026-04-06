import { motion } from 'framer-motion';

export default function Navbar() {
  
  // Smooth scroll helper function
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav 
      initial={{ y: -50, opacity: 0 }} 
      animate={{ y: 0, opacity: 1 }} 
      className="fixed top-0 w-full z-[100] flex justify-between items-center px-10 py-6 bg-[#0a0a0f]/80 backdrop-blur-md border-b border-white/5"
    >
      {/* Left: Logo (Added relative z-10 to keep it clickable) */}
      <div 
        onClick={() => scrollTo('home')}
        className="relative z-10 text-[10px] uppercase tracking-widest leading-tight text-white cursor-pointer hover:opacity-80 transition-opacity"
      >
        <div className="flex items-center">
  <img 
    src="/assets/logo no bg.png" 
    alt="Manaram Creations" 
    className="h-10 w-auto object-contain hover:opacity-80 transition-opacity cursor-pointer"
    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
  />
</div>
      </div>
      
      {/* Center: Navigation Links (Absolutely positioned to true screen center) */}
      <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 gap-8 text-[10px] font-bold tracking-[0.2em] uppercase text-slate-400">
        <button onClick={() => scrollTo('home')} className="hover:text-white transition-colors tracking-[0.2em]">DESIGN</button>
        <button onClick={() => scrollTo('process')} className="hover:text-white transition-colors tracking-[0.2em]">MARKET</button>
        <button onClick={() => scrollTo('work')} className="hover:text-[#00f0ff] transition-colors tracking-[0.2em]">CASE STUDIES</button>
        <button onClick={() => scrollTo('portfolio')} className="hover:text-white transition-colors tracking-[0.2em]">PROJECTS</button>
        
      </div>

      {/* Right: Contact Us Button (Added relative z-10 to keep it clickable) */}
      <div className="relative z-10 flex gap-4 items-center">
        <button 
          onClick={() => scrollTo('contact')}
          className="glass border border-[#00f0ff]/50 text-[#00f0ff] text-[10px] font-bold tracking-[0.2em] px-6 py-2 rounded shadow-[0_0_15px_rgba(0,240,255,0.2)] hover:bg-[#00f0ff]/10 transition-colors"
        >
          [ CONTACT US ]
        </button>
      </div>
    </motion.nav>
  );
}