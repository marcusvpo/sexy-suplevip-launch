import { Footer } from "@/components/Footer";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Trash2, ShoppingCart } from 'lucide-react';
import { useCart } from "@/contexts/CartContext";
import { motion, AnimatePresence } from "framer-motion";
import creatinaProduct from '@/assets/creatina-product.png';

const Cart = () => {
  const { cartItems, updateQuantity, removeFromCart } = useCart();

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const total = subtotal; // Assuming no shipping or taxes for now

  const handleGoToCheckout = () => {
    // In a real scenario, this would redirect to a payment gateway.
    // For this example, we'll just alert.
    alert("Redirecionando para o checkout externo!");
    // window.location.href = 'https://checkout.example.com';
  };

  return (
    <>
      <Helmet>
        <title>Meu Carrinho | SupleVip</title>
      </Helmet>
      <div className="min-h-screen flex flex-col bg-background">
        <main className="flex-grow container py-8 md:py-12">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-black text-foreground">Seu Carrinho</h1>
            <p className="text-lg text-muted-foreground mt-2">Confira os itens e finalize sua compra.</p>
          </div>

          {cartItems.length === 0 ? (
            <div className="text-center bg-card border rounded-lg p-8 md:p-16">
                <ShoppingCart className="mx-auto h-16 w-16 text-muted-foreground mb-4" />
              <h2 className="text-2xl font-bold mb-2">Seu carrinho está vazio</h2>
              <p className="text-muted-foreground mb-6">Parece que você ainda não adicionou nenhum produto.</p>
              <Button asChild>
                <Link to="/produto">Ver produtos</Link>
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
              {/* Itens do Carrinho */}
              <div className="lg:col-span-2 space-y-4">
                <AnimatePresence>
                  {cartItems.map(item => (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: -50, transition: { duration: 0.3 } }}
                      className="flex items-center justify-between bg-card p-4 rounded-lg border"
                    >
                      <div className="flex items-center gap-4 flex-grow">
                        <img src={creatinaProduct} alt={item.name} className="w-20 h-20 rounded-md object-cover" />
                        <div className="flex-grow">
                          <h3 className="font-bold text-lg">{item.name}</h3>
                          <div className="flex items-center gap-2">
                            <p className="text-muted-foreground line-through">R$ 179,90</p>
                            <p className="text-primary font-semibold text-lg">R$ {item.price.toFixed(2).replace('.', ',')}</p>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 md:gap-4">
                        <div className="flex items-center gap-1 border rounded-md p-1">
                          <Button variant="ghost" size="icon" className="h-7 w-7" onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                            -
                          </Button>
                          <span className="font-bold text-md w-6 text-center">{item.quantity}</span>
                          <Button variant="ghost" size="icon" className="h-7 w-7" onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                            +
                          </Button>
                        </div>
                        <Button variant="destructive" size="icon" onClick={() => removeFromCart(item.id)}>
                          <Trash2 className="h-5 w-5" />
                        </Button>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              {/* Resumo do Pedido */}
              <div className="lg:col-span-1 bg-card p-6 rounded-lg border h-fit sticky top-24">
                <h2 className="text-2xl font-bold text-foreground mb-6 border-b pb-4">Resumo do Pedido</h2>
                <div className="space-y-4">
                  <div className="flex justify-between text-lg">
                    <span>Subtotal</span>
                    <span>R$ {subtotal.toFixed(2).replace('.', ',')}</span>
                  </div>
                  <div className="flex justify-between text-lg font-bold border-t pt-4">
                    <span>Total</span>
                    <span>R$ {total.toFixed(2).replace('.', ',')}</span>
                  </div>
                </div>
                <Button
                  className="w-full mt-6 text-lg py-6 bg-green-600 hover:bg-green-700"
                  onClick={handleGoToCheckout}
                >
                  Ir para o Pagamento
                </Button>
                <Link to="/produto" className="block text-center mt-4 text-sm text-muted-foreground hover:text-primary">
                  Continuar Comprando
                </Link>
              </div>
            </div>
          )}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Cart;
