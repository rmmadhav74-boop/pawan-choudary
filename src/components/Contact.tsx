import { motion } from 'framer-motion';
import { SectionHeader } from './UI';
import { FaPhone, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaYoutube, FaTwitter } from 'react-icons/fa';

const contactInfo = [
  {
    icon: <FaPhone size={20} />,
    label: 'फोन',
    value: '+91 99999 99999',
    href: 'tel:+919999999999',
    color: '#E8F5E9',
    iconColor: '#2E7D32',
  },
  {
    icon: <FaWhatsapp size={20} />,
    label: 'WhatsApp',
    value: 'मैसेज करें',
    href: 'https://wa.me/919999999999',
    color: '#DCFCE7',
    iconColor: '#16A34A',
  },
  {
    icon: <FaEnvelope size={20} />,
    label: 'ईमेल',
    value: 'pawan@example.com',
    href: 'mailto:pawan@example.com',
    color: '#EFF6FF',
    iconColor: '#1D4ED8',
  },
  {
    icon: <FaMapMarkerAlt size={20} />,
    label: 'कार्यालय',
    value: 'झुंझुनू, राजस्थान',
    href: 'https://maps.google.com',
    color: '#FFF7ED',
    iconColor: '#C2410C',
  },
];

export default function Contact() {
  return (
    <section id="contact" style={{ background: '#F9FAFB', padding: '80px 0' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
        <SectionHeader
          tag="संपर्क"
          title="संपर्क करें"
          subtitle="किसी भी जानकारी, सहयोग या समस्या के लिए सीधे संपर्क करें।"
          center
        />

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 40,
          alignItems: 'flex-start',
        }} className="contact-grid">
          {/* Contact Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            {/* Main contact card */}
            <div style={{
              background: '#FFFFFF',
              border: '1px solid #E5E7EB',
              borderRadius: 20,
              padding: '28px 24px',
              marginBottom: 20,
              boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 20 }}>
                <div style={{
                  width: 56,
                  height: 56,
                  background: '#E8F5E9',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 24,
                }}>
                  
                </div>
                <div>
                  <h3 style={{
                    fontFamily: "'Noto Sans Devanagari', sans-serif",
                    fontSize: 18,
                    fontWeight: 700,
                    color: '#12355B',
                  }}>
                    डॉ. पवन चौधरी
                  </h3>
                  <p style={{
                    fontFamily: "'Noto Sans Devanagari', sans-serif",
                    fontSize: 13,
                    color: '#6B7280',
                  }}>
                    जिला अध्यक्ष, भारतीय किसान संघ, झुंझुनू
                  </p>
                </div>
              </div>

              <div className="contact-form-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                {contactInfo.map((c, i) => (
                  <a
                    key={i}
                    href={c.href}
                    target={c.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    id={`contact-${i}`}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 12,
                      padding: '14px 16px',
                      background: c.color,
                      borderRadius: 12,
                      textDecoration: 'none',
                      border: '1px solid transparent',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    <div style={{
                      width: 38,
                      height: 38,
                      background: '#FFFFFF',
                      borderRadius: 10,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: c.iconColor,
                      flexShrink: 0,
                      boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                    }}>
                      {c.icon}
                    </div>
                    <div>
                      <div style={{
                        fontFamily: "'Noto Sans Devanagari', sans-serif",
                        fontSize: 11,
                        color: '#9CA3AF',
                      }}>
                        {c.label}
                      </div>
                      <div style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: 13,
                        color: '#12355B',
                        fontWeight: 600,
                      }}>
                        {c.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div style={{
              background: '#FFFFFF',
              border: '1px solid #E5E7EB',
              borderRadius: 16,
              padding: '20px 24px',
            }}>
              <h4 style={{
                fontFamily: "'Noto Sans Devanagari', sans-serif",
                fontSize: 16,
                fontWeight: 700,
                color: '#12355B',
                marginBottom: 14,
              }}>
                सोशल मीडिया पर जुड़ें
              </h4>
              <div style={{ display: 'flex', gap: 12 }}>
                {[
                  { icon: <FaFacebook size={20} />, label: 'Facebook', color: '#1877F2', href: '#' },
                  { icon: <FaYoutube size={20} />, label: 'YouTube', color: '#FF0000', href: '#' },
                  { icon: <FaWhatsapp size={20} />, label: 'WhatsApp', color: '#25D366', href: 'https://wa.me/919999999999' },
                  { icon: <FaTwitter size={20} />, label: 'Twitter', color: '#1DA1F2', href: '#' },
                ].map(s => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={s.label}
                    style={{
                      width: 44,
                      height: 44,
                      background: s.color,
                      borderRadius: 10,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#FFFFFF',
                      textDecoration: 'none',
                      transition: 'transform 0.2s ease',
                    }}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div style={{
              borderRadius: 20,
              overflow: 'hidden',
              border: '1px solid #E5E7EB',
              boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
              height: 420,
              background: '#E8F5E9',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 12,
            }}>
              {/* Google Maps embed placeholder */}
              <div style={{
                width: '100%',
                height: '100%',
                position: 'relative',
                background: 'linear-gradient(135deg, #E8F5E9 0%, #F0FDF4 100%)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <span style={{ fontSize: 48, marginBottom: 12 }}></span>
                <h4 style={{
                  fontFamily: "'Noto Sans Devanagari', sans-serif",
                  fontSize: 18,
                  fontWeight: 700,
                  color: '#12355B',
                  marginBottom: 6,
                }}>
                  झुंझुनू, राजस्थान
                </h4>
                <p style={{
                  fontFamily: "'Noto Sans Devanagari', sans-serif",
                  fontSize: 14,
                  color: '#6B7280',
                  textAlign: 'center',
                  maxWidth: 280,
                  lineHeight: 1.6,
                }}>
                  भारतीय किसान संघ, जिला कार्यालय
                  <br />
                  झुंझुनू, राजस्थान — 333001
                </p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="contact-map-btn"
                  style={{
                    marginTop: 16,
                    background: '#2E7D32',
                    color: '#FFFFFF',
                    padding: '10px 22px',
                    borderRadius: 8,
                    fontFamily: "'Noto Sans Devanagari', sans-serif",
                    fontSize: 14,
                    fontWeight: 600,
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 6,
                  }}
                >
                   Google Maps पर देखें
                </a>

                {/* Grid overlay for map feel */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundImage: `linear-gradient(rgba(46,125,50,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(46,125,50,0.05) 1px, transparent 1px)`,
                  backgroundSize: '40px 40px',
                  pointerEvents: 'none',
                }} />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
