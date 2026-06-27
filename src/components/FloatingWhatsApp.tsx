import { FaWhatsapp } from 'react-icons/fa';

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/919999999999"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-btn"
      aria-label="WhatsApp पर संपर्क करें"
      title="WhatsApp पर संपर्क करें"
    >
      <FaWhatsapp size={28} color="white" />
    </a>
  );
}
