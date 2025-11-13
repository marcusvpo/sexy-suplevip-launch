import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Helmet } from "react-helmet";
import { HeroSection } from "@/components/sections/HeroSection";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { ProductShowcase } from "@/components/sections/ProductShowcase";
import { SupleVipTestimonials } from "@/components/SupleVipTestimonials";
import { CTASection } from "@/components/sections/CTASection";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>SupleVip - Creatina 100% Pura com Laudo | Transforme Seu Corpo</title>
        <meta
          name="description"
          content="Creatina monohidratada micronizada 300g. 100% pura com laudo de pureza disponível. Rende 100 doses. Resultados garantidos ou dinheiro de volta."
        />
        <meta property="og:title" content="SupleVip - Creatina 100% Pura | Transforme Seu Corpo" />
        <meta property="og:description" content="A creatina mais pura e transparente do Brasil. Laudo disponível. Rende 100 doses e dissolve fácil." />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />
        <HeroSection />
        <BenefitsSection />
        <ProductShowcase />
        
        {/* Social Proof Section */}
        <section className="relative py-16 md:py-24 bg-white dark:bg-black">
          <div className="container">
            <SupleVipTestimonials />
          </div>
        </section>

        <CTASection />
        <Footer />
      </div>
    </>
  );
};

export default Index;
