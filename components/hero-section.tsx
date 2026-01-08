"use client"

import { ChevronDown } from "lucide-react"

interface HeroSectionProps {
  project: any
}

export default function HeroSection({ project }: HeroSectionProps) {
  return (
    <section className="relative h-[100vh] flex flex-col justify-between overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={
            project.propertyPictures?.[0] ||
            "/placeholder.svg?height=1080&width=1920&query=luxury residential building exterior"
          }
          alt={project.projectName}
          className="w-full h-full object-cover object-center brightness-[0.6] transition-transform duration-[4000ms] ease-in-out hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black/90" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6">
        {/* Status */}
        <div className="mb-4 inline-block px-5 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full">
          <span className="text-sm uppercase tracking-wider font-medium text-white/90">
            {project.projectStatus || "New Launch"}
          </span>
        </div>

        {/* Title */}
        <h1 className="font-siii font-extrabold text-6xl md:text-6xl lg:text-8xl text-white leading-tight drop-shadow-md">
          {project.projectName}
        </h1>

        {/* Description */}
        <p className="mt-6 text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed">
          {project.description?.split(".")[0] ||
            "A premium residential project designed for luxury and comfort."}
          .
        </p>

        {/* Info Boxes */}
        <div className="mt-10 flex flex-wrap justify-center items-center gap-6 md:gap-10">
          {/* Price */}
          <div className="min-w-[150px] px-6 py-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-center hover:bg-white/15 transition">
            <div className="text-3xl font-serif font-bold text-white">
              ₹{(project.minPrice / 10000000).toFixed(2)}Cr
            </div>
            <div className="text-sm text-white/70">Starting Price</div>
          </div>

          {/* Amenities */}
          <div className="min-w-[150px] px-6 py-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-center hover:bg-white/15 transition">
            <div className="text-3xl font-serif font-bold text-white">
              {project.amenities?.length || 0}+
            </div>
            <div className="text-sm text-white/70">Amenities</div>
          </div>

          {/* RERA */}
          <div className="min-w-[150px] px-6 py-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-center hover:bg-white/15 transition">
            <div className="text-3xl font-serif font-bold text-white">RERA</div>
            <div className="text-sm text-white/70">Approved</div>
          </div>
        </div>
      </div>

      {/* Scroll Button (fixed and separated below info cards) */}
      <div className="relative z-10 flex justify-center mb-8 animate-bounce">
        <div className="flex flex-col items-center gap-1">
          <ChevronDown className="text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]" size={34} />
          <span className="text-xs text-white/70 tracking-widest">
            Scroll Down
          </span>
        </div>
      </div>
    </section>
  )
}
