import { motion } from "framer-motion";
import { Building2, MapPin, BadgeCheck, Activity } from "lucide-react";

const icons = [Building2, Activity, BadgeCheck, MapPin];
interface AboutSectionProps {
  project: any
}
export default function ProjectInfoCards({ project}: AboutSectionProps) {
  const items = [
    { label: "Developer", value: project.builderName || "Oscar Infra" },
    { label: "Status", value: project.projectStatus || "Ongoing" },
    {
      label: "RERA No.",
      value: project.projectReraNumber
        ? `${project.projectReraNumber.slice(0, 8)}...`
        : "Awaited",
    },
    { label: "Location", value: project.location || "Premium" },
  ];

  return (
    <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
      {items.map((item, i) => {
        const Icon = icons[i];
        return (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05, rotateX: 5, rotateY: -5 }}
            transition={{ type: "spring", stiffness: 150 }}
            className="relative p-[2px] rounded-2xl bg-gradient-to-br from-primary/60 via-accent/40 to-transparent shadow-lg hover:shadow-primary/30 transition-all"
          >
            <div className="p-6 bg-background/90 backdrop-blur-xl rounded-2xl h-full flex flex-col justify-center items-center text-center">
              <div className="p-3 bg-primary/10 rounded-full mb-3">
                <Icon className="w-6 h-6 text-gold" />
              </div>
              <div className="text-lg md:text-xl font-semibold text-foreground mb-1">
                {item.value}
              </div>
              <div className="text-xs md:text-sm text-muted-foreground tracking-wide uppercase">
                {item.label}
              </div>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
