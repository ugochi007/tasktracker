import { ReactNode } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import GeometricBackground from "./geometric-background";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-brand-black">
      <GeometricBackground />
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
}
