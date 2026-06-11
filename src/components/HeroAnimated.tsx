import { motion, useReducedMotion } from 'framer-motion';

interface Props {
  whatsappNumber: string;
}

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const pill = {
  hidden: { opacity: 0, x: -12, scale: 0.95 },
  visible: {
    opacity: 1, x: 0, scale: 1,
    transition: { type: 'spring' as const, stiffness: 400, damping: 28 },
  },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1, y: 0,
    transition: { type: 'spring' as const, stiffness: 300, damping: 30 },
  },
};

const buttons = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1, y: 0,
    transition: { type: 'spring' as const, stiffness: 280, damping: 26 },
  },
};

export default function HeroAnimated({ whatsappNumber }: Props) {
  const reduced = useReducedMotion();

  const c = reduced ? {} : container;
  const p2 = reduced ? {} : pill;
  const it = reduced ? {} : item;
  const bt = reduced ? {} : buttons;

  return (
    <motion.div
      className="max-w-3xl"
      variants={c}
      initial="hidden"
      animate="visible"
    >
      {/* Status pill */}
      <motion.div
        variants={p2}
        className="inline-flex items-center gap-2 border border-white/30 bg-white/10 backdrop-blur-sm text-white/90 text-xs font-body px-3.5 py-1.5 rounded-full mb-7"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-[#059669] inline-block"></span>
        Open daily · English-speaking doctors
      </motion.div>

      <motion.h1
        variants={it}
        id="hero-heading"
        className="font-heading font-extrabold text-4xl sm:text-5xl md:text-6xl text-white leading-[1.1] tracking-tight mb-5"
      >
        Trusted Medical Care<br />
        <span className="text-[#1D4ED8]">in Legian, Bali</span>
      </motion.h1>

      <motion.p
        variants={it}
        className="text-white/80 text-lg md:text-xl leading-relaxed mb-8 max-w-xl"
      >
        Professional healthcare for tourists, expats, and local residents — from emergency treatment to routine check-ups. Open every day, 08:00–22:00.
      </motion.p>

      <motion.div variants={bt} className="flex flex-wrap gap-3">
        <a href="/services" className="btn-primary btn-lg">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
          Our Services
        </a>
        <a
          href={`https://wa.me/${whatsappNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-whatsapp btn-lg"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a6.18 6.18 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.128.558 4.127 1.535 5.857L.057 23.882a.5.5 0 00.612.612l6.055-1.476A11.944 11.944 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.016-1.375l-.359-.214-3.728.908.936-3.628-.234-.374A9.818 9.818 0 1112 21.818z" />
          </svg>
          WhatsApp Us
        </a>
        <a
          href="/contact"
          className="inline-flex items-center gap-2 rounded-lg border border-white/40 bg-white/10 backdrop-blur-sm text-white text-sm font-medium px-5 py-2.5 hover:bg-white/20 transition-colors duration-200 btn-lg"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          Find Us
        </a>
      </motion.div>
    </motion.div>
  );
}
