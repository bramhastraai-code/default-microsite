import { notFound } from "next/navigation";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import HighlightsSection from "@/components/highlights-section";
import FeaturesSection from "@/components/features-section";
import GallerySection from "@/components/gallery-section";
import FloorPlanSection from "@/components/floor-plan-section";
import LocationSection from "@/components/location-section";
import ContactSection from "@/components/contact-section";
import Navigation from "@/components/navigation";

async function getProjectData(projectId: string) {
  try {
    const res = await fetch(`https://api-chanakya.brahmaastra.ai/projects/project/${projectId}`, { cache: "no-store" });
    if (!res.ok) return null;
    const data = await res.json();
    return data.data?.data || null;
  } catch (error) {
    console.error("[v0] Error fetching project:", error);
    return null;
  }
}

async function getUserData(userId: string) {
  try {
    const res = await fetch(`https://api-chanakya.brahmaastra.ai/users/${userId}`, { cache: "no-store" });
    if (!res.ok) return null;
    const data = await res.json();
    return data.data?.data || null;
  } catch (error) {
    console.error("[v0] Error fetching user:", error);
    return null;
  }
}

export default async function ProjectPage({
  params,
}: {
  params: { projectId: string; userId: string };
}) {
  // Destructure projectId and userId from params first
  const { projectId, userId } =await params;

  // Then, use these variables in your data fetching calls

  const [project, user] = await Promise.all([
    getProjectData(projectId),
    getUserData(userId),
  ]);

  if (!project || !user) {
    console.log("daradsd");
    
    notFound();
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation project={project} />
      <HeroSection project={project} />
      <AboutSection project={project} />
      <HighlightsSection project={project} />
      <FeaturesSection project={project} />
      <GallerySection project={project} />
      <FloorPlanSection project={project} />
      <LocationSection project={project} />
      <ContactSection project={project} user={user} />
    </main>
  );
}
