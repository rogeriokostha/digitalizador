"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { number: 30, suffix: "+", label: "Projetos Entregues", desc: "Sistemas funcionando em produção" },
  { number: 15, suffix: "+", label: "Clientes Ativos", desc: "Negócios digitais em operação" },
  { number: 4, suffix: "x", label: "Mais Rápido", desc: "Vs. agências tradicionais" },
  { number: 98, suffix: "%", label: "Satisfação", desc: "Dos clientes voltam com mais ideias" },
];

const processSteps = [
  { step: "01", title: "A Visão", desc: "Você traz o conceito, por mais abstrato que seja." },
  { step: "02", title: "Arquitetura", desc: "Eu transformo sua ideia em um blueprint técnico viável." },
  { step: "03", title: "Engenharia", desc: "Desenvolvimento ágil com foco em performance e escala." },
  { step: "04", title: "Impacto", desc: "Produto no ar, otimizado para capturar e converter." },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let start = 0;
          const duration = 1500;
          const step = Math.ceil(target / (duration / 16));
          const timer = setInterval(() => {
            start += step;
            if (start >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(start);
            }
          }, 16);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function AboutService() {
  return (
    <section id="processo" className="py-32 bg-black relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-24 gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-3 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-primary text-[11px] font-medium tracking-[0.2em] uppercase mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              Metodologia de Elite
            </div>
            <h2 className="text-4xl md:text-6xl font-thin tracking-tight text-white leading-tight">
              A engenharia por trás da <br />
              <span className="font-semibold italic text-gradient-primary">sua próxima vitória.</span>
            </h2>
          </div>
          <p className="text-white/40 text-lg font-light max-w-xs leading-relaxed border-l border-white/10 pl-6">
            Eliminamos a fricção entre a ideia e o produto final com um fluxo de trabalho otimizado.
          </p>
        </div>

        {/* Process steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          {processSteps.map((item, idx) => (
            <div key={item.step} className="group relative">
              <div className="glass-card p-8 h-full border-white/5 group-hover:border-primary/30 transition-all duration-700 custom-bezier">
                <span className="text-6xl font-bold text-white/5 group-hover:text-primary/10 transition-colors absolute -top-2 right-4">
                  {item.step}
                </span>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-white/40 text-sm font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="group p-10 glass-card text-center hover:bg-primary/5 transition-all duration-700 border-white/5 hover:border-primary/20"
            >
              <p className="text-4xl md:text-5xl font-semibold text-gradient-primary mb-4">
                <Counter target={stat.number} suffix={stat.suffix} />
              </p>
              <p className="text-white font-medium text-sm mb-2 tracking-wide uppercase">{stat.label}</p>
              <p className="text-white/30 text-xs font-light">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
