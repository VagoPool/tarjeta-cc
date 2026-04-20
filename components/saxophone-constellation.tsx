'use client'

export function SaxophoneConstellation() {
  return (
    <div 
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: 1 }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 400 800"
        className="absolute right-[-5%] top-[5%] w-[80%] h-auto opacity-100"
      >
        {/* Tenor Saxophone - NEON GOLD CONSTELLATION clearly visible */}
        <defs>
          <filter id="saxGlow" x="-200%" y="-200%" width="500%" height="500%">
            {/* Multiple blur passes for intense glow */}
            <feGaussianBlur stdDeviation="3" result="blur1"/>
            <feGaussianBlur stdDeviation="8" result="blur2"/>
            <feGaussianBlur stdDeviation="15" result="blur3"/>
            {/* Intensify the gold color */}
            <feColorMatrix
              in="blur2"
              type="matrix"
              values="2 0 0 0 0.2
                      1.5 0 0 0 0.1
                      0 0 0 0 0
                      0 0 0 1.5 0"
              result="goldBlur"
            />
            <feMerge>
              <feMergeNode in="blur3"/>
              <feMergeNode in="goldBlur"/>
              <feMergeNode in="blur1"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        <g filter="url(#saxGlow)" stroke="#FFD700" strokeWidth="3" fill="none" opacity="1">
          {/* Mouthpiece - NEON GOLD */}
          <circle cx="120" cy="50" r="6" fill="#FFD700" />
          <circle cx="130" cy="65" r="5" fill="#FFD700" />
          <line x1="120" y1="50" x2="130" y2="65" strokeWidth="3" />
          
          {/* Neck - THICK LINES */}
          <circle cx="145" cy="85" r="5" fill="#FFD700" />
          <circle cx="160" cy="110" r="5" fill="#FFD700" />
          <circle cx="175" cy="140" r="6" fill="#FFD700" />
          <line x1="130" y1="65" x2="145" y2="85" strokeWidth="3" />
          <line x1="145" y1="85" x2="160" y2="110" strokeWidth="3" />
          <line x1="160" y1="110" x2="175" y2="140" strokeWidth="3" />
          
          {/* Upper body curve */}
          <circle cx="185" cy="175" r="5" fill="#FFD700" />
          <circle cx="190" cy="215" r="5" fill="#FFD700" />
          <circle cx="188" cy="260" r="5" fill="#FFD700" />
          <line x1="175" y1="140" x2="185" y2="175" strokeWidth="3" />
          <line x1="185" y1="175" x2="190" y2="215" strokeWidth="3" />
          <line x1="190" y1="215" x2="188" y2="260" strokeWidth="3" />
          
          {/* Main body - descending */}
          <circle cx="180" cy="310" r="6" fill="#FFD700" />
          <circle cx="168" cy="360" r="5" fill="#FFD700" />
          <circle cx="152" cy="410" r="5" fill="#FFD700" />
          <circle cx="135" cy="455" r="5" fill="#FFD700" />
          <line x1="188" y1="260" x2="180" y2="310" strokeWidth="3" />
          <line x1="180" y1="310" x2="168" y2="360" strokeWidth="3" />
          <line x1="168" y1="360" x2="152" y2="410" strokeWidth="3" />
          <line x1="152" y1="410" x2="135" y2="455" strokeWidth="3" />
          
          {/* Bell curve - BIGGEST and BRIGHTEST */}
          <circle cx="120" cy="490" r="6" fill="#FFD700" />
          <circle cx="110" cy="530" r="7" fill="#FFD700" />
          <circle cx="108" cy="575" r="8" fill="#FFD700" />
          <circle cx="115" cy="620" r="9" fill="#FFD700" />
          <circle cx="135" cy="660" r="10" fill="#FFD700" />
          <circle cx="165" cy="690" r="12" fill="#FFD700" />
          <line x1="135" y1="455" x2="120" y2="490" strokeWidth="3" />
          <line x1="120" y1="490" x2="110" y2="530" strokeWidth="4" />
          <line x1="110" y1="530" x2="108" y2="575" strokeWidth="4" />
          <line x1="108" y1="575" x2="115" y2="620" strokeWidth="5" />
          <line x1="115" y1="620" x2="135" y2="660" strokeWidth="5" />
          <line x1="135" y1="660" x2="165" y2="690" strokeWidth="5" />
          
          {/* Bell opening arc */}
          <circle cx="200" cy="700" r="10" fill="#FFD700" />
          <circle cx="230" cy="690" r="7" fill="#FFD700" />
          <line x1="165" y1="690" x2="200" y2="700" strokeWidth="5" />
          <line x1="200" y1="700" x2="230" y2="690" strokeWidth="4" />
          
          {/* Keys - constellation points */}
          <circle cx="200" cy="180" r="4" fill="#FFD700" />
          <circle cx="205" cy="220" r="4" fill="#FFD700" />
          <circle cx="200" cy="265" r="4" fill="#FFD700" />
          <circle cx="192" cy="315" r="4" fill="#FFD700" />
          <circle cx="180" cy="365" r="4" fill="#FFD700" />
          <circle cx="165" cy="415" r="4" fill="#FFD700" />
          
          {/* Left side keys */}
          <circle cx="165" cy="190" r="3" fill="#FFD700" />
          <circle cx="170" cy="240" r="3" fill="#FFD700" />
          <circle cx="168" cy="295" r="3" fill="#FFD700" />
        </g>
      </svg>
    </div>
  )
}
