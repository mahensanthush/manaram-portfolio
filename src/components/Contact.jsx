import { useState, useRef } from 'react'; 
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser'; 

export default function Contact() {
  const form = useRef(); 
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    // DEBUG: This will show in your browser console (F12) 
    // to confirm the keys are actually being read.
    console.log("Service ID:", process.env.REACT_APP_EMAILJS_SERVICE_ID);
    console.log("Public Key:", process.env.REACT_APP_EMAILJS_PUBLIC_KEY);

    // CHANGED: Use process.env for Create React App
    emailjs.sendForm(
      process.env.REACT_APP_EMAILJS_SERVICE_ID, 
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID, 
      form.current, 
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY
    )
    .then((result) => {
        console.log("Email sent successfully!");
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
    }, (error) => {
        console.error("EmailJS Error:", error);
        setStatus('idle');
    });
  };

  return (
    <section id="contact" className="relative py-24 px-10 max-w-5xl mx-auto bg-[#0a0a0f] scroll-mt-32">
      
      <div className="text-center max-w-2xl mx-auto mb-16 relative z-20">
        <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight uppercase italic">Get In Touch</h2>
        <p className="text-slate-400 text-xs md:text-sm leading-relaxed font-medium">Ready to elevate your digital presence? Let's discuss your next project.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        
        {/* --- LEFT SIDE: LOGO & CONTACT INFO --- */}
        <div className="space-y-10">
          <div className="flex flex-col items-start gap-6">
            <img 
              src="/assets/logo no bg.png" 
              alt="Manaram Creations Logo" 
              className="h-16 w-auto object-contain"
            />
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs font-medium">
              Based in Sri Lanka. Available for worldwide collaborations in Web Development, Design, and Marketing.
            </p>
          </div>

          <div className="space-y-4">
            <a href="mailto:manaramcreations@gmail.com" className="flex items-center gap-4 group cursor-pointer">
              <span className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#7a00ff] group-hover:bg-[#7a00ff] group-hover:text-white transition-all">✉️</span>
              <span className="text-slate-300 text-xs font-bold tracking-widest group-hover:text-[#00f0ff] transition-colors">manaramcreations@gmail.com</span>
            </a>
            <div className="flex items-center gap-4 group">
              <span className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#00f0ff]">📍</span>
              <span className="text-slate-300 text-xs font-bold tracking-widest">Sri Lanka</span>
            </div>
          </div>
        </div>

        {/* --- RIGHT SIDE: FORM --- */}
        <div className="relative p-8 rounded-2xl bg-white/5 border border-white/5 shadow-2xl overflow-hidden bg-[#0a0a0f]/40 backdrop-blur-3xl">
          <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-[#ff00aa]/10 blur-[100px] pointer-events-none" />

          <AnimatePresence mode="wait">
            {status === 'success' ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
                className="h-[400px] flex flex-col items-center justify-center text-center space-y-4"
              >
                <span className="text-5xl">🚀</span>
                <h3 className="text-2xl font-black text-white uppercase italic">Message Sent!</h3>
                <p className="text-slate-400 text-[11px] font-medium tracking-widest uppercase">We'll get back to you shortly.</p>
              </motion.div>
            ) : (
              <motion.form 
                ref={form} 
                key="form" 
                onSubmit={handleSubmit} 
                className="space-y-6 relative z-10"
              >
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] ml-1">Name</label>
                  <input 
                    name="user_name" 
                    required type="text" value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Mahen..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white text-sm focus:outline-none focus:border-[#00f0ff] transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] ml-1">Email</label>
                  <input 
                    name="user_email" 
                    required type="email" value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="manaramcreations@gmail.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white text-sm focus:outline-none focus:border-[#7a00ff] transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] ml-1">Message</label>
                  <textarea 
                    name="message" 
                    required rows="4" value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Tell us about your project..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white text-sm focus:outline-none focus:border-[#ff00aa] transition-all resize-none"
                  ></textarea>
                </div>

                <button 
                  disabled={status === 'sending'}
                  type="submit" 
                  className="w-full py-4 bg-white text-black font-black uppercase tracking-[0.3em] text-[10px] rounded-xl hover:bg-[#00f0ff] transition-all shadow-[0_10px_20px_rgba(0,0,0,0.2)] disabled:opacity-50"
                >
                  {status === 'sending' ? 'TRANSMITTING...' : 'SEND MESSAGE'}
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
