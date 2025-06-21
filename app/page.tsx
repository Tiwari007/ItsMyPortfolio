import AnimatedBackground from '@/components/animations/AnimatedBackground';
import Navigation from '@/components/ui/Navigation';
// import Footer from '@/components/ui/Footer'; // Commented out - not currently used
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
// import ContactSection from '@/components/sections/ContactSection'; // Commented out - not currently used

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Animated Background with cute animals */}
      <AnimatedBackground />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        {/* <ContactSection /> */}
      </main>
      
      {/* Footer */}
      {/* <Footer /> */}
    </div>
  );
}
