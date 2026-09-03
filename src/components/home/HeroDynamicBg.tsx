"use client";

import React, { useEffect, useRef } from "react";

export default function HeroDynamicBg() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 650);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener("resize", handleResize);

    const GRID_SIZE = 64;

    // Active Matrix Grid Square Highlights (Grid Cells that smoothly pulse & highlight)
    const activeTiles: Array<{
      col: number;
      row: number;
      life: number;
      maxLife: number;
      color: string;
      borderColor: string;
      maxAlpha: number;
    }> = [];

    const tilePalettes = [
      { fill: "rgba(0, 229, 255, ", border: "rgba(0, 229, 255, " },    // Cyan
      { fill: "rgba(56, 189, 248, ", border: "rgba(56, 189, 248, " },   // Sky Blue
      { fill: "rgba(255, 255, 255, ", border: "rgba(255, 255, 255, " }, // White
      { fill: "rgba(211, 47, 47, ", border: "rgba(211, 47, 47, " },     // Crimson
      { fill: "rgba(232, 254, 38, ", border: "rgba(232, 254, 38, " }    // Amber
    ];

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Spawn very sparse grid square highlights (only 3 to 5 active at a time)
      const cols = Math.floor(width / GRID_SIZE);
      const rows = Math.floor(height / GRID_SIZE);

      if (Math.random() < 0.04 && activeTiles.length < 5) {
        const palette = tilePalettes[Math.floor(Math.random() * tilePalettes.length)];
        activeTiles.push({
          col: Math.floor(Math.random() * cols),
          row: Math.floor(Math.random() * rows),
          life: 0,
          maxLife: Math.floor(Math.random() * 90 + 70),
          color: palette.fill,
          borderColor: palette.border,
          maxAlpha: Math.random() * 0.12 + 0.08
        });
      }

      // Render active grid square highlights
      for (let i = activeTiles.length - 1; i >= 0; i--) {
        const tile = activeTiles[i];
        tile.life++;

        const progress = tile.life / tile.maxLife;
        // Smooth sine ease in and out
        const tileAlpha = Math.sin(progress * Math.PI) * tile.maxAlpha;

        const x = tile.col * GRID_SIZE;
        const y = tile.row * GRID_SIZE;

        // Subtle glowing cell fill
        ctx.fillStyle = tile.color + `${tileAlpha})`;
        ctx.fillRect(x, y, GRID_SIZE, GRID_SIZE);

        // Crisp glowing cell border
        ctx.strokeStyle = tile.borderColor + `${tileAlpha * 1.6})`;
        ctx.lineWidth = 1;
        ctx.strokeRect(x, y, GRID_SIZE, GRID_SIZE);

        // Remove expired tiles
        if (tile.life >= tile.maxLife) {
          activeTiles.splice(i, 1);
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Soft Luminous Ambient Glow Flares */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#00E5FF]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[450px] h-[400px] bg-[#2563EB]/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-72 h-72 bg-[#E11D48]/15 rounded-full blur-[120px] pointer-events-none" />

      {/* Matrix Active Grid Square Highlights Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Clean Cyber Large Checkered Grid Overlay (64px by 64px) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />

      {/* Subtle Vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A2647]/50 via-transparent to-[#0A2647]/30 pointer-events-none" />
    </div>
  );
}
