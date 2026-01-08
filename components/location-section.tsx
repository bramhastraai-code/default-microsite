import { MapPin, Train, ShoppingBag, Hospital, School } from "lucide-react"

interface LocationSectionProps {
  project: any
}

export default function LocationSection({ project }: LocationSectionProps) {
  const [lat, lng] = project.glocation?.split(",").map((coord: string) => Number.parseFloat(coord)) || [19.076, 72.8777]

  const nearbyPlaces = [
    { icon: Train, name: "Railway Station", distance: "3.2 Km" },
    { icon: ShoppingBag, name: "Shopping Mall", distance: "1.5 Km" },
    { icon: Hospital, name: "Hospital", distance: "2.0 Km" },
    { icon: School, name: "Schools", distance: "1.0 Km" },
  ]

  return (
    <section id="location" className="py-20 md:py-15 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            Prime <span className="text-gold">Location</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6" />
          <p className="text-foreground/80 text-lg max-w-2xl mx-auto text-balance">
            Experience great connectivity with easy access to key destinations
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Map */}
          <div className="bg-background rounded-lg border border-border overflow-hidden h-[400px]">
            <iframe
              src={`https://www.google.com/maps?q=${lat},${lng}&z=15&output=embed`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Nearby Places */}
          <div className="space-y-6">
            <div className="flex items-start gap-3 mb-8">
              <MapPin className="text-gold flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="text-xl  font-serif font-bold mb-2">Address</h3>
                <p className="text-foreground/80">{project.venue}</p>
              </div>
            </div>

            <div className="space-y-4">
              {nearbyPlaces.map((place, index) => {
                const Icon = place.icon
                return (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-background rounded-lg border border-border hover:border-primary transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Icon className="text-primary" size={20} />
                      </div>
                      <span className="font-medium">{place.name}</span>
                    </div>
                    <span className="text-primary font-semibold">{place.distance}</span>
                  </div>
                )
              })}
            </div>

            
          </div>
        </div>
      </div>
    </section>
  )
}
