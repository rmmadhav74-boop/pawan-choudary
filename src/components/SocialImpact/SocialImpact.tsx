import { motion } from 'framer-motion';
import { SectionHeader, ImgPlaceholder } from '../UI';

const impactCards = [
  {
    icon: '🌾',
    title: 'किसान हित',
    description: 'MSP सुनिश्चितीकरण, कृषि लागत में कमी और किसानों के अधिकारों के लिए निरंतर संघर्ष। 18,000+ किसानों की आवाज।',
    color: '#F0FDF4',
    borderColor: '#86EFAC',
    tag: 'किसान अधिकार',
  },
  {
    icon: '🕊️',
    title: 'एक परिंडा अनेक जीवन',
    description: 'गर्मियों में पक्षियों को पानी देने का अभूतपूर्व अभियान। 500+ परिंडे स्थापित। पूरे राजस्थान में फैला।',
    color: '#EFF6FF',
    borderColor: '#93C5FD',
    tag: 'पर्यावरण',
  },
  {
    icon: '🌳',
    title: 'पर्यावरण संरक्षण',
    description: 'वृक्षारोपण, जल संरक्षण और प्रकृति प्रेम का संदेश। जैविक खेती को बढ़ावा देने का प्रयास।',
    color: '#F0FDF4',
    borderColor: '#86EFAC',
    tag: 'हरित भविष्य',
  },
  {
    icon: '🤝',
    title: 'जनसेवा',
    description: '1000+ परिवारों तक प्रत्यक्ष सेवा। स्वास्थ्य शिविर, शिक्षा सहायता और आर्थिक मदद के माध्यम से जनकल्याण।',
    color: '#FFF7ED',
    borderColor: '#FCD34D',
    tag: 'जनकल्याण',
  },
  {
    icon: '🏡',
    title: 'ग्रामीण विकास',
    description: 'गाँव-गाँव जाकर जनसमस्याएँ सुनना, सरकारी योजनाओं की जानकारी देना और ग्रामीण युवाओं को दिशा देना।',
    color: '#FDF4FF',
    borderColor: '#D8B4FE',
    tag: 'ग्राम विकास',
  },
  {
    icon: '✊',
    title: 'किसान आंदोलन',
    description: '50+ जनआंदोलनों का सफल नेतृत्व। कलेक्ट्रेट प्रदर्शन, धरना और ज्ञापन के माध्यम से किसानों की आवाज।',
    color: '#FFF1F2',
    borderColor: '#FDA4AF',
    tag: 'आंदोलन',
  },
];

export default function SocialImpact() {
  return (
    <section id="social-impact" style={{ background: '#F9FAFB', padding: '80px 0' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
        <SectionHeader
          tag="सेवा कार्य"
          title="जनसेवा के प्रमुख क्षेत्र"
          subtitle="डॉ. पवन चौधरी के नेतृत्व में चलाए जा रहे प्रमुख सामाजिक, किसान हित और पर्यावरण अभियान।"
          center
        />

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 24,
        }} className="impact-grid">
          {impactCards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6, boxShadow: '0 16px 40px rgba(0,0,0,0.1)' }}
              style={{
                background: card.color,
                border: `1.5px solid ${card.borderColor}`,
                borderRadius: 20,
                padding: '28px 24px',
                cursor: 'default',
                transition: 'all 0.3s ease',
              }}
            >
              {/* Icon */}
              <div style={{
                width: 64,
                height: 64,
                background: '#FFFFFF',
                borderRadius: 16,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 30,
                marginBottom: 16,
                boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
              }}>
                {card.icon}
              </div>

              {/* Tag */}
              <span style={{
                display: 'inline-block',
                fontSize: 11,
                fontFamily: "'Noto Sans Devanagari', sans-serif",
                color: '#6B7280',
                background: '#FFFFFF',
                padding: '3px 10px',
                borderRadius: 999,
                marginBottom: 10,
                border: '1px solid #E5E7EB',
                fontWeight: 500,
              }}>
                {card.tag}
              </span>

              <h3 style={{
                fontFamily: "'Noto Sans Devanagari', sans-serif",
                fontSize: 20,
                fontWeight: 700,
                color: '#12355B',
                marginBottom: 10,
              }}>
                {card.title}
              </h3>

              <p style={{
                fontFamily: "'Noto Sans Devanagari', sans-serif",
                fontSize: 14,
                color: '#4B5563',
                lineHeight: 1.8,
                marginBottom: 16,
              }}>
                {card.description}
              </p>

              {/* Image placeholder */}
              <ImgPlaceholder height={160} label="छवि यहाँ जोड़ें" />

              <a
                href="#news"
                onClick={e => { e.preventDefault(); document.querySelector('#news')?.scrollIntoView({ behavior: 'smooth' }); }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 6,
                  marginTop: 16,
                  color: '#2E7D32',
                  fontFamily: "'Noto Sans Devanagari', sans-serif",
                  fontSize: 14,
                  fontWeight: 600,
                  textDecoration: 'none',
                }}
              >
                और पढ़ें →
              </a>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .impact-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 640px) {
          .impact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
