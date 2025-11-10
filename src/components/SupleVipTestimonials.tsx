"use client";

import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export function SupleVipTestimonials() {
  return (
    <div className="h-[30rem] w-full rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden dark:bg-black">
      <h2 className="text-3xl font-bold text-center mb-8 dark:text-white">
        Milhares confiam na SupleVip
        <br />
        <span className="text-lg font-normal text-neutral-500 dark:text-neutral-400">Resultados reais de quem já usa</span>
      </h2>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "O Whey da SupleVip mudou meu treino! Sabor incrível e zero inchaço. Senti uma melhora real na recuperação muscular.",
    name: "Carlos Silva",
    title: "Cliente Verificado",
  },
  {
    quote:
      "Entrega super rápida e a creatina é de altíssima qualidade. A pureza é notável. Recomendo 100%!",
    name: "Juliana Santos",
    title: "Cliente Verificado",
  },
  {
    quote:
      "Finalmente encontrei um pré-treino que dá energia sem me deixar 'elétrico' demais. A SupleVip acertou em cheio no balanceamento.",
    name: "Ricardo Alves",
    title: "Cliente Verificado",
  },
  {
    quote:
      "O colágeno tem feito maravilhas pela minha pele e cabelo. Já estou no terceiro pote e não troco por nada!",
    name: "Maria Oliveira",
    title: "Cliente Verificado",
  },
  {
    quote:
      "Atendimento ao cliente nota 10! Tive uma dúvida sobre meu pedido e foram super atenciosos e rápidos em resolver.",
    name: "Fernanda Costa",
    title: "Cliente Verificado",
  },
];
