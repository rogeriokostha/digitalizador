"use client";

import { useState } from "react";
import { Code2, Handshake, MessageCircle, ArrowRight } from "lucide-react";

const tabs = [
  {
    id: "ideia",
    icon: Code2,
    label: "Quero desenvolver",
    title: "Transforme sua visão em ativo digital",
    desc:
      "Você tem um conceito disruptivo e precisa de engenharia de precisão para materializá-lo? Especializado em transformar ideias complexas em plataformas de alta performance.",
    features: [
      "Sistemas web de arquitetura complexa",
      "Aplicativos e PWAs otimizados",
      "Experiências digitais de alta conversão",
      "Integrações de IA e automação",
    ],
    cta: "Iniciar Desenvolvimento",
    color: "#E07F00",
  },
  {
    id: "parceria",
    icon: Handshake,
    label: "Parceria",
    title: "Sinergia Estratégica",
    desc:
      "Busco parcerias com mentes visionárias, agências e consultores que valorizam a excelência técnica. Vamos unir forças para entregar projetos extraordinários.",
    features: [
      "Co-desenvolvimento estratégico",
      "Soluções White-label de elite",
      "Modelos de parceria Joint Venture",
      "Escalabilidade para agências",
    ],
    cta: "Propor Sinergia",
    color: "#FF9200",
  },
  {
    id: "outro",
    icon: MessageCircle,
    label: "Outros",
    title: "Diálogos Sob Medida",
    desc:
      "Mentoria, consultoria técnica ou colaborações especiais — estou aberto a diálogos que gerem valor e novas perspectivas tecnológicas.",
    features: [
      "Consultoria de arquitetura",
      "Mentoria de produto digital",
      "Workshops de alta tecnologia",
      "Análise de viabilidade técnica",
    ],
    cta: "Abrir Diálogo",
    color: "#E07F00",
  },
];

export default function ContactTabs() {
  const [activeTab, setActiveTab] = useState("ideia");
  const active = tabs.find((t) => t.id === activeTab)!;
  const Icon = active.icon;

  const scrollToForm = () => {
    document.querySelector("#contato")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-32 bg-black relative">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-primary text-[11px] font-medium tracking-[0.2em] uppercase mb-8">
            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
            Próximos Passos
          </div>
          <h2 className="text-4xl md:text-6xl font-thin tracking-tight text-white leading-tight">
            Escolha seu <span className="font-semibold italic text-gradient-primary">caminho estratégico.</span>
          </h2>
        </div>

        {/* Tabs Selection */}
        <div className="flex flex-col sm:flex-row gap-4 p-2 bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 mb-12">
          {tabs.map((tab) => {
            const TabIcon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 flex items-center justify-center gap-3 px-6 py-4 rounded-2xl font-medium text-sm transition-all duration-500 relative overflow-hidden group ${
                  isActive
                    ? "text-white"
                    : "text-white/40 hover:text-white hover:bg-white/5"
                }`}
              >
                {isActive && (
                  <div className="absolute inset-0 bg-primary opacity-100 transition-opacity duration-500" />
                )}
                <span className="relative z-10 flex items-center gap-3">
                  <TabIcon size={18} className={isActive ? "text-white" : "text-primary/60"} />
                  {tab.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* Content Card */}
        <div className="glass-card p-10 md:p-16 border-white/10 relative overflow-hidden">
          {/* Decorative Background Icon */}
          <div className="absolute -bottom-10 -right-10 opacity-[0.03] text-white pointer-events-none">
            <Icon size={300} strokeWidth={1} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10">
            <div>
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8 border border-white/10"
                style={{ backgroundColor: active.color + "15" }}
              >
                <Icon size={32} style={{ color: active.color }} />
              </div>
              <h3 className="text-3xl font-semibold text-white mb-6 tracking-tight">
                {active.title}
              </h3>
              <p className="text-white/40 text-lg font-light leading-relaxed mb-10">
                {active.desc}
              </p>
              <button
                onClick={scrollToForm}
                className="group inline-flex items-center gap-4 px-8 py-4 bg-primary hover:bg-primary-light text-white font-semibold rounded-full transition-all duration-500 shadow-lg shadow-primary/20"
              >
                {active.cta}
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Features list */}
            <div className="space-y-4">
              {active.features.map((feat, idx) => (
                <div
                  key={feat}
                  className="flex items-center gap-5 p-5 rounded-2xl bg-white/5 border border-white/5 hover:border-primary/20 transition-all duration-500 group"
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0 border border-white/10 group-hover:bg-primary group-hover:border-primary transition-all duration-500"
                  >
                    {idx + 1}
                  </div>
                  <span className="text-white/60 font-light text-base group-hover:text-white transition-colors">{feat}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
