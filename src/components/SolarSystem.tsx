import { useEffect, useRef } from 'react';

export const SolarSystem = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    const planets = [
      { distance: 80, size: 8, speed: 0.02, color: '#8B7355', angle: 0, name: 'Mercury' },
      { distance: 120, size: 14, speed: 0.015, color: '#FFA500', angle: Math.PI / 4, name: 'Venus' },
      { distance: 160, size: 15, speed: 0.01, color: '#4169E1', angle: Math.PI / 2, name: 'Earth' },
      { distance: 200, size: 12, speed: 0.008, color: '#CD5C5C', angle: Math.PI, name: 'Mars' },
      { distance: 280, size: 30, speed: 0.005, color: '#DAA520', angle: Math.PI * 1.5, name: 'Jupiter' },
      { distance: 350, size: 26, speed: 0.003, color: '#F4A460', angle: Math.PI / 6, name: 'Saturn' },
      { distance: 420, size: 20, speed: 0.002, color: '#40E0D0', angle: Math.PI / 3, name: 'Uranus' },
      { distance: 480, size: 19, speed: 0.001, color: '#4169E1', angle: Math.PI * 1.2, name: 'Neptune' },
    ];

    const stars = Array.from({ length: 200 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 2,
      opacity: Math.random(),
    }));

    const animate = () => {
      ctx.fillStyle = 'rgba(10, 15, 30, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw stars
      stars.forEach(star => {
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
        star.opacity = Math.sin(Date.now() * 0.001 + star.x) * 0.5 + 0.5;
      });

      // Draw sun
      const sunGradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, 40);
      sunGradient.addColorStop(0, '#FDB813');
      sunGradient.addColorStop(0.5, '#FF8C00');
      sunGradient.addColorStop(1, '#FF6347');
      ctx.fillStyle = sunGradient;
      ctx.beginPath();
      ctx.arc(centerX, centerY, 40, 0, Math.PI * 2);
      ctx.fill();

      // Sun glow
      ctx.shadowBlur = 40;
      ctx.shadowColor = '#FDB813';
      ctx.beginPath();
      ctx.arc(centerX, centerY, 40, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;

      // Draw orbits and planets
      planets.forEach(planet => {
        // Draw orbit
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(centerX, centerY, planet.distance, 0, Math.PI * 2);
        ctx.stroke();

        // Calculate planet position
        planet.angle += planet.speed;
        const x = centerX + Math.cos(planet.angle) * planet.distance;
        const y = centerY + Math.sin(planet.angle) * planet.distance;

        // Draw planet
        const planetGradient = ctx.createRadialGradient(x, y, 0, x, y, planet.size);
        planetGradient.addColorStop(0, planet.color);
        planetGradient.addColorStop(1, 'rgba(0, 0, 0, 0.8)');
        
        ctx.fillStyle = planetGradient;
        ctx.shadowBlur = 15;
        ctx.shadowColor = planet.color;
        ctx.beginPath();
        ctx.arc(x, y, planet.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full"
      style={{ background: 'linear-gradient(to bottom, #0a0f1e, #1a1f3e)' }}
    />
  );
};
