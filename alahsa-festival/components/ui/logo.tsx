'use client';

export default function Logo({ size = 40, showText = true }: { size?: number; showText?: boolean }) {
  return (
    <div className="flex items-center gap-2">
      <svg 
        width={size} 
        height={size} 
        viewBox="0 0 100 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        {/* Palm Tree Trunk */}
        <rect x="46" y="50" width="8" height="25" fill="#1B4D3E"/>
        
        {/* Palm Fronds - Left */}
        <path d="M50 50 Q40 35 30 30 Q40 35 50 45" fill="#1B4D3E" opacity="0.9"/>
        <path d="M50 50 Q35 40 25 45 Q35 45 50 50" fill="#1B4D3E" opacity="0.8"/>
        
        {/* Palm Fronds - Right */}
        <path d="M50 50 Q60 35 70 30 Q60 35 50 45" fill="#1B4D3E" opacity="0.9"/>
        <path d="M50 50 Q65 40 75 45 Q65 45 50 50" fill="#1B4D3E" opacity="0.8"/>
        
        {/* Center Frond */}
        <path d="M50 50 L50 25 Q52 35 50 50" fill="#1B4D3E"/>
        
        {/* Dates (Gold Dots) */}
        <circle cx="42" cy="38" r="2.5" fill="#D4AF37"/>
        <circle cx="58" cy="38" r="2.5" fill="#D4AF37"/>
        
        {/* Heartbeat Pulse Line */}
        <path 
          d="M10 50 L25 50 L32 35 L42 65 L50 50 L55 50 L60 25 L68 75 L75 50 L90 50" 
          stroke="#D4AF37" 
          strokeWidth="3" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
      
      {showText && (
        <span className="font-bold text-lg text-[#1B4D3E] hidden sm:block">
          نبض الأحساء
        </span>
      )}
    </div>
  );
}