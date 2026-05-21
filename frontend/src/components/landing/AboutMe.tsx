"use client";

import { CheckCircle2, Award, Zap, Code2 } from "lucide-react";

const highlights = [
  "Atendimento direto, sem intermediários",
  "Foco total em resultado e conversão",
  "Tecnologias modernas e escaláveis",
  "Suporte pós-entrega incluído",
];

export default function AboutMe() {
  return (
    <section id="sobre" className="py-32 bg-black relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          {/* Visual */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-[2.5rem] overflow-hidden glass-card aspect-[4/5] max-w-md mx-auto group">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-30 group-hover:opacity-50 transition-opacity duration-700" />
              
              {/* Pattern Overlay */}
              <div className="absolute inset-0 dot-grid opacity-10 pointer-events-none" />
              
              {/* Center content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center">
                <div className="relative mb-8">
                  <div className="w-40 h-40 rounded-full bg-black border border-white/10 flex items-center justify-center shadow-2xl transition-transform duration-700 group-hover:scale-110">
                    <span className="text-7xl font-thin text-white tracking-tighter">R</span>
                    <div className="absolute inset-0 rounded-full border border-primary/50 animate-pulse" />
                  </div>
                  {/* Orbital decorative icons */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full glass-card flex items-center justify-center text-primary animate-bounce">
                    <Zap size={20} />
                  </div>
                </div>
                
                <h3 className="text-3xl font-semibold text-white mb-3 tracking-tight">
                  Rogério Kotha
                </h3>
                <p className="text-primary text-sm font-medium tracking-[0.2em] uppercase mb-6">
                  Arquiteto de Soluções
                </p>
                <div className="h-[1px] w-12 bg-white/20 mb-6 mx-auto" />
                <p className="text-white/40 text-sm font-light leading-relaxed max-w-[240px]">
                  Materializando visões complexas em ecossistemas digitais de elite desde 2018.
                </p>
              </div>

              {/* Floating stats badges */}
              <div className="absolute top-10 right-10 glass-card px-5 py-3 text-center border-white/10">
                <p className="text-2xl font-bold text-white tracking-tighter">5+</p>
                <p className="text-white/30 text-[9px] uppercase tracking-widest font-medium">Anos XP</p>
              </div>
              <div className="absolute bottom-10 left-10 glass-card px-5 py-3 text-center border-white/10">
                <p className="text-2xl font-bold text-primary tracking-tighter">30+</p>
                <p className="text-white/30 text-[9px] uppercase tracking-widest font-medium">Projetos</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-3 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-primary text-[11px] font-medium tracking-[0.2em] uppercase mb-8">
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              Expertise Técnica
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-thin tracking-tight text-white leading-tight mb-8">
              O parceiro que pensa <br />
              <span className="font-semibold italic text-gradient-primary">como o seu negócio.</span>
            </h2>
            
            <p className="text-white/50 text-xl font-light leading-relaxed mb-8">
              Não entrego apenas código. Entrego ativos digitais projetados para gerar valor imediato e escala sustentável.
            </p>
            
            <p className="text-white/40 text-base font-light leading-relaxed mb-12 border-l border-white/10 pl-6">
              Minha abordagem une arquitetura de software de alta performance com uma visão estratégica de produto. O resultado? Ferramentas que não apenas funcionam, mas impulsionam sua empresa.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-4 group">
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-primary/50 transition-colors">
                    <CheckCircle2 size={16} className="text-primary" />
                  </div>
                  <span className="text-white/60 text-sm font-light group-hover:text-white transition-colors">{item}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() =>
                document.querySelector("#contato")?.scrollIntoView({ behavior: "smooth" })
              }
              className="group relative inline-flex items-center gap-4 px-10 py-5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-all duration-500"
            >
              <span className="text-white font-medium">Vamos elevar seu projeto</span>
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg shadow-primary/20">
                <Code2 size={20} className="text-white" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
