"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "The hybrid plan fit my travel schedule perfectly. I dropped body fat, added strength, and finally feel confident in the gym.",
    name: "Ananya",
    role: "Marketing Lead",
  },
  {
    quote:
      "Weekly check-ins and video feedback kept me accountable. My back pain is gone and my lifts have never felt cleaner.",
    name: "Rohit",
    role: "Product Manager",
  },
  {
    quote:
      "Nutrition was simplified into habits I could follow between client meetings. I lost 8 kg without feeling restricted.",
    name: "Neha",
    role: "Consultant",
  },
]

export function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let animationFrameId: number
    let scrollPosition = 0
    const scrollSpeed = 0.5

    const scroll = () => {
      scrollPosition += scrollSpeed

      if (scrollContainer.scrollWidth && scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0
      }

      scrollContainer.scrollLeft = scrollPosition
      animationFrameId = requestAnimationFrame(scroll)
    }

    animationFrameId = requestAnimationFrame(scroll)

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-background">
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background" />
        <div className="absolute top-10 left-10 w-72 h-72 bg-primary/15 blur-3xl" />
        <div className="absolute bottom-0 right-10 w-80 h-80 bg-primary/10 blur-3xl" />
      </div>
      <div className="container mx-auto max-w-7xl relative">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-balance">
          What clients say
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-pretty leading-relaxed">
          Clarity, accountability, and consistent support make the difference. Here is how coaching feels from the
          athlete&apos;s side.
        </p>

        <div className="relative">
          <div ref={scrollRef} className="flex gap-6 overflow-x-hidden" style={{ scrollBehavior: "auto" }}>
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <Card
                key={index}
                className="flex-shrink-0 w-[90vw] sm:w-[450px] border border-primary/10 bg-background/70 backdrop-blur-lg shadow-[0_25px_70px_-35px_rgba(0,0,0,0.6)]"
              >
                <CardContent className="p-8">
                  <Quote className="h-8 w-8 text-primary mb-4 drop-shadow-[0_0_12px_rgba(158,240,26,0.45)]" />
                  <p className="text-base sm:text-lg mb-6 leading-relaxed text-pretty min-h-[120px]">
                    {testimonial.quote}
                  </p>
                  <div>
                    <p className="font-semibold text-lg">{testimonial.name}</p>
                    <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
