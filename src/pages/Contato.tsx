import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react";
import { Helmet } from "react-helmet";
import { useEffect, useRef } from "react";

const Contato = () => {
  const sectionsRef = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Helmet>
        <title>Contato | SupleVip - Fale Conosco</title>
        <meta
          name="description"
          content="Entre em contato com a SupleVip. Estamos prontos para ajudar com suas dúvidas sobre nossos produtos."
        />
      </Helmet>
      <div className="min-h-screen bg-gradient-section">
        <Header />
        
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4 scroll-fade-in" ref={(el) => el && (sectionsRef.current[0] = el)}>
          <div className="container max-w-6xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-gold-shine bg-clip-text text-transparent animate-fade-in-up">
              FALE CONOSCO
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              Dúvidas sobre o produto? Quer saber mais sobre nosso laudo de pureza? 
              Estamos aqui para ajudar.
            </p>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-16 px-4 scroll-fade-in" ref={(el) => el && (sectionsRef.current[1] = el)}>
          <div className="container max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-card border border-border/40 p-8 rounded-lg text-center hover:shadow-gold transition-all duration-500 hover:scale-105 group">
                <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-6 group-hover:animate-glow">
                  <Phone className="w-8 h-8 text-black-pure" />
                </div>
                <h3 className="text-xl font-bold mb-3">Telefone</h3>
                <p className="text-muted-foreground mb-2">Seg - Sex: 9h às 18h</p>
                <a href="tel:+551140028922" className="text-primary hover:text-gold-glow font-semibold transition-all">
                  (11) 4002-8922
                </a>
              </div>

              <div className="bg-card border border-border/40 p-8 rounded-lg text-center hover:shadow-gold transition-all duration-500 hover:scale-105 group">
                <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-6 group-hover:animate-glow">
                  <MessageSquare className="w-8 h-8 text-black-pure" />
                </div>
                <h3 className="text-xl font-bold mb-3">WhatsApp</h3>
                <p className="text-muted-foreground mb-2">Atendimento rápido</p>
                <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-gold-glow font-semibold transition-all">
                  (11) 99999-9999
                </a>
              </div>

              <div className="bg-card border border-border/40 p-8 rounded-lg text-center hover:shadow-gold transition-all duration-500 hover:scale-105 group">
                <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-6 group-hover:animate-glow">
                  <Mail className="w-8 h-8 text-black-pure" />
                </div>
                <h3 className="text-xl font-bold mb-3">E-mail</h3>
                <p className="text-muted-foreground mb-2">Resposta em até 24h</p>
                <a href="mailto:contato@suplevip.com.br" className="text-primary hover:text-gold-glow font-semibold transition-all">
                  contato@suplevip.com.br
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card border border-border/40 rounded-lg p-8 md:p-12 hover:shadow-gold-strong transition-all duration-500">
              <h2 className="text-3xl font-bold mb-8 text-center">
                Envie sua <span className="text-primary">mensagem</span>
              </h2>
              
              <form className="space-y-6 max-w-2xl mx-auto">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="nome" className="text-sm font-medium">
                      Nome completo *
                    </label>
                    <Input
                      id="nome"
                      placeholder="Seu nome"
                      className="bg-input border-border/40 focus:border-primary transition-all duration-300"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      E-mail *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="seu@email.com"
                      className="bg-input border-border/40 focus:border-primary transition-all duration-300"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="telefone" className="text-sm font-medium">
                    Telefone / WhatsApp
                  </label>
                  <Input
                    id="telefone"
                    placeholder="(11) 99999-9999"
                    className="bg-input border-border/40 focus:border-primary transition-all duration-300"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="assunto" className="text-sm font-medium">
                    Assunto *
                  </label>
                  <Input
                    id="assunto"
                    placeholder="Como podemos ajudar?"
                    className="bg-input border-border/40 focus:border-primary transition-all duration-300"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="mensagem" className="text-sm font-medium">
                    Mensagem *
                  </label>
                  <Textarea
                    id="mensagem"
                    placeholder="Descreva sua dúvida ou sugestão..."
                    rows={6}
                    className="bg-input border-border/40 focus:border-primary transition-all duration-300 resize-none"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  variant="hero"
                  size="xl"
                  className="w-full group"
                >
                  <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                  ENVIAR MENSAGEM
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  * Campos obrigatórios
                </p>
              </form>
            </div>

            {/* Address */}
            <div className="mt-16 text-center scroll-fade-in" ref={(el) => el && (sectionsRef.current[2] = el)}>
              <div className="inline-flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary" />
                <p>
                  São Paulo, SP - Brasil
                </p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Contato;
