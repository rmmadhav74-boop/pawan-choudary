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

type MediaItem = {
  id: string;
  title: string;
  category: string;
  type: 'photo' | 'video';
  imageKey?: string;
  duration?: string;
};

const allMedia: MediaItem[] = [
  ...galleryItems.map(item => ({
    id: item.id,
    title: item.title,
    category: item.category,
    type: 'photo' as const,
    imageKey: item.imageKey,
  })),
  ...videos.map(item => ({
    id: item.id,
    title: item.title,
    category: 'वीडियो',
    type: 'video' as const,
    duration: item.duration,
  })),
];

type LightboxItem = { src?: string; type: 'photo' | 'video'; alt: string };

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('सभी');
  const [lightbox, setLightbox] = useState<LightboxItem | null>(null);

  const filterOptions = ['सभी', 'फोटो', 'वीडियो'];

  const filtered =
    activeFilter === 'सभी'
      ? allMedia.slice(0, 24)
      : activeFilter === 'फोटो'
      ? allMedia.filter(m => m.type === 'photo').slice(0, 24)
      : allMedia.filter(m => m.type === 'video').slice(0, 24);

  const openLightbox = (item: MediaItem) => {
    const src = item.type === 'photo' ? getImage(item.imageKey) || undefined : undefined;
    setLightbox({ src, type: item.type, alt: item.title });
  };

  return (
    <>
      <section id="gallery" style={{ background: '#F9FAFB', padding: '100px 0' }}>
        <div className="container">
          <SectionHeader
            tag="गैलरी"
            title="चित्र एवं वीडियो गैलरी"
            subtitle="डॉ. पवन चौधरी के सेवा कार्यों और अभियानों की झलकियाँ।"
            center
          />

          {/* Filter Buttons */}
          <div style={{
            display: 'flex',
            gap: 12,
            flexWrap: 'wrap',
            justifyContent: 'center',
            marginBottom: 40,
          }}>
            {filterOptions.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                style={{
                  padding: '10px 28px',
                  borderRadius: 8,
                  border: activeFilter === cat ? 'none' : '1px solid #E5E7EB',
                  background: activeFilter === cat ? '#12355B' : '#FFFFFF',
                  color: activeFilter === cat ? '#FFFFFF' : '#4B5563',
                  fontFamily: 'var(--font-hindi)',
                  fontSize: 15,
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: activeFilter === cat
                    ? '0 4px 12px rgba(18,53,91,0.22)'
                    : '0 1px 4px rgba(0,0,0,0.04)',
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="gallery-grid">
            <AnimatePresence>
              {filtered.map((item, i) => {
                const img = item.type === 'photo' ? getImage(item.imageKey) : null;
                return (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3, delay: (i % 8) * 0.04 }}
                    className="media-card"
                    onClick={() => openLightbox(item)}
                    title={item.title}
                  >
                    {/* Thumbnail */}
                    <div style={{ position: 'relative' }}>
                      {img ? (
                        <img
                          src={img}
                          alt={item.title}
                          className="card-thumb"
                        />
                      ) : (
                        <div
                          style={{
                            width: '100%',
                            height: 220,
                            background: item.type === 'video'
                              ? 'linear-gradient(135deg, #12355B 0%, #1e5f8a 100%)'
                              : 'linear-gradient(135deg, #E8F5E9 0%, #F3F4F6 100%)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'column',
                            gap: 8,
                          }}
                        >
                          <span style={{
                            color: item.type === 'video' ? 'rgba(255,255,255,0.5)' : '#9CA3AF',
                            fontSize: 13,
                            fontFamily: 'var(--font-english)',
                          }}>
                            {item.type === 'video' ? 'Video Placeholder' : 'Photo Placeholder'}
                          </span>
                          <span style={{
                            color: item.type === 'video' ? 'rgba(255,255,255,0.35)' : '#D1D5DB',
                            fontSize: 11,
                            fontFamily: 'var(--font-english)',
                          }}>
                            Click to add media
                          </span>
                        </div>
                      )}

                      {/* Video play overlay */}
                      {item.type === 'video' && (
                        <div className="play-overlay">
                          <div className="play-btn">
                            <div style={{
                              width: 0,
                              height: 0,
                              borderTop: '9px solid transparent',
                              borderBottom: '9px solid transparent',
                              borderLeft: '15px solid #12355B',
                              marginLeft: 4,
                            }} />
                          </div>
                          {item.duration && (
                            <div style={{
                              position: 'absolute',
                              bottom: 10,
                              right: 10,
                              background: 'rgba(0,0,0,0.7)',
                              color: '#fff',
                              fontSize: 12,
                              padding: '3px 8px',
                              borderRadius: 5,
                              fontFamily: 'var(--font-english)',
                              fontWeight: 500,
                            }}>
                              {item.duration}
                            </div>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Card Info */}
                    <div style={{ padding: '16px 18px 18px' }}>
                      <span
                        className="card-badge"
                        style={{
                          background: item.type === 'video' ? '#EFF6FF' : '#F0FDF4',
                          color: item.type === 'video' ? '#1D4ED8' : '#15803D',
                        }}
                      >
                        {item.type === 'video' ? 'VIDEO' : 'PHOTO'}
                      </span>
                      <p className="card-title">{item.title}</p>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* View All Button */}
          <div style={{ textAlign: 'center', marginTop: 52 }}>
            <Link
              to="/gallery"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                background: '#12355B',
                color: '#FFFFFF',
                padding: '14px 36px',
                borderRadius: 8,
                fontFamily: 'var(--font-hindi)',
                fontSize: 16,
                fontWeight: 600,
                textDecoration: 'none',
                boxShadow: '0 4px 14px rgba(18,53,91,0.22)',
                transition: 'background 0.2s',
              }}
            >
              सम्पूर्ण गैलरी देखें
            </Link>
          </div>
        </div>
      </section>

      {/* Lightbox with blur backdrop */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="lightbox-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setLightbox(null)}
          >
            <motion.div
              className="lightbox-content"
              initial={{ scale: 0.88, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.88, opacity: 0 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
              onClick={e => e.stopPropagation()}
            >
              {lightbox.type === 'photo' && lightbox.src ? (
                <>
                  <img src={lightbox.src} alt={lightbox.alt} />
                  <div className="lightbox-caption">{lightbox.alt}</div>
                </>
              ) : (
                <div style={{
                  width: 'min(760px, 85vw)',
                  aspectRatio: '16/9',
                  background: 'linear-gradient(135deg, #12355B, #1e5f8a)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 16,
                }}>
                  <div style={{
                    width: 72,
                    height: 72,
                    borderRadius: '50%',
                    background: 'rgba(255,255,255,0.18)',
                    border: '2px solid rgba(255,255,255,0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    <div style={{
                      width: 0,
                      height: 0,
                      borderTop: '14px solid transparent',
                      borderBottom: '14px solid transparent',
                      borderLeft: '24px solid #fff',
                      marginLeft: 6,
                    }} />
                  </div>
                  <p style={{
                    color: 'rgba(255,255,255,0.75)',
                    fontFamily: 'var(--font-hindi)',
                    fontSize: 16,
                    textAlign: 'center',
                    padding: '0 24px',
                  }}>
                    {lightbox.alt}
                  </p>
                  <p style={{
                    color: 'rgba(255,255,255,0.4)',
                    fontFamily: 'var(--font-english)',
                    fontSize: 13,
                  }}>
                    वीडियो प्लेयर — YouTube लिंक से जोड़ें
                  </p>
                </div>
              )}

              {/* Close Button */}
              <button
                className="lightbox-close"
                onClick={() => setLightbox(null)}
                aria-label="Close"
              >
                ×
              </button>
            </motion.div>

            {/* Tap anywhere hint */}
            <p style={{
              position: 'fixed',
              bottom: 24,
              left: 0,
              right: 0,
              textAlign: 'center',
              color: 'rgba(255,255,255,0.45)',
              fontSize: 13,
              fontFamily: 'var(--font-english)',
              pointerEvents: 'none',
            }}>
              Tap outside to close
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
