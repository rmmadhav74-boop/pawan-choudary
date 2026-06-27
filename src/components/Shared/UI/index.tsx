import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface SectionHeaderProps {
  tag?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
}

export function SectionHeader({ tag, title, subtitle, center = false, light = false }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6 }}
      style={{ textAlign: center ? 'center' : 'left', marginBottom: 40 }}
    >
      {tag && (
        <span style={{
          display: 'inline-block',
          background: '#E8F5E9',
          color: '#2E7D32',
          padding: '4px 14px',
          borderRadius: 999,
          fontSize: 13,
          fontWeight: 600,
          fontFamily: "'Noto Sans Devanagari', sans-serif",
          letterSpacing: '0.02em',
          marginBottom: 12,
        }}>
          {tag}
        </span>
      )}
      <h2 style={{
        fontFamily: "'Noto Sans Devanagari', sans-serif",
        fontSize: 'clamp(26px, 4vw, 40px)',
        fontWeight: 700,
        color: light ? '#FFFFFF' : '#12355B',
        lineHeight: 1.3,
        marginBottom: 8,
      }}>
        {title}
      </h2>
      <div style={{
        width: 56,
        height: 3,
        background: '#2E7D32',
        borderRadius: 2,
        margin: center ? '12px auto 0' : '12px 0 0',
      }} />
      {subtitle && (
        <p style={{
          fontFamily: "'Noto Sans Devanagari', sans-serif",
          fontSize: 17,
          color: light ? 'rgba(255,255,255,0.8)' : '#6B7280',
          marginTop: 16,
          maxWidth: center ? 560 : '100%',
          margin: center ? '16px auto 0' : '16px 0 0',
          lineHeight: 1.7,
        }}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  href?: string;
  fullWidth?: boolean;
  icon?: ReactNode;
  id?: string;
}

export function Button({ children, variant = 'primary', size = 'md', onClick, href, fullWidth, icon, id }: ButtonProps) {
  const sizes = {
    sm: { padding: '8px 18px', fontSize: 14 },
    md: { padding: '12px 24px', fontSize: 16 },
    lg: { padding: '16px 32px', fontSize: 18 },
  };

  const baseStyle: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    borderRadius: 10,
    fontFamily: "'Noto Sans Devanagari', sans-serif",
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'all 0.25s ease',
    border: 'none',
    textDecoration: 'none',
    width: fullWidth ? '100%' : 'auto',
    justifyContent: fullWidth ? 'center' : 'flex-start',
    ...sizes[size],
  };

  const variants = {
    primary: {
      background: '#2E7D32',
      color: '#FFFFFF',
      boxShadow: '0 4px 14px rgba(46,125,50,0.3)',
    },
    outline: {
      background: 'transparent',
      color: '#2E7D32',
      border: '2px solid #2E7D32',
    },
    ghost: {
      background: 'transparent',
      color: '#2E7D32',
    },
  };

  const style = { ...baseStyle, ...variants[variant] };

  if (href) {
    return (
      <a href={href} style={style} id={id}>
        {icon && icon}
        {children}
      </a>
    );
  }

  return (
    <button style={style} onClick={onClick} id={id}>
      {icon && icon}
      {children}
    </button>
  );
}

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  style?: React.CSSProperties;
}

export function Card({ children, hover = true, style }: CardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -4, boxShadow: '0 12px 40px rgba(0,0,0,0.1)' } : {}}
      transition={{ duration: 0.3 }}
      style={{
        background: '#FFFFFF',
        borderRadius: 16,
        border: '1px solid #E5E7EB',
        overflow: 'hidden',
        boxShadow: '0 2px 16px rgba(0,0,0,0.05)',
        ...style,
      }}
    >
      {children}
    </motion.div>
  );
}

export function ImgPlaceholder({ height = 200, label = 'छवि यहाँ जोड़ें', style }: { height?: number; label?: string; style?: React.CSSProperties }) {
  return (
    <div
      className="img-placeholder"
      style={{ height, ...style }}
    >
      <div>
        <div style={{ fontSize: 32, marginBottom: 8 }}>📷</div>
        <div style={{ fontFamily: "'Noto Sans Devanagari', sans-serif", fontSize: 13, color: '#9CA3AF' }}>{label}</div>
      </div>
    </div>
  );
}
