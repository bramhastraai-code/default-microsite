import { Home, Calendar, IndianRupee, Key, Ruler, Building } from "lucide-react"

interface HighlightsSectionProps {
  project: any
}

export default function HighlightsSection({ project }: HighlightsSectionProps) {
  const featuredHighlights = [
    {
      icon: IndianRupee,
      label: "Starting Price",
      value: `₹${(project.minPrice / 10000000).toFixed(2)}Cr`,
      description: "Competitive pricing for luxury living",
    },
    {
      icon: Key,
      label: "Possession",
      value: "As Per Schedule",
      description: "Timely delivery guaranteed",
    },
  ]

  const standardHighlights = [
    {
      icon: Ruler,
      label: "Plot Area",
      value: "Premium Location",
    },
    {
      icon: Home,
      label: "Configurations",
      value: "Luxury Residences",
    },
    {
      icon: Calendar,
      label: "Launch Date",
      value: project.projectStatus,
    },
    {
      icon: Building,
      label: "Project Type",
      value: "Residential",
    },
  ]

  return (
    <section id="highlights" className="py-20 md:py-32 bg-card relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-gold lg:text-6xl font-bold mb-4">
            Project <span className="text-primary">Highlights</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-4" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover the exceptional features that make this project stand out
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Featured Highlights - Large Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {featuredHighlights.map((highlight, index) => {
              const Icon = highlight.icon
              return (
                <div
                  key={index}
                  className="group relative p-10 bg-gradient-to-br from-background to-background/50 rounded-2xl border-2 border-primary/20 hover:border-primary transition-all duration-500 overflow-hidden"
                >
                  {/* Decorative corner accent */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full transform translate-x-16 -translate-y-16 group-hover:translate-x-12 group-hover:-translate-y-12 transition-transform duration-500" />

                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-6">
                      <div className="p-4 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors duration-300">
                        <Icon className="text-gold" size={32} />
                      </div>
                      <div className="text-6xl font-serif font-bold text-primary/10 group-hover:text-primary/20 transition-colors duration-300">
                        0{index + 1}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="text-sm uppercase tracking-wider text-primary font-semibold">
                        {highlight.label}
                      </div>
                      <div className="text-3xl md:text-4xl font-serif font-bold text-foreground">{highlight.value}</div>
                      <div className="text-muted-foreground">{highlight.description}</div>
                    </div>
                  </div>

                  {/* Hover effect border */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              )
            })}
          </div>

          {/* Standard Highlights - Compact Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {standardHighlights.map((highlight, index) => {
              const Icon = highlight.icon
              return (
                <div
                  key={index}
                  className="group relative p-6 bg-background rounded-3xl border border-border hover:border-primary/50 transition-all duration-300 overflow-hidden"
                >
                  {/* Animated background on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="relative z-10 space-y-4 ">
                    <div className="flex items-center justify-between">
                      <div className="p-2.5 bg-primary/10 rounded-lg group-hover:scale-110 transition-transform duration-300">
                        <Icon className="text-gold" size={20} />
                      </div>
                      <div className="w-8 h-0.5 bg-primary/20 group-hover:bg-primary/50 transition-colors duration-300" />
                    </div>

                    <div>
                      <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1.5">
                        {highlight.label}
                      </div>
                      <div className="text-lg font-serif font-semibold text-foreground">{highlight.value}</div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
