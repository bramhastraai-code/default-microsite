import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="font-serif text-6xl md:text-8xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">Project Not Found</h2>
        <p className="text-foreground/80 mb-8 max-w-md mx-auto">
          The project or user you're looking for doesn't exist or has been removed.
        </p>
        <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
          <Link href="/">Go Home</Link>
        </Button>
      </div>
    </div>
  )
}
