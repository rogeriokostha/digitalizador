"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5511999999999?text=Olá! Vim pelo site e quero digitalizar minha ideia."
      target="_blank"
      rel="noopener noreferrer"
      id="whatsapp-float-btn"
      className="fixed bottom-8 right-8 z-50 group flex items-center gap-3 glass-card px-5 py-4 border-white/10 hover:border-green-500/50 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
      aria-label="Contato via WhatsApp"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative flex items-center gap-3">
        <div className="relative">
          <MessageCircle className="w-6 h-6 text-green-500 transition-transform duration-500 group-hover:scale-110" />
          <div className="absolute inset-0 bg-green-500/20 blur-lg rounded-full animate-pulse" />
        </div>
        <span className="text-sm font-medium text-white/80 group-hover:text-white transition-colors hidden sm:block tracking-wide">
          Direct WhatsApp
        </span>
      </div>
    </a>
  );
}
