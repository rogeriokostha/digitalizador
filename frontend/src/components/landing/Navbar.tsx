"use client";

import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Portfólio", href: "#portfolio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-6 pointer-events-none">
      <div 
        className={`
          flex items-center justify-between w-full max-w-5xl h-14 px-4 
          rounded-full border transition-all duration-700 pointer-events-auto
          ${scrolled 
            ? "bg-black/60 backdrop-blur-xl border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)] py-2" 
            : "bg-transparent border-transparent py-4"
          }
        `}
      >
        {/* Logo */}
        <div 
          className="flex items-center gap-3 cursor-pointer group px-2" 
          onClick={() => handleNavClick("#inicio")}
        >
          <div className="relative w-8 h-8 overflow-hidden rounded-lg border border-white/10 group-hover:border-primary/50 transition-colors">
            <Image
              src="/logo.png"
              alt="Logo"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          <span className="font-outfit font-semibold text-lg tracking-tight text-white/90 group-hover:text-white transition-colors">
            Digitalizador
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1 bg-white/[0.03] rounded-full p-1 border border-white/[0.05]">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="px-4 py-1.5 text-[13px] font-light text-white/60 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300 custom-bezier"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <button
            onClick={() => handleNavClick("#contato")}
            className="group relative flex items-center gap-2 px-5 py-2 bg-primary hover:bg-primary-light text-white text-[13px] font-medium rounded-full transition-all duration-300 shadow-lg shadow-primary/20 hover:shadow-primary/40"
          >
            Começar Projeto
            <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-white/70 hover:text-white transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`
          fixed inset-x-6 top-24 md:hidden transition-all duration-500 custom-bezier
          ${mobileOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"}
          glass-card p-6 z-40
        `}
      >
        <nav className="flex flex-col gap-4">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-left text-white/60 font-light hover:text-white transition-colors py-2 border-b border-white/5"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick("#contato")}
            className="mt-4 px-6 py-4 bg-primary text-white font-medium rounded-2xl text-center shadow-xl shadow-primary/20"
          >
            Digitalizar minha ideia
          </button>
        </nav>
      </div>
    </header>
  );
}
