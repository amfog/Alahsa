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
      {/* Palm Fronds - Animate independently */}
      <motion.path d="M50 50 Q40 35 30 30 Q40 35 50 45" fill="#1B4D3E" opacity="0.8" animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 2, repeat: Infinity, delay: 0 }} />
      <motion.path d="M50 50 Q60 35 70 30 Q60 35 50 45" fill="#1B4D3E" opacity="0.8" animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 2, repeat: Infinity, delay: 0.2 }} />
      <motion.path d="M50 50 Q35 40 25 45 Q35 45 50 50" fill="#1B4D3E" opacity="0.9" animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 2, repeat: Infinity, delay: 0.4 }} />
      <motion.path d="M50 50 Q65 40 75 45 Q65 45 50 50" fill="#1B4D3E" opacity="0.9" animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 2, repeat: Infinity, delay: 0.6 }} />
      <motion.path d="M50 50 L50 25 Q52 35 50 50" fill="#1B4D3E" animate={{ scaleY: [1, 1.08, 1] }} transition={{ duration: 2, repeat: Infinity, delay: 0.3 }} />
      
      {/* Palm Trunk */}
      <rect x="46" y="50" width="8" height="25" fill="#1B4D3E"/>
      <rect x="47" y="52" width="6" height="21" fill="#143A2E"/>
      
      {/* Dates (Gold Dots) */}
      <motion.circle cx="40" cy="38" r="2" fill="#D4AF37" animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0 }} />
      <motion.circle cx="60" cy="38" r="2" fill="#D4AF37" animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }} />
      
      {/* Heartbeat Pulse Line */}
      <path d="M10 50 L30 50 L35 35 L45 65 L50 50 L55 50 L60 25 L65 75 L70 50 L90 50" 
            stroke="#D4AF37" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </motion.svg>
  );
}
