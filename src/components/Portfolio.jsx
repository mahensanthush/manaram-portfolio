import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Internal Slider Component for Multi-image Projects ---
const ProjectSlider = ({ images }) => {
  const [idx, setIdx] = useState(0);

  const next = (e) => {
    e.stopPropagation();
    setIdx((prev) => (prev + 1) % images.length);
  };

  const prev = (e) => {
    e.stopPropagation();
    setIdx((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full h-full group/slider">
      <AnimatePresence mode="wait">
        <motion.img
          key={idx}
          src={images[idx]}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </AnimatePresence>

      {/* Mini Navigation Arrows */}
      {images.length > 1 && (
        <div className="absolute inset-x-2 top-1/2 -translate-y-1/2 flex justify-between opacity-0 group-hover/slider:opacity-100 transition-opacity z-20">
          <button onClick={prev} className="w-6 h-6 rounded-full bg-black/60 text-white flex items-center justify-center text-xs border border-white/10 hover:bg-[#00f0ff]">‹</button>
          <button onClick={next} className="w-6 h-6 rounded-full bg-black/60 text-white flex items-center justify-center text-xs border border-white/10 hover:bg-[#00f0ff]">›</button>
        </div>
      )}

      {/* Progress Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1 z-20">
        {images.map((_, i) => (
          <div key={i} className={`h-1 rounded-full transition-all ${idx === i ? 'w-4 bg-[#00f0ff]' : 'w-1 bg-white/30'}`} />
        ))}
      </div>
    </div>
  );
};

export default function Portfolio() {
  const [filter, setFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'flyer', label: 'Flyer Design' },
    { id: 'web', label: 'Web Solutions' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'branding', label: 'Branding' }
  ];

  const projects = [
    {
      id: 1,
      title: "Cable House Flyers",
      category: "flyer",
      images: ["/assets/cable.png", "/assets/cable r.png", "/assets/cable 2.png"],
      client: "Cable House",
      tags: ["Print", "Visual Design"]
    },
    {
      id: 2,
      title: "Unichella Flyers",
      category: "flyer",
      images: ["/assets/unichella 1.png", "/assets/unichella 2.png", "/assets/unichella 3.png"],
      client: "Unichella",
      tags: ["Promotional", "Graphics"]
    },
    {
      id: 3,
      title: "UOK Leo App",
      category: "mobile",
      images: ["https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800"],
      client: "UOK Leo",
      tags: ["Flutter", "Firebase"]
    },
    {
      id: 4,
      title: "Cane Industry Hub",
      category: "web",
      images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800"],
      client: "Cane Hub",
      tags: ["React", "E-commerce"]
    },
    {
      id: 5,
      title: "Cable House Web",
      category: "web",
      images: ["https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800"],
      client: "Cable House",
      tags: ["Web Dev", "Full Stack"]
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="portfolio" className="relative py-24 px-10 max-w-7xl mx-auto bg-[#0a0a0f] scroll-mt-32">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-16 relative z-20">
        <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight uppercase italic">Selected Work</h2>
        <p className="text-slate-400 text-xs md:text-sm leading-relaxed font-medium">Archive of technical and creative solutions.</p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-16">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setFilter(cat.id)}
            className={`text-[10px] font-bold tracking-[0.3em] uppercase transition-all duration-300 relative pb-2 ${
              filter === cat.id ? 'text-[#00f0ff]' : 'text-slate-600 hover:text-white'
            }`}
          >
            {cat.label}
            {filter === cat.id && (
              <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 w-full h-[2px] bg-[#00f0ff]" />
            )}
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="group relative aspect-[4/5] overflow-hidden rounded-xl bg-[#11111a] border border-white/5"
            >
              {/* SLIDER COMPONENT */}
              <ProjectSlider images={project.images} />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent opacity-90 pointer-events-none flex flex-col justify-end p-8">
                <span className="text-[9px] font-bold text-[#00f0ff] tracking-[0.3em] uppercase block mb-2">{project.tags.join(' / ')}</span>
                <h3 className="text-2xl font-black text-white tracking-tighter uppercase italic">{project.title}</h3>
                <p className="text-slate-500 text-[10px] uppercase tracking-widest mt-1">Client: {project.client}</p>
                <div className="h-[1px] w-0 group-hover:w-full bg-[#00f0ff]/50 mt-4 transition-all duration-700" />
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}