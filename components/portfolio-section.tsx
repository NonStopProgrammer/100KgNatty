"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

const projects = [
  {
    title: "Ananya | 12-Week Recomp",
    category: "Strength & Fat Loss",
    image: "/professional-corporate-website.png",
    description:
      "Dropped 6.8 kg while adding 25% to her squat and deadlift with a hybrid plan built around long workdays and travel.",
    url: "#contact",
    tags: ["Strength", "Hybrid", "Nutrition"],
  },
  {
    title: "Rohit | Marathon Ready",
    category: "Endurance & Strength",
    image: "/creative-portfolio-website.png",
    description:
      "Balanced run volume with lifting, mobility, and fueling to finish his first marathon pain-free and stronger than before.",
    url: "#contact",
    tags: ["Conditioning", "Mobility", "Fueling"],
  },
  {
    title: "Neha | Posture & Core",
    category: "Mobility & Stability",
    image: "/social-media-graphics.png",
    description:
      "Resolved chronic desk tightness with strength foundations, breath work, and weekly accountability to keep momentum.",
    url: "#contact",
    tags: ["Mobility", "Core", "Habits"],
  },
  {
    title: "Arjun | Strength Phase",
    category: "Performance",
    image: "/restaurant-website-design.png",
    description:
      "Built a 2x bodyweight deadlift and +10 kg lean mass across two macro cycles with dialed-in nutrition and recovery.",
    url: "#contact",
    tags: ["Powerlifting", "Recovery", "Nutrition"],
  },
]

export function PortfolioSection() {
  return (
    <section id="results" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_25%,#9ef01a1a,transparent_50%),radial-gradient(circle_at_75%_70%,#9ef01a14,transparent_45%)] opacity-80" />
        <div className="absolute top-12 right-16 w-60 h-60 bg-primary/10 blur-3xl" />
        <div className="absolute bottom-12 left-12 w-64 h-64 bg-primary/10 blur-3xl" />
      </div>
      <div className="container mx-auto max-w-7xl relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-balance">Client Results</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Real transformations built on strength, smart nutrition, and consistent follow-through. Your story can be
            next.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <Button
                    size="sm"
                    variant="secondary"
                    className="gap-2"
                    onClick={() => window.open(project.url, "_blank")}
                  >
                    View story <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-sm text-primary font-semibold mb-2">{project.category}</p>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
