
import { Truck, Zap, CheckCircle, RefreshCw, MessageSquare, Clock } from 'lucide-react';
import mpLogo from '@/assets/mp logo.png';
import { useTimer } from '@/contexts/TimerContext';

const MercadoPagoCard = () => {
  const { timeLeft } = useTimer();

  const hours = String(Math.floor((timeLeft / (1000 * 60 * 60)) % 24));
  const minutes = String(Math.floor((timeLeft / 1000 / 60) % 60)).padStart(2, '0');

  return (
    <div className="border rounded-lg p-4 text-sm text-gray-700 space-y-4 bg-white">
      <div className="space-y-2 pb-4 border-b">
        <div className="flex items-center">
          <Truck className="h-5 w-5 mr-2" />
          <span>Envio de 2 a 5 Dias</span>
          <Zap className="h-4 w-4 ml-1 text-green-500 fill-green-500" />
          <span className="font-bold text-green-500 ml-1">FULL</span>
        </div>
        <p className="text-gray-500 ml-7">Comprando dentro das próximos <span className="text-red-500">{hours}h {minutes}min</span></p>
        <div className="flex items-center mt-2">
            <CheckCircle className="h-5 w-5 mr-2 fill-black text-white"/>
            <span>Garantia direto em nossa loja</span>
        </div>
        <div className="flex items-center">
            <RefreshCw className="h-5 w-5 mr-2"/>
            <span>7 dias para trocas e devoluções</span>
        </div>
      </div>

      <div className="flex items-center">
        <img src={mpLogo} alt="MercadoPago" className="h-10 mr-4"/>
        <div>
          <p className="font-bold text-green-600">MercadoPago Líder Platinum</p>
          <p className="text-gray-500">Um dos melhores sites da plataforma!</p>
        </div>
      </div>

      <div className="flex justify-between items-center space-x-1 h-2 mb-4">
        <div className="flex-1 h-full bg-red-200 rounded-l-sm"></div>
        <div className="flex-1 h-full bg-yellow-200"></div>
        <div className="flex-1 h-full bg-yellow-300"></div>
        <div className="flex-1 h-full bg-green-200"></div>
        <div className="flex-1 h-full bg-green-500 rounded-r-sm"></div>
      </div>

      <div className="flex justify-around text-center border-t pt-4">
        <div className="px-2">
          <p className="font-semibold text-2xl">36907</p>
          <p className="text-gray-500 text-xs">Vendas nos últimos 60 dias</p>
        </div>
        <div className="border-l px-4">
          <div className="relative">
            <MessageSquare className="h-8 w-8 mx-auto"/>
            <CheckCircle className="h-4 w-4 fill-green-500 text-white absolute top-0 right-0"/>
          </div>
          <p className="text-gray-500 text-xs mt-1">Presta um bom atendimento</p>
        </div>
        <div className="border-l px-4">
          <div className="relative">
            <Clock className="h-8 w-8 mx-auto"/>
            <CheckCircle className="h-4 w-4 fill-green-500 text-white absolute top-0 right-0"/>
          </div>
          <p className="text-gray-500 text-xs mt-1">Entrega os produtos dentro do prazo</p>
        </div>
      </div>
    </div>
  );
};

export default MercadoPagoCard;
