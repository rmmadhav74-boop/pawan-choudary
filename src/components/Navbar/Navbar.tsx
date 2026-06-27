import { useEffect, useState } from 'react';

import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { FaPhoneAlt } from 'react-icons/fa';

const navLinks = [
  { label: 'होम', href: '#home' },
  { label: 'परिचय', href: '#about' },
  { label: 'सेवा कार्य', href: '#social-impact' },
  { label: 'समाचार', href: '#news' },
  { label: 'गैलरी', href: '#gallery' },
  { label: 'वीडियो', href: '#videos' },
  { label: 'जनसमस्याएँ', href: '#jan-samsya' },
  { label: 'संपर्क', href: '#contact' },
];

const mobileNavLinks = [
  { label: 'होम', href: '#home', icon: '🏠' },
  { label: 'परिचय', href: '#about', icon: '👤' },
  { label: 'समाचार', href: '#news', icon: '📰' },
  { label: 'गैलरी', href: '#gallery', icon: '🖼️' },
  { label: 'संपर्क', href: '#contact', icon: '📞' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);


  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    if (href.startsWith('#')) {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 800,
          background: 'rgba(255,255,255,0.97)',
          backdropFilter: 'blur(12px)',
          borderBottom: scrolled ? '1px solid #E5E7EB' : '1px solid transparent',
          boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.07)' : 'none',
          transition: 'all 0.3s ease',
        }}
      >
        <div style={{
          maxWidth: 1280,
          margin: '0 auto',
          padding: '0 24px',
          height: 68,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          {/* Logo */}
          <a
            href="#home"
            onClick={() => handleNavClick('#home')}
            style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10 }}
          >
            <div style={{
              width: 40,
              height: 40,
              background: 'linear-gradient(135deg, #2E7D32, #388E3C)',
              borderRadius: 10,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 20,
              flexShrink: 0,
            }}>
              🌾
            </div>
            <div>
              <div style={{
                fontFamily: "'Noto Sans Devanagari', sans-serif",
                fontWeight: 700,
                fontSize: 16,
                color: '#12355B',
                lineHeight: 1.2,
              }}>
                डॉ. पवन चौधरी
              </div>
              <div style={{
                fontFamily: "'Noto Sans Devanagari', sans-serif",
                fontSize: 11,
                color: '#2E7D32',
                fontWeight: 500,
              }}>
                जिला अध्यक्ष, भारतीय किसान संघ
              </div>
            </div>
          </a>

          {/* Desktop Nav */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: 2,
          }} className="desktop-nav">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={e => { e.preventDefault(); handleNavClick(link.href); }}
                style={{
                  fontFamily: "'Noto Sans Devanagari', sans-serif",
                  fontSize: 14,
                  fontWeight: 500,
                  color: '#374151',
                  padding: '6px 10px',
                  borderRadius: 8,
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={e => {
                  (e.target as HTMLElement).style.color = '#2E7D32';
                  (e.target as HTMLElement).style.background = '#E8F5E9';
                }}
                onMouseLeave={e => {
                  (e.target as HTMLElement).style.color = '#374151';
                  (e.target as HTMLElement).style.background = 'transparent';
                }}
              >
                {link.label}
              </a>
            ))}

            {/* CTA Button */}
            <a
              href="#contact"
              onClick={e => { e.preventDefault(); handleNavClick('#contact'); }}
              id="nav-contact-btn"
              style={{
                marginLeft: 8,
                background: '#2E7D32',
                color: '#FFFFFF',
                padding: '8px 18px',
                borderRadius: 9,
                fontFamily: "'Noto Sans Devanagari', sans-serif",
                fontSize: 14,
                fontWeight: 600,
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: 6,
                boxShadow: '0 4px 12px rgba(46,125,50,0.25)',
                transition: 'all 0.2s ease',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={e => {
                (e.target as HTMLElement).style.background = '#1B5E20';
                (e.target as HTMLElement).style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={e => {
                (e.target as HTMLElement).style.background = '#2E7D32';
                (e.target as HTMLElement).style.transform = 'translateY(0)';
              }}
            >
              <FaPhoneAlt size={12} />
              सम्पर्क करें
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: 8,
              borderRadius: 8,
              color: '#374151',
              display: 'none',
            }}
            className="mobile-menu-btn"
            aria-label="मेनू"
          >
            {menuOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            style={{
              position: 'fixed',
              top: 68,
              right: 0,
              bottom: 0,
              width: '80%',
              maxWidth: 320,
              background: '#FFFFFF',
              zIndex: 799,
              boxShadow: '-4px 0 30px rgba(0,0,0,0.1)',
              padding: '24px 20px',
              overflowY: 'auto',
            }}
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={e => { e.preventDefault(); handleNavClick(link.href); }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                style={{
                  display: 'block',
                  fontFamily: "'Noto Sans Devanagari', sans-serif",
                  fontSize: 18,
                  fontWeight: 500,
                  color: '#374151',
                  padding: '14px 16px',
                  borderRadius: 10,
                  textDecoration: 'none',
                  marginBottom: 4,
                  borderBottom: '1px solid #F3F4F6',
                }}
              >
                {link.label}
              </motion.a>
            ))}
            <a
              href="tel:+919999999999"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                marginTop: 20,
                background: '#2E7D32',
                color: '#FFFFFF',
                padding: '14px 20px',
                borderRadius: 10,
                fontFamily: "'Noto Sans Devanagari', sans-serif",
                fontSize: 17,
                fontWeight: 600,
                textDecoration: 'none',
                justifyContent: 'center',
              }}
            >
              <FaPhoneAlt size={16} />
              सम्पर्क करें
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Bottom Nav */}
      <div className="mobile-bottom-nav" style={{ justifyContent: 'space-around' }}>
        {mobileNavLinks.map(link => (
          <a
            key={link.href}
            href={link.href}
            onClick={e => { e.preventDefault(); handleNavClick(link.href); }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 2,
              textDecoration: 'none',
              flex: 1,
              padding: '6px 0',
            }}
          >
            <span style={{ fontSize: 20 }}>{link.icon}</span>
            <span style={{
              fontFamily: "'Noto Sans Devanagari', sans-serif",
              fontSize: 11,
              color: '#374151',
              fontWeight: 500,
            }}>
              {link.label}
            </span>
          </a>
        ))}
      </div>

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
}
