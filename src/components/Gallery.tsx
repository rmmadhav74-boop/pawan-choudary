import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeader } from './UI';
import { Link } from 'react-router-dom';

// ── Photos ──────────────────────────────────────────────
import p001 from '../assets/images/photo-001.jpeg';
import p002 from '../assets/images/photo-002.jpeg';
import p003 from '../assets/images/photo-003.jpeg';
import p004 from '../assets/images/photo-004.jpeg';
import p005 from '../assets/images/photo-005.jpeg';
import p006 from '../assets/images/photo-006.jpeg';
import p007 from '../assets/images/photo-007.jpeg';
import p008 from '../assets/images/photo-008.jpeg';
import p009 from '../assets/images/photo-009.jpeg';
import p010 from '../assets/images/photo-010.jpeg';
import p011 from '../assets/images/photo-011.jpeg';
import p012 from '../assets/images/photo-012.jpeg';
import p013 from '../assets/images/photo-013.jpeg';
import p014 from '../assets/images/photo-014.jpeg';
import p015 from '../assets/images/photo-015.jpeg';
import p016 from '../assets/images/photo-016.jpeg';
import p017 from '../assets/images/photo-017.jpeg';
import p018 from '../assets/images/photo-018.jpeg';
import p019 from '../assets/images/photo-019.jpeg';
import p020 from '../assets/images/photo-020.jpeg';
import p021 from '../assets/images/photo-021.jpeg';
import p022 from '../assets/images/photo-022.jpeg';
import p023 from '../assets/images/photo-023.jpeg';
import p024 from '../assets/images/photo-024.jpeg';
import p025 from '../assets/images/photo-025.jpeg';
import p026 from '../assets/images/photo-026.jpeg';
import p027 from '../assets/images/photo-027.jpeg';
import p028 from '../assets/images/photo-028.jpeg';
import p029 from '../assets/images/photo-029.jpeg';
import p030 from '../assets/images/photo-030.jpeg';
import p031 from '../assets/images/photo-031.jpeg';
import p032 from '../assets/images/photo-032.jpeg';
import p033 from '../assets/images/photo-033.jpeg';
import p034 from '../assets/images/photo-034.jpeg';
import p035 from '../assets/images/photo-035.jpeg';
import p036 from '../assets/images/photo-036.jpeg';
import p037 from '../assets/images/photo-037.jpeg';
import p038 from '../assets/images/photo-038.jpeg';
import p039 from '../assets/images/photo-039.jpeg';
import p040 from '../assets/images/photo-040.jpeg';
import p041 from '../assets/images/photo-041.jpeg';
import p042 from '../assets/images/photo-042.jpeg';
import p043 from '../assets/images/photo-043.jpeg';
import p044 from '../assets/images/photo-044.jpeg';
import p045 from '../assets/images/photo-045.jpeg';
import p046 from '../assets/images/photo-046.jpeg';
import p047 from '../assets/images/photo-047.jpeg';
import p048 from '../assets/images/photo-048.jpeg';
import p049 from '../assets/images/photo-049.jpeg';
import p050 from '../assets/images/photo-050.jpeg';
import p051 from '../assets/images/photo-051.jpeg';
import p052 from '../assets/images/photo-052.jpeg';
import p053 from '../assets/images/photo-053.jpeg';
import p054 from '../assets/images/photo-054.jpeg';
import p055 from '../assets/images/photo-055.jpeg';
import p056 from '../assets/images/photo-056.jpeg';
import p057 from '../assets/images/photo-057.jpeg';
import p058 from '../assets/images/photo-058.jpeg';

// ── Videos ──────────────────────────────────────────────
import v01 from '../assets/images/video-01.mp4';
import v02 from '../assets/images/video-02.mp4';
import v03 from '../assets/images/video-03.mp4';
import v04 from '../assets/images/video-04.mp4';
import v05 from '../assets/images/video-05.mp4';
import v06 from '../assets/images/video-06.mp4';
import v07 from '../assets/images/video-07.mp4';
import v08 from '../assets/images/video-08.mp4';

