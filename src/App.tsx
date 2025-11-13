
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./contexts/CartContext";
import { TimerProvider } from "./contexts/TimerContext";
import { MainLayout } from "./components/MainLayout";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import Produto from "./pages/Produto";
import Laudo from "./pages/Laudo";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";
import Cart from "./pages/Cart";
import Termos from "./pages/Termos";
import Privacidade from "./pages/Privacidade";
import Trocas from "./pages/Trocas";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <CartProvider>
      <TimerProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<MainLayout><Index /></MainLayout>} />
              <Route path="/produto" element={<MainLayout><Produto /></MainLayout>} />
              <Route path="/laudo" element={<MainLayout><Laudo /></MainLayout>} />
              <Route path="/sobre" element={<MainLayout><Sobre /></MainLayout>} />
              <Route path="/contato" element={<MainLayout><Contato /></MainLayout>} />
              <Route path="/cart" element={<MainLayout><Cart /></MainLayout>} />
              <Route path="/termos" element={<MainLayout><Termos /></MainLayout>} />
              <Route path="/privacidade" element={<MainLayout><Privacidade /></MainLayout>} />
              <Route path="/trocas" element={<MainLayout><Trocas /></MainLayout>} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </TimerProvider>
    </CartProvider>
  </QueryClientProvider>
);

export default App;
