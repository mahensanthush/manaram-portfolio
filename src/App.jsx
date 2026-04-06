import Navbar from './components/Navbar';
import Hero from './components/Hero';
import GrowthPath from './components/GrowthPath';
import EcoBrand from './components/EcoBrand';
import Portfolio from './components/Portfolio'; // <-- Import the newly styled Portfolio
import Contact from './components/Contact';

function App() {
  return (
    <main className="bg-[#0a0a0f] min-h-screen text-white selection:bg-neon-cyan/30 overflow-x-hidden font-sans">
      <Navbar />
      
      <div className="pt-5"> 
        <section id="home"><Hero /></section>
        
        <section id="process"><GrowthPath /></section>
        <section id="work">
          <EcoBrand />
          <Portfolio /> {/* <-- Add it right here to extend the Work section */}
        </section>
        <section id="contact"><Contact /></section>
      </div>

      <footer className="py-12 flex flex-col items-center justify-center border-t border-white/5 bg-[#0a0a0f] mt-10">
        <div className="text-neon-cyan font-black tracking-widest mb-2">MANARAM CREATIONS</div>
        <div className="text-slate-600 text-[10px] tracking-widest uppercase">
          © 2026 • Design. Market. Elevate.
        </div>
      </footer>
    </main>
  );
}

export default App;