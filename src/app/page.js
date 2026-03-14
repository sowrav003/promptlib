import AboutSection from "@/components/about/about-section";
import CategoriesSection from "@/components/categories/categories-section";
import Hero from "@/components/hero/Hero";
import TrendingPrompts from "@/components/prompts/trending-prompts";
import UpcomingPage from "@/components/upcoming/UpcomingPage";

export default function Home() {
  return (
    <>
      <Hero />
      <CategoriesSection />
      <TrendingPrompts />
      <UpcomingPage />
      <AboutSection />
    </>
  );
}
