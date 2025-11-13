
import { Header } from "@/components/Header";
import CountdownTimer from "@/components/CountdownTimer";
import { ReactNode } from "react";

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <CountdownTimer />
      <main>{children}</main>
    </div>
  );
};
