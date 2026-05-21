"use client";

import { ExternalLink, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Plataforma de Gestão Imobiliária",
    category: "Sistema Web",
    desc: "CRM completo para corretores e imobiliárias, com gestão de leads, contratos e relatórios em tempo real.",
    tags: ["Django", "Next.js", "PostgreSQL"],
    accent: "#E07F00",
  },
  {
    title: "E-commerce Personalizado",
    category: "Loja Virtual",
    desc: "Plataforma de vendas com carrinho inteligente, integração de pagamento e painel de gestão de pedidos.",
    tags: ["React", "Stripe", "Node.js"],
    accent: "#FF9200",
  },
  {
    title: "Sistema de Agendamentos",
    category: "Aplicativo Web",
    desc: "App para clínicas e profissionais de saúde com agendamento online, lembretes automáticos e prontuário digital.",
    tags: ["Next.js", "Python", "n8n"],
    accent: "#E07F00",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-32 bg-black relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-24 gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-3 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-primary text-[11px] font-medium tracking-[0.2em] uppercase mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              Projetos Recentes
            </div>
            <h2 className="text-4xl md:text-6xl font-thin tracking-tight text-white leading-tight">
              Onde a visão encontra a <br />
              <span className="font-semibold italic text-gradient-primary">execução impecável.</span>
            </h2>
          </div>
          <p className="text-white/40 text-lg font-light max-w-xs leading-relaxed border-l border-white/10 pl-6">
            Transformando conceitos abstratos em ativos digitais de alto valor.
          </p>
        </div>

        {/* Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={project.title}
              className={`group glass-card hover:border-primary/30 transition-all duration-700 custom-bezier ${
                idx === 1 ? "lg:mt-12" : ""
              }`}
            >
              {/* Card visual representation */}
              <div className="h-64 bg-white/5 relative overflow-hidden">
                <div className="absolute inset-0 bg-grid opacity-10" />
                <div
                  className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-700"
                  style={{
                    backgroundImage: `radial-gradient(circle at center, ${project.accent} 0%, transparent 70%)`,
                  }}
                />
                <div className="absolute top-6 right-6">
                  <div className="w-10 h-10 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-500">
                    <ExternalLink size={16} className="text-white" />
                  </div>
                </div>
                {/* Category badge */}
                <div className="absolute bottom-6 left-6">
                  <span className="px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white/60 text-[10px] uppercase tracking-widest font-medium">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-xl font-semibold text-white mb-4 tracking-tight group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-white/40 text-sm font-light leading-relaxed mb-8">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-lg bg-white/5 text-white/30 text-[10px] border border-white/5 uppercase tracking-wider"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-24 text-center">
          <button
            onClick={() =>
              document.querySelector("#contato")?.scrollIntoView({ behavior: "smooth" })
            }
            className="group relative inline-flex items-center gap-4 px-10 py-5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-all duration-500"
          >
            <span className="text-white font-medium text-lg">Inicie sua jornada digital</span>
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg shadow-primary/20">
              <ArrowUpRight size={20} className="text-white" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
