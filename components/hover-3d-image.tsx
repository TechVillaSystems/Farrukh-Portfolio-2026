"use client";
import Image from "next/image";
import { useRef, MouseEvent } from "react";

export default function Hover3DImage() {
  const imageRef = useRef<HTMLImageElement | null>(null);

  const handleMouseMove = (e: MouseEvent<HTMLImageElement>) => {
    const img = imageRef.current;
    if (!img) return;

    const rect = img.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * 20;
    const rotateY = ((x - centerX) / centerX) * -20;

    img.style.transform = `
      perspective(1000px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale(1.05)
    `;
  };

  const handleMouseLeave = () => {
    const img = imageRef.current;
    if (!img) return;
    img.style.transform = `
      perspective(1000px)
      rotateX(0deg)
      rotateY(0deg)
      scale(1)
    `;
  };

  return (
    <div className="md:w-[40vw] flex justify-end items-end">
      <Image
        ref={imageRef}
        src="/Body.png"
        height={600}
        width={600}
        alt="Home Image"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="rounded-xl transition-transform duration-200 ease-out w-100 md:w-auto"
        style={{
          transformStyle: "preserve-3d",
          willChange: "transform",
        }}
      />
    </div>
  );
}
