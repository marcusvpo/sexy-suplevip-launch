import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="text-2xl font-black tracking-tight mb-4">
              <span className="text-foreground">SUPLE</span>
              <span className="text-primary">VIP</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Suplementos premium com transparência. Laudo de pureza disponível.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-bold mb-4 text-primary">Institucional</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/sobre" className="hover:text-primary transition-colors">
                  Quem Somos
                </Link>
              </li>
              <li>
                <Link to="/laudo" className="hover:text-primary transition-colors">
                  Laudo & Certificado
                </Link>
              </li>
              <li>
                <Link to="/termos" className="hover:text-primary transition-colors">
                  Termos de Uso
                </Link>
              </li>
              <li>
                <Link to="/privacidade" className="hover:text-primary transition-colors">
                  Política de Privacidade
                </Link>
              </li>
            </ul>
          </div>

          {/* Atendimento */}
          <div>
            <h3 className="font-bold mb-4 text-primary">Atendimento</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/trocas" className="hover:text-primary transition-colors">
                  Trocas e Devoluções
                </Link>
              </li>
              <li>
                <Link to="/contato" className="hover:text-primary transition-colors">
                  Fale Conosco
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-primary transition-colors">
                  Perguntas Frequentes
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-bold mb-4 text-primary">Contato</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <span>(11) 9999-9999</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <span>contato@suplevip.com.br</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary mt-0.5" />
                <span>São Paulo, SP - Brasil</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/40 mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© 2025 SupleVip. Todos os direitos reservados. CNPJ: XX.XXX.XXX/0001-XX</p>
          <p className="mt-2 text-xs">
            Este produto não substitui orientação médica profissional. Consulte um nutricionista ou médico antes de iniciar qualquer suplementação.
          </p>
        </div>
      </div>
    </footer>
  );
};
