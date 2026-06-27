import { motion } from 'framer-motion';
import { useRef } from 'react';
import { SectionHeader, ImgPlaceholder } from '../UI';

const stories = [
  {
    image: null,
    imageLabel: 'परिंडा अभियान की शुरुआत',
    title: 'जब पक्षी प्यासे थे...',
    text: 'गर्मियों की तपती दोपहर में एक चिड़िया पानी के लिए तड़प रही थी। डॉ. पवन चौधरी ने वह दृश्य देखा और मन में संकल्प लिया — "अब और नहीं।"',
  },
  {
    image: null,
    imageLabel: 'पहला परिंडा',
    title: 'एक छोटी शुरुआत',
    text: 'पहले परिंडे के साथ एक आंदोलन की नींव रखी गई। घर-घर से लोग जुड़ने लगे। बच्चों ने परिंडे बनाए। महिलाओं ने पानी भरा।',
  },
  {
    image: null,
    imageLabel: 'किसान सभा',
    title: 'किसान की आवाज',
    text: 'जब किसान मजबूर था, जब उसकी फसल जली, जब कर्ज का बोझ था — तब डॉ. पवन चौधरी उनके साथ खड़े थे। हर दुख में, हर संघर्ष में।',
  },
  {
    image: null,
    imageLabel: 'गाँव में जनसेवा',
    title: 'गाँव-गाँव की पुकार',
    text: 'दूर-दराज के गाँवों में जाना, लोगों की समस्याएँ सुनना, सरकारी योजनाओं तक पहुँच दिलाना — यही जनसेवा है, यही संकल्प है।',
  },
  {
    image: null,
    imageLabel: '500 परिंडे',
    title: 'सपना हुआ पूरा',
    text: '500 परिंडे लगाए गए। 500 स्थानों पर पक्षियों को पानी मिला। और एक सपना जो एक चिड़िया की प्यास से शुरू हुआ, वह पूरे राजस्थान में फैल गया।',
  },
];

export default function PhotoStory() {
  const ref = useRef(null);

  return (
    <section id="photo-story" style={{ background: '#FFFFFF', padding: '80px 0', overflow: 'hidden' }}>
      <div style={{ maxWidth: 800, margin: '0 auto', padding: '0 24px' }}>
        <SectionHeader
          tag="फोटो स्टोरी"
          title="एक कहानी — तस्वीरों में"
          subtitle="डॉ. पवन चौधरी की यात्रा — एक प्रेरणादायक सफर।"
          center
        />

        <div ref={ref} style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {stories.map((story, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              style={{ marginBottom: 60 }}
            >
              {/* Image */}
              <div style={{
                borderRadius: 20,
                overflow: 'hidden',
                marginBottom: 24,
                position: 'relative',
              }}>
                <ImgPlaceholder height={360} label={story.imageLabel} />
                {/* Story number */}
                <div style={{
                  position: 'absolute',
                  top: 16,
                  left: 16,
                  background: 'rgba(18,53,91,0.85)',
                  color: '#FFFFFF',
                  width: 40,
                  height: 40,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 16,
                  fontWeight: 700,
                }}>
                  {i + 1}
                </div>
              </div>

              {/* Story text */}
              <div style={{ textAlign: 'center' }}>
                <h3 style={{
                  fontFamily: "'Noto Sans Devanagari', sans-serif",
                  fontSize: 26,
                  fontWeight: 700,
                  color: '#12355B',
                  marginBottom: 14,
                }}>
                  {story.title}
                </h3>
                <p style={{
                  fontFamily: "'Noto Sans Devanagari', sans-serif",
                  fontSize: 18,
                  color: '#6B7280',
                  lineHeight: 1.9,
                  maxWidth: 560,
                  margin: '0 auto',
                }}>
                  {story.text}
                </p>
              </div>

              {/* Connector */}
              {i < stories.length - 1 && (
                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  marginTop: 32,
                }}>
                  <div style={{
                    width: 2,
                    height: 40,
                    background: 'linear-gradient(to bottom, #2E7D32, transparent)',
                  }} />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
