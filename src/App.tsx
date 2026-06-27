
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Home from './pages/Home';
import GalleryPage from './pages/GalleryPage';
import VideoPage from './pages/VideoPage';
import LoadingScreen from './components/LoadingScreen';
import ScrollProgress from './components/ScrollProgress';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import BackToTop from './components/BackToTop';
import BirdAnimation from './components/BirdAnimation';
import LeafAnimation from './components/LeafAnimation';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <LoadingScreen />}
      <ScrollProgress />
      <BirdAnimation />
      <LeafAnimation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/videos" element={<VideoPage />} />
      </Routes>
      <FloatingWhatsApp />
      <BackToTop />
    </>
  );
}

export default App;
