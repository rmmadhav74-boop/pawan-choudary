import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeader } from './UI';

// Real newspaper/media photos from the uploaded images
import p002 from '../assets/images/photo-002.jpeg';
import p010 from '../assets/images/photo-010.jpeg';
import p015 from '../assets/images/photo-015.jpeg';
import p018 from '../assets/images/photo-018.jpeg';
import p020 from '../assets/images/photo-020.jpeg';
import p025 from '../assets/images/photo-025.jpeg';
import p026 from '../assets/images/photo-026.jpeg';
import p030 from '../assets/images/photo-030.jpeg';
import p055 from '../assets/images/photo-055.jpeg';
import p058 from '../assets/images/photo-058.jpeg';

const mediaItems = [
  { img: p055, source: 'शिव नगरी अपडेट', title: 'एक परिंडा–अनेक जीवन अभियान — पिलानी न्यायालय' },
  { img: p058, source: 'दैनिक मृदुल पत्रिका', title: 'पक्षियों के लिए परिंडे बांधने का अभियान' },
  { img: p030, source: 'दैनिक भास्कर', title: 'लादूसर में भारतीय किसान संघ की बैठक' },
  { img: p010, source: 'राजस्थान पत्रिका', title: 'भारतीय किसान संघ प्रदेशाध्यक्ष का पिलानी में सम्मान' },
  { img: p020, source: 'वीर वीरांगना', title: 'दीपुरा गांव में भारतीय किसान संघ की बैठक' },
  { img: p002, source: 'BJP राजस्थान', title: 'मुख्यमंत्री ने गिरदावरी करवाने के निर्देश दिए' },
  { img: p015, source: 'दैनिक भास्कर', title: 'भारतीय किसान संघ की प्रदेश स्तरीय बैठक' },
  { img: p018, source: 'राजस्थान पत्रिका', title: 'किसान हित में जिला अध्यक्ष का प्रदर्शन' },
  { img: p025, source: 'झुंझुनू टाइम्स', title: 'किसान समस्याओं पर चर्चा — जिला स्तरीय बैठक' },
  { img: p026, source: 'दैनिक भास्कर', title: 'पर्यावरण संरक्षण अभियान की मीडिया कवरेज' },
  { img: p015, source: 'राजस्थान पत्रिका', title: 'भारतीय किसान संघ की झुंझुनू में महाबैठक' },
  { img: p002, source: 'शिव नगरी', title: 'किसानों का प्रदेश स्तरीय प्रतिनिधित्व' },
];
type LightboxState = { src: string; title: string };

export default function MediaCoverage() {
  const [lb, setLb] = useState<LightboxState | null>(null);

  return (
    <>
      <section id="media" style={{ background: '#12355B', padding: '88px 0' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
          <SectionHeader
            tag="मीडिया कवरेज"
            title="समाचार पत्रों में"
            subtitle="प्रमुख समाचार पत्रों में डॉ. पवन चौधरी की गतिविधियों और अभियानों की कवरेज।"
            center
            light
          />

          <div
            className="media-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: 20,
            }}
          >
            {mediaItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                onClick={() => setLb({ src: item.img, title: item.title })}
                whileHover={{ y: -5, boxShadow: '0 16px 40px rgba(0,0,0,0.3)' }}
                style={{
                  background: 'rgba(255,255,255,0.07)',
                  border: '1px solid rgba(255,255,255,0.13)',
                  borderRadius: 14,
                  overflow: 'hidden',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                }}
              >
                {/* Source bar */}
                <div style={{
                  background: 'rgba(255,255,255,0.1)',
                  padding: '7px 14px',
                  borderBottom: '1px solid rgba(255,255,255,0.08)',
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                }}>
                  <span style={{
                    fontFamily: 'var(--font-hindi)', fontSize: 11,
                    color: 'rgba(255,255,255,0.8)', fontWeight: 600,
                  }}>
                    {item.source}
                  </span>
                  <span style={{
                    fontFamily: 'var(--font-english)', fontSize: 9,
                    color: 'rgba(255,255,255,0.4)', letterSpacing: '0.5px',
                    textTransform: 'uppercase',
                  }}>
                    PRESS
                  </span>
                </div>

                {/* Newspaper photo — 3:4 portrait ratio */}
                <div style={{ aspectRatio: '3/4', overflow: 'hidden', position: 'relative' }}>
                  <img
                    src={item.img}
                    alt={item.title}
                    style={{
                      width: '100%', height: '100%',
                      objectFit: 'cover', objectPosition: 'top',
                      display: 'block',
                      transition: 'transform 0.35s ease',
                    }}
                    loading="lazy"
                  />
                  {/* Hover overlay */}
                  <div style={{
                    position: 'absolute', inset: 0,
                    background: 'linear-gradient(to top, rgba(18,53,91,0.7) 0%, transparent 50%)',
                    opacity: 0,
                    transition: 'opacity 0.25s',
                  }} className="media-hover-overlay" />
                </div>

                {/* Title */}
                <div style={{ padding: '12px 14px 16px' }}>
                  <p style={{
                    fontFamily: 'var(--font-hindi)',
                    fontSize: 13, color: 'rgba(255,255,255,0.82)',
                    lineHeight: 1.55,
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                  }}>
                    {item.title}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lb && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            onClick={() => setLb(null)}
            style={{
              position: 'fixed', inset: 0, zIndex: 9999,
              background: 'rgba(0,0,0,0.92)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center',
              padding: 20,
            }}
          >
            <motion.div
              initial={{ scale: 0.88, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.88, opacity: 0 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              onClick={e => e.stopPropagation()}
              style={{ position: 'relative' }}
            >
              <img
                src={lb.src}
                alt={lb.title}
                style={{
                  maxWidth: 'min(88vw, 720px)',
                  maxHeight: '82vh',
                  objectFit: 'contain',
                  borderRadius: 10,
                  boxShadow: '0 32px 80px rgba(0,0,0,0.6)',
                  display: 'block',
                }}
              />
              <p style={{
                position: 'absolute', bottom: -36, left: 0, right: 0,
                textAlign: 'center',
                color: 'rgba(255,255,255,0.7)',
                fontFamily: 'var(--font-hindi)', fontSize: 14,
              }}>
                {lb.title}
              </p>
              <button
                onClick={() => setLb(null)}
                style={{
                  position: 'absolute', top: -14, right: -14,
                  width: 38, height: 38, borderRadius: '50%',
                  background: 'rgba(255,255,255,0.15)',
                  border: '1px solid rgba(255,255,255,0.3)',
                  color: '#fff', fontSize: 22, cursor: 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}
              >×</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
