import React from "react";
import Image from "next/image";

export interface ImageCardProps {
  src: string;
  aspectRatio?: string;
  marginTop?: string;
  alt?: string;
}

function ImageCard({ 
  src, 
  aspectRatio = "1", 
  marginTop = "", 
  alt = "Image" 
}: ImageCardProps) {
  // Map aspect ratios to Tailwind classes (dynamic classes don't work with Tailwind)
  const aspectRatioClass = 
    aspectRatio === "0.94" ? "aspect-[0.94]" :
    aspectRatio === "1.7" ? "aspect-[1.7]" :
    "aspect-square";

  return (
    <div className={`relative w-full ${aspectRatioClass} ${marginTop}`}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-contain"
        loading="lazy"
      />
    </div>
  );
}

export default ImageCard;