import type { ReactNode } from "react";
import BottomNav from "./BottomNav";
import "./layout.css";

type AppLayoutProps = {
  children: ReactNode;
};

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="L-App">
      <div className="L-App__screen">
        <main className="L-App__main">{children}</main>
        <BottomNav />
      </div>
    </div>
  );
}
