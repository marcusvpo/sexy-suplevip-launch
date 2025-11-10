import { ShoppingCart, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="flex items-center gap-2">
            <div className="text-2xl font-black tracking-tight">
              <span className="text-foreground">SUPLE</span>
              <span className="text-primary">VIP</span>
            </div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link to="/produto" className="text-sm font-medium hover:text-primary transition-colors">
            Produtos
          </Link>
          <Link to="/laudo" className="text-sm font-medium hover:text-primary transition-colors">
            Laudo
          </Link>
          <Link to="/sobre" className="text-sm font-medium hover:text-primary transition-colors">
            Sobre
          </Link>
          <Link to="/contato" className="text-sm font-medium hover:text-primary transition-colors">
            Contato
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" className="relative">
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-primary text-black-pure text-xs flex items-center justify-center font-bold">
              0
            </span>
          </Button>
          <Button variant="outline" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};
