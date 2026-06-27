import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import { videos, videoCategories } from '../data/videos';
import { SectionHeader } from '../components/UI';

export default function VideoPage() {
  const [activeFilter, setActiveFilter] = useState('सभी');

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const filtered = activeFilter === 'सभी'
    ? videos
    : videos.filter(v => v.category === activeFilter);

  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 120, paddingBottom: 80, background: '#F9FAFB', minHeight: '100vh' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
          <div style={{ marginBottom: 24 }}>
            <Link to="/#videos" style={{ color: '#2E7D32', textDecoration: 'none', fontFamily: "'Noto Sans Devanagari', sans-serif" }}>
              ← होम पर वापस
            </Link>
          </div>

          <SectionHeader
            tag="सम्पूर्ण वीडियो"
            title="वीडियो गैलरी"
            subtitle="डॉ. पवन चौधरी के सभी कार्यक्रमों और भाषणों के वीडियो देखें।"
            center
          />

          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', justifyContent: 'center', marginBottom: 40 }}>
            {videoCategories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                style={{
                  padding: '8px 20px',
                  borderRadius: 999,
                  border: activeFilter === cat ? 'none' : '1.5px solid #E5E7EB',
                  background: activeFilter === cat ? '#2E7D32' : '#FFFFFF',
                  color: activeFilter === cat ? '#FFFFFF' : '#374151',
                  fontFamily: "'Noto Sans Devanagari', sans-serif",
                  fontSize: 15,
                  fontWeight: 500,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 20,
          }} className="video-grid">
            <AnimatePresence>
              {filtered.map((video) => (
                <motion.div
                  key={video.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="video-placeholder"
                  style={{ height: 220, borderRadius: 16, position: 'relative', cursor: 'pointer' }}
                >
                  <div style={{
                    position: 'absolute', inset: 0, background: 'linear-gradient(135deg, #12355B 0%, #1B5E20 100%)',
                    borderRadius: 16, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 20,
                  }}>
                    <div style={{ marginBottom: 12 }}>
                      <div style={{ width: 44, height: 44, background: 'rgba(255,255,255,0.85)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <div style={{ width: 0, height: 0, borderTop: '10px solid transparent', borderBottom: '10px solid transparent', borderLeft: '16px solid #2E7D32', marginLeft: 4 }} />
                      </div>
                    </div>
                    <h4 style={{ fontFamily: "'Noto Sans Devanagari', sans-serif", fontSize: 15, fontWeight: 700, color: '#FFFFFF', textAlign: 'center', lineHeight: 1.4, display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                      {video.title}
                    </h4>
                    <div style={{ position: 'absolute', top: 12, right: 12, background: 'rgba(0,0,0,0.5)', color: '#FFFFFF', padding: '4px 10px', borderRadius: 6, fontSize: 12, fontFamily: "'Inter', sans-serif", fontWeight: 500 }}>
                      {video.duration}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </main>
      <Footer />

      <style>{`
        @media (max-width: 1024px) { .video-grid { grid-template-columns: repeat(3, 1fr) !important; } }
        @media (max-width: 768px) { .video-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 480px) { .video-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </>
  );
}
