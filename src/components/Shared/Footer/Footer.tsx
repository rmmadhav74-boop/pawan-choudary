import { Link } from 'react-router-dom';
import { FaPhone, FaWhatsapp, FaEnvelope, FaFacebook, FaYoutube, FaTwitter } from 'react-icons/fa';

const quickLinks = [
  { label: 'होम', href: '#home' },
  { label: 'परिचय', href: '#about' },
  { label: 'सेवा कार्य', href: '#social-impact' },
  { label: 'प्रमुख अभियान', href: '#campaign' },
];

const importantLinks = [
  { label: 'समाचार', href: '#news' },
  { label: 'गैलरी', href: '#gallery' },
  { label: 'वीडियो', href: '#videos' },
  { label: 'जनसमस्याएँ', href: '#jan-samsya' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#') && window.location.pathname === '/') {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer style={{ background: '#12355B', color: '#FFFFFF', paddingTop: 64, paddingBottom: 24 }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr 1.5fr',
          gap: 40,
          marginBottom: 48,
        }} className="footer-grid">
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
              <div style={{
                width: 44,
                height: 44,
                background: 'linear-gradient(135deg, #2E7D32, #388E3C)',
                borderRadius: 12,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 22,
              }}>
                🌾
              </div>
              <div>
                <h3 style={{
                  fontFamily: "'Noto Sans Devanagari', sans-serif",
                  fontSize: 22,
                  fontWeight: 700,
                  color: '#FFFFFF',
                  lineHeight: 1.2,
                }}>
                  डॉ. पवन चौधरी
                </h3>
                <p style={{
                  fontFamily: "'Noto Sans Devanagari', sans-serif",
                  fontSize: 13,
                  color: '#86EFAC',
                  fontWeight: 500,
                }}>
                  जनसेवा ही मेरा संकल्प है
                </p>
              </div>
            </div>
            <p style={{
              fontFamily: "'Noto Sans Devanagari', sans-serif",
              fontSize: 14,
              color: 'rgba(255,255,255,0.7)',
              lineHeight: 1.8,
              marginBottom: 24,
              maxWidth: 320,
            }}>
              सामाजिक कार्यकर्ता, किसान हितैषी और पर्यावरण प्रेमी। जिला अध्यक्ष, भारतीय किसान संघ, झुंझुनू।
            </p>
            <div style={{ display: 'flex', gap: 12 }}>
              {[
                { icon: <FaFacebook size={18} />, href: '#' },
                { icon: <FaYoutube size={18} />, href: '#' },
                { icon: <FaWhatsapp size={18} />, href: 'https://wa.me/919999999999' },
                { icon: <FaTwitter size={18} />, href: '#' },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: 36,
                    height: 36,
                    background: 'rgba(255,255,255,0.1)',
                    borderRadius: 8,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#FFFFFF',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={e => {
                    (e.target as HTMLElement).style.background = '#2E7D32';
                  }}
                  onMouseLeave={e => {
                    (e.target as HTMLElement).style.background = 'rgba(255,255,255,0.1)';
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{
              fontFamily: "'Noto Sans Devanagari', sans-serif",
              fontSize: 16,
              fontWeight: 700,
              color: '#FFFFFF',
              marginBottom: 20,
            }}>
              महत्वपूर्ण लिंक
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
              {quickLinks.map(link => (
                <li key={link.href}>
                  <Link
                    to={link.href.startsWith('#') ? `/${link.href}` : link.href}
                    onClick={e => handleNavClick(e, link.href)}
                    style={{
                      fontFamily: "'Noto Sans Devanagari', sans-serif",
                      fontSize: 14,
                      color: 'rgba(255,255,255,0.7)',
                      textDecoration: 'none',
                      transition: 'color 0.2s ease',
                    }}
                    onMouseEnter={e => { (e.target as HTMLElement).style.color = '#86EFAC'; }}
                    onMouseLeave={e => { (e.target as HTMLElement).style.color = 'rgba(255,255,255,0.7)'; }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h4 style={{
              fontFamily: "'Noto Sans Devanagari', sans-serif",
              fontSize: 16,
              fontWeight: 700,
              color: '#FFFFFF',
              marginBottom: 20,
              opacity: 0, // Visual alignment
            }}>
              अन्य लिंक
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
              {importantLinks.map(link => (
                <li key={link.href}>
                  <Link
                    to={link.href.startsWith('#') ? `/${link.href}` : link.href}
                    onClick={e => handleNavClick(e, link.href)}
                    style={{
                      fontFamily: "'Noto Sans Devanagari', sans-serif",
                      fontSize: 14,
                      color: 'rgba(255,255,255,0.7)',
                      textDecoration: 'none',
                      transition: 'color 0.2s ease',
                    }}
                    onMouseEnter={e => { (e.target as HTMLElement).style.color = '#86EFAC'; }}
                    onMouseLeave={e => { (e.target as HTMLElement).style.color = 'rgba(255,255,255,0.7)'; }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 style={{
              fontFamily: "'Noto Sans Devanagari', sans-serif",
              fontSize: 16,
              fontWeight: 700,
              color: '#FFFFFF',
              marginBottom: 20,
            }}>
              संपर्क जानकारी
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 16 }}>
              <li style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                <div style={{ color: '#86EFAC', paddingTop: 2 }}><FaPhone size={14} /></div>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: 'rgba(255,255,255,0.8)' }}>
                  +91 99999 99999
                </div>
              </li>
              <li style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                <div style={{ color: '#86EFAC', paddingTop: 2 }}><FaEnvelope size={14} /></div>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: 'rgba(255,255,255,0.8)' }}>
                  pawan@example.com
                </div>
              </li>
              <li style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                <div style={{ color: '#86EFAC', paddingTop: 2 }}><FaWhatsapp size={16} /></div>
                <div style={{ fontFamily: "'Noto Sans Devanagari', sans-serif", fontSize: 14, color: 'rgba(255,255,255,0.8)' }}>
                  WhatsApp पर संदेश भेजें
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.1)',
          paddingTop: 24,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 16,
        }}>
          <div style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 13,
            color: 'rgba(255,255,255,0.5)',
          }}>
            &copy; {currentYear} Dr. Pawan Chaudhary. All rights reserved.
          </div>
          <div style={{
            fontFamily: "'Noto Sans Devanagari', sans-serif",
            fontSize: 13,
            color: 'rgba(255,255,255,0.5)',
          }}>
            Designed with ❤️ for Janseva
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 600px) {
          .footer-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>
    </footer>
  );
}
