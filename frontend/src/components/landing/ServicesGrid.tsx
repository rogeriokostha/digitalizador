"use client";

import { Globe, Layers, Smartphone, Zap, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Landing Pages de Elite",
    desc: "Não apenas sites. Construímos interfaces de alto impacto que capturam a autoridade da sua marca e convertem leads qualificados.",
    tags: ["Awwwards Style", "SEO Pro", "Performance"],
  },
  {
    icon: Layers,
    title: "Ecossistemas Digitais",
    desc: "Sistemas complexos simplificados. De CRMs personalizados a plataformas SaaS escaláveis, com arquitetura robusta.",
    tags: ["Django + Next.js", "Arquitetura Cloud"],
  },
  {
    icon: Smartphone,
    title: "Experiências Mobile",
    desc: "Aplicativos que se sentem nativos. Foco em UX/UI de ponta para iOS e Android com performance excepcional.",
    tags: ["React Native", "Smooth Motion"],
  },
  {
    icon: Zap,
    title: "Inteligência & Automação",
    desc: "Integramos IA e automações inteligentes para eliminar fricção operacional e escalar sua produtividade.",
    tags: ["AI Integration", "n8n", "Workflow"],
  },
];

export default function ServicesGrid() {
  const scrollToContact = () => {
    document.querySelector("#contato")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="servicos" className="py-32 bg-black relative overflow-hidden">
      {/* Decorative background orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-24">
          <div className="inline-flex items-center gap-3 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-primary text-[11px] font-medium tracking-[0.2em] uppercase mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
            Especialidades
          </div>
          <h2 className="text-4xl md:text-6xl font-thin tracking-tight text-white mb-8">
            Soluções para quem <br />
            <span className="font-semibold italic text-gradient-primary">não aceita o comum.</span>
          </h2>
          <p className="text-white/40 text-lg md:text-xl font-light leading-relaxed max-w-2xl">
            Combinamos design de vanguarda com engenharia de precisão para criar produtos que definem categorias.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group glass-card p-10 hover:border-primary/30 transition-all duration-500 custom-bezier cursor-pointer"
                onClick={scrollToContact}
              >
                <div className="flex justify-between items-start mb-12">
                  <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-500 shadow-xl group-hover:shadow-primary/20">
                    <Icon size={28} className="text-white group-hover:scale-110 transition-transform" />
                  </div>
                  <span className="text-white/10 font-outfit font-black text-6xl group-hover:text-primary/10 transition-colors">
                    0{i + 1}
                  </span>
                </div>

                <h3 className="text-2xl font-semibold text-white mb-4 tracking-tight group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-white/40 font-light leading-relaxed mb-8 group-hover:text-white/60 transition-colors">
                  {service.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/30 text-[10px] uppercase tracking-wider font-medium group-hover:border-white/20 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2 text-white/80 font-medium text-sm group/btn border-t border-white/5 pt-8">
                  Discutir projeto
                  <ArrowUpRight
                    size={16}
                    className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-primary"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
