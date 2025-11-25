import { Helmet } from "react-helmet";
import { Badge } from "@/components/Badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "O que é creatina e para que serve?",
      answer:
        "A creatina é um composto natural encontrado principalmente nos músculos e no cérebro. Ela auxilia no fornecimento de energia durante exercícios de alta intensidade, melhora o desempenho físico, aumenta a força muscular e acelera a recuperação pós-treino.",
    },
    {
      question: "Como devo tomar a creatina?",
      answer:
        "A dose recomendada é de 3 a 5 gramas por dia. Pode ser consumida a qualquer momento do dia, preferencialmente com água ou suco. Não é necessário fazer fase de saturação. Consulte um profissional de saúde para orientação personalizada.",
    },
    {
      question: "Preciso fazer ciclo de creatina?",
      answer:
        "Não. A creatina pode ser consumida continuamente sem necessidade de pausas. Estudos mostram que o uso prolongado é seguro e não há necessidade de fazer ciclos de descanso.",
    },
    {
      question: "Creatina causa retenção de líquidos?",
      answer:
        "A creatina pode causar uma leve retenção de líquido intracelular (dentro das células musculares), o que é benéfico para o desempenho. Não é a retenção de líquido subcutânea que causa inchaço visível.",
    },
    {
      question: "Qual a diferença da creatina SupleVip para outras marcas?",
      answer:
        "Nossa creatina é 100% pura, micronizada para melhor absorção, possui laudo de pureza certificado e é livre de aditivos desnecessários. Oferecemos qualidade premium com o melhor custo-benefício do mercado.",
    },
    {
      question: "A creatina é segura?",
      answer:
        "Sim. A creatina é um dos suplementos mais estudados e seguros disponíveis. Milhares de estudos comprovam sua eficácia e segurança para uso em adultos saudáveis. Consulte um médico se tiver condições de saúde pré-existentes.",
    },
    {
      question: "Mulheres podem tomar creatina?",
      answer:
        "Sim! A creatina é segura e eficaz tanto para homens quanto para mulheres. Ela não causa ganho de gordura ou 'inchaço', apenas melhora o desempenho físico e a composição corporal.",
    },
    {
      question: "Quanto tempo leva para ver resultados?",
      answer:
        "Os efeitos da creatina começam a ser percebidos entre 7 a 14 dias de uso consistente. Melhorias no desempenho, força e recuperação são os primeiros sinais. Os resultados variam conforme treino e alimentação.",
    },
    {
      question: "Preciso estar treinando para tomar creatina?",
      answer:
        "Embora a creatina seja mais eficaz quando combinada com exercícios físicos, ela também oferece benefícios cognitivos e pode ser usada por qualquer pessoa saudável. Porém, seus principais benefícios são para praticantes de atividades físicas.",
    },
    {
      question: "Qual é o prazo de entrega?",
      answer:
        "O prazo de entrega varia conforme sua região. Em média, entregas são realizadas entre 5 a 15 dias úteis após a confirmação do pagamento. Você receberá o código de rastreamento por email.",
    },
    {
      question: "Vocês possuem laudo de pureza?",
      answer:
        "Sim! Todos os nossos produtos possuem laudo de pureza emitido por laboratórios certificados. Você pode conferir o laudo completo na página do produto.",
    },
    {
      question: "Como posso entrar em contato?",
      answer:
        "Você pode nos contatar por email (contato@suplevip.com.br) ou WhatsApp (16) 99723-9999. Respondemos em até 24 horas úteis.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Perguntas Frequentes | SupleVip</title>
        <meta
          name="description"
          content="Tire suas dúvidas sobre creatina, como tomar, benefícios, entrega e mais. FAQ completo da SupleVip."
        />
      </Helmet>

      <section className="py-12 bg-background">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <Badge variant="gold" className="mb-4">
              PERGUNTAS FREQUENTES
            </Badge>
            <h1 className="text-3xl md:text-5xl font-black mb-4">
              Dúvidas sobre Creatina?
            </h1>
            <p className="text-lg text-muted-foreground">
              Encontre respostas para as perguntas mais comuns sobre nosso produto.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border/50 rounded-lg px-6 bg-card/30"
              >
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-bold text-foreground">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 text-center p-8 border border-border/50 rounded-lg bg-card/30">
            <h2 className="text-2xl font-bold mb-4">Ainda tem dúvidas?</h2>
            <p className="text-muted-foreground mb-6">
              Nossa equipe está pronta para te ajudar!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:contato@suplevip.com.br"
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                Enviar Email
              </a>
              <a
                href="https://wa.me/5516997239999"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-secondary text-secondary-foreground rounded-lg font-semibold hover:bg-secondary/90 transition-colors"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQ;
