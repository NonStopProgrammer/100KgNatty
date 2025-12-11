"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Activity, Apple, Clock3, Dumbbell, HeartPulse, LineChart } from "lucide-react"

const services = [
  {
    icon: Dumbbell,
    title: "1:1 Personal Training",
    description:
      "Custom strength sessions with movement prep, technique cues, and progressive overload tailored to your goals.",
  },
  {
    icon: Activity,
    title: "Hybrid Coaching",
    description:
      "In-person kickstarts plus weekly remote programming, video feedback, and habit tracking for consistency anywhere.",
  },
  {
    icon: Apple,
    title: "Nutrition Strategy",
    description:
      "Simple nutrition structure, smart portions, and fueling strategies that match your training and lifestyle.",
  },
  {
    icon: HeartPulse,
    title: "Conditioning & Mobility",
    description:
      "Intervals, aerobic work, and mobility flows to build capacity while keeping joints healthy and pain free.",
  },
  {
    icon: LineChart,
    title: "Performance Tracking",
    description:
      "Metrics on lifts, body composition, recovery, and readiness so you always know what is working.",
  },
  {
    icon: Clock3,
    title: "Accountability",
    description:
      "Check-ins, adjustments, and clear weekly priorities to keep you progressing without second-guessing.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 animate-pulse" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mx-auto block w-fit">
          Coaching Services
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-balance">
          Where training and recovery <span className="text-primary">come together</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-pretty leading-relaxed text-lg">
          From first assessment to peak performance, every plan blends strength, conditioning, nutrition, and
          accountability so you see results that last.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:border-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-background/50 backdrop-blur-sm"
            >
              <CardHeader>
                <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <service.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
