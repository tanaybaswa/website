"use client";

import React, { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  homeX: number;
  homeY: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  noiseOffset: number;
}

interface YinYangParticlesProps {
  particleCount?: number;
  interactionRadius?: number;
  className?: string;
}

const YinYangParticles: React.FC<YinYangParticlesProps> = ({
  particleCount = 1200,
  interactionRadius = 120,
  className = "",
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number | undefined>(undefined);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef<{ x: number; y: number; isActive: boolean }>({
    x: 0,
    y: 0,
    isActive: false,
  });
  const timeRef = useRef<number>(0);

  // Generate circle particle positions
  const generateCircleParticles = (
    width: number,
    height: number,
    count: number
  ): Particle[] => {
    const particles: Particle[] = [];
    const centerX = width / 2;
    const centerY = height / 2;
    // Make circle bigger - use 60% of the smaller dimension
    const circleRadius = Math.min(width, height) * 0.6;
    const color = "#1A1A1A"; // Dark color for particles

    // Generate particles in a circle
    let generated = 0;
    let attempts = 0;
    const maxAttempts = count * 10;

    while (generated < count && attempts < maxAttempts) {
      attempts++;

      // Generate random position within a square around the circle
      const margin = circleRadius * 1.2;
      const x = centerX + (Math.random() * 2 - 1) * margin;
      const y = centerY + (Math.random() * 2 - 1) * margin;

      const dx = x - centerX;
      const dy = y - centerY;
      const dist = Math.sqrt(dx * dx + dy * dy);

      // Check if within circle
      if (dist <= circleRadius) {
        // Add some randomness to particle size
        const radius = 1.5 + Math.random() * 1.5; // 1.5-3px radius

        particles.push({
          x,
          y,
          homeX: x,
          homeY: y,
          vx: 0,
          vy: 0,
          radius,
          color,
          noiseOffset: Math.random() * 1000,
        });

        generated++;
      }
    }

    return particles;
  };

  // Initialize particles
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resizeCanvas = () => {
      const container = canvas.parentElement;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      
      // Set actual size in memory (scaled for high DPI)
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      
      // Scale the canvas back down using CSS
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      
      // Scale the drawing context so everything draws at the correct size
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.scale(dpr, dpr);
      }

      // Regenerate particles on resize (use display size, not scaled size)
      particlesRef.current = generateCircleParticles(
        rect.width,
        rect.height,
        particleCount
      );
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [particleCount]);

  // Animation loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    
    // Get display dimensions (not scaled dimensions)
    const getDisplaySize = () => {
      const container = canvas.parentElement;
      if (!container) return { width: canvas.width, height: canvas.height };
      const rect = container.getBoundingClientRect();
      return { width: rect.width, height: rect.height };
    };

    const animate = (currentTime: number) => {
      const deltaTime = currentTime - timeRef.current;
      timeRef.current = currentTime;
      const dt = Math.min(deltaTime / 16, 2); // Cap delta time for stability

      const displaySize = getDisplaySize();
      
      // Clear canvas (use display size since context is scaled)
      ctx.clearRect(0, 0, displaySize.width, displaySize.height);

      const particles = particlesRef.current;
      const mouse = mouseRef.current;

      // Update particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Mouse interaction
        if (mouse.isActive) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < interactionRadius && dist > 0) {
            // Repulsion force with stronger inverse square relationship
            const normalizedDist = dist / interactionRadius;
            // Use inverse square for stronger effect at close range
            const forceStrength = Math.pow(1 - normalizedDist, 2);
            // Reduced force for more balanced movement
            const force = forceStrength * 1.5;
            const angle = Math.atan2(dy, dx);

            p.vx += Math.cos(angle) * force * dt;
            p.vy += Math.sin(angle) * force * dt;
          }
        }

        // Spring force back to home position
        const homeDx = p.homeX - p.x;
        const homeDy = p.homeY - p.y;
        const homeDist = Math.sqrt(homeDx * homeDx + homeDy * homeDy);

        if (homeDist > 0.1) {
          // Weaker spring when mouse is active to allow more movement
          const springStrength = mouse.isActive ? 0.03 : 0.12; // Much weaker when mouse active
          const springForce = homeDist * springStrength;

          p.vx += (homeDx / homeDist) * springForce * dt;
          p.vy += (homeDy / homeDist) * springForce * dt;
        }

        // Idle animation (gentle noise-based drift)
        if (!mouse.isActive || homeDist < 5) {
          const noiseX = Math.sin(timeRef.current * 0.001 + p.noiseOffset) * 0.3;
          const noiseY = Math.cos(timeRef.current * 0.001 + p.noiseOffset) * 0.3;

          p.vx += noiseX * 0.02 * dt;
          p.vy += noiseY * 0.02 * dt;
        }

        // Damping - much less damping when mouse is active for dramatic movement
        const damping = mouse.isActive ? 0.98 : 0.92;
        p.vx *= damping;
        p.vy *= damping;

        // Update position
        p.x += p.vx * dt;
        p.y += p.vy * dt;

        // Boundary constraints (soft)
        const margin = 10;
        if (p.x < margin) {
          p.vx += 0.1 * dt;
        } else if (p.x > displaySize.width - margin) {
          p.vx -= 0.1 * dt;
        }
        if (p.y < margin) {
          p.vy += 0.1 * dt;
        } else if (p.y > displaySize.height - margin) {
          p.vy -= 0.1 * dt;
        }

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [interactionRadius]);

  // Mouse event handlers
  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    // Use display coordinates (not scaled)
    mouseRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      isActive: true,
    };
  };

  const handleMouseLeave = () => {
    mouseRef.current.isActive = false;
  };

  return (
    <div className={`relative ${className}`}>
      <canvas
        ref={canvasRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="w-full h-full"
        style={{ display: "block" }}
      />
    </div>
  );
};

export default YinYangParticles;

