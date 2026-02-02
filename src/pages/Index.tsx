import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ImmersiveSection from "@/components/ImmersiveSection";
import FeaturesSection from "@/components/FeaturesSection";
import UsersSection from "@/components/UsersSection";
import TechnologySection from "@/components/TechnologySection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ImmersiveSection />
        <FeaturesSection />
        <UsersSection />
        <TechnologySection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
