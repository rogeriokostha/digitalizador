"use client";

import Image from "next/image";
import { Heart, Link2, GitBranch, Camera, ArrowUpRight } from "lucide-react";

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Portfólio", href: "#portfolio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

const socials = [
  { icon: Camera, href: "#", label: "Instagram" },
  { icon: Link2, href: "#", label: "LinkedIn" },
  { icon: GitBranch, href: "#", label: "GitHub" },
];

export default function Footer() {
  const handleNav = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-black border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-30" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-8 group cursor-pointer" onClick={() => handleNav("#inicio")}>
              <div className="relative w-10 h-10 overflow-hidden rounded-xl border border-white/10 group-hover:border-primary/50 transition-colors">
                <Image
                  src="/logo.png"
                  alt="Digitalizador"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="font-outfit font-bold text-2xl tracking-tighter text-white">
                Digitalizador
              </span>
            </div>
            <p className="text-white/40 text-lg font-light leading-relaxed mb-10 max-w-sm">
              Elevando o padrão digital de negócios visionários através de design de elite e engenharia de precisão.
            </p>
            {/* Socials */}
            <div className="flex gap-4">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-primary hover:border-primary/50 hover:bg-primary/5 transition-all duration-500"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-outfit font-semibold mb-8 text-xs uppercase tracking-[0.2em] opacity-50">
              Mapa do Site
            </h4>
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNav(link.href)}
                    className="text-white/40 hover:text-white text-sm font-light transition-colors cursor-pointer flex items-center gap-2 group"
                  >
                    <div className="w-1 h-1 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-white font-outfit font-semibold mb-8 text-xs uppercase tracking-[0.2em] opacity-50">
              Contato
            </h4>
            <div className="space-y-4 text-sm font-light text-white/40 mb-10">
              <p className="hover:text-white transition-colors cursor-pointer">contato@digitalizador.com.br</p>
              <p>São Paulo, SP — Brasil</p>
            </div>
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white text-[13px] font-medium rounded-full transition-all duration-500"
            >
              Falar com Especialista
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-primary" />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-24 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-white/20 text-[10px] tracking-widest uppercase font-medium">
            © {new Date().getFullYear()} Digitalizador de Ideias. Crafted for Excellence.
          </p>
          <div className="flex items-center gap-6">
             <p className="text-white/20 text-[10px] tracking-widest uppercase font-medium flex items-center gap-2">
              Made with <Heart size={10} className="text-primary animate-pulse" /> by RK
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
