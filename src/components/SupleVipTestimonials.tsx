'use client';

import React from 'react';
import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards';
import { Badge } from '@/components/Badge';

export function SupleVipTestimonials() {
  return (
    <div className="bg-black h-[30rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-black text-white">
          Resultados Que Falam Por Si
        </h2>
        <p className="text-lg md:text-xl text-zinc-400 mt-2">
          Veja o que nossos clientes estão dizendo sobre a Creatina SupleVIP.
        </p>
        <div className="flex justify-center gap-2 mt-4">
          <Badge variant="gold">Compra Segura</Badge>
          <Badge variant="gold">Entrega Rápida</Badge>
          <Badge variant="gold">Qualidade Premium</Badge>
        </div>
      </div>
      <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
    </div>
  );
}

const testimonials = [
  {
    quote:
      '"Achei que meu progresso tinha estagnado. Depois de 3 semanas com a SupleVIP, <span class=\'text-yellow-400 font-bold\'>aumentei 10kg no meu agachamento</span> e sinto muito mais gás no final do treino."',
    name: 'Andre G.',
    title: 'Cliente Verificado',
  },
  {
    quote:
      '"Qualidade surreal! A creatina dissolve 100% e não tem gosto de nada. <span class=\'text-yellow-400 font-bold\'>Minha recuperação muscular melhorou da água para o vinho.</span> Zero arrependimento."',
    name: 'Juliana S.',
    title: 'Cliente Verificado',
  },
  {
    quote:
      '"Confesso que duvidei, mas os resultados são reais. <span class=\'text-yellow-400 font-bold\'>Mais força, menos fadiga e visivelmente mais volume.</span> A SupleVIP agora é item obrigatório na minha rotina."',
    name: 'Ricardo A.',
    title: 'Cliente Verificado',
  },
  {
    quote:
      '"A entrega foi super rápida e o produto é de outro nível. <span class=\'text-yellow-400 font-bold\'>O laudo de pureza no site me passou muita confiança.</span> É bom saber exatamente o que estou consumindo."',
    name: 'Fernanda C.',
    title: 'Cliente Verificado',
  },
  {
    quote:
      '"Sou Personal Trainer e sempre indico a SupleVIP para meus alunos. <span class=\'text-yellow-400 font-bold\'>A qualidade da matéria-prima é indiscutível e os resultados aparecem.</span> É o melhor custo-benefício do mercado."',
    name: 'Lucas M.',
    title: 'Personal Trainer',
  },
];
