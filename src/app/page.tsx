import { Suspense } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MessagesSection } from "@/components/MessagesSection";
import { ConfettiExplosionWrapper } from "@/components/animations/ConfettiExplosionWrapper";
import { BackgroundBalloons } from "@/components/animations/BackgroundBalloons";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-purple-50">
      <Suspense fallback={null}>
        <ConfettiExplosionWrapper />
        <BackgroundBalloons />
      </Suspense>

      <main>
        <Header />
        <MessagesSection />
        <Footer />
      </main>
    </div>
  );
}
