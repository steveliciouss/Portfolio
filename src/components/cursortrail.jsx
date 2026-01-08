import { useEffect, useRef } from "react";

export default function CursorTrail({ darkMode }) {
  const trailLength = 8;
  const trailRef = useRef([]);
  const positions = useRef([]);
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    // Only create circles once
    if (trailRef.current.length === 0) {
      positions.current = Array(trailLength).fill({ x: -100, y: -100 });

      for (let i = 0; i < trailLength; i++) {
        const div = document.createElement("div");
        div.style.position = "absolute";
        div.style.borderRadius = "50%";
        div.style.pointerEvents = "none";
        div.style.transition = "transform 0.05s ease-out, opacity 0.05s ease-out";

        const size = 8 + i * 4;
        div.style.width = `${size}px`;
        div.style.height = `${size}px`;
        div.dataset.size = size;

        container.appendChild(div);
        trailRef.current.push(div);
      }
    }

    // Function to update colors when theme changes
    const updateColors = () => {
      trailRef.current.forEach((div, i) => {
        const color = darkMode
          ? `rgba(191,90,242,${0.3 + i / trailLength * 0.7})`
          : `rgba(59,130,246,${0.3 + i / trailLength * 0.7})`;

        div.style.background = color;
        div.style.boxShadow = `0 0 ${2 + i * 2}px ${color}, 0 0 ${4 + i * 2}px ${color}`;
      });
    };

    updateColors(); // initial call

    let mouse = { x: -100, y: -100 };
    let visible = false;
    let hideTimeout;

    const handleMouseMove = (e) => {
      mouse = { x: e.clientX, y: e.clientY };
      visible = true;
      clearTimeout(hideTimeout);
      hideTimeout = setTimeout(() => (visible = false), 200);
    };

    const animate = () => {
      positions.current.forEach((pos, i) => {
        const target = i === 0 ? mouse : positions.current[i - 1];
        const dx = target.x - pos.x;
        const dy = target.y - pos.y;

        const speed = 0.35;
        positions.current[i] = {
          x: pos.x + dx * speed,
          y: pos.y + dy * speed,
        };

        const div = trailRef.current[i];
        const size = parseFloat(div.dataset.size);
        div.style.transform = `translate(${positions.current[i].x - size / 2}px, ${positions.current[i].y - size / 2}px)`;
        div.style.opacity = visible ? (trailLength - i) / trailLength : 0;
      });

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [darkMode]);

  return (
    <div
      ref={containerRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-50"
    />
  );
}
