"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2, Sparkles } from "lucide-react";

const schema = z.object({
  nome: z.string().min(2, "Nome deve ter ao menos 2 caracteres"),
  email: z.string().email("E-mail inválido"),
  telefone: z.string().min(10, "Telefone inválido").max(20),
  assunto: z.enum(["ideia", "parceria", "outro"], {
    message: "Selecione um assunto",
  }),
  descricao: z.string().min(20, "Descreva melhor sua ideia (mín. 20 caracteres)"),
});

type FormData = z.infer<typeof schema>;

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setStatus("loading");
    setErrorMsg("");
    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api";
      const res = await fetch(`${apiUrl}/core/leads/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json();
        throw new Error(body?.detail || "Erro ao enviar. Tente novamente.");
      }

      setStatus("success");
      reset();
    } catch (err: unknown) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Erro inesperado. Tente novamente.");
    }
  };

  const inputClass = (hasError: boolean) =>
    `w-full px-5 py-4 rounded-2xl bg-white/5 border ${
      hasError ? "border-red-500/50 focus:border-red-500" : "border-white/10 focus:border-primary/50"
    } text-white placeholder:text-white/20 text-sm outline-none transition-all duration-500 backdrop-blur-md`;

  return (
    <section id="contato" className="py-32 bg-black relative overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-primary text-[11px] font-medium tracking-[0.2em] uppercase mb-8">
            <Sparkles size={12} />
            Inicie seu Legado
          </div>
          <h2 className="text-4xl md:text-6xl font-thin tracking-tight text-white leading-tight mb-6">
            Vamos tirar sua <span className="font-semibold italic text-gradient-primary">visão do papel.</span>
          </h2>
          <p className="text-white/40 text-lg font-light max-w-xl mx-auto">
            Consultoria direta e estratégica. Preencha os detalhes abaixo e retornarei com uma proposta de arquitetura.
          </p>
        </div>

        {/* Success state */}
        {status === "success" ? (
          <div className="glass-card p-16 text-center border-primary/20 bg-primary/5">
            <div className="w-24 h-24 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center mx-auto mb-8 animate-bounce">
              <CheckCircle2 size={48} className="text-primary" />
            </div>
            <h3 className="text-3xl font-semibold text-white mb-4 tracking-tight">
              Sinal Recebido!
            </h3>
            <p className="text-white/50 text-lg font-light mb-10 max-w-md mx-auto">
              Sua visão já está em processamento. Entrarei em contato em até 24 horas para darmos o próximo passo.
            </p>
            <button
              onClick={() => setStatus("idle")}
              className="px-10 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium rounded-full transition-all duration-500"
            >
              Enviar outra mensagem
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="glass-card p-8 md:p-14 space-y-8 border-white/10"
          >
            {/* Row: Nome + Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[10px] text-white/40 uppercase tracking-[0.2em] font-medium ml-1">
                  Nome Completo
                </label>
                <input
                  {...register("nome")}
                  placeholder="Ex: João Silva"
                  className={inputClass(!!errors.nome)}
                />
                {errors.nome && (
                  <p className="text-red-400 text-[10px] mt-1 ml-1">{errors.nome.message}</p>
                )}
              </div>
              <div className="space-y-2">
                <label className="text-[10px] text-white/40 uppercase tracking-[0.2em] font-medium ml-1">
                  E-mail Profissional
                </label>
                <input
                  {...register("email")}
                  type="email"
                  placeholder="joao@empresa.com"
                  className={inputClass(!!errors.email)}
                />
                {errors.email && (
                  <p className="text-red-400 text-[10px] mt-1 ml-1">{errors.email.message}</p>
                )}
              </div>
            </div>

            {/* Row: Telefone + Assunto */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[10px] text-white/40 uppercase tracking-[0.2em] font-medium ml-1">
                  Telefone / WhatsApp
                </label>
                <input
                  {...register("telefone")}
                  placeholder="(00) 00000-0000"
                  className={inputClass(!!errors.telefone)}
                />
                {errors.telefone && (
                  <p className="text-red-400 text-[10px] mt-1 ml-1">{errors.telefone.message}</p>
                )}
              </div>
              <div className="space-y-2">
                <label className="text-[10px] text-white/40 uppercase tracking-[0.2em] font-medium ml-1">
                  Natureza do Projeto
                </label>
                <select
                  {...register("assunto")}
                  className={`${inputClass(!!errors.assunto)} cursor-pointer appearance-none`}
                  defaultValue=""
                >
                  <option value="" disabled className="bg-black text-white">Selecione...</option>
                  <option value="ideia" className="bg-black text-white">Quero desenvolver minha ideia</option>
                  <option value="parceria" className="bg-black text-white">Parceria Estratégica</option>
                  <option value="outro" className="bg-black text-white">Outros Assuntos</option>
                </select>
                {errors.assunto && (
                  <p className="text-red-400 text-[10px] mt-1 ml-1">{errors.assunto.message}</p>
                )}
              </div>
            </div>

            {/* Descrição */}
            <div className="space-y-2">
              <label className="text-[10px] text-white/40 uppercase tracking-[0.2em] font-medium ml-1">
                Detalhamento da Visão
              </label>
              <textarea
                {...register("descricao")}
                rows={5}
                placeholder="Descreva o impacto que você deseja criar com este projeto..."
                className={`${inputClass(!!errors.descricao)} resize-none`}
              />
              {errors.descricao && (
                <p className="text-red-400 text-[10px] mt-1 ml-1">{errors.descricao.message}</p>
              )}
            </div>

            {/* Error message */}
            {status === "error" && (
              <div className="flex items-center gap-3 p-4 rounded-2xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm animate-pulse">
                <AlertCircle size={18} className="shrink-0" />
                {errorMsg}
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={status === "loading"}
              className="group relative w-full overflow-hidden rounded-2xl bg-primary py-5 text-white font-semibold transition-all duration-500 hover:bg-primary-light hover:shadow-[0_0_30px_rgba(224,127,0,0.4)] disabled:opacity-50"
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                {status === "loading" ? (
                  <>
                    <Loader2 size={20} className="animate-spin" />
                    Transmitindo Visão...
                  </>
                ) : (
                  <>
                    <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    Enviar Proposta de Contato
                  </>
                )}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]" />
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
