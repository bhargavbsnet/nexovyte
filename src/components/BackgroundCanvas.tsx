"use client";

import React, { useEffect, useRef } from "react";

export default function BackgroundCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const particles: FlowNode[] = [];
    const maxParticles = 45;
    const connectDist = 125;

    class FlowNode {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.22;
        this.vy = (Math.random() - 0.5) * 0.22;
        this.size = Math.random() * 2 + 1;
        this.color = Math.random() > 0.5 ? "rgba(16, 185, 129, 0.35)" : "rgba(99, 102, 241, 0.35)"; // Emerald vs Indigo
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > width) this.vx = -this.vx;
        if (this.y < 0 || this.y > height) this.vy = -this.vy;
      }

      draw(c: CanvasRenderingContext2D) {
        c.beginPath();
        c.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        c.fillStyle = this.color;
        c.fill();
      }
    }

    const init = () => {
      particles.length = 0;
      for (let i = 0; i < maxParticles; i++) {
        particles.push(new FlowNode());
      }
    };

    const drawFlows = (c: CanvasRenderingContext2D) => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectDist) {
            const alpha = (1 - dist / connectDist) * 0.08;
            c.beginPath();
            c.moveTo(particles[i].x, particles[i].y);
            c.lineTo(particles[j].x, particles[j].y);
            c.strokeStyle = `rgba(16, 185, 129, ${alpha})`;
            c.lineWidth = 0.5;
            c.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw primary ambient background glows
      const glow1 = ctx.createRadialGradient(
        width * 0.15, height * 0.25, 5,
        width * 0.15, height * 0.25, width * 0.45
      );
      glow1.addColorStop(0, "rgba(99, 102, 241, 0.02)");
      glow1.addColorStop(1, "transparent");
      ctx.fillStyle = glow1;
      ctx.fillRect(0, 0, width, height);

      const glow2 = ctx.createRadialGradient(
        width * 0.75, height * 0.7, 5,
        width * 0.75, height * 0.7, width * 0.45
      );
      glow2.addColorStop(0, "rgba(16, 185, 129, 0.02)");
      glow2.addColorStop(1, "transparent");
      ctx.fillStyle = glow2;
      ctx.fillRect(0, 0, width, height);

      particles.forEach((p) => {
        p.update();
        p.draw(ctx);
      });

      drawFlows(ctx);
      animId = requestAnimationFrame(animate);
    };

    const resize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      init();
    };

    window.addEventListener("resize", resize);
    init();
    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full -z-20 pointer-events-none bg-[#070a1a]"
    />
  );
}
