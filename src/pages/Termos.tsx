import { Helmet } from "react-helmet";

const Termos = () => {
  return (
    <>
      <Helmet>
        <title>Termos de Uso | SupleVip</title>
        <meta name="description" content="Termos e condições de uso do site SupleVip." />
      </Helmet>

      <section className="py-12 bg-background">
        <div className="container max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-black mb-8">Termos de Uso</h1>

          <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
            <p className="text-sm text-muted-foreground">Última atualização: Janeiro de 2025</p>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">1. Aceitação dos Termos</h2>
              <p>
                Ao acessar e usar o site SupleVip, você concorda com estes Termos de Uso. Se você não concordar,
                não utilize nossos serviços.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">2. Uso do Site</h2>
              <p>
                Você concorda em usar o site apenas para fins lícitos e de acordo com todas as leis aplicáveis. É
                proibido usar o site para qualquer finalidade ilegal ou não autorizada.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">3. Produtos e Serviços</h2>
              <p>
                Todos os produtos vendidos são complementos alimentares e não substituem orientação médica ou
                nutricional. Consulte um profissional de saúde antes de iniciar qualquer suplementação.
              </p>
              <p className="mt-2">
                Os laudos de pureza são fornecidos conforme recebidos de nossos fornecedores certificados. Não
                fazemos alegações médicas sobre os produtos.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">4. Preços e Pagamentos</h2>
              <p>
                Todos os preços estão em Reais (BRL) e podem ser alterados sem aviso prévio. As condições de
                pagamento e parcelamento estão sujeitas à aprovação das operadoras.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">5. Propriedade Intelectual</h2>
              <p>
                Todo o conteúdo do site (textos, imagens, logos, laudos) é propriedade da SupleVip e protegido por
                leis de direitos autorais. É proibida a reprodução sem autorização.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">6. Limitação de Responsabilidade</h2>
              <p>
                A SupleVip não se responsabiliza por resultados individuais, alergias ou efeitos adversos. O uso dos
                produtos é de total responsabilidade do consumidor, que deve seguir orientação profissional.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">7. Modificações</h2>
              <p>
                Reservamo-nos o direito de modificar estes Termos a qualquer momento. As alterações serão publicadas
                nesta página com a data de atualização.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">8. Contato</h2>
              <p>
                Para dúvidas sobre estes Termos, entre em contato: <br />
                Email: contato@suplevip.com.br
                <br />
                Telefone: (11) 9999-9999
              </p>
            </section>
          </div>
        </div>
      </section>
    </>
  );
};

export default Termos;
