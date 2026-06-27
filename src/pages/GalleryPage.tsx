import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../components/Shared/Navbar/Navbar';
import Footer from '../components/Shared/Footer/Footer';
import { galleryItems, galleryCategories } from '../data/gallery';
import { SectionHeader, ImgPlaceholder } from '../components/Shared/UI';
import baithak1Img from '../assets/images/news-kisan-baithak-1.jpg';
import baithak2Img from '../assets/images/news-kisan-baithak-2.jpg';

function getImage(key?: string) {
  if (key === 'news-kisan-baithak-1') return baithak1Img;
  if (key === 'news-kisan-baithak-2') return baithak2Img;
  return null;
}

const heightMap = { landscape: 240, portrait: 360, square: 280 };

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState('सभी');
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const filtered = activeFilter === 'सभी'
    ? galleryItems
    : galleryItems.filter(g => g.category === activeFilter);

  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 120, paddingBottom: 80, background: '#FFFFFF', minHeight: '100vh' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
          <div style={{ marginBottom: 24 }}>
            <Link to="/#gallery" style={{ color: '#2E7D32', textDecoration: 'none', fontFamily: "'Noto Sans Devanagari', sans-serif" }}>
              ← होम पर वापस
            </Link>
          </div>

          <SectionHeader
            tag="सम्पूर्ण गैलरी"
            title="फोटो गैलरी"
            subtitle="डॉ. पवन चौधरी के सभी कार्यक्रमों और अभियानों की तस्वीरें।"
            center
          />

          {/* Filters */}
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', justifyContent: 'center', marginBottom: 40 }}>
            {galleryCategories.map(cat => (
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

          {/* Masonry */}
          <div className="masonry-grid">
            <AnimatePresence>
              {filtered.map((item) => {
                const img = getImage(item.imageKey);
                const h = heightMap[item.size];
                return (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="masonry-item"
                    onClick={() => img && setLightbox({ src: img, alt: item.title })}
                    style={{ cursor: img ? 'pointer' : 'default' }}
                  >
                    <div style={{ borderRadius: 16, overflow: 'hidden', position: 'relative', border: '1px solid #E5E7EB' }}>
                      {img ? (
                        <img src={img} alt={item.title} style={{ width: '100%', height: h, objectFit: 'cover' }} loading="lazy" />
                      ) : (
                        <ImgPlaceholder height={h} label={item.title} style={{ borderRadius: 0, border: 'none' }} />
                      )}
                      {img && (
                        <div style={{
                          position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(18,53,91,0.8), transparent 60%)',
                          opacity: 0, transition: 'opacity 0.3s', display: 'flex', alignItems: 'flex-end', padding: 16,
                        }} className="gallery-overlay">
                          <span style={{ color: '#fff', fontFamily: "'Noto Sans Devanagari', sans-serif", fontWeight: 600 }}>{item.title}</span>
                        </div>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </main>
      <Footer />

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.95)', zIndex: 9000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}
          >
            <img src={lightbox.src} alt={lightbox.alt} onClick={e => e.stopPropagation()} style={{ maxWidth: '90vw', maxHeight: '85vh', objectFit: 'contain', borderRadius: 8 }} />
            <button onClick={() => setLightbox(null)} style={{ position: 'absolute', top: 20, right: 20, background: 'rgba(255,255,255,0.1)', border: 'none', borderRadius: '50%', width: 44, height: 44, color: '#fff', fontSize: 24, cursor: 'pointer' }}>✕</button>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`.masonry-item:hover .gallery-overlay { opacity: 1 !important; }`}</style>
    </>
  );
}
