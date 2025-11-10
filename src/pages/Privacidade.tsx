import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Helmet } from "react-helmet";

const Privacidade = () => {
  return (
    <>
      <Helmet>
        <title>Política de Privacidade | SupleVip</title>
        <meta name="description" content="Política de privacidade e proteção de dados da SupleVip." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <section className="py-12 bg-background">
          <div className="container max-w-4xl">
            <h1 className="text-3xl md:text-4xl font-black mb-8">Política de Privacidade</h1>

            <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
              <p className="text-sm text-muted-foreground">Última atualização: Janeiro de 2025</p>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-3">1. Coleta de Informações</h2>
                <p>Coletamos informações pessoais quando você:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Cria uma conta no site</li>
                  <li>Realiza uma compra</li>
                  <li>Entra em contato conosco</li>
                  <li>Assina nossa newsletter</li>
                </ul>
                <p className="mt-2">
                  As informações coletadas incluem: nome, email, telefone, endereço de entrega, CPF e dados de
                  pagamento (processados por gateways seguros).
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-3">2. Uso das Informações</h2>
                <p>Usamos suas informações para:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Processar e entregar seus pedidos</li>
                  <li>Enviar comunicações sobre seu pedido</li>
                  <li>Melhorar nossos produtos e serviços</li>
                  <li>Enviar ofertas e novidades (com seu consentimento)</li>
                  <li>Cumprir obrigações legais</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-3">3. Compartilhamento de Dados</h2>
                <p>Não vendemos suas informações pessoais. Compartilhamos dados apenas com:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Transportadoras para entrega</li>
                  <li>Gateways de pagamento (Stripe, Mercado Pago, etc.)</li>
                  <li>Autoridades quando exigido por lei</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-3">4. Cookies</h2>
                <p>
                  Usamos cookies para melhorar sua experiência no site, lembrar preferências e analisar tráfego. Você
                  pode desativar cookies nas configurações do navegador.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-3">5. Segurança</h2>
                <p>
                  Implementamos medidas de segurança para proteger suas informações, incluindo criptografia SSL,
                  armazenamento seguro e controle de acesso.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-3">6. Seus Direitos (LGPD)</h2>
                <p>Você tem o direito de:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Acessar seus dados pessoais</li>
                  <li>Corrigir dados incorretos</li>
                  <li>Solicitar exclusão de dados</li>
                  <li>Revogar consentimento para comunicações</li>
                </ul>
                <p className="mt-2">
                  Para exercer seus direitos, entre em contato: <strong>contato@suplevip.com.br</strong>
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-3">7. Alterações na Política</h2>
                <p>
                  Podemos atualizar esta política periodicamente. Alterações serão publicadas nesta página com a data
                  de atualização.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-3">8. Contato</h2>
                <p>
                  Dúvidas sobre privacidade? Fale conosco:
                  <br />
                  Email: contato@suplevip.com.br
                  <br />
                  Telefone: (11) 9999-9999
                </p>
              </section>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Privacidade;
