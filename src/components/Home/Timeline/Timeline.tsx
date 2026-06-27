import { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../../Shared/UI';
import { timelineEvents } from '../../../data/timeline';

const categoryColors: Record<string, { bg: string; color: string }> = {
  kisan: { bg: '#E8F5E9', color: '#2E7D32' },
  parinda: { bg: '#EFF6FF', color: '#1D4ED8' },
  social: { bg: '#FDF4FF', color: '#7C3AED' },
  meeting: { bg: '#FFF7ED', color: '#C2410C' },
  award: { bg: '#FFFBEB', color: '#D97706' },
};

export default function Timeline() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="timeline" style={{ background: '#F9FAFB', padding: '80px 0' }}>
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px' }}>
        <SectionHeader
          tag="समयरेखा"
          title="यात्रा का सफर"
          subtitle="डॉ. पवन चौधरी की सामाजिक सेवा और किसान हित में की गई प्रमुख गतिविधियाँ।"
          center
        />

        <div style={{ position: 'relative', paddingTop: 20 }}>
          {/* Center line */}
          <div style={{
            position: 'absolute',
            left: '50%',
            top: 0,
            bottom: 0,
            width: 2,
            background: 'linear-gradient(to bottom, #E8F5E9 0%, #2E7D32 50%, #E8F5E9 100%)',
            transform: 'translateX(-50%)',
          }} className="timeline-center-line" />

          {timelineEvents.map((event, i) => {
            const isLeft = i % 2 === 0;
            const colors = categoryColors[event.category];
            const isActive = active === event.id;

            return (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                style={{
                  display: 'flex',
                  justifyContent: isLeft ? 'flex-start' : 'flex-end',
                  marginBottom: 32,
                  position: 'relative',
                }}
                className="timeline-row"
              >
                {/* Dot on center line */}
                <div style={{
                  position: 'absolute',
                  left: '50%',
                  top: 16,
                  transform: 'translateX(-50%)',
                  width: 24,
                  height: 24,
                  background: colors.bg,
                  border: `2px solid ${colors.color}`,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 12,
                  zIndex: 2,
                  cursor: 'pointer',
                  transition: 'transform 0.2s ease',
                }}
                  onClick={() => setActive(isActive ? null : event.id)}
                >
                  {event.icon}
                </div>

                {/* Card */}
                <div
                  onClick={() => setActive(isActive ? null : event.id)}
                  style={{
                    width: '44%',
                    background: '#FFFFFF',
                    border: `1.5px solid ${isActive ? colors.color : '#E5E7EB'}`,
                    borderRadius: 16,
                    padding: '18px 20px',
                    cursor: 'pointer',
                    boxShadow: isActive ? `0 8px 24px ${colors.bg}` : '0 2px 12px rgba(0,0,0,0.05)',
                    transition: 'all 0.3s ease',
                    marginLeft: isLeft ? 0 : 'auto',
                    marginRight: isLeft ? 'auto' : 0,
                  }}
                  className="timeline-card"
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                    <span style={{
                      background: colors.bg,
                      color: colors.color,
                      padding: '2px 10px',
                      borderRadius: 999,
                      fontSize: 11,
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 600,
                    }}>
                      {event.year} — {event.month}
                    </span>
                  </div>
                  <h4 style={{
                    fontFamily: "'Noto Sans Devanagari', sans-serif",
                    fontSize: 16,
                    fontWeight: 700,
                    color: '#12355B',
                    marginBottom: 6,
                  }}>
                    {event.title}
                  </h4>
                  {isActive && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      style={{
                        fontFamily: "'Noto Sans Devanagari', sans-serif",
                        fontSize: 14,
                        color: '#6B7280',
                        lineHeight: 1.7,
                        marginTop: 8,
                      }}
                    >
                      {event.description}
                    </motion.p>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .timeline-center-line { left: 20px !important; }
          .timeline-row { justify-content: flex-end !important; }
          .timeline-card { width: calc(100% - 48px) !important; margin-left: 48px !important; margin-right: 0 !important; }
          .timeline-row > div:nth-child(1) { left: 20px !important; }
        }
      `}</style>
    </section>
  );
}
