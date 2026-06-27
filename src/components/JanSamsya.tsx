import { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from './UI';

interface FormData {
  naam: string;
  mobile: string;
  gaon: string;
  samasya: string;
  photo: File | null;
  video: File | null;
}

export default function JanSamsya() {
  const [form, setForm] = useState<FormData>({
    naam: '', mobile: '', gaon: '', samasya: '', photo: null, video: null,
  });
  const [submitted, setSubmitted] = useState(false);
  const [complaintNo, setComplaintNo] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>, key: 'photo' | 'video') => {
    const file = e.target.files?.[0] || null;
    setForm(prev => ({ ...prev, [key]: file }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.naam || !form.mobile || !form.gaon || !form.samasya) {
      setError('कृपया सभी आवश्यक जानकारी भरें।');
      return;
    }
    setError('');
    const no = 'JZ-' + Date.now().toString().slice(-6);
    setComplaintNo(no);
    setSubmitted(true);
  };

  return (
    <section id="jan-samsya" style={{ background: '#FFFFFF', padding: '80px 0' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
        <SectionHeader
          tag="जनसमस्याएँ"
          title="अपनी समस्या बताएं"
          subtitle="डॉ. पवन चौधरी तक सीधे अपनी समस्या पहुँचाएं। हर समस्या का समाधान हमारी प्राथमिकता है।"
          center
        />

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 40,
          alignItems: 'flex-start',
        }} className="jan-grid">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            {!submitted ? (
              <form onSubmit={handleSubmit} style={{
                background: '#F9FAFB',
                border: '1px solid #E5E7EB',
                borderRadius: 20,
                padding: '32px 28px',
              }}>
                <h3 style={{
                  fontFamily: "'Noto Sans Devanagari', sans-serif",
                  fontSize: 20,
                  fontWeight: 700,
                  color: '#12355B',
                  marginBottom: 24,
                }}>
                  समस्या दर्ज करें
                </h3>

                {error && (
                  <div style={{
                    background: '#FEF2F2',
                    border: '1px solid #FECACA',
                    borderRadius: 8,
                    padding: '10px 14px',
                    marginBottom: 16,
                    fontFamily: "'Noto Sans Devanagari', sans-serif",
                    fontSize: 14,
                    color: '#991B1B',
                  }}>
                    {error}
                  </div>
                )}

                <div style={{ marginBottom: 16 }}>
                  <label style={{
                    display: 'block',
                    fontFamily: "'Noto Sans Devanagari', sans-serif",
                    fontSize: 14,
                    fontWeight: 600,
                    color: '#374151',
                    marginBottom: 6,
                  }}>
                    नाम *
                  </label>
                  <input
                    name="naam"
                    value={form.naam}
                    onChange={handleChange}
                    placeholder="आपका पूरा नाम"
                    className="form-input"
                    id="jan-naam"
                    required
                  />
                </div>

                <div style={{ marginBottom: 16 }}>
                  <label style={{
                    display: 'block',
                    fontFamily: "'Noto Sans Devanagari', sans-serif",
                    fontSize: 14,
                    fontWeight: 600,
                    color: '#374151',
                    marginBottom: 6,
                  }}>
                    मोबाइल नंबर *
                  </label>
                  <input
                    name="mobile"
                    type="tel"
                    value={form.mobile}
                    onChange={handleChange}
                    placeholder="10 अंकों का मोबाइल नंबर"
                    className="form-input"
                    id="jan-mobile"
                    maxLength={10}
                    required
                  />
                </div>

                <div style={{ marginBottom: 16 }}>
                  <label style={{
                    display: 'block',
                    fontFamily: "'Noto Sans Devanagari', sans-serif",
                    fontSize: 14,
                    fontWeight: 600,
                    color: '#374151',
                    marginBottom: 6,
                  }}>
                    गाँव / क्षेत्र *
                  </label>
                  <input
                    name="gaon"
                    value={form.gaon}
                    onChange={handleChange}
                    placeholder="आपका गाँव या क्षेत्र"
                    className="form-input"
                    id="jan-gaon"
                    required
                  />
                </div>

                <div style={{ marginBottom: 16 }}>
                  <label style={{
                    display: 'block',
                    fontFamily: "'Noto Sans Devanagari', sans-serif",
                    fontSize: 14,
                    fontWeight: 600,
                    color: '#374151',
                    marginBottom: 6,
                  }}>
                    समस्या का विवरण *
                  </label>
                  <textarea
                    name="samasya"
                    value={form.samasya}
                    onChange={handleChange}
                    placeholder="अपनी समस्या विस्तार से लिखें..."
                    className="form-input"
                    id="jan-samasya"
                    rows={5}
                    style={{ resize: 'vertical', minHeight: 120 }}
                    required
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 24 }}>
                  <div>
                    <label style={{
                      display: 'block',
                      fontFamily: "'Noto Sans Devanagari', sans-serif",
                      fontSize: 14,
                      fontWeight: 600,
                      color: '#374151',
                      marginBottom: 6,
                    }}>
                      📷 फोटो
                    </label>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={e => handleFile(e, 'photo')}
                      id="jan-photo"
                      style={{ display: 'none' }}
                    />
                    <label
                      htmlFor="jan-photo"
                      style={{
                        display: 'block',
                        padding: '10px 14px',
                        border: '1.5px dashed #D1D5DB',
                        borderRadius: 10,
                        cursor: 'pointer',
                        fontFamily: "'Noto Sans Devanagari', sans-serif",
                        fontSize: 13,
                        color: '#9CA3AF',
                        textAlign: 'center',
                        background: '#FFFFFF',
                      }}
                    >
                      {form.photo ? form.photo.name.slice(0, 15) + '...' : 'फोटो चुनें'}
                    </label>
                  </div>
                  <div>
                    <label style={{
                      display: 'block',
                      fontFamily: "'Noto Sans Devanagari', sans-serif",
                      fontSize: 14,
                      fontWeight: 600,
                      color: '#374151',
                      marginBottom: 6,
                    }}>
                      🎥 वीडियो
                    </label>
                    <input
                      type="file"
                      accept="video/*"
                      onChange={e => handleFile(e, 'video')}
                      id="jan-video"
                      style={{ display: 'none' }}
                    />
                    <label
                      htmlFor="jan-video"
                      style={{
                        display: 'block',
                        padding: '10px 14px',
                        border: '1.5px dashed #D1D5DB',
                        borderRadius: 10,
                        cursor: 'pointer',
                        fontFamily: "'Noto Sans Devanagari', sans-serif",
                        fontSize: 13,
                        color: '#9CA3AF',
                        textAlign: 'center',
                        background: '#FFFFFF',
                      }}
                    >
                      {form.video ? form.video.name.slice(0, 15) + '...' : 'वीडियो चुनें'}
                    </label>
                  </div>
                </div>

                <button
                  type="submit"
                  id="jan-submit-btn"
                  style={{
                    width: '100%',
                    padding: '14px 0',
                    background: '#2E7D32',
                    color: '#FFFFFF',
                    border: 'none',
                    borderRadius: 12,
                    fontFamily: "'Noto Sans Devanagari', sans-serif",
                    fontSize: 18,
                    fontWeight: 700,
                    cursor: 'pointer',
                    boxShadow: '0 6px 20px rgba(46,125,50,0.3)',
                    transition: 'all 0.2s ease',
                  }}
                >
                  समस्या जमा करें →
                </button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{
                  background: '#E8F5E9',
                  border: '2px solid #2E7D32',
                  borderRadius: 20,
                  padding: '40px 28px',
                  textAlign: 'center',
                }}
              >
                <div style={{ fontSize: 56, marginBottom: 16 }}>✅</div>
                <h3 style={{
                  fontFamily: "'Noto Sans Devanagari', sans-serif",
                  fontSize: 22,
                  fontWeight: 700,
                  color: '#1B5E20',
                  marginBottom: 10,
                }}>
                  समस्या दर्ज हो गई!
                </h3>
                <p style={{
                  fontFamily: "'Noto Sans Devanagari', sans-serif",
                  fontSize: 15,
                  color: '#4B5563',
                  marginBottom: 20,
                  lineHeight: 1.7,
                }}>
                  आपकी समस्या डॉ. पवन चौधरी तक पहुँच जाएगी। जल्द ही आपसे संपर्क किया जाएगा।
                </p>
                <div style={{
                  background: '#FFFFFF',
                  borderRadius: 12,
                  padding: '16px 20px',
                  display: 'inline-block',
                }}>
                  <div style={{
                    fontFamily: "'Noto Sans Devanagari', sans-serif",
                    fontSize: 13,
                    color: '#6B7280',
                    marginBottom: 4,
                  }}>
                    शिकायत क्रमांक
                  </div>
                  <div style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 24,
                    fontWeight: 800,
                    color: '#2E7D32',
                    letterSpacing: '0.05em',
                  }}>
                    {complaintNo}
                  </div>
                </div>
                <br />
                <button
                  onClick={() => { setSubmitted(false); setForm({ naam: '', mobile: '', gaon: '', samasya: '', photo: null, video: null }); }}
                  style={{
                    marginTop: 20,
                    background: '#2E7D32',
                    color: '#FFFFFF',
                    padding: '10px 24px',
                    borderRadius: 8,
                    border: 'none',
                    fontFamily: "'Noto Sans Devanagari', sans-serif",
                    fontSize: 15,
                    cursor: 'pointer',
                    fontWeight: 600,
                  }}
                >
                  नई समस्या दर्ज करें
                </button>
              </motion.div>
            )}
          </motion.div>

          {/* Info panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{ display: 'flex', flexDirection: 'column', gap: 16 }}
          >
            <div style={{
              background: '#12355B',
              borderRadius: 18,
              padding: '28px 24px',
              color: '#FFFFFF',
            }}>
              <h3 style={{
                fontFamily: "'Noto Sans Devanagari', sans-serif",
                fontSize: 20,
                fontWeight: 700,
                marginBottom: 12,
              }}>
                कैसे काम करता है?
              </h3>
              {[
                { step: '1', text: 'फॉर्म भरें और समस्या जमा करें' },
                { step: '2', text: 'शिकायत क्रमांक नोट करें' },
                { step: '3', text: 'हमारी टीम 24 घंटे में संपर्क करेगी' },
                { step: '4', text: 'समस्या का समाधान किया जाएगा' },
              ].map(s => (
                <div key={s.step} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', marginBottom: 12 }}>
                  <div style={{
                    width: 28,
                    height: 28,
                    background: '#2E7D32',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 13,
                    fontWeight: 700,
                    flexShrink: 0,
                  }}>
                    {s.step}
                  </div>
                  <p style={{
                    fontFamily: "'Noto Sans Devanagari', sans-serif",
                    fontSize: 15,
                    color: 'rgba(255,255,255,0.85)',
                    lineHeight: 1.5,
                    paddingTop: 4,
                  }}>
                    {s.text}
                  </p>
                </div>
              ))}
            </div>

            <div style={{
              background: '#E8F5E9',
              border: '1px solid #86EFAC',
              borderRadius: 18,
              padding: '22px 24px',
            }}>
              <h4 style={{
                fontFamily: "'Noto Sans Devanagari', sans-serif",
                fontSize: 16,
                fontWeight: 700,
                color: '#12355B',
                marginBottom: 12,
              }}>
                सीधे संपर्क करें
              </h4>
              {[
                { icon: '📞', label: 'फोन', value: '+91 99999 99999', href: 'tel:+919999999999' },
                { icon: '💬', label: 'WhatsApp', value: 'WhatsApp करें', href: 'https://wa.me/919999999999' },
              ].map(c => (
                <a
                  key={c.label}
                  href={c.href}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 12,
                    marginBottom: 10,
                    textDecoration: 'none',
                    padding: '10px 12px',
                    background: '#FFFFFF',
                    borderRadius: 10,
                    border: '1px solid #D1FAE5',
                    transition: 'all 0.2s ease',
                  }}
                >
                  <span style={{ fontSize: 22 }}>{c.icon}</span>
                  <div>
                    <div style={{ fontFamily: "'Noto Sans Devanagari', sans-serif", fontSize: 11, color: '#6B7280' }}>{c.label}</div>
                    <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: '#12355B', fontWeight: 600 }}>{c.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .jan-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
