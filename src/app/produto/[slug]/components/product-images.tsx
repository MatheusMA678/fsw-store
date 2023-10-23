'use client'

import { cn } from "@/lib/utils"
import Image from "next/image"
import { useState } from "react"

interface ProductImagesProps {
  name: string
  image_urls: string[]
}

export function ProductImages({ image_urls, name }: ProductImagesProps) {
  const [currentImage, setCurrentImage] = useState(image_urls[0])

  return (
    <div>
      <div className="flex h-[380px] w-full justify-center items-center bg-accent">
        <Image
          src={currentImage}
          alt={name}
          height={0}
          width={0}
          sizes="100vw"
          className="h-auto max-h-[70%] w-auto max-w-[80%] object-contain"
        />
      </div>

      <div className="mt-8 px-5 grid grid-cols-4 gap-4">
        {image_urls.map(image_url => {
          const isSameImage = currentImage === image_url

          return (
            <button
              key={image_url}
              onClick={() => setCurrentImage(image_url)}
              className={cn(
                "bg-accent rounded-lg flex justify-center items-center h-[100px] transition-colors",
                isSameImage && 'border-2 border-primary'
              )}
            >
              <Image
                src={image_url}
                alt={name}
                height={0}
                width={0}
                sizes="100vw"
                className="h-auto max-h-[70%] w-auto max-w-[80%] object-contain"
              />
            </button>
          )
        })}
      </div>
    </div>
  )
}
