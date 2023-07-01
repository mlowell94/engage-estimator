import React, { useRef, useEffect } from 'react'
import { Noise } from 'noisejs'
const noise = new Noise(0.44399864548442336)

const Canvas = () => {
  const canvasRef = useRef(null)
  
  const draw = null;
  
  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    const waves = [];
    const frequency = 0.003
    let increment = 0.01
    let height = canvas.height = window.innerHeight
    let width = canvas.width = window.innerWidth
    let x = 0.01
    let y = 1000;
    class Wave {
        constructor(y, amplitude, wavelength, color) {
            this.y = y;
            this.wavelength = wavelength;
            this.amplitude = amplitude;
            this.color = color;
        }
    
        draw() {
            context.beginPath()
            context.moveTo(0, this.y)
            for (let i = 0; i < canvas.width; i += 1) {
                context.lineTo(i, this.y + Math.sin(i * this.wavelength + increment) * this.amplitude)
            }
            context.strokeStyle = this.color;
            context.stroke()
        }
    }

    for (let i = 1; i < 51; i += 1) {
        let amplitude = noise.perlin2(x, y) * 500;
        let wavelength =noise.perlin2(x, y) * 0.025;
        waves.push(new Wave(canvas.height / 2 + (i * .5), amplitude, wavelength, '#152877a5'))
        x += 0.01;
        y += 0.01;
        amplitude = noise.perlin2(x, y) * 500;
        wavelength =noise.perlin2(x, y) * 0.025;
        waves.push(new Wave(canvas.height / 2 - (i * .5), amplitude * -1, wavelength, '#cb2330a5'))
    }

    context.lineWidth = 0.25;

    let animationFrameId

    const animate = () => {
        animationFrameId = requestAnimationFrame(animate)
        context.clearRect(0, 0, width, height)    
        for (let i = 0; i < waves.length; i += 1) {
            waves[i].draw()
        }
        increment += frequency
    }
    animate()
    
    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [draw])

  return (
    <canvas ref={canvasRef}>Canvas</canvas>
  )
}

export default Canvas