import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeader } from './UI';
import { galleryItems } from '../data/gallery';
import { videos } from '../data/videos';
import baithak1Img from '../assets/images/news-kisan-baithak-1.jpg';
import baithak2Img from '../assets/images/news-kisan-baithak-2.jpg';
import { Link } from 'react-router-dom';

function getImage(key?: string) {
  if (key === 'news-kisan-baithak-1') return baithak1Img;
  if (key === 'news-kisan-baithak-2') return baithak2Img;
  return null;
}



// Combine items for the gallery
const allMedia = [
  ...galleryItems.map(item => ({ ...item, type: 'photo' as const })),
  ...videos.map(item => ({ 
    id: item.id, 
    title: item.title, 
    category: 'वीडियो', 
    size: 'landscape' as const, 
    hasImage: false,
    type: 'video' as const,
    duration: item.duration
  }))
];

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('सभी');
  const [lightbox, setLightbox] = useState<{ src?: string; type: 'photo' | 'video'; alt: string } | null>(null);

  const filterOptions = ['सभी', 'फोटो', 'वीडियो'];

  const filtered = activeFilter === 'सभी'
    ? allMedia.slice(0, 24)
    : activeFilter === 'फोटो'
      ? allMedia.filter(m => m.type === 'photo').slice(0, 24)
      : allMedia.filter(m => m.type === 'video').slice(0, 24);

  return (
    <section id="gallery" style={{ background: '#F9FAFB', padding: '100px 0' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
        <SectionHeader
          tag="गैलरी"
          title="चित्र एवं वीडियो गैलरी"
          subtitle="डॉ. पवन चौधरी के सेवा कार्यों और अभियानों की झलकियाँ।"
          center
        />

        {/* Filters */}
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center', marginBottom: 40 }}>
          {filterOptions.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              style={{
                padding: '10px 24px',
                borderRadius: 8,
                border: activeFilter === cat ? 'none' : '1px solid #E5E7EB',
                background: activeFilter === cat ? '#12355B' : '#FFFFFF',
                color: activeFilter === cat ? '#FFFFFF' : '#4B5563',
                fontFamily: "var(--font-english)",
                fontSize: 15,
                fontWeight: 500,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                boxShadow: activeFilter === cat ? '0 4px 12px rgba(18,53,91,0.2)' : '0 2px 4px rgba(0,0,0,0.02)',
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: 24,
        }}>
          <AnimatePresence>
            {filtered.map((item, i) => {
              const img = item.type === 'photo' ? getImage(item.imageKey) : null;
              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35, delay: (i % 8) * 0.04 }}
                  onClick={() => setLightbox({ src: img || undefined, type: item.type, alt: item.title })}
                  style={{ 
                    cursor: 'pointer',
                    background: '#FFFFFF',
                    borderRadius: 16,
                    overflow: 'hidden',
                    border: '1px solid #E5E7EB',
                    boxShadow: 'var(--shadow-card)',
                    position: 'relative',
                  }}
                  whileHover={{ y: -4, boxShadow: 'var(--shadow-card-hover)' }}
                >
                  <div style={{ position: 'relative', height: 220, overflow: 'hidden' }}>
                    {img ? (
                      <img
                        src={img}
                        alt={item.title}
                        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                        loading="lazy"
                      />
                    ) : (
                      <div style={{ width: '100%', height: '100%', background: '#F3F4F6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <span style={{ color: '#9CA3AF', fontSize: 14 }}>Media Placeholder</span>
                      </div>
                    )}
                    
                    {item.type === 'video' && (
                      <div style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'rgba(0,0,0,0.3)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        <div style={{
                          width: 56,
                          height: 56,
                          borderRadius: '50%',
                          background: '#FFFFFF',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
                        }}>
                          <div style={{
                            width: 0,
                            height: 0,
                            borderTop: '8px solid transparent',
                            borderBottom: '8px solid transparent',
                            borderLeft: '14px solid #12355B',
                            marginLeft: 4
                          }} />
                        </div>
                        {item.duration && (
                          <div style={{
                            position: 'absolute',
                            bottom: 12,
                            right: 12,
                            background: 'rgba(0,0,0,0.7)',
                            color: '#FFFFFF',
                            fontSize: 12,
                            padding: '4px 8px',
                            borderRadius: 6,
                            fontFamily: "var(--font-english)"
                          }}>
                            {item.duration}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                  
                  <div style={{ padding: '20px' }}>
                    <div style={{
                      display: 'inline-block',
                      background: item.type === 'video' ? '#E8F5E9' : '#F3F4F6',
                      color: item.type === 'video' ? '#2E7D32' : '#4B5563',
                      padding: '4px 10px',
                      borderRadius: 6,
                      fontSize: 12,
                      fontWeight: 600,
                      marginBottom: 12,
                      fontFamily: "var(--font-english)"
                    }}>
                      {item.type === 'video' ? 'वीडियो' : 'फोटो'}
                    </div>
                    <h3 style={{
                      fontFamily: "var(--font-hindi)",
                      fontSize: 16,
                      fontWeight: 600,
                      color: '#1a1a1a',
                      lineHeight: 1.4,
                    }}>
                      {item.title}
                    </h3>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        <div style={{ textAlign: 'center', marginTop: 48 }}>
          <Link
            to="/gallery"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              background: '#12355B',
              color: '#FFFFFF',
              padding: '14px 32px',
              borderRadius: 8,
              fontFamily: "var(--font-hindi)",
              fontSize: 16,
              fontWeight: 600,
              textDecoration: 'none',
              boxShadow: '0 4px 12px rgba(18,53,91,0.2)',
              transition: 'background 0.2s',
            }}
          >
            सम्पूर्ण गैलरी देखें
          </Link>
        </div>
      </div>

      {/* Lightbox Modal */}
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
              background: 'rgba(18,53,91,0.95)',
              zIndex: 9000,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 24,
            }}
          >
            {lightbox.type === 'photo' && lightbox.src ? (
              <motion.img
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                src={lightbox.src}
                alt={lightbox.alt}
                onClick={e => e.stopPropagation()}
                style={{
                  maxWidth: '100%',
                  maxHeight: '85vh',
                  objectFit: 'contain',
                  borderRadius: 8,
                  boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                }}
              />
            ) : (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={e => e.stopPropagation()}
                style={{
                  width: '100%',
                  maxWidth: 800,
                  aspectRatio: '16/9',
                  background: '#000000',
                  borderRadius: 12,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF',
                  flexDirection: 'column',
                  gap: 16
                }}
              >
                <div style={{ fontSize: 48, opacity: 0.5 }}>Play</div>
                <div style={{ fontFamily: "var(--font-hindi)", fontSize: 20 }}>वीडियो प्लेयर</div>
              </motion.div>
            )}
            
            <button
              onClick={() => setLightbox(null)}
              style={{
                position: 'absolute',
                top: 24,
                right: 24,
                background: 'rgba(255,255,255,0.1)',
                border: '1px solid rgba(255,255,255,0.2)',
                borderRadius: '50%',
                width: 48,
                height: 48,
                color: '#FFFFFF',
                fontSize: 24,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.2s',
              }}
            >
              ×
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
