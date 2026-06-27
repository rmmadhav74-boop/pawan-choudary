import { motion } from 'framer-motion';
import { SectionHeader } from './UI';
import baithak1Img from '../assets/images/news-kisan-baithak-1.jpg';
import baithak2Img from '../assets/images/news-kisan-baithak-2.jpg';
import newspaperImg from '../assets/images/newspaper-page.jpg';
import bksDocImg from '../assets/images/bks-document.jpg';

const mediaItems = [
  {
    title: 'भारतीय किसान संघ की जिला बैठक में अनेक मुद्दों पर चर्चा',
    source: 'जयपुर टाइम्स',
    date: 'जुलाई 2025',
    img: baithak1Img,
  },
  {
    title: 'भारतीय किसान संघ की हमीनपुर में बैठक',
    source: 'दैनिक भास्कर, पिलानी',
    date: 'जून 2025',
    img: baithak2Img,
  },
  {
    title: 'झुंझुनू जिला — किसान समाचार',
    source: 'दैनिक भास्कर',
    date: 'जुलाई 2025',
    img: newspaperImg,
  },
  {
    title: 'भारतीय किसान संघ — जैविक खेती प्रस्ताव',
    source: 'भारतीय किसान संघ',
    date: 'जुलाई 2025',
    img: bksDocImg,
  },
  { title: 'परिंडा अभियान — मीडिया कवरेज', source: 'राजस्थान पत्रिका', date: '2025', img: null },
  { title: 'किसान आंदोलन — कलेक्ट्रेट प्रदर्शन', source: 'झुंझुनू टाइम्स', date: '2025', img: null },
  { title: 'पर्यावरण संरक्षण अभियान', source: 'दैनिक भास्कर', date: '2025', img: null },
  { title: 'किसान सम्मेलन 2025', source: 'राजस्थान पत्रिका', date: '2025', img: null },
];

export default function MediaCoverage() {
  return (
    <section id="media" style={{ background: '#12355B', padding: '80px 0' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
        <SectionHeader
          tag="मीडिया कवरेज"
          title="समाचार पत्रों में"
          subtitle="प्रमुख समाचार पत्रों में डॉ. पवन चौधरी की गतिविधियों की कवरेज।"
          center
          light
        />

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 20,
        }} className="media-grid">
          {mediaItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              style={{
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: 16,
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
              whileHover={{ scale: 1.02, background: 'rgba(255,255,255,0.1)' }}
            >
              {/* Newspaper clipping style */}
              <div style={{
                background: 'rgba(255,255,255,0.08)',
                padding: '6px 12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderBottom: '1px solid rgba(255,255,255,0.1)',
              }}>
                <span style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 11,
                  color: 'rgba(255,255,255,0.7)',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                }}>
                  {item.source}
                </span>
                <span style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 10,
                  color: 'rgba(255,255,255,0.4)',
                }}>
                  {item.date}
                </span>
              </div>

              {/* Image */}
              <div style={{ height: 200, overflow: 'hidden' }}>
                {item.img ? (
                  <img
                    src={item.img}
                    alt={item.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    loading="lazy"
                  />
                ) : (
                  <div style={{
                    height: '100%',
                    background: 'rgba(255,255,255,0.05)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    gap: 8,
                  }}>
                    <span style={{ fontSize: 32 }}></span>
                    <span style={{
                      fontFamily: "'Noto Sans Devanagari', sans-serif",
                      fontSize: 12,
                      color: 'rgba(255,255,255,0.4)',
                    }}>
                      समाचार पत्र की कटिंग यहाँ जोड़ें
                    </span>
                  </div>
                )}
              </div>

              {/* Title */}
              <div style={{ padding: '14px 16px' }}>
                <p style={{
                  fontFamily: "'Noto Sans Devanagari', sans-serif",
                  fontSize: 13,
                  color: 'rgba(255,255,255,0.85)',
                  lineHeight: 1.5,
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

        <p style={{
          textAlign: 'center',
          marginTop: 32,
          fontFamily: "'Noto Sans Devanagari', sans-serif",
          fontSize: 14,
          color: 'rgba(255,255,255,0.4)',
        }}>
          और भी अखबार की कटिंग यहाँ जोड़ी जाएंगी।
        </p>
      </div>

      <style>{`
        @media (max-width: 1024px) { .media-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 600px) { .media-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
