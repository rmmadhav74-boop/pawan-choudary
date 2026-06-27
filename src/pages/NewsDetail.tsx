import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import { newsArticles } from '../data/news';
import { ImgPlaceholder } from '../components/UI';
import baithak1Img from '../assets/images/news-kisan-baithak-1.jpg';
import baithak2Img from '../assets/images/news-kisan-baithak-2.jpg';

function getImage(key?: string) {
  if (key === 'news-kisan-baithak-1') return baithak1Img;
  if (key === 'news-kisan-baithak-2') return baithak2Img;
  return null;
}

export default function NewsDetail() {
  const { id } = useParams();
  const article = newsArticles.find(n => n.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!article) {
    return (
      <>
        <Navbar />
        <div style={{ padding: '120px 24px', textAlign: 'center', minHeight: '60vh' }}>
          <h2>समाचार नहीं मिला</h2>
          <Link to="/">वापस होम पर जाएं</Link>
        </div>
        <Footer />
      </>
    );
  }

  const img = getImage(article.image);

  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 100, paddingBottom: 80, background: '#F9FAFB', minHeight: '100vh' }}>
        <article style={{ maxWidth: 800, margin: '0 auto', padding: '0 24px' }}>
          {/* Breadcrumb */}
          <div style={{ marginBottom: 24 }}>
            <Link to="/#news" style={{ color: '#2E7D32', textDecoration: 'none', fontFamily: "'Noto Sans Devanagari', sans-serif" }}>
              ← समाचार पर वापस
            </Link>
          </div>

          {/* Header */}
          <header style={{ marginBottom: 40 }}>
            <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
              <span style={{ background: '#E8F5E9', color: '#2E7D32', padding: '4px 12px', borderRadius: 999, fontSize: 13, fontFamily: "'Noto Sans Devanagari', sans-serif", fontWeight: 600 }}>
                {article.category}
              </span>
            </div>
            <h1 style={{ fontFamily: "'Noto Sans Devanagari', sans-serif", fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, color: '#12355B', lineHeight: 1.3, marginBottom: 20 }}>
              {article.title}
            </h1>
            <div style={{ display: 'flex', gap: 16, color: '#6B7280', fontFamily: "'Noto Sans Devanagari', sans-serif", fontSize: 14 }}>
              <span>📅 {article.date}</span>
              <span>📰 {article.source}</span>
            </div>
          </header>

          {/* Image */}
          <div style={{ marginBottom: 40, borderRadius: 16, overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
            {img ? (
              <img src={img} alt={article.title} style={{ width: '100%', height: 'auto', display: 'block' }} />
            ) : (
              <ImgPlaceholder height={400} label="समाचार छवि" />
            )}
          </div>

          {/* Content */}
          <div style={{ background: '#FFFFFF', padding: '40px', borderRadius: 20, boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}>
            <div style={{
              fontFamily: "'Noto Sans Devanagari', sans-serif",
              fontSize: 18,
              color: '#374151',
              lineHeight: 2,
              whiteSpace: 'pre-wrap'
            }}>
              {article.content}
            </div>

            {/* Tags */}
            <div style={{ marginTop: 40, paddingTop: 24, borderTop: '1px solid #E5E7EB', display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              <span style={{ fontSize: 14, color: '#6B7280', alignSelf: 'center', marginRight: 8 }}>टैग्स:</span>
              {article.tags.map(tag => (
                <span key={tag} style={{ background: '#F3F4F6', color: '#4B5563', padding: '4px 12px', borderRadius: 8, fontSize: 13, fontFamily: "'Noto Sans Devanagari', sans-serif" }}>
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
