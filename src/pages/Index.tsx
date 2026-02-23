import { useState, useCallback } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PartnersSection from "@/components/PartnersSection";
import FeaturesSection from "@/components/FeaturesSection";
import LiveDemoSection, { type DemoTab } from "@/components/LiveDemoSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import ComparisonSection from "@/components/ComparisonSection";
import PricingSection from "@/components/PricingSection";

import TrustSection from "@/components/TrustSection";
import FAQSection from "@/components/FAQSection";

import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import PageTransition from "@/components/PageTransition";

const Index = () => {
  const [activeTab, setActiveTab] = useState<DemoTab>("text");

  const handleTabSelect = useCallback((tab: DemoTab) => {
    setActiveTab(tab);
  }, []);

  return (
    <PageTransition>
    <div className="min-h-screen bg-background">
      <Navbar />
      <ScrollToTop />
      <HeroSection onDemoTabSelect={handleTabSelect} />
      <PartnersSection />
      <FeaturesSection onDemoTabSelect={handleTabSelect} />
      <LiveDemoSection activeTab={activeTab} onTabChange={handleTabSelect} />
      <HowItWorksSection />
      <ComparisonSection />
      <PricingSection />
      
      <TrustSection />
      <FAQSection />
      
      <Footer />
    </div>
    </PageTransition>
  );
};

export default Index;
