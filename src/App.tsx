import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Home from './pages/Home';
import NewsDetail from './pages/NewsDetail';
import GalleryPage from './pages/GalleryPage';
import VideoPage from './pages/VideoPage';
import LoadingScreen from './components/Creative/LoadingScreen';
import ScrollProgress from './components/Creative/ScrollProgress';
import FloatingWhatsApp from './components/Creative/FloatingWhatsApp';
import BackToTop from './components/Creative/BackToTop';
import BirdAnimation from './components/Creative/BirdAnimation';
import LeafAnimation from './components/Creative/LeafAnimation';

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
        <Route path="/news/:id" element={<NewsDetail />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/videos" element={<VideoPage />} />
      </Routes>
      <FloatingWhatsApp />
      <BackToTop />
    </>
  );
}

export default App;
