import { motion } from 'framer-motion';
import { SectionHeader, ImgPlaceholder } from './UI';

const timelineSteps = [
  {
    year: '2025',
    title: 'अभियान की शुरुआत',
    desc: 'गर्मियों में पक्षियों को प्यासे तड़पते देख डॉ. पवन चौधरी ने "एक परिंडा – अनेक जीवन" अभियान का संकल्प लिया।',
    icon: '💡',
  },
  {
    year: 'मार्च',
    title: '50 परिंडे का प्रारंभिक लक्ष्य',
    desc: 'समाज के साथ मिलकर 50 परिंडे लगाने का लक्ष्य निर्धारित हुआ। स्कूलों, मंदिरों और सार्वजनिक स्थलों पर परिंडे लगाए गए।',
    icon: '🎯',
  },
  {
    year: 'अप्रैल',
    title: 'पिलानी न्यायालय में 11 परिंडे',
    desc: 'पिलानी न्यायालय परिसर में 11 परिंडे स्थापित हुए। न्यायाधीशों और वकीलों ने सराहना की।',
    icon: '⚖️',
  },
  {
    year: 'मई',
    title: 'जनता का जबरदस्त समर्थन',
    desc: 'हजारों लोग जुड़े। लक्ष्य 50 से बढ़ाकर 500 किया गया। महिलाएं, युवा, व्यापारी सभी ने योगदान दिया।',
    icon: '🤝',
  },
  {
    year: 'अक्टूबर',
    title: '500 परिंडे का लक्ष्य पूर्ण',
    desc: 'पूरे जिले में 500 से अधिक परिंडे लगाए गए। हजारों पक्षियों को जीवनदायी जल मिला। राजस्थान में नई मिसाल।',
    icon: '🏆',
  },
];

export default function Campaign() {
  return (
    <section id="campaign" style={{ background: '#FFFFFF', padding: '80px 0' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 60,
          alignItems: 'flex-start',
        }} className="campaign-grid">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <SectionHeader
              tag="प्रमुख अभियान"
              title='"एक परिंडा – अनेक जीवन"'
              subtitle='पक्षी संरक्षण और पर्यावरण प्रेम की एक अनूठी पहल जो पूरे राजस्थान में फैल रही है।'
            />

            <div style={{
              background: '#E8F5E9',
              borderRadius: 16,
              padding: '20px 24px',
              marginBottom: 32,
              borderLeft: '4px solid #2E7D32',
            }}>
              <p style={{
                fontFamily: "'Noto Sans Devanagari', sans-serif",
                fontSize: 16,
                color: '#1B5E20',
                lineHeight: 1.8,
                fontStyle: 'italic',
                fontWeight: 500,
              }}>
                "गर्मियों में जब पक्षी प्यासे मरते हैं, तो हम क्या कर सकते हैं? बस एक परिंडा लगाइए — और अनेक जीवन बचाइए।"
              </p>
              <p style={{
                fontFamily: "'Noto Sans Devanagari', sans-serif",
                fontSize: 14,
                color: '#2E7D32',
                marginTop: 8,
                fontWeight: 600,
              }}>
                — डॉ. पवन चौधरी
              </p>
            </div>

            {/* Timeline */}
            <div style={{ position: 'relative', paddingLeft: 32 }}>
              {/* Vertical line */}
              <div style={{
                position: 'absolute',
                left: 10,
                top: 8,
                bottom: 8,
                width: 2,
                background: 'linear-gradient(to bottom, #E8F5E9, #2E7D32, #E8F5E9)',
                borderRadius: 2,
              }} />

              {timelineSteps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  style={{ display: 'flex', gap: 16, marginBottom: 28, position: 'relative' }}
                >
                  {/* Dot */}
                  <div style={{
                    position: 'absolute',
                    left: -26,
                    top: 4,
                    width: 20,
                    height: 20,
                    background: '#FFFFFF',
                    border: '2px solid #2E7D32',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 10,
                    flexShrink: 0,
                  }}>
                    {step.icon}
                  </div>
                  <div>
                    <div style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: 11,
                      color: '#2E7D32',
                      fontWeight: 600,
                      marginBottom: 2,
                    }}>
                      {step.year}
                    </div>
                    <h4 style={{
                      fontFamily: "'Noto Sans Devanagari', sans-serif",
                      fontSize: 16,
                      fontWeight: 700,
                      color: '#12355B',
                      marginBottom: 4,
                    }}>
                      {step.title}
                    </h4>
                    <p style={{
                      fontFamily: "'Noto Sans Devanagari', sans-serif",
                      fontSize: 14,
                      color: '#6B7280',
                      lineHeight: 1.7,
                    }}>
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div style={{ display: 'flex', gap: 12, marginTop: 20, flexWrap: 'wrap' }}>
              <a
                href="#gallery"
                onClick={e => { e.preventDefault(); document.querySelector('#gallery')?.scrollIntoView({ behavior: 'smooth' }); }}
                id="campaign-gallery-btn"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  background: '#2E7D32',
                  color: '#FFFFFF',
                  padding: '12px 22px',
                  borderRadius: 10,
                  fontFamily: "'Noto Sans Devanagari', sans-serif",
                  fontSize: 15,
                  fontWeight: 600,
                  textDecoration: 'none',
                  boxShadow: '0 4px 14px rgba(46,125,50,0.25)',
                }}
              >
                🖼️ गैलरी देखें
              </a>
              <a
                href="#videos"
                onClick={e => { e.preventDefault(); document.querySelector('#videos')?.scrollIntoView({ behavior: 'smooth' }); }}
                id="campaign-video-btn"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  background: 'transparent',
                  color: '#2E7D32',
                  padding: '12px 22px',
                  borderRadius: 10,
                  fontFamily: "'Noto Sans Devanagari', sans-serif",
                  fontSize: 15,
                  fontWeight: 600,
                  textDecoration: 'none',
                  border: '2px solid #2E7D32',
                }}
              >
                ▶️ वीडियो देखें
              </a>
            </div>
          </motion.div>

          {/* Right: Images */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            style={{ display: 'flex', flexDirection: 'column', gap: 16 }}
          >
            <ImgPlaceholder height={320} label="परिंडा अभियान — मुख्य छवि" />
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              <ImgPlaceholder height={180} label="पिलानी न्यायालय" />
              <ImgPlaceholder height={180} label="जन भागीदारी" />
              <ImgPlaceholder height={180} label="परिंडे स्थापना" />
              <ImgPlaceholder height={180} label="500 का लक्ष्य" />
            </div>

            {/* Stats */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 12,
            }}>
              {[
                { n: '500+', l: 'परिंडे' },
                { n: '∞', l: 'पक्षी लाभान्वित' },
                { n: '2025', l: 'अभियान वर्ष' },
              ].map((s, i) => (
                <div key={i} style={{
                  background: '#E8F5E9',
                  borderRadius: 12,
                  padding: '16px 12px',
                  textAlign: 'center',
                }}>
                  <div style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 24,
                    fontWeight: 800,
                    color: '#2E7D32',
                  }}>
                    {s.n}
                  </div>
                  <div style={{
                    fontFamily: "'Noto Sans Devanagari', sans-serif",
                    fontSize: 12,
                    color: '#4B5563',
                    marginTop: 4,
                  }}>
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .campaign-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
}
