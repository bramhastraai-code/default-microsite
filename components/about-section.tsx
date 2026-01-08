"use client"

import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import { motion } from "framer-motion"
import ProjectInfoCards from "./ui/project-cards"

interface AboutSectionProps {
  project: any
}

export default function AboutSection({ project }: AboutSectionProps) {
  const images = project.propertyPictures || []

  return (
    <section
      id="overview"
      className="relative py-16 md:py-28 bg-gradient-to-b from-background via-background/95 to-background overflow-hidden"
    >
      <div className="container relative mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
          {/* === Left: Image Frame === */}
          {images.length > 0 && (
            <div className="relative flex justify md:justify-end order-1 md:order-none">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                whileHover={{ scale: 1.02 }}
                className="relative w-[85%] sm:w-[420px] md:w-[480px] h-[320px] sm:h-[380px] md:h-[420px] rounded-3xl overflow-hidden border border-primary/20 shadow-[0_8px_40px_rgba(0,0,0,0.15)]"
              >
                <img
                  src={images[0]}
                  alt="Project"
                  className="object-cover w-full h-full transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 border-2 border-primary/30 rounded-3xl pointer-events-none"></div>

                {images[1] && (
                  <motion.img
                    src={images[1]}
                    alt="Preview"
                    className="absolute bottom-[-40px] left-[-40px] w-36 h-36 object-cover rounded-xl border border-primary/20 shadow-lg"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  />
                )}
              </motion.div>
            </div>
          )}

          {/* === Right: Text Content === */}
          <div className="text-center md:text-left">
            <h2 className="font-serif text-3xl md:text-5xl text-gold font-bold mb-5 relative inline-block">
              <span className="text-primary">About</span> The Project
              <div className="absolute left-1/2 md:left-0 -bottom-2 w-20 h-[3px] bg-primary rounded-full md:translate-x-0 -translate-x-1/2" />
            </h2>

            <p className="mt-6 text-base   text-foreground/80 leading-relaxed max-w-xl mx-auto md:mx-0">
              {project.description ||
                "Experience refined urban living with thoughtfully designed spaces, premium materials, and seamless connectivity that blend comfort and luxury effortlessly."}
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 md:justify-start justify-center">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-md transition"
                asChild
              >
                <a href={project.brochure} target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2" size={18} />
                  Download Brochure
                </a>
              </Button>
            </div>

            {/* === Stats Section === */}
            
          </div>
        </div>
        <ProjectInfoCards project={project} />
      </div>
    </section>
  )
}
