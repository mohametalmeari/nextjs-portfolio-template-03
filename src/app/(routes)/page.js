import AchievementsSection from "@/components/AchievementsSection";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";
import ExperienceSection from "@/components/ExperienceSection";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <HeroSection />
      <ServicesSection />
      <ExperienceSection />
      <AchievementsSection />
      <ProjectsSection />
      <TestimonialsSection />
      <ContactSection />
      <BlogSection />
    </main>
  );
}
