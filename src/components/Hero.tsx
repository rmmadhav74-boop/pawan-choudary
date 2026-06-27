import { motion } from 'framer-motion';

import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { stats } from '../data/timeline';
import pawanImg from '../assets/images/pawan-chaudhary.png';

function StatCard({ number, suffix, label, delay }: { number: number; suffix: string; label: string; delay: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      style={{
        background: 'rgba(255,255,255,0.92)',
        backdropFilter: 'blur(12px)',
        border: '1px solid rgba(255,255,255,0.8)',
        borderRadius: 16,
        padding: '20px 24px',
        textAlign: 'center',
        boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
        minWidth: 130,
      }}
    >
      <div style={{
        fontFamily: "'Inter', sans-serif",
        fontSize: 32,
        fontWeight: 800,
        color: '#2E7D32',
        lineHeight: 1,
        marginBottom: 4,
      }}>
        {isInView ? (
          <span>{number}{suffix}</span>
        ) : '0'}
      </div>
      <div style={{
        fontFamily: "'Noto Sans Devanagari', sans-serif",
        fontSize: 13,
        color: '#4B5563',
        fontWeight: 500,
        marginTop: 4,
      }}>
        {label}
      </div>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(160deg, #F9FAFB 0%, #E8F5E9 40%, #FFFFFF 100%)',
        paddingTop: 68,
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* Soft background circles */}
      <div style={{
        position: 'absolute',
        top: '10%',
        right: '5%',
        width: 400,
        height: 400,
        background: 'radial-gradient(circle, rgba(46,125,50,0.06) 0%, transparent 70%)',
        borderRadius: '50%',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        bottom: '10%',
        left: '5%',
        width: 300,
        height: 300,
        background: 'radial-gradient(circle, rgba(18,53,91,0.04) 0%, transparent 70%)',
        borderRadius: '50%',
        pointerEvents: 'none',
      }} />

      <div style={{
        maxWidth: 1280,
        margin: '0 auto',
        padding: '60px 24px',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 60,
        alignItems: 'center',
        width: '100%',
      }} className="hero-grid">
        {/* Left: Text Content */}
        <div>
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              background: '#E8F5E9',
              color: '#2E7D32',
              padding: '6px 16px',
              borderRadius: 999,
              fontSize: 13,
              fontWeight: 600,
              fontFamily: "'Noto Sans Devanagari', sans-serif",
              marginBottom: 20,
              border: '1px solid rgba(46,125,50,0.15)',
            }}>
              🌾 भारतीय किसान संघ — झुंझुनू
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              fontFamily: "'Noto Sans Devanagari', sans-serif",
              fontSize: 'clamp(36px, 5vw, 62px)',
              fontWeight: 800,
              color: '#12355B',
              lineHeight: 1.2,
              marginBottom: 12,
            }}
          >
            डॉ. पवन चौधरी
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{
              fontFamily: "'Noto Sans Devanagari', sans-serif",
              fontSize: 18,
              color: '#2E7D32',
              fontWeight: 600,
              marginBottom: 8,
            }}
          >
            किसान • समाज • पर्यावरण
          </motion.p>

          {/* Quote */}
          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{
              fontFamily: "'Noto Sans Devanagari', sans-serif",
              fontSize: 'clamp(20px, 3vw, 28px)',
              fontWeight: 600,
              color: '#1a1a1a',
              lineHeight: 1.4,
              margin: '20px 0',
              paddingLeft: 20,
              borderLeft: '4px solid #2E7D32',
            }}
          >
            "जनसेवा ही मेरा संकल्प है"
          </motion.blockquote>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            style={{
              fontFamily: "'Noto Sans Devanagari', sans-serif",
              fontSize: 16,
              color: '#6B7280',
              lineHeight: 1.8,
              marginBottom: 32,
              maxWidth: 480,
            }}
          >
            सामाजिक कार्यकर्ता | किसान हितैषी | पर्यावरण प्रेमी | जनसेवक
            <br />
            जिला अध्यक्ष, भारतीय किसान संघ, झुंझुनू
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}
          >
            <a
              href="#contact"
              id="hero-contact-btn"
              onClick={e => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                background: '#2E7D32',
                color: '#FFFFFF',
                padding: '14px 28px',
                borderRadius: 12,
                fontFamily: "'Noto Sans Devanagari', sans-serif",
                fontSize: 17,
                fontWeight: 600,
                textDecoration: 'none',
                boxShadow: '0 6px 20px rgba(46,125,50,0.3)',
                transition: 'all 0.25s ease',
              }}
            >
              📞 सम्पर्क करें
            </a>
            <a
              href="#social-impact"
              id="hero-work-btn"
              onClick={e => { e.preventDefault(); document.querySelector('#social-impact')?.scrollIntoView({ behavior: 'smooth' }); }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                background: 'transparent',
                color: '#2E7D32',
                padding: '14px 28px',
                borderRadius: 12,
                fontFamily: "'Noto Sans Devanagari', sans-serif",
                fontSize: 17,
                fontWeight: 600,
                textDecoration: 'none',
                border: '2px solid #2E7D32',
                transition: 'all 0.25s ease',
              }}
            >
              🌿 सेवा कार्य देखें
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            style={{
              display: 'flex',
              gap: 12,
              marginTop: 40,
              flexWrap: 'wrap',
            }}
          >
            {stats.map((stat, i) => (
              <StatCard key={i} {...stat} delay={0.7 + i * 0.1} />
            ))}
          </motion.div>
        </div>

        {/* Right: Photo */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          <div style={{
            position: 'relative',
            width: '100%',
            maxWidth: 480,
          }}>
            {/* Green decorative ring */}
            <div style={{
              position: 'absolute',
              inset: -12,
              borderRadius: '50% 40% 50% 40%',
              background: 'linear-gradient(135deg, rgba(46,125,50,0.1) 0%, rgba(18,53,91,0.05) 100%)',
              zIndex: 0,
            }} />

            {/* Photo */}
            <div style={{
              position: 'relative',
              zIndex: 1,
              borderRadius: '40% 60% 60% 40% / 40% 40% 60% 60%',
              overflow: 'hidden',
              aspectRatio: '4/5',
              boxShadow: '0 20px 60px rgba(46,125,50,0.15), 0 4px 20px rgba(0,0,0,0.1)',
              border: '4px solid rgba(255,255,255,0.8)',
            }}>
              <img
                src={pawanImg}
                alt="डॉ. पवन चौधरी — जिला अध्यक्ष, भारतीय किसान संघ"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center top',
                }}
                loading="eager"
              />
            </div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              style={{
                position: 'absolute',
                bottom: 20,
                left: -20,
                background: '#FFFFFF',
                borderRadius: 12,
                padding: '12px 16px',
                boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                border: '1px solid #E5E7EB',
                zIndex: 2,
              }}
            >
              <div style={{ fontSize: 22 }}>🕊️</div>
              <div style={{ fontFamily: "'Noto Sans Devanagari', sans-serif", fontSize: 12, color: '#2E7D32', fontWeight: 600, marginTop: 4 }}>
                परिंडा अभियान
              </div>
            </motion.div>

            {/* Floating badge 2 */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              style={{
                position: 'absolute',
                top: 20,
                right: -16,
                background: '#2E7D32',
                borderRadius: 12,
                padding: '12px 16px',
                boxShadow: '0 8px 24px rgba(46,125,50,0.3)',
                zIndex: 2,
                textAlign: 'center',
              }}
            >
              <div style={{ fontFamily: "'Noto Sans Devanagari', sans-serif", fontSize: 14, color: '#FFFFFF', fontWeight: 700 }}>
                किसान हित
              </div>
              <div style={{ fontSize: 20, marginTop: 2 }}>🌾</div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
}
