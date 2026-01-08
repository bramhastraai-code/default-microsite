"use client"
import { Button } from "@/components/ui/button"
import { Phone, Mail, Award, MessageCircle } from "lucide-react"

interface ContactSectionProps {
  project: any
  user: any
}

export default function ContactSection({ project, user }: ContactSectionProps) {
  return (
    <section id="contact" className="relative py-15 md:py-15 bg-background overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <div className="flex items-center gap-3">
              <div className="h-px w-12 bg-primary" />
              <span className="text-primary text-sm font-semibold tracking-wider uppercase">Contact Us</span>
              <div className="h-px w-12 bg-primary" />
            </div>
          </div>
          <h2 className="font-serif text-4xl md:text-6xl font-bold mb-6 text-balance">
            Let's Start Your <span className="text-gold">Journey</span>
          </h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto text-balance leading-relaxed">
            Connect with our expert team to discover your dream home and experience luxury living at its finest
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative bg-gradient-to-br from-card via-card/80 to-card/50 rounded-3xl border border-primary/20 p-8 md:p-12 overflow-hidden group hover:border-primary/40 transition-all duration-500">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-primary/30 rounded-tl-3xl" />
            <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-primary/30 rounded-br-3xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

            <div className="relative z-10">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-3 mb-6">
                  <div className="h-1 w-16 bg-primary" />
                  <h3 className="text-3xl md:text-4xl font-serif font-bold">
                    Your Dedicated <span className="text-gold">Agent</span>
                  </h3>
                  <div className="h-1 w-16 bg-primary" />
                </div>
                <p className="text-foreground/70 text-lg max-w-xl mx-auto">
                  Get in touch with our expert to schedule a site visit and explore your future home
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-1 gap-6 mb-12">
                <div className="relative bg-gradient-to-br from-background/80 to-background/40 rounded-2xl border border-primary/20 p-6 text-center group/card hover:border-primary/40 transition-all duration-300">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="p-4 bg-primary/10 rounded-2xl border border-primary/30 group-hover/card:bg-primary/20 transition-colors duration-300">
                      <Phone className="text-gold-dark "fill="#d4af37" size={28} />
                    </div>
                  </div>
                  <div className="mt-8">
                    <div className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Agent Name</div>
                    <div className="font-serif font-bold text-2xl mb-1">{user.user.name}</div>
                  </div>
                </div>

                {/* <div className="relative bg-gradient-to-br from-background/80 to-background/40 rounded-2xl border border-primary/20 p-6 text-center group/card hover:border-primary/40 transition-all duration-300">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="p-4 bg-primary/10 rounded-2xl border border-primary/30 group-hover/card:bg-primary/20 transition-colors duration-300">
                      <Mail className="text-gold-dark "fill="#d4af37" size={28} />
                    </div>
                  </div>
                  <div className="mt-8">
                    <div className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Email Address</div>
                    <div className="font-semibold text-lg break-all">{user.email}</div>
                  </div>
                </div>

                <div className="relative bg-gradient-to-br from-background/80 to-background/40 rounded-2xl border border-primary/20 p-6 text-center group/card hover:border-primary/40 transition-all duration-300">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="p-4 bg-primary/10 rounded-2xl border border-primary/30 group-hover/card:bg-primary/20 transition-colors duration-300">
                      <Award className="text-gold-dark "fill="#d4af37" size={28} />
                    </div>
                  </div>
                  <div className="mt-8">
                    <div className="text-xs text-muted-foreground uppercase tracking-wider mb-2">RERA Number</div>
                    <div className="font-mono text-lg font-semibold">{user.reraNumber}</div>
                  </div>
                </div> */}
              </div>

              {/* Prominent CTA buttons */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <Button
                  asChild
                  size="lg"
                  className="h-16 bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl font-semibold text-base group transition-all duration-300 hover:scale-105"
                >
                  <a href={`tel:${user.phoneNumber}`} className="flex items-center justify-center gap-3">
                    <Phone size={20} className="text-gold" />
                    <div className="text-left">
                      <div className="text-xs opacity-80">Call Now</div>
                      <div>{user.user.phoneNumber}</div>
                    </div>
                  </a>
                </Button>

                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="h-16 border-primary/30 hover:bg-primary/10 hover:border-primary rounded-xl font-semibold text-base group transition-all duration-300 hover:scale-105 bg-transparent"
                >
                  <a
                    href={`https://wa.me/${user.user.phoneNumber.replace(/\D/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3"
                  >
                    <MessageCircle size={20} />
                    <div className="text-left">
                      <div className="text-xs opacity-80">WhatsApp</div>
                      <div>Chat Now</div>
                    </div>
                  </a>
                </Button>

                {/* <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="h-16 border-primary/30 hover:bg-primary/10 hover:border-primary rounded-xl font-semibold text-base group transition-all duration-300 hover:scale-105 bg-transparent"
                >
                  <a href={`mailto:${user.email}`} className="flex items-center justify-center gap-3">
                    <Mail size={20} />
                    <div className="text-left">
                      <div className="text-xs opacity-80">Email</div>
                      <div>Send Message</div>
                    </div>
                  </a>
                </Button> */}
              </div>

              <div className="text-center">
                <p className="text-sm text-muted-foreground">Available Monday - Saturday, 9:00 AM - 7:00 PM</p>
              </div>
            </div>
          </div>

          <div className="mt-8 relative bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl border border-primary/20 p-8 overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <Award className="text-primary" size={24} />
                <h4 className="font-serif font-bold text-xl text-gold">Project Disclaimer</h4>
              </div>
              <p className="text-sm text-foreground/70 leading-relaxed mb-6">
                The design, plans, elevations, photographs and views are indicative of the kind of development that is
                proposed. These are conceptual and may differ from the final product. The Developer reserves the right
                to alter, amend and vary the layout, plans, specifications or features subject to the approval of the
                authorities.
              </p>
              <div className="pt-6 border-t border-primary/20 flex items-center justify-between flex-wrap gap-4">
                <div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Project RERA Number</div>
                  <div className="font-mono text-base font-semibold text-primary">{project.projectReraNumber}</div>
                </div>
                <div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Builder</div>
                  <div className="font-semibold text-base">{project.builderName}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-20 pt-12 border-t border-border/50 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <p className="text-sm text-foreground/80 font-medium">
                © 2025 {project.builderName}. All rights reserved.
              </p>
              <p className="text-xs text-muted-foreground mt-1">Building dreams, creating legacies</p>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-muted-foreground">Powered by</span>
              <span className="font-bold text-primary">BRAHMAASTRA.AI</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
