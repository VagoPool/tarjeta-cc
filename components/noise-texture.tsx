'use client'

import { useEffect, useRef } from 'react'

export function NoiseTexture() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    let animationId: number
    let frame = 0

    const renderNoise = () => {
      // Scale down for COARSER, more visible grain (like old photocopy)
      const scale = 3 // Larger = coarser grain
      const scaledWidth = Math.ceil(canvas.width / scale)
      const scaledHeight = Math.ceil(canvas.height / scale)
      
      const imageData = ctx.createImageData(scaledWidth, scaledHeight)
      const data = imageData.data

      // Create heavy photocopy grain effect
      for (let i = 0; i < data.length; i += 4) {
        // Much stronger base noise for visible grain
        const noise = Math.random() * 80

        // More frequent bright/dark specks like photocopy artifacts
        const isBrightSpeck = Math.random() > 0.995
        const isDarkSpeck = Math.random() > 0.99
        const speckValue = isBrightSpeck ? 150 + Math.random() * 80 : (isDarkSpeck ? -40 : 0)

        const finalNoise = Math.max(0, Math.min(255, noise + speckValue))

        // Slight warm tint for vintage feel
        data[i] = finalNoise + (Math.random() > 0.5 ? 8 : 0)     // R - warm
        data[i + 1] = finalNoise                                   // G
        data[i + 2] = finalNoise - (Math.random() > 0.5 ? 5 : 0) // B - less blue
        data[i + 3] = Math.random() * 60 + 40                     // Alpha - much stronger
      }

      // Draw scaled down, then scale up for chunky pixels
      const tempCanvas = document.createElement('canvas')
      tempCanvas.width = scaledWidth
      tempCanvas.height = scaledHeight
      const tempCtx = tempCanvas.getContext('2d')
      if (tempCtx) {
        tempCtx.putImageData(imageData, 0, 0)
        ctx.imageSmoothingEnabled = false
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        ctx.drawImage(tempCanvas, 0, 0, canvas.width, canvas.height)
      }
      
      frame++
      animationId = requestAnimationFrame(renderNoise)
    }

    renderNoise()

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <>
      {/* Animated DIRTY FANZINE grain canvas */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none"
        style={{
          zIndex: 50,
          mixBlendMode: 'multiply',
          opacity: 0.15,
        }}
        aria-hidden="true"
      />
      {/* Heavy static grain layer - DIRTY FANZINE texture */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          zIndex: 51,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          opacity: 0.12,
          mixBlendMode: 'overlay',
        }}
        aria-hidden="true"
      />
      {/* Additional scratchy texture overlay */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          zIndex: 52,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 50 50' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='scratchFilter'%3E%3CfeTurbulence type='turbulence' baseFrequency='1.5' numOctaves='1' stitchTiles='stitch'/%3E%3CfeColorMatrix type='matrix' values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 20 -10'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23scratchFilter)'/%3E%3C/svg%3E")`,
          opacity: 0.08,
          mixBlendMode: 'screen',
        }}
        aria-hidden="true"
      />
      {/* Vignette effect like old vinyl sleeve */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          zIndex: 48,
          background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.4) 100%)',
        }}
        aria-hidden="true"
      />
    </>
  )
}