// ── Data ─────────────────────────────────────────────────
const photos: string[] = [
  p001, p002, p003, p004, p005, p006, p007, p008, p009, p010,
  p011, p012, p013, p014, p015, p016, p017, p018, p019, p020,
  p021, p022, p023, p024, p025, p026, p027, p028, p029, p030,
  p031, p032, p033, p034, p035, p036, p037, p038, p039, p040,
  p041, p042, p043, p044, p045, p046, p047, p048, p049, p050,
  p051, p052, p053, p054, p055, p056, p057, p058,
];

const videoSrcs: string[] = [v01, v02, v03, v04, v05, v06, v07, v08];

type MediaItem =
  | { type: 'photo'; id: string; src: string }
  | { type: 'video'; id: string; src: string };

const allMedia: MediaItem[] = [
  ...photos.map((src, i) => ({ type: 'photo' as const, id: `p-${i + 1}`, src })),
  ...videoSrcs.map((src, i) => ({ type: 'video' as const, id: `v-${i + 1}`, src })),
];

type Lightbox = { type: 'photo' | 'video'; src: string; index: number };

const PREVIEW_COUNT = 18; // show 18 items on home page

export default function Gallery() {
  const [filter, setFilter] = useState<'सभी' | 'फोटो' | 'वीडियो'>('सभी');
  const [lightbox, setLightbox] = useState<Lightbox | null>(null);

  const filtered =
    filter === 'सभी'
      ? allMedia.slice(0, PREVIEW_COUNT)
      : filter === 'फोटो'
      ? allMedia.filter(m => m.type === 'photo').slice(0, PREVIEW_COUNT)
      : allMedia.filter(m => m.type === 'video');

  const openLightbox = (item: MediaItem, idx: number) =>
    setLightbox({ type: item.type, src: item.src, index: idx });

  const closeLightbox = () => setLightbox(null);


  return (
    <>
      {/* ── Section ── */}
      <section id="gallery" style={{ background: '#F9FAFB', padding: '96px 0' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
          <SectionHeader
            tag="गैलरी"
            title="चित्र एवं वीडियो गैलरी"
            subtitle={`डॉ. पवन चौधरी के सेवा कार्यों की ${photos.length} तस्वीरें और ${videoSrcs.length} वीडियो।`}
            center
          />

          {/* Filter Buttons */}
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 40 }}>
            {(['सभी', 'फोटो', 'वीडियो'] as const).map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                style={{
                  padding: '10px 28px',
                  borderRadius: 8,
                  border: filter === f ? 'none' : '1px solid #E5E7EB',
                  background: filter === f ? '#12355B' : '#FFFFFF',
                  color: filter === f ? '#FFFFFF' : '#4B5563',
                  fontFamily: 'var(--font-hindi)',
                  fontSize: 15,
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  boxShadow: filter === f ? '0 4px 12px rgba(18,53,91,0.22)' : 'none',
                }}
              >
                {f}
                {f === 'फोटो' && <span style={{ marginLeft: 6, opacity: 0.7, fontSize: 12 }}>({photos.length})</span>}
                {f === 'वीडियो' && <span style={{ marginLeft: 6, opacity: 0.7, fontSize: 12 }}>({videoSrcs.length})</span>}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="gallery-grid">
            <AnimatePresence>
              {filtered.map((item, i) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.28, delay: (i % 9) * 0.04 }}
                  className="media-card"
                  onClick={() => openLightbox(item, i)}
                  title={item.type === 'photo' ? `फोटो ${i + 1}` : `वीडियो ${i + 1}`}
                >
                  {/* Thumbnail */}
                  <div style={{ position: 'relative', height: 220, overflow: 'hidden', background: '#F3F4F6' }}>
                    {item.type === 'photo' ? (
                      <img
                        src={item.src}
                        alt={`गैलरी ${i + 1}`}
                        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.3s' }}
                        loading="lazy"
                      />
                    ) : (
                      <>
                        <video
                          src={item.src}
                          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                          muted
                          preload="metadata"
                        />
                        {/* Play overlay */}
                        <div style={{
                          position: 'absolute', inset: 0,
                          background: 'rgba(18,53,91,0.45)',
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                        }}>
                          <div style={{
                            width: 52, height: 52, borderRadius: '50%',
                            background: 'rgba(255,255,255,0.95)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            boxShadow: '0 4px 16px rgba(0,0,0,0.25)',
                          }}>
                            <div style={{ width: 0, height: 0, borderTop: '9px solid transparent', borderBottom: '9px solid transparent', borderLeft: '15px solid #12355B', marginLeft: 4 }} />
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                  {/* Info row */}
                  <div style={{ padding: '14px 16px 16px', display: 'flex', alignItems: 'center', gap: 10 }}>
                    <span style={{
                      background: item.type === 'video' ? '#EFF6FF' : '#F0FDF4',
                      color: item.type === 'video' ? '#1D4ED8' : '#15803D',
                      padding: '3px 10px', borderRadius: 6,
                      fontSize: 11, fontWeight: 700, fontFamily: 'var(--font-english)',
                      letterSpacing: '0.5px',
                    }}>
                      {item.type === 'video' ? 'VIDEO' : 'PHOTO'}
                    </span>
                    <span style={{ fontFamily: 'var(--font-hindi)', fontSize: 13, color: '#6B7280' }}>
                      {item.type === 'photo' ? `तस्वीर ${i + 1}` : `वीडियो ${i + 1}`}
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* View All */}
          <div style={{ textAlign: 'center', marginTop: 48 }}>
            <Link
              to="/gallery"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                background: '#12355B', color: '#FFFFFF',
                padding: '14px 36px', borderRadius: 8,
                fontFamily: 'var(--font-hindi)', fontSize: 16, fontWeight: 600,
                textDecoration: 'none',
                boxShadow: '0 4px 14px rgba(18,53,91,0.22)',
              }}
            >
              सम्पूर्ण गैलरी देखें ({photos.length + videoSrcs.length})
            </Link>
          </div>
        </div>
      </section>

      {/* ── Lightbox ── */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closeLightbox}
            style={{
              position: 'fixed', inset: 0, zIndex: 9999,
              background: 'rgba(0,0,0,0.88)',
              backdropFilter: 'blur(14px)',
              WebkitBackdropFilter: 'blur(14px)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              padding: 16,
            }}
          >
            <motion.div
              initial={{ scale: 0.88, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.88, opacity: 0 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
              onClick={e => e.stopPropagation()}
              style={{ position: 'relative', maxWidth: '92vw', maxHeight: '90vh' }}
            >
              {lightbox.type === 'photo' ? (
                <img
                  src={lightbox.src}
                  alt="enlarged"
                  style={{
                    maxWidth: '88vw', maxHeight: '85vh',
                    objectFit: 'contain', borderRadius: 10,
                    boxShadow: '0 24px 60px rgba(0,0,0,0.5)',
                    display: 'block',
                  }}
                />
              ) : (
                <video
                  src={lightbox.src}
                  controls
                  autoPlay
                  style={{
                    maxWidth: '88vw', maxHeight: '85vh',
                    borderRadius: 10,
                    boxShadow: '0 24px 60px rgba(0,0,0,0.5)',
                    display: 'block',
                    background: '#000',
                  }}
                />
              )}

              {/* Close */}
              <button
                onClick={closeLightbox}
                style={{
                  position: 'absolute', top: -16, right: -16,
                  width: 40, height: 40, borderRadius: '50%',
                  background: 'rgba(255,255,255,0.15)',
                  border: '1px solid rgba(255,255,255,0.3)',
                  color: '#fff', fontSize: 22, cursor: 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  transition: 'background 0.2s',
                }}
              >
                ×
              </button>
            </motion.div>

            {/* Hint */}
            <p style={{
              position: 'fixed', bottom: 20, width: '100%', textAlign: 'center',
              color: 'rgba(255,255,255,0.4)', fontSize: 12,
              fontFamily: 'var(--font-english)', pointerEvents: 'none',
            }}>
              Tap outside to close
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
