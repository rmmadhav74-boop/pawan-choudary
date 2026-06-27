import { motion } from 'framer-motion';
import { SectionHeader } from '../UI';

const publications = [
  {
    icon: '📋',
    title: 'किसान ज्ञापन 2025',
    type: 'Memorandum',
    desc: 'किसानों की प्रमुख मांगों और समस्याओं पर तैयार किया गया विस्तृत ज्ञापन।',
    color: '#E8F5E9',
    borderColor: '#86EFAC',
  },
  {
    icon: '🎤',
    title: 'कलेक्ट्रेट प्रदर्शन भाषण',
    type: 'Speech',
    desc: 'झुंझुनू कलेक्ट्रेट प्रदर्शन में दिए गए ऐतिहासिक भाषण का पूर्ण पाठ।',
    color: '#EFF6FF',
    borderColor: '#93C5FD',
  },
  {
    icon: '📰',
    title: 'परिंडा अभियान प्रेस नोट',
    type: 'Press Note',
    desc: '"एक परिंडा – अनेक जीवन" अभियान के बारे में विस्तृत प्रेस नोट।',
    color: '#FDF4FF',
    borderColor: '#D8B4FE',
  },
  {
    icon: '📄',
    title: 'जैविक खेती प्रस्ताव',
    type: 'Document',
    desc: 'भारतीय किसान संघ के राष्ट्रीय अधिवेशन में पारित जैविक खेती प्रस्ताव।',
    color: '#FFF7ED',
    borderColor: '#FCD34D',
  },
  {
    icon: '📊',
    title: 'किसान समस्या रिपोर्ट',
    type: 'Report',
    desc: 'जिले के किसानों की प्रमुख समस्याओं पर आधारित विस्तृत रिपोर्ट।',
    color: '#FFF1F2',
    borderColor: '#FDA4AF',
  },
  {
    icon: '📌',
    title: 'कार्यक्रम प्रतिवेदन',
    type: 'Report',
    desc: 'भारतीय किसान संघ के विभिन्न कार्यक्रमों की वार्षिक रिपोर्ट।',
    color: '#F0FDF4',
    borderColor: '#6EE7B7',
  },
];

export default function Publications() {
  return (
    <section id="publications" style={{ background: '#FFFFFF', padding: '80px 0' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
        <SectionHeader
          tag="प्रकाशन"
          title="दस्तावेज़ एवं प्रकाशन"
          subtitle="किसान ज्ञापन, भाषण, प्रेस नोट और महत्वपूर्ण दस्तावेज़ डाउनलोड करें।"
          center
        />

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 20,
        }} className="pub-grid">
          {publications.map((pub, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              whileHover={{ y: -4, boxShadow: '0 12px 30px rgba(0,0,0,0.08)' }}
              style={{
                background: pub.color,
                border: `1.5px solid ${pub.borderColor}`,
                borderRadius: 16,
                padding: '24px 22px',
                transition: 'all 0.3s ease',
              }}
            >
              <div style={{
                width: 52,
                height: 52,
                background: '#FFFFFF',
                borderRadius: 12,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 24,
                marginBottom: 14,
                boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
              }}>
                {pub.icon}
              </div>

              <span style={{
                display: 'inline-block',
                background: '#FFFFFF',
                border: `1px solid ${pub.borderColor}`,
                color: '#6B7280',
                padding: '2px 10px',
                borderRadius: 999,
                fontSize: 11,
                fontFamily: "'Inter', sans-serif",
                fontWeight: 500,
                marginBottom: 10,
              }}>
                {pub.type}
              </span>

              <h3 style={{
                fontFamily: "'Noto Sans Devanagari', sans-serif",
                fontSize: 18,
                fontWeight: 700,
                color: '#12355B',
                marginBottom: 8,
                lineHeight: 1.4,
              }}>
                {pub.title}
              </h3>

              <p style={{
                fontFamily: "'Noto Sans Devanagari', sans-serif",
                fontSize: 14,
                color: '#4B5563',
                lineHeight: 1.7,
                marginBottom: 18,
              }}>
                {pub.desc}
              </p>

              <button
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 6,
                  background: '#FFFFFF',
                  border: `1.5px solid ${pub.borderColor}`,
                  color: '#2E7D32',
                  padding: '8px 16px',
                  borderRadius: 8,
                  fontFamily: "'Noto Sans Devanagari', sans-serif",
                  fontSize: 13,
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
                id={`pub-download-${i}`}
              >
                ⬇️ डाउनलोड करें
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) { .pub-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 600px) { .pub-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
