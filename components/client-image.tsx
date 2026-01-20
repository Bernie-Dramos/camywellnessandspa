"use client"

import Image from "next/image"
import { useState } from "react"

interface ClientImageProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  priority?: boolean
}

export function ClientImage({ src, alt, width, height, className = "", priority = false }: ClientImageProps) {
  const [isLoading, setIsLoading] = useState(true)

  // Use placeholder for Unsplash images if it's an external image
  const imageSrc = src.includes("unsplash") || src.includes("http") ? src : `/images/${src}`

    if (src.includes("http")) {
        loading="lazy"
    return (
      <img
        src={imageSrc || "/placeholder.svg"}
        alt={alt}
        className={`${className} ${isLoading ? "blur-sm" : "blur-0"} transition-all duration-300`}
        onLoad={() => setIsLoading(false)}
        width={width}
        height={height}
        loading="lazy"
      />
    )
  }

  return (
    <Image
      src={imageSrc || "/placeholder.svg"}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      className={className}
      quality={85}
      loading="lazy"
    />
  )
}
