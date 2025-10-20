import DarkBackground from '../components/DarkBackground';
import NavBar from '../components/NavBar';
import HomeSection from '../components/sections/HomeSection';
import IntroSection from '../components/sections/IntroSection';
import ProjectsSection from '../components/sections/ProjectsSection';
import ResumeSection from '../components/sections/ResumeSection';
import ContactSection from '../components/sections/ContactSection';

export default function Home() {
  return (
    <>
      <DarkBackground />
      <NavBar />
      <main className="snap-y snap-mandatory h-screen overflow-y-scroll">
        <HomeSection />
        <IntroSection />
        <ProjectsSection />
        <ResumeSection />
        <ContactSection />
      </main>
    </>
  );
}
