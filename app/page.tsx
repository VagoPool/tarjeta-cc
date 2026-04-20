import { Starfield } from '@/components/starfield'
import { NoiseTexture } from '@/components/noise-texture'
import { BusinessCard } from '@/components/business-card'
import { SaxophoneConstellation } from '@/components/saxophone-constellation'

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      {/* Animated starfield background */}
      <Starfield />
      
      {/* Subtle saxophone silhouette constellation */}
      <SaxophoneConstellation />
      
      {/* Punk-style animated film grain texture overlay */}
      <NoiseTexture />
      
      {/* Gradient overlays for depth */}
      <div 
        className="fixed inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse at 50% 0%, rgba(57, 255, 20, 0.08) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 80%, rgba(255, 215, 0, 0.05) 0%, transparent 40%),
            radial-gradient(ellipse at 20% 90%, rgba(230, 57, 70, 0.05) 0%, transparent 40%)
          `,
          zIndex: 2,
        }}
        aria-hidden="true"
      />
      
      {/* Main content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen py-8">
        <BusinessCard />
      </div>
      
      {/* Bottom vignette */}
      <div 
        className="fixed inset-x-0 bottom-0 h-32 pointer-events-none"
        style={{
          background: 'linear-gradient(to top, rgba(5, 5, 5, 0.8), transparent)',
          zIndex: 3,
        }}
        aria-hidden="true"
      />
    </main>
  )
}
