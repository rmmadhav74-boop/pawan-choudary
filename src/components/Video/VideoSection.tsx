import { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../UI';
import { videos, videoCategories } from '../../data/videos';
import { Link } from 'react-router-dom';

function PlayIcon() {
  return (
    <div style={{
      width: 56,
      height: 56,
      background: 'rgba(255,255,255,0.9)',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
    }}>
      <div style={{
        width: 0,
        height: 0,
        borderTop: '12px solid transparent',
        borderBottom: '12px solid transparent',
        borderLeft: '20px solid #2E7D32',
        marginLeft: 4,
      }} />
    </div>
  );
}

export default function VideoSection() {
  const [activeFilter, setActiveFilter] = useState('सभी');
  const featured = videos[0];
  const rest = videos.slice(1, 13);

  const filtered = activeFilter === 'सभी'
    ? rest
    : rest.filter(v => v.category === activeFilter);

  return (
    <section id="videos" style={{ background: '#F9FAFB', padding: '80px 0' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
        <SectionHeader
          tag="वीडियो"
          title="वीडियो गैलरी"
          subtitle="डॉ. पवन चौधरी के भाषणों, कार्यक्रमों और अभियानों के वीडियो।"
          center
        />

        {/* Featured Video */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 40 }}
        >
          <div
            className="video-placeholder"
            style={{
              height: 420,
              position: 'relative',
              borderRadius: 20,
              overflow: 'hidden',
            }}
          >
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(135deg, #12355B 0%, #1B5E20 100%)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 20,
            }}>
              {/* Watermark pattern */}
              <div style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: `radial-gradient(circle at 20% 50%, rgba(46,125,50,0.15) 0%, transparent 50%), 
                  radial-gradient(circle at 80% 50%, rgba(18,53,91,0.15) 0%, transparent 50%)`,
              }} />

              <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                <div style={{ marginBottom: 20 }}>
                  <PlayIcon />
                </div>
                <h3 style={{
                  fontFamily: "'Noto Sans Devanagari', sans-serif",
                  fontSize: 22,
                  fontWeight: 700,
                  color: '#FFFFFF',
                  marginBottom: 10,
                  maxWidth: 600,
                  lineHeight: 1.4,
                }}>
                  {featured.title}
                </h3>
                <p style={{
                  fontFamily: "'Noto Sans Devanagari', sans-serif",
                  fontSize: 14,
                  color: 'rgba(255,255,255,0.7)',
                  marginBottom: 6,
                }}>
                  {featured.description}
                </p>
                <div style={{ display: 'flex', gap: 16, justifyContent: 'center', marginTop: 8 }}>
                  <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: 13 }}>📅 {featured.date}</span>
                  <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: 13 }}>⏱️ {featured.duration}</span>
                </div>
              </div>
              <p style={{
                position: 'absolute',
                bottom: 16,
                fontFamily: "'Noto Sans Devanagari', sans-serif",
                fontSize: 13,
                color: 'rgba(255,255,255,0.5)',
              }}>
                वीडियो यहाँ जोड़ें (YouTube / MP4)
              </p>
            </div>
          </div>
        </motion.div>

        {/* Filters */}
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', justifyContent: 'center', marginBottom: 28 }}>
          {videoCategories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              style={{
                padding: '7px 16px',
                borderRadius: 999,
                border: activeFilter === cat ? 'none' : '1.5px solid #E5E7EB',
                background: activeFilter === cat ? '#2E7D32' : '#FFFFFF',
                color: activeFilter === cat ? '#FFFFFF' : '#374151',
                fontFamily: "'Noto Sans Devanagari', sans-serif",
                fontSize: 13,
                fontWeight: 500,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Video Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 16,
        }} className="video-grid">
          {filtered.map((video, i) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="video-placeholder"
              style={{ height: 180, borderRadius: 12, position: 'relative', cursor: 'pointer' }}
            >
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(135deg, #12355B 0%, #1B5E20 100%)',
                borderRadius: 12,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 16,
              }}>
                <div style={{ marginBottom: 10 }}>
                  <div style={{
                    width: 38,
                    height: 38,
                    background: 'rgba(255,255,255,0.85)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    <div style={{
                      width: 0, height: 0,
                      borderTop: '8px solid transparent',
                      borderBottom: '8px solid transparent',
                      borderLeft: '14px solid #2E7D32',
                      marginLeft: 3,
                    }} />
                  </div>
                </div>
                <h4 style={{
                  fontFamily: "'Noto Sans Devanagari', sans-serif",
                  fontSize: 13,
                  fontWeight: 600,
                  color: '#FFFFFF',
                  textAlign: 'center',
                  lineHeight: 1.4,
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                }}>
                  {video.title}
                </h4>
                <div style={{
                  position: 'absolute',
                  top: 8,
                  right: 8,
                  background: 'rgba(0,0,0,0.5)',
                  color: '#FFFFFF',
                  padding: '2px 8px',
                  borderRadius: 4,
                  fontSize: 11,
                  fontFamily: "'Inter', sans-serif",
                }}>
                  {video.duration}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: 36 }}>
          <Link
            to="/videos"
            id="all-videos-btn"
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
            ▶️ सभी वीडियो देखें
          </Link>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) { .video-grid { grid-template-columns: repeat(3, 1fr) !important; } }
        @media (max-width: 640px) { .video-grid { grid-template-columns: repeat(2, 1fr) !important; } }
      `}</style>
    </section>
  );
}
