import Navbar from '../components/Shared/Navbar/Navbar';
import Hero from '../components/Home/Hero/Hero';
import About from '../components/Home/About/About';
import SocialImpact from '../components/Home/SocialImpact/SocialImpact';
import Campaign from '../components/Home/Campaign/Campaign';
import News from '../components/Home/News/News';
import Gallery from '../components/Home/Gallery/Gallery';
import VideoSection from '../components/Home/Video/VideoSection';
import MediaCoverage from '../components/Home/MediaCoverage/MediaCoverage';
import Timeline from '../components/Home/Timeline/Timeline';
import Publications from '../components/Home/Publications/Publications';
import PhotoStory from '../components/Home/PhotoStory/PhotoStory';
import Testimonials from '../components/Home/Testimonials/Testimonials';
import JanSamsya from '../components/Home/JanSamsya/JanSamsya';
import Contact from '../components/Home/Contact/Contact';
import Footer from '../components/Shared/Footer/Footer';

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
