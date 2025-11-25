import { Badge } from "@/components/Badge";
import { Helmet } from "react-helmet";

const Trocas = () => {
  return (
    <>
      <Helmet>
        <title>Política de Trocas e Devoluções | SupleVip</title>
        <meta
          name="description"
          content="Política de trocas, devoluções e garantia da SupleVip. Prazo de 7 dias conforme CDC."
        />
      </Helmet>

      <section className="py-12 bg-background">
        <div className="container max-w-4xl">
          <div className="text-center mb-8">
            <Badge variant="gold" className="mb-4">
              GARANTIA E TROCAS
            </Badge>
            <h1 className="text-3xl md:text-4xl font-black mb-4">Política de Trocas e Devoluções</h1>
            <p className="text-lg text-muted-foreground">Compre com confiança. Garantia de 7 dias.</p>
          </div>

          <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">1. Direito de Arrependimento (CDC)</h2>
              <p>
                O cliente tem direito ao arrependimento em até <strong>7 dias corridos</strong> após o recebimento do
                produto, conforme Código de Defesa do Consumidor (CDC).
              </p>
              <p className="mt-2">
                Para exercer esse direito, o produto deve estar <strong>lacrado</strong> e em{" "}
                <strong>condições de comercialização</strong> (embalagem original sem violações).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">2. Como Solicitar Devolução</h2>
              <ol className="list-decimal pl-6 space-y-2">
                <li>
                  Entre em contato conosco em até 7 dias após receber o produto:
                  <br />
                  Email: <strong>contato@suplevip.com.br</strong>
                  <br />
                  WhatsApp: <strong>(11) 9999-9999</strong>
                </li>
                <li>Informe o número do pedido e o motivo da devolução.</li>
                <li>Enviaremos as instruções para envio do produto de volta.</li>
                <li>Após recebermos e validarmos o produto, o reembolso será processado.</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">3. Custos de Envio</h2>
              <p>
                <strong>Arrependimento:</strong> O custo do frete de devolução é por conta do cliente.
              </p>
              <p className="mt-2">
                <strong>Produto com defeito ou erro de envio:</strong> A SupleVip arca com todos os custos de
                devolução e envio de novo produto.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">4. Prazo de Reembolso</h2>
              <p>
                O reembolso será processado em até <strong>10 dias úteis</strong> após a validação do produto
                devolvido. O valor será estornado na mesma forma de pagamento utilizada na compra.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">5. Produto com Defeito</h2>
              <p>
                Caso o produto apresente defeito de fabricação, entre em contato imediatamente. Iremos enviar um novo
                produto sem custos adicionais ou efetuar o reembolso integral.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">6. Produtos Não Aceitos para Devolução</h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>Produtos com embalagem violada ou lacre rompido</li>
                <li>Produtos danificados por mau uso</li>
                <li>Produtos fora do prazo de 7 dias para devolução</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">7. Dúvidas</h2>
              <p>
                Entre em contato conosco para esclarecer qualquer dúvida:
                <br />
                Email: <strong>contato@suplevip.com.br</strong>
                <br />
                WhatsApp: <strong>(11) 9999-9999</strong>
              </p>
            </section>
          </div>
        </div>
      </section>
    </>
  );
};

export default Trocas;
