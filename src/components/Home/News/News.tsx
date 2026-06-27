
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SectionHeader, ImgPlaceholder } from '../../Shared/UI';
import { newsArticles } from '../../../data/news';
import baithak1Img from '../../../assets/images/news-kisan-baithak-1.jpg';
import baithak2Img from '../../../assets/images/news-kisan-baithak-2.jpg';

function getImage(imageKey: string) {
  if (imageKey === 'news-kisan-baithak-1') return baithak1Img;
  if (imageKey === 'news-kisan-baithak-2') return baithak2Img;
  return null;
}

export default function News() {
  const [featured, ...rest] = newsArticles;

  return (
    <section id="news" style={{ background: '#F9FAFB', padding: '80px 0' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
        <SectionHeader
          tag="समाचार"
          title="ताज़ा समाचार एवं रिपोर्ट"
          subtitle="डॉ. पवन चौधरी की गतिविधियों और सामाजिक कार्यों की ताज़ा जानकारी।"
          center
        />

        {/* Featured Article */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 40 }}
        >
          <div style={{
            background: '#FFFFFF',
            borderRadius: 20,
            overflow: 'hidden',
            border: '1px solid #E5E7EB',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            boxShadow: '0 4px 24px rgba(0,0,0,0.07)',
          }} className="featured-news-grid">
            {/* Image */}
            <div style={{ minHeight: 380, background: '#E8F5E9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <ImgPlaceholder height={380} label="मुख्य समाचार छवि" style={{ borderRadius: 0, border: 'none' }} />
            </div>

            {/* Content */}
            <div style={{ padding: '36px 40px' }}>
              <div style={{ display: 'flex', gap: 8, marginBottom: 16, flexWrap: 'wrap' }}>
                <span style={{
                  background: '#E8F5E9',
                  color: '#2E7D32',
                  padding: '4px 12px',
                  borderRadius: 999,
                  fontSize: 12,
                  fontFamily: "'Noto Sans Devanagari', sans-serif",
                  fontWeight: 600,
                }}>
                  मुख्य समाचार
                </span>
                <span style={{
                  background: '#F3F4F6',
                  color: '#6B7280',
                  padding: '4px 12px',
                  borderRadius: 999,
                  fontSize: 12,
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 500,
                }}>
                  {featured.category}
                </span>
              </div>

              <h2 style={{
                fontFamily: "'Noto Sans Devanagari', sans-serif",
                fontSize: 26,
                fontWeight: 700,
                color: '#12355B',
                lineHeight: 1.4,
                marginBottom: 16,
              }}>
                {featured.title}
              </h2>

              <p style={{
                fontFamily: "'Noto Sans Devanagari', sans-serif",
                fontSize: 16,
                color: '#6B7280',
                lineHeight: 1.8,
                marginBottom: 24,
              }}>
                {featured.excerpt}
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24, flexWrap: 'wrap' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <span style={{ fontSize: 14 }}>📅</span>
                  <span style={{ fontFamily: "'Noto Sans Devanagari', sans-serif", fontSize: 13, color: '#9CA3AF' }}>
                    {featured.date}
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <span style={{ fontSize: 14 }}>📰</span>
                  <span style={{ fontFamily: "'Noto Sans Devanagari', sans-serif", fontSize: 13, color: '#9CA3AF' }}>
                    {featured.source}
                  </span>
                </div>
              </div>

              <Link
                to={`/news/${featured.id}`}
                id="featured-news-btn"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  background: '#2E7D32',
                  color: '#FFFFFF',
                  padding: '12px 24px',
                  borderRadius: 10,
                  fontFamily: "'Noto Sans Devanagari', sans-serif",
                  fontSize: 15,
                  fontWeight: 600,
                  textDecoration: 'none',
                  boxShadow: '0 4px 14px rgba(46,125,50,0.25)',
                }}
              >
                पूरी खबर पढ़ें →
              </Link>
            </div>
          </div>
        </motion.div>

        {/* News Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 20,
        }} className="news-grid">
          {rest.map((article, i) => {
            const img = getImage(article.image);
            return (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="news-card"
                style={{ cursor: 'pointer' }}
              >
                {/* Card Image */}
                <div style={{ height: 200, overflow: 'hidden', position: 'relative' }}>
                  {img ? (
                    <img
                      src={img}
                      alt={article.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      loading="lazy"
                    />
                  ) : (
                    <ImgPlaceholder height={200} label="समाचार छवि" style={{ borderRadius: 0, border: 'none' }} />
                  )}
                  <div style={{
                    position: 'absolute',
                    top: 12,
                    left: 12,
                    background: '#2E7D32',
                    color: '#FFFFFF',
                    padding: '3px 10px',
                    borderRadius: 999,
                    fontSize: 11,
                    fontFamily: "'Noto Sans Devanagari', sans-serif",
                    fontWeight: 600,
                  }}>
                    {article.category}
                  </div>
                </div>

                {/* Card Body */}
                <div style={{ padding: '16px 18px 20px' }}>
                  <div style={{
                    fontFamily: "'Noto Sans Devanagari', sans-serif",
                    fontSize: 12,
                    color: '#9CA3AF',
                    marginBottom: 8,
                    display: 'flex',
                    gap: 8,
                  }}>
                    <span>📅 {article.date}</span>
                    <span>• {article.source}</span>
                  </div>
                  <h3 style={{
                    fontFamily: "'Noto Sans Devanagari', sans-serif",
                    fontSize: 16,
                    fontWeight: 700,
                    color: '#12355B',
                    lineHeight: 1.4,
                    marginBottom: 10,
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                  }}>
                    {article.title}
                  </h3>
                  <p style={{
                    fontFamily: "'Noto Sans Devanagari', sans-serif",
                    fontSize: 13,
                    color: '#6B7280',
                    lineHeight: 1.7,
                    marginBottom: 14,
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                  }}>
                    {article.excerpt}
                  </p>
                  <Link
                    to={`/news/${article.id}`}
                    style={{
                      color: '#2E7D32',
                      fontFamily: "'Noto Sans Devanagari', sans-serif",
                      fontSize: 13,
                      fontWeight: 600,
                      textDecoration: 'none',
                    }}
                  >
                    पूरी खबर →
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div style={{ textAlign: 'center', marginTop: 40 }}>
          <Link
            to="/news"
            id="all-news-btn"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              border: '2px solid #2E7D32',
              color: '#2E7D32',
              padding: '12px 28px',
              borderRadius: 10,
              fontFamily: "'Noto Sans Devanagari', sans-serif",
              fontSize: 16,
              fontWeight: 600,
              textDecoration: 'none',
            }}
          >
            सभी समाचार देखें →
          </Link>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) { .news-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 600px) { .news-grid { grid-template-columns: 1fr !important; } }
        @media (max-width: 768px) { .featured-news-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
