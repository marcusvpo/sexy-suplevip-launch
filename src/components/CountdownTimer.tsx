
import { useTimer } from "../contexts/TimerContext";
import { AlarmClock } from "lucide-react";

const CountdownTimer = () => {
  const { timeLeft } = useTimer();

  const hours = String(Math.floor((timeLeft / (1000 * 60 * 60)) % 24)).padStart(2, "0");
  const minutes = String(Math.floor((timeLeft / 1000 / 60) % 60)).padStart(2, "0");
  const seconds = String(Math.floor((timeLeft / 1000) % 60)).padStart(2, "0");

  return (
    <div className="bg-primary text-black text-center p-3 flex items-center justify-center space-x-4">
      <AlarmClock className="h-8 w-8 animate-bounce" />
      <div className="text-sm sm:text-base font-bold">
        <p className="uppercase">A OFERTA TERMINA EM:</p>
        <div className="tabular-nums tracking-wider text-2xl">
          {hours}:{minutes}:{seconds}
        </div>
        <p className="text-xs font-normal -mt-1">Últimas unidades com preço promocional!</p>
      </div>
    </div>
  );
};

export default CountdownTimer;
