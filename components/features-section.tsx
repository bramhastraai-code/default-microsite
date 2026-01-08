import { Sparkles, Building2, Trees, Dumbbell, Shield, Waves } from "lucide-react"

interface FeaturesSectionProps {
  project: any
}

const getAmenityIcon = (amenity: string) => {
  const amenityLower = amenity.toLowerCase()
  if (amenityLower.includes("gym") || amenityLower.includes("fitness")) return Dumbbell
  if (amenityLower.includes("pool") || amenityLower.includes("swimming")) return Waves
  if (amenityLower.includes("garden") || amenityLower.includes("park") || amenityLower.includes("landscape"))
    return Trees
  if (amenityLower.includes("security") || amenityLower.includes("cctv")) return Shield
  if (amenityLower.includes("club") || amenityLower.includes("lounge")) return Building2
  return Sparkles
}

export default function FeaturesSection({ project }: FeaturesSectionProps) {
  const featuredAmenities = project.amenities?.slice(0, 4) || []
  const additionalAmenities = project.amenities?.slice(4) || []

  return (
    <section id="features" className="py-20 md:py-15 bg-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-10 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-px bg-primary" />
            <Sparkles className="text-primary" size={20} />
            <div className="w-8 h-px bg-primary" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Why Choose <span className="text-gold">{project.projectName}</span>?
          </h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto text-balance leading-relaxed">
            Discover exceptional living with prime location, modern amenities, spacious layouts, and quality
            construction.
          </p>
        </div>

        <div className="max-w-7xl mx-auto mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {featuredAmenities.map((amenity: string, index: number) => {
              const Icon = getAmenityIcon(amenity)
              const isEven = index % 2 === 0

              return (
                <div key={index} className={`group relative ${isEven ? "md:mt-0" : "md:mt-12"}`}>
                  <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="relative bg-card border border-border rounded-lg  p-8 h-full hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
                    <div className="absolute top-6 right-6 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center border border-primary/20">
                      <span className="text-gold font-serif font-bold text-sm">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <div className="relative mb-6 inline-block">
                      <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                      <div className="relative w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl flex items-center justify-center border border-primary/20 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="text-gold" size={28} />
                      </div>
                    </div>

                    <h3 className="text-2xl font-serif font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                      {amenity}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Premium {amenity.toLowerCase()} facilities designed for modern living and ultimate comfort
                    </p>

                    <div className="mt-6 h-px bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0 group-hover:via-primary transition-all duration-300" />
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {additionalAmenities.length > 0 && (
          <div className="max-w-6xl mx-auto">
            <div className="relative bg-gradient-to-br from-card to-card/50 rounded-2xl border border-border p-8 md:p-12 backdrop-blur-sm">
              <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-primary/30 rounded-tl-2xl" />
              <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-primary/30 rounded-br-2xl" />

              <div className="text-center mb-8">
                <h3 className="text-3xl font-serif font-bold mb-2">
                  Additional <span className="text-gold">Amenities</span>
                </h3>
                <p className="text-muted-foreground">Explore more features that make this property exceptional</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {additionalAmenities.map((amenity: string, index: number) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-4 bg-background/50 rounded-lg border border-border/50 hover:border-primary/50 hover:bg-background transition-all duration-300 group"
                  >
                    <div className="flex-shrink-0 w-2 h-2 bg-primary rounded-full group-hover:scale-150 transition-transform duration-300" />
                    <span className="text-foreground/90 group-hover:text-foreground transition-colors">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
