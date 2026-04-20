'use client'

import Image from 'next/image'
import { MessageCircle, Music, FileText, Instagram } from 'lucide-react'

interface SocialButtonProps {
  href: string
  icon: React.ReactNode
  label: string
  glowColor: string
  accentColor: string
}

function SocialButton({ href, icon, label, glowColor, accentColor }: SocialButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative w-full"
    >
      {/* Intense neon border glow */}
      <div
        className="absolute inset-0 rounded-xl opacity-60 group-hover:opacity-100 transition-opacity duration-300 blur-md"
        style={{
          background: `linear-gradient(135deg, ${glowColor}, ${accentColor})`,
        }}
        aria-hidden="true"
      />
      
      {/* Glassmorphism button */}
      <div
        className="relative flex items-center gap-4 px-6 py-4 rounded-xl 
                   backdrop-blur-xl bg-black/40 
                   border-2 transition-all duration-300 ease-out
                   hover:bg-black/30 hover:scale-[1.02]
                   active:scale-[0.98]"
        style={{
          borderColor: glowColor,
          boxShadow: `
            0 0 20px ${glowColor}60,
            0 0 40px ${glowColor}30,
            inset 0 1px 0 rgba(255,255,255,0.1),
            inset 0 0 20px ${glowColor}10
          `,
        }}
      >
        {/* Icon with intense glow */}
        <div
          className="flex items-center justify-center w-12 h-12 rounded-lg 
                     transition-all duration-300 group-hover:scale-110"
          style={{
            background: `linear-gradient(135deg, ${glowColor}40, ${accentColor}20)`,
            boxShadow: `0 0 25px ${glowColor}70, 0 0 50px ${glowColor}30`,
          }}
        >
          <span 
            style={{ 
              color: glowColor,
              filter: `drop-shadow(0 0 8px ${glowColor})`,
            }} 
          >
            {icon}
          </span>
        </div>
        
        {/* Label */}
        <span 
          className="text-lg font-semibold tracking-wide transition-all duration-300"
          style={{
            color: '#fff',
            textShadow: `0 0 10px ${glowColor}50`,
          }}
        >
          {label}
        </span>
        
        {/* Animated hover glow pulse */}
        <div
          className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{
            boxShadow: `
              inset 0 0 40px ${glowColor}25,
              0 0 60px ${glowColor}40,
              0 0 100px ${accentColor}20
            `,
          }}
        />
      </div>
    </a>
  )
}

export function BusinessCard() {
  const neonGreen = '#39FF14'
  const gold = '#FFD700'
  const reggaeRed = '#E63946'

  return (
    <div className="relative flex flex-col items-center w-full max-w-md mx-auto px-6 py-12">
      {/* Logo Image */}
      <div className="relative mb-8 w-full max-w-[320px]">
        {/* Glow behind logo */}
        <div
          className="absolute inset-0 animate-pulse"
          style={{
            background: `radial-gradient(ellipse at center, ${gold}30 0%, transparent 70%)`,
            filter: 'blur(30px)',
            transform: 'scale(1.2)',
          }}
          aria-hidden="true"
        />
        
        {/* Logo image */}
        <Image
          src="/images/logo-colectivo-cosmico.png"
          alt="Colectivo Cosmico Logo"
          width={600}
          height={400}
          className="relative w-full h-auto"
          style={{
            filter: `drop-shadow(0 0 20px ${gold}60) drop-shadow(0 0 40px ${neonGreen}30)`,
          }}
          priority
        />
      </div>

      {/* Tagline */}
      <p
        className="text-sm md:text-base text-center mb-8 tracking-[0.3em] uppercase"
        style={{
          color: gold,
          textShadow: `0 0 15px ${gold}80`,
        }}
      >
        Reggae • Dub • Cosmic Vibrations
      </p>

      {/* Decorative line */}
      <div
        className="w-32 h-[2px] mb-10"
        style={{
          background: `linear-gradient(90deg, transparent, ${neonGreen}, ${gold}, ${reggaeRed}, transparent)`,
          boxShadow: `0 0 15px ${neonGreen}80, 0 0 30px ${gold}40`,
        }}
      />

      {/* Social Buttons - Alternating Red, Yellow, Green neon glows */}
      <div className="flex flex-col gap-5 w-full">
        <SocialButton
          href="https://wa.me/1234567890"
          icon={<MessageCircle size={24} strokeWidth={2.5} />}
          label="WhatsApp"
          glowColor={neonGreen}
          accentColor={gold}
        />
        
        <SocialButton
          href="https://instagram.com/colectivocosmico"
          icon={<Instagram size={24} strokeWidth={2.5} />}
          label="Instagram"
          glowColor={reggaeRed}
          accentColor={gold}
        />
        
        <SocialButton
          href="https://open.spotify.com/artist/colectivocosmico"
          icon={<Music size={24} strokeWidth={2.5} />}
          label="Spotify"
          glowColor={gold}
          accentColor={neonGreen}
        />
        
        <SocialButton
          href="/press-kit"
          icon={<FileText size={24} strokeWidth={2.5} />}
          label="Press Kit"
          glowColor={neonGreen}
          accentColor={reggaeRed}
        />
      </div>

      {/* Footer accent */}
      <div className="mt-12 flex items-center gap-3">
        <div
          className="w-2 h-2 rounded-full animate-pulse"
          style={{ background: neonGreen, boxShadow: `0 0 15px ${neonGreen}` }}
        />
        <div
          className="w-2 h-2 rounded-full animate-pulse"
          style={{ background: gold, boxShadow: `0 0 15px ${gold}`, animationDelay: '0.3s' }}
        />
        <div
          className="w-2 h-2 rounded-full animate-pulse"
          style={{ background: reggaeRed, boxShadow: `0 0 15px ${reggaeRed}`, animationDelay: '0.6s' }}
        />
      </div>
      
      {/* Copyright */}
      <p className="mt-4 text-xs text-muted-foreground tracking-wider">
        © 2026 COLECTIVO CÓSMICO
      </p>
    </div>
  )
}
