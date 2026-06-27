import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import SocialImpact from '../components/SocialImpact';
import Campaign from '../components/Campaign';
import News from '../components/News';
import Gallery from '../components/Gallery';
import VideoSection from '../components/VideoSection';
import MediaCoverage from '../components/MediaCoverage';
import Timeline from '../components/Timeline';
import Publications from '../components/Publications';
import PhotoStory from '../components/PhotoStory';
import Testimonials from '../components/Testimonials';
import JanSamsya from '../components/JanSamsya';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <SocialImpact />
        <Campaign />
        <News />
        <Gallery />
        <VideoSection />
        <MediaCoverage />
        <Timeline />
        <Publications />
        <PhotoStory />
        <Testimonials />
        <JanSamsya />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
