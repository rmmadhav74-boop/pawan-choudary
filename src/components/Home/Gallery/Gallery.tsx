import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeader, ImgPlaceholder } from '../../Shared/UI';
import { galleryItems, galleryCategories } from '../../../data/gallery';
import baithak1Img from '../../../assets/images/news-kisan-baithak-1.jpg';
import baithak2Img from '../../../assets/images/news-kisan-baithak-2.jpg';
import { Link } from 'react-router-dom';

function getImage(key?: string) {
  if (key === 'news-kisan-baithak-1') return baithak1Img;
  if (key === 'news-kisan-baithak-2') return baithak2Img;
  return null;
}

const heightMap = {
  landscape: 200,
  portrait: 300,
  square: 240,
};

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('सभी');
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

  const filtered = activeFilter === 'सभी'
    ? galleryItems.slice(0, 24)
    : galleryItems.filter(g => g.category === activeFilter).slice(0, 24);

  return (
    <section id="gallery" style={{ background: '#FFFFFF', padding: '80px 0' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
        <SectionHeader
          tag="गैलरी"
          title="फोटो गैलरी"
          subtitle="डॉ. पवन चौधरी के सेवा कार्यों और अभियानों की झलकियाँ।"
          center
        />

        {/* Filters */}
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', justifyContent: 'center', marginBottom: 32 }}>
          {galleryCategories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              style={{
                padding: '8px 18px',
                borderRadius: 999,
                border: activeFilter === cat ? 'none' : '1.5px solid #E5E7EB',
                background: activeFilter === cat ? '#2E7D32' : '#FFFFFF',
                color: activeFilter === cat ? '#FFFFFF' : '#374151',
                fontFamily: "'Noto Sans Devanagari', sans-serif",
                fontSize: 14,
                fontWeight: 500,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="masonry-grid">
          <AnimatePresence>
            {filtered.map((item, i) => {
              const img = getImage(item.imageKey);
              const h = heightMap[item.size];
              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35, delay: (i % 8) * 0.04 }}
                  className="masonry-item"
                  onClick={() => img && setLightbox({ src: img, alt: item.title })}
                  style={{ cursor: img ? 'pointer' : 'default' }}
                >
                  <div style={{
                    borderRadius: 12,
                    overflow: 'hidden',
                    position: 'relative',
                    border: '1px solid #E5E7EB',
                  }}>
                    {img ? (
                      <img
                        src={img}
                        alt={item.title}
                        style={{ width: '100%', height: h, objectFit: 'cover', display: 'block' }}
                        loading="lazy"
                      />
                    ) : (
                      <ImgPlaceholder
                        height={h}
                        label={item.title}
                        style={{ borderRadius: 0, border: 'none' }}
                      />
                    )}
                    {/* Hover overlay */}
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to top, rgba(18,53,91,0.7) 0%, transparent 60%)',
                      opacity: 0,
                      transition: 'opacity 0.3s ease',
                      display: 'flex',
                      alignItems: 'flex-end',
                      padding: 12,
                    }}
                    className="gallery-overlay"
                    >
                      <span style={{
                        color: '#FFFFFF',
                        fontFamily: "'Noto Sans Devanagari', sans-serif",
                        fontSize: 13,
                        fontWeight: 600,
                      }}>
                        {item.title}
                      </span>
                    </div>
                    {/* Category badge */}
                    <div style={{
                      position: 'absolute',
                      top: 8,
                      right: 8,
                      background: 'rgba(255,255,255,0.9)',
                      padding: '2px 10px',
                      borderRadius: 999,
                      fontSize: 11,
                      fontFamily: "'Noto Sans Devanagari', sans-serif",
                      color: '#374151',
                      fontWeight: 500,
                    }}>
                      {item.category}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        <div style={{ textAlign: 'center', marginTop: 40 }}>
          <Link
            to="/gallery"
            id="gallery-view-all-btn"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              background: '#2E7D32',
              color: '#FFFFFF',
              padding: '13px 28px',
              borderRadius: 10,
              fontFamily: "'Noto Sans Devanagari', sans-serif",
              fontSize: 16,
              fontWeight: 600,
              textDecoration: 'none',
              boxShadow: '0 4px 14px rgba(46,125,50,0.25)',
            }}
          >
            🖼️ सम्पूर्ण गैलरी देखें
          </Link>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(0,0,0,0.9)',
              zIndex: 9000,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 24,
            }}
          >
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              src={lightbox.src}
              alt={lightbox.alt}
              onClick={e => e.stopPropagation()}
              style={{
                maxWidth: '90vw',
                maxHeight: '85vh',
                objectFit: 'contain',
                borderRadius: 12,
                boxShadow: '0 20px 80px rgba(0,0,0,0.5)',
              }}
            />
            <button
              onClick={() => setLightbox(null)}
              style={{
                position: 'absolute',
                top: 20,
                right: 20,
                background: 'rgba(255,255,255,0.2)',
                border: 'none',
                borderRadius: '50%',
                width: 44,
                height: 44,
                color: '#FFFFFF',
                fontSize: 20,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .masonry-item:hover .gallery-overlay { opacity: 1 !important; }
      `}</style>
    </section>
  );
}
