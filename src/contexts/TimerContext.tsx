
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface TimerContextType {
  timeLeft: number;
}

const TimerContext = createContext<TimerContextType | undefined>(undefined);

const getInitialTime = () => {
  const storedTime = localStorage.getItem('countdownTime');
  if (storedTime) {
    const { value, expiry } = JSON.parse(storedTime);
    if (expiry > new Date().getTime()) {
      return value;
    }
  }

  const initialTime = 2 * 60 * 60 * 1000 + 17 * 60 * 1000 + 40 * 1000;
  const expiry = new Date().getTime() + initialTime;
  localStorage.setItem('countdownTime', JSON.stringify({ value: initialTime, expiry }));
  return initialTime;
};

export const TimerProvider = ({ children }: { children: ReactNode }) => {
  const [timeLeft, setTimeLeft] = useState(getInitialTime());

  useEffect(() => {
    if (timeLeft <= 0) {
        localStorage.removeItem('countdownTime');
        return;
    }

    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
          const newTime = prevTime - 1000;
          const storedData = JSON.parse(localStorage.getItem('countdownTime') || '{}');
          localStorage.setItem('countdownTime', JSON.stringify({ ...storedData, value: newTime }));
          return newTime;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  return (
    <TimerContext.Provider value={{ timeLeft }}>
      {children}
    </TimerContext.Provider>
  );
};

export const useTimer = () => {
  const context = useContext(TimerContext);
  if (context === undefined) {
    throw new Error('useTimer must be used within a TimerProvider');
  }
  return context;
};
