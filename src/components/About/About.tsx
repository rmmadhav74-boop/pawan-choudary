import { motion } from 'framer-motion';
import { SectionHeader } from '../UI';
import pawanImg from '../../assets/images/pawan-chaudhary.png';

const highlights = [
  { icon: '🌾', text: 'किसान अधिकारों के लिए अथक संघर्ष' },
  { icon: '🕊️', text: '"एक परिंडा – अनेक जीवन" अभियान के प्रणेता' },
  { icon: '🌳', text: 'पर्यावरण संरक्षण के प्रबल समर्थक' },
  { icon: '🤝', text: '1000+ परिवारों तक जनसेवा की पहुँच' },
  { icon: '🏡', text: 'ग्रामीण विकास के लिए समर्पित' },
  { icon: '✊', text: '50+ जनआंदोलनों का सफल नेतृत्व' },
];

export default function About() {
  return (
    <section id="about" style={{ background: '#FFFFFF', padding: '80px 0' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 60,
          alignItems: 'center',
        }} className="about-grid">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <div style={{ position: 'relative' }}>
              {/* Green accent box */}
              <div style={{
                position: 'absolute',
                top: -16,
                left: -16,
                right: 32,
                bottom: 32,
                background: '#E8F5E9',
                borderRadius: 20,
                zIndex: 0,
              }} />
              <div style={{
                position: 'relative',
                zIndex: 1,
                borderRadius: 20,
                overflow: 'hidden',
                boxShadow: '0 20px 50px rgba(0,0,0,0.1)',
              }}>
                <img
                  src={pawanImg}
                  alt="डॉ. पवन चौधरी"
                  style={{ width: '100%', height: 500, objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
                  loading="lazy"
                />
              </div>
              {/* Position card */}
              <div style={{
                position: 'absolute',
                bottom: -12,
                right: -12,
                background: '#12355B',
                color: '#FFFFFF',
                borderRadius: 14,
                padding: '16px 20px',
                zIndex: 2,
                boxShadow: '0 8px 24px rgba(18,53,91,0.25)',
              }}>
                <div style={{ fontFamily: "'Noto Sans Devanagari', sans-serif", fontSize: 12, opacity: 0.7, marginBottom: 4 }}>
                  वर्तमान पद
                </div>
                <div style={{ fontFamily: "'Noto Sans Devanagari', sans-serif", fontSize: 14, fontWeight: 700 }}>
                  जिला अध्यक्ष
                </div>
                <div style={{ fontFamily: "'Noto Sans Devanagari', sans-serif", fontSize: 12, opacity: 0.8 }}>
                  भारतीय किसान संघ, झुंझुनू
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <SectionHeader
              tag="मेरा परिचय"
              title="एक समर्पित जनसेवक"
              subtitle="डॉ. पवन चौधरी एक ऐसे जमीनी नेता हैं जो किसानों, गाँवों और पर्यावरण के लिए निरंतर संघर्षरत हैं। उनकी सेवा शब्दों में नहीं, कार्यों में है।"
            />

            <p style={{
              fontFamily: "'Noto Sans Devanagari', sans-serif",
              fontSize: 16,
              color: '#4B5563',
              lineHeight: 1.9,
              marginBottom: 28,
            }}>
              डॉ. पवन चौधरी भारतीय किसान संघ, झुंझुनू के जिला अध्यक्ष और दिशा समिति राजस्थान के राज्य समिति सदस्य हैं। वे किसानों के अधिकारों के लिए अथक संघर्ष करते हैं और ग्रामीण क्षेत्रों में जनसेवा के माध्यम से हजारों परिवारों तक पहुँचते हैं।
            </p>

            <p style={{
              fontFamily: "'Noto Sans Devanagari', sans-serif",
              fontSize: 16,
              color: '#4B5563',
              lineHeight: 1.9,
              marginBottom: 28,
            }}>
              उनका "एक परिंडा – अनेक जीवन" अभियान पूरे राजस्थान में पर्यावरण संरक्षण का प्रतीक बन चुका है। 500 से अधिक परिंडे लगाकर उन्होंने पक्षी संरक्षण में मिसाल कायम की है।
            </p>

            {/* Highlights grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 12,
              marginBottom: 32,
            }}>
              {highlights.map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 10,
                    padding: '12px 14px',
                    background: '#F9FAFB',
                    borderRadius: 10,
                    border: '1px solid #E5E7EB',
                  }}
                >
                  <span style={{ fontSize: 18, flexShrink: 0, marginTop: 2 }}>{h.icon}</span>
                  <span style={{
                    fontFamily: "'Noto Sans Devanagari', sans-serif",
                    fontSize: 13,
                    color: '#374151',
                    lineHeight: 1.5,
                  }}>
                    {h.text}
                  </span>
                </motion.div>
              ))}
            </div>

            <a
              href="#social-impact"
              id="about-readmore-btn"
              onClick={e => { e.preventDefault(); document.querySelector('#social-impact')?.scrollIntoView({ behavior: 'smooth' }); }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                background: '#2E7D32',
                color: '#FFFFFF',
                padding: '14px 28px',
                borderRadius: 12,
                fontFamily: "'Noto Sans Devanagari', sans-serif",
                fontSize: 16,
                fontWeight: 600,
                textDecoration: 'none',
                boxShadow: '0 6px 20px rgba(46,125,50,0.25)',
              }}
            >
              और जानें →
            </a>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>
    </section>
  );
}
