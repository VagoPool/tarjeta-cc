'use client'

import { useEffect, useRef } from 'react'

interface Star {
  x: number
  y: number
  size: number
  speed: number
  opacity: number
  twinkleSpeed: number
  twinklePhase: number
}

interface MusicalNote {
  x: number
  y: number
  size: number
  speed: number
  opacity: number
  rotation: number
  rotationSpeed: number
  note: string
}

export function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationId: number
    let stars: Star[] = []
    let notes: MusicalNote[] = []

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initStars()
      initNotes()
    }

    const initStars = () => {
      stars = []
      const numStars = Math.floor((canvas.width * canvas.height) / 3000)
      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 0.5,
          speed: Math.random() * 0.3 + 0.1,
          opacity: Math.random() * 0.8 + 0.2,
          twinkleSpeed: Math.random() * 0.02 + 0.01,
          twinklePhase: Math.random() * Math.PI * 2,
        })
      }
    }

    const initNotes = () => {
      notes = []
      const noteSymbols = ['♪', '♫', '♬', '♩']
      const numNotes = 8
      for (let i = 0; i < numNotes; i++) {
        notes.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 16 + 12,
          speed: Math.random() * 0.4 + 0.2,
          opacity: Math.random() * 0.15 + 0.05,
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.02,
          note: noteSymbols[Math.floor(Math.random() * noteSymbols.length)],
        })
      }
    }

    const drawStar = (star: Star, time: number) => {
      const twinkle = Math.sin(time * star.twinkleSpeed + star.twinklePhase)
      const opacity = star.opacity * (0.5 + twinkle * 0.5)
      
      // Star glow
      const gradient = ctx.createRadialGradient(
        star.x, star.y, 0,
        star.x, star.y, star.size * 3
      )
      
      // Mix of neon green and gold for cosmic effect
      const isGreen = Math.random() > 0.7
      if (isGreen) {
        gradient.addColorStop(0, `rgba(57, 255, 20, ${opacity})`)
        gradient.addColorStop(0.5, `rgba(57, 255, 20, ${opacity * 0.3})`)
      } else {
        gradient.addColorStop(0, `rgba(255, 215, 0, ${opacity})`)
        gradient.addColorStop(0.5, `rgba(255, 215, 0, ${opacity * 0.3})`)
      }
      gradient.addColorStop(1, 'transparent')
      
      ctx.beginPath()
      ctx.arc(star.x, star.y, star.size * 3, 0, Math.PI * 2)
      ctx.fillStyle = gradient
      ctx.fill()
      
      // Star core
      ctx.beginPath()
      ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`
      ctx.fill()
    }

    const drawNote = (note: MusicalNote) => {
      ctx.save()
      ctx.translate(note.x, note.y)
      ctx.rotate(note.rotation)
      ctx.font = `${note.size}px serif`
      ctx.fillStyle = `rgba(255, 215, 0, ${note.opacity})`
      ctx.shadowColor = 'rgba(57, 255, 20, 0.5)'
      ctx.shadowBlur = 10
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'
      ctx.fillText(note.note, 0, 0)
      ctx.restore()
    }

    const animate = (time: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw stars
      stars.forEach((star) => {
        star.y -= star.speed
        if (star.y < -10) {
          star.y = canvas.height + 10
          star.x = Math.random() * canvas.width
        }
        drawStar(star, time)
      })

      // Update and draw musical notes
      notes.forEach((note) => {
        note.y -= note.speed
        note.rotation += note.rotationSpeed
        note.x += Math.sin(time * 0.001 + note.y * 0.01) * 0.3
        
        if (note.y < -30) {
          note.y = canvas.height + 30
          note.x = Math.random() * canvas.width
        }
        drawNote(note)
      })

      animationId = requestAnimationFrame(animate)
    }

    resize()
    window.addEventListener('resize', resize)
    animationId = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    />
  )
}
