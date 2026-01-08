"use client"

import { useState } from "react"
import { X } from "lucide-react"

interface GallerySectionProps {
  project: any
}

export default function GallerySection({ project }: GallerySectionProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const images = project.propertyPictures || []

  return (
    <section id="gallery" className="py-20 md:py-15 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            Project <span className="text-gold">Gallery</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6" />
          <p className="text-foreground/80 text-lg max-w-2xl mx-auto text-balance">
            A glimpse into the spaces that redefine modern living
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {images.map((image: string, index: number) => (
            <div
              key={index}
              className="group relative aspect-[4/3] overflow-hidden rounded-lg cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image || "/placeholder.svg"}
                alt={`${project.projectName} - Image ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}

          {/* Placeholder images if no images available */}
          {images.length === 0 && (
            <>
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="group relative aspect-[4/3] overflow-hidden rounded-lg">
                  <img
                    src={`/luxury-residential-interior-.jpg?height=600&width=800&query=luxury residential interior ${i}`}
                    alt={`Gallery ${i}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
            </>
          )}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-charcoal/95 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-foreground hover:text-primary transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>
            <img
              src={selectedImage || "/placeholder.svg"}
              alt="Full size"
              className="max-w-full max-h-full object-contain"
            />
          </div>
        )}
      </div>
    </section>
  )
}
