"use client"

import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"

interface FloorPlanSectionProps {
  project: any
}

export default function FloorPlanSection({ project }: FloorPlanSectionProps) {
  return (
    <section id="floor-plans" className="py-20 md:py-15 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            Floor <span className="text-gold">Plans</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6" />
          <p className="text-foreground/80 text-lg max-w-2xl mx-auto text-balance">
            Thoughtfully designed layouts for modern living
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {project.floorPlan ? (
            <div className="bg-card rounded-lg  overflow-hidden">
              <img src={project.floorPlan || "/placeholder.svg"} alt="Floor Plan" className="w-full h-auto" />
              <div className="p-6 flex justify-center">
                <Button size="lg"
                className="bg-gold text-white rounded-full hover:bg-primary/90 shadow-md transition" asChild>
                  <a href={project.floorPlan} download>
                    <Download className="mr-2" size={20} />
                    Download Floor Plan
                  </a>
                </Button>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[1, 2].map((i) => (
                <div key={i} className="bg-card rounded-lg border border-border overflow-hidden">
                  <img
                    src={`/residential-floor-plan-layout-.jpg?height=600&width=800&query=residential floor plan layout ${i}`}
                    alt={`Floor Plan ${i}`}
                    className="w-full h-auto"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-serif font-bold mb-2">Configuration {i}</h3>
                    <p className="text-muted-foreground">Spacious and well-designed layout</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
