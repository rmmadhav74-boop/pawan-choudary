import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import SocialImpact from '../components/SocialImpact/SocialImpact';
import Campaign from '../components/Campaign/Campaign';
import News from '../components/News/News';
import Gallery from '../components/Gallery/Gallery';
import VideoSection from '../components/Video/VideoSection';
import MediaCoverage from '../components/MediaCoverage/MediaCoverage';
import Timeline from '../components/Timeline/Timeline';
import Publications from '../components/Publications/Publications';
import PhotoStory from '../components/PhotoStory/PhotoStory';
import Testimonials from '../components/Testimonials/Testimonials';
import JanSamsya from '../components/JanSamsya/JanSamsya';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';

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
