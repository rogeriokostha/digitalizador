"use client";

import { ArrowDown, Sparkles, ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToContact = () => {
    document.querySelector("#contato")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToServices = () => {
    document.querySelector("#servicos")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* --- BACKGROUND SYSTEM --- */}
      <div className="absolute inset-0 z-0">
        {/* Abstract Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-40 scale-110"
        >
          <source src="https://cdn.pixabay.com/video/2023/10/22/186103-877317761_large.mp4" type="video/mp4" />
        </video>

        {/* Scanline Effect */}
        <div className="absolute inset-0 pointer-events-none z-10">
          <div className="scanline" />
        </div>

        {/* Dot Grid Overlay */}
        <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none z-10" />

        {/* Noise Texture */}
        <div 
          className="absolute inset-[-100%] opacity-[0.04] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] animate-[noise_1s_steps(2)_infinite] z-20" 
        />
        
        {/* Animated Grid */}
        <div className="absolute inset-0 bg-grid opacity-30 mask-radial animate-grid-move z-10" />
        
        {/* --- ORBITAL SYSTEM (3D Effect) --- */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none z-20">
          {/* Inner Ring */}
          <div className="absolute inset-0 border border-white/[0.03] rounded-full animate-[spin-slow_40s_linear_infinite]" />
          
          {/* Orbiting Particles */}
          <div className="absolute inset-0 animate-[spin-slow_20s_linear_infinite]">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-primary rounded-full shadow-[0_0_15px_rgba(224,127,0,1)]" />
          </div>
          <div className="absolute inset-[-100px] animate-[reverse-spin_25s_linear_infinite]">
            <div className="absolute bottom-0 right-1/2 translate-x-1/2 w-1 h-1 bg-white/40 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
          </div>
        </div>
        
        {/* Mesh Gradients (Orbs) */}
        <div className="absolute top-[20%] left-[20%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px] animate-pulse z-0" />
        <div className="absolute bottom-[20%] right-[20%] w-[30%] h-[30%] bg-primary-light/10 rounded-full blur-[100px] z-0" />
      </div>

      {/* --- CONTENT --- */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center pt-32 pb-20">
        {/* Animated Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70 text-[11px] font-light mb-12 backdrop-blur-md hover:border-primary/50 transition-colors custom-bezier">
          <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse shadow-[0_0_8px_rgba(224,127,0,0.8)]" />
          <span className="tracking-[0.2em] uppercase">Líder em Transformação Digital</span>
        </div>

        {/* High-End Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-thin tracking-tight leading-[1.15] mb-8">
          <span className="text-gradient">Sua ideia transformada em</span><br />
          <span className="font-semibold text-gradient-primary italic">plataforma de elite.</span>
        </h1>

        {/* Sophisticated Subtitle */}
        <p className="text-base md:text-lg text-white/40 max-w-xl mx-auto leading-relaxed mb-14 font-light">
          Construímos ecossistemas digitais de alto desempenho que convertem visão em valor real, com a agilidade que o mercado exige.
        </p>

        {/* Premium CTAs (Double-Bezel) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button
            onClick={scrollToContact}
            className="group relative"
          >
            <div className="double-bezel hover:scale-105 transition-transform custom-bezier">
              <div className="double-bezel-inner bg-primary hover:bg-primary-light transition-colors text-white font-medium">
                Digitalizar Agora
                <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>
          </button>

          <button
            onClick={scrollToServices}
            className="text-sm font-medium text-white/60 hover:text-white transition-colors flex items-center gap-2 px-6 py-3"
          >
            Ver Portfólio
            <div className="w-1 h-1 rounded-full bg-white/20" />
            <span className="opacity-50">Explorar Soluções</span>
          </button>
        </div>

        {/* Trust Indicators (Premium Minimalism) */}
        <div className="mt-24 pt-12 border-t border-white/5 flex flex-wrap justify-center gap-12 opacity-40 hover:opacity-100 transition-opacity duration-700">
          {[
            { label: "ENTREGA EM", value: "Semanas" },
            { label: "SATISFAÇÃO", value: "98%" },
            { label: "QUALIDADE", value: "Elite" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-[10px] tracking-[0.2em] uppercase mb-2 font-medium">
                {stat.label}
              </p>
              <p className="text-xl font-light text-white italic">
                {stat.value}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Subtle Scroll Hint */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-30">
        <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-white to-transparent" />
        <span className="text-[10px] tracking-[0.3em] uppercase rotate-90 origin-left ml-2">Scroll</span>
      </div>
    </section>
  );
}
