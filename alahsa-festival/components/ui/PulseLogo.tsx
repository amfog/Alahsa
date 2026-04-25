'use client';

import { motion } from 'framer-motion';

export default function PulseLogo({ size = 140 }: { size?: number }) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
    >
      <defs>
        <linearGradient id="plTrunk" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1B4D3E"/>
          <stop offset="100%" stopColor="#0C2218"/>
        </linearGradient>
        <filter id="plGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="1.8" result="blur"/>
          <feMerge>
            <feMergeNode in="blur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
        <filter id="plShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#000000" floodOpacity="0.18"/>
        </filter>
      </defs>

      {/* Trunk with gradient + subtle shadow */}
      <rect x="46" y="52" width="8" height="24" rx="2" fill="url(#plTrunk)" filter="url(#plShadow)"/>

      {/* Center frond */}
      <motion.path
        d="M50 52 C49 43 48 33 50 22 C52 33 51 43 50 52"
        fill="#1B4D3E"
        animate={{ scaleY: [1, 1.05, 1] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Upper-left frond */}
      <motion.path
        d="M50 49 C43 41 34 32 25 27 C34 35 43 43 50 49"
        fill="#1B4D3E"
        opacity={0.9}
        animate={{ scale: [1, 1.04, 1] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
      />

      {/* Lower-left frond */}
      <motion.path
        d="M50 51 C40 48 28 46 18 48 C28 47 40 50 50 51"
        fill="#1B4D3E"
        opacity={0.75}
        animate={{ scale: [1, 1.03, 1] }}
        transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
      />

      {/* Upper-right frond */}
      <motion.path
        d="M50 49 C57 41 66 32 75 27 C66 35 57 43 50 49"
        fill="#1B4D3E"
        opacity={0.9}
        animate={{ scale: [1, 1.04, 1] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
      />

      {/* Lower-right frond */}
      <motion.path
        d="M50 51 C60 48 72 46 82 48 C72 47 60 50 50 51"
        fill="#1B4D3E"
        opacity={0.75}
        animate={{ scale: [1, 1.03, 1] }}
        transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut', delay: 0.7 }}
      />

      {/* Gold date dots with glow */}
      <motion.circle
        cx="38" cy="36" r="2.5"
        fill="#D4AF37"
        filter="url(#plGlow)"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.circle
        cx="62" cy="36" r="2.5"
        fill="#D4AF37"
        filter="url(#plGlow)"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
      />

      {/* Heartbeat — draws then fades, loops */}
      <motion.path
        d="M8 50 L24 50 L30 37 L40 63 L50 50 L54 50 L60 27 L66 73 L72 50 L92 50"
        stroke="#D4AF37"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: [0, 1, 1, 0], opacity: [0, 1, 1, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', times: [0, 0.45, 0.6, 1], repeatDelay: 0.8 }}
      />
    </motion.svg>
  );
}
