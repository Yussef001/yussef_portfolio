import { useEffect, useRef } from "react";

export default function ParticlesBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const mouse = { x: null, y: null, radius: 120 }; // rayon d’influence
    const numParticles = 70;
    const particles = [];

    // Position aléatoire initiale
    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        baseX: Math.random() * width,
        baseY: Math.random() * height,
        r: Math.random() * 2 + 1,
        dx: (Math.random() - 0.5) * 0.4,
        dy: (Math.random() - 0.5) * 0.4,
        color:
          Math.random() > 0.5
            ? "rgba(34, 211, 238, 0.8)" // cyan
            : "rgba(236, 72, 153, 0.8)", // pink
      });
    }

    // Effet de répulsion autour de la souris
    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      for (let p of particles) {
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouse.radius && mouse.x && mouse.y) {
          // force inversement proportionnelle à la distance
          const angle = Math.atan2(dy, dx);
          const force = (mouse.radius - distance) / mouse.radius;
          const repulseX = Math.cos(angle) * force * 6;
          const repulseY = Math.sin(angle) * force * 6;

          p.x -= repulseX;
          p.y -= repulseY;
        } else {
          // retour doux vers la base
          p.x += (p.baseX - p.x) * 0.02 + p.dx;
          p.y += (p.baseY - p.y) * 0.02 + p.dy;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowBlur = 15;
        ctx.shadowColor = p.color;
        ctx.fill();
      }

      requestAnimationFrame(animate);
    };
    animate();

    // Mise à jour des dimensions
    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    // Détection de la souris
    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none"
    />
  );
}
