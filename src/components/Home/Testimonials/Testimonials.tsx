import { motion } from 'framer-motion';
import { SectionHeader } from '../../Shared/UI';

const testimonials = [
  {
    name: 'रामनिवास शर्मा',
    village: 'ग्राम हमीनपुर, झुंझुनू',
    role: 'किसान',
    quote: 'डॉ. पवन चौधरी जी ने हमारी खेती की समस्याओं के लिए जो किया, वह कोई और नहीं कर सकता था। वे सच्चे किसान हितैषी हैं।',
    icon: '🌾',
  },
  {
    name: 'सुनीता देवी',
    village: 'ग्राम गाडौली',
    role: 'महिला किसान',
    quote: 'परिंडा अभियान से जब पहली बार चिड़ियों ने पानी पिया, तो मन में बहुत सुकून मिला। यह अभियान हमारे गाँव में भी फैले।',
    icon: '🕊️',
  },
  {
    name: 'मोहर सिंह',
    village: 'पिलानी तहसील',
    role: 'तहसील अध्यक्ष, भारतीय किसान संघ',
    quote: 'पवन चौधरी जी के नेतृत्व में हमारा संगठन और मजबूत हुआ है। उनकी मेहनत और निष्ठा अतुलनीय है।',
    icon: '🤝',
  },
  {
    name: 'गोविंद गौड़',
    village: 'झुंझुनू',
    role: 'जिला उपाध्यक्ष',
    quote: 'जिला स्तर पर किसानों की आवाज़ बुलंद करने में डॉ. पवन चौधरी जी की भूमिका सराहनीय है। वे निरंतर संघर्षरत हैं।',
    icon: '✊',
  },
  {
    name: 'मुकेश प्रजापत',
    village: 'सरदारशहर',
    role: 'सामाजिक कार्यकर्ता',
    quote: 'पवन जी ने जो काम किसानों और पर्यावरण के लिए किया है, वह इतिहास में दर्ज होगा। एक सच्चे जनसेवक।',
    icon: '⭐',
  },
  {
    name: 'रेखा स्वामी',
    village: 'ग्राम बेरी',
    role: 'ग्राम पंचायत सदस्य',
    quote: 'डॉ. पवन चौधरी जी हमारे गाँव के लिए भगवान की तरह आए। उन्होंने हर समस्या को अपनी समस्या माना।',
    icon: '🏡',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" style={{ background: '#F9FAFB', padding: '80px 0' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
        <SectionHeader
          tag="जनमत"
          title="लोग क्या कहते हैं"
          subtitle="किसान, ग्रामीण और सहयोगी — सभी की ज़ुबान पर एक ही बात।"
          center
        />

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 20,
        }} className="testimonial-grid">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              style={{
                background: '#FFFFFF',
                border: '1px solid #E5E7EB',
                borderRadius: 18,
                padding: '24px 22px',
                boxShadow: '0 2px 16px rgba(0,0,0,0.04)',
                position: 'relative',
              }}
              whileHover={{ y: -4, boxShadow: '0 12px 32px rgba(0,0,0,0.08)' }}
            >
              {/* Quote mark */}
              <div style={{
                position: 'absolute',
                top: 16,
                right: 20,
                fontSize: 48,
                color: '#E8F5E9',
                fontFamily: 'Georgia, serif',
                lineHeight: 1,
              }}>
                "
              </div>

              {/* Photo */}
              <div style={{
                width: 60,
                height: 60,
                borderRadius: '50%',
                background: '#E8F5E9',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 26,
                marginBottom: 14,
                border: '2px solid #E5E7EB',
                overflow: 'hidden',
              }}>
                {t.icon}
              </div>

              {/* Quote */}
              <p style={{
                fontFamily: "'Noto Sans Devanagari', sans-serif",
                fontSize: 15,
                color: '#374151',
                lineHeight: 1.8,
                marginBottom: 16,
                fontStyle: 'italic',
                position: 'relative',
                zIndex: 1,
              }}>
                "{t.quote}"
              </p>

              {/* Divider */}
              <div style={{ height: 1, background: '#F3F4F6', marginBottom: 14 }} />

              {/* Name */}
              <div>
                <div style={{
                  fontFamily: "'Noto Sans Devanagari', sans-serif",
                  fontSize: 16,
                  fontWeight: 700,
                  color: '#12355B',
                }}>
                  {t.name}
                </div>
                <div style={{
                  fontFamily: "'Noto Sans Devanagari', sans-serif",
                  fontSize: 13,
                  color: '#2E7D32',
                  fontWeight: 500,
                  marginTop: 2,
                }}>
                  {t.role}
                </div>
                <div style={{
                  fontFamily: "'Noto Sans Devanagari', sans-serif",
                  fontSize: 12,
                  color: '#9CA3AF',
                  marginTop: 2,
                }}>
                  📍 {t.village}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) { .testimonial-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 600px) { .testimonial-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
