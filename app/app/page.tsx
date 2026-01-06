import NavBar from '../components/NavBar';
import HomeSection from '../components/sections/HomeSection';
import IntroSection from '../components/sections/IntroSection';
import CertificatesSection from '../components/sections/CertificatesSection';
import ProjectsSection from '../components/sections/ProjectsSection';
import ResumeSection from '../components/sections/ResumeSection';
import ContactSection from '../components/sections/ContactSection';

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="snap-y snap-mandatory h-screen overflow-y-scroll">
        <HomeSection />
        <IntroSection />
        <CertificatesSection />
        <ProjectsSection />
        <ResumeSection />
        <ContactSection />
      </main>
    </>
  );
}
