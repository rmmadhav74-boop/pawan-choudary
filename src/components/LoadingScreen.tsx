import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen() {
  return (
    <AnimatePresence>
      <motion.div
        className="loading-screen"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        style={{ position: 'fixed', inset: 0, background: '#fff', zIndex: 99999, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{ textAlign: 'center' }}
        >
          {/* Logo / emblem */}
          <div style={{ fontSize: 48, marginBottom: 16 }}></div>
          <h1 style={{
            fontFamily: "'Noto Sans Devanagari', sans-serif",
            fontSize: 28,
            fontWeight: 700,
            color: '#12355B',
            marginBottom: 6,
          }}>
            डॉ. पवन चौधरी
          </h1>
          <p style={{
            fontFamily: "'Noto Sans Devanagari', sans-serif",
            fontSize: 15,
            color: '#2E7D32',
            marginBottom: 32,
          }}>
            जनसेवा ही मेरा संकल्प है
          </p>

          {/* Animated loader */}
          <div style={{ display: 'flex', gap: 8, justifyContent: 'center' }}>
            {[0, 1, 2].map(i => (
              <motion.div
                key={i}
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: '50%',
                  background: '#2E7D32',
                }}
                animate={{ y: [0, -12, 0], opacity: [1, 0.5, 1] }}
                transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.15 }}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
