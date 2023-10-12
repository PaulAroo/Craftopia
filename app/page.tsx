import Features from "@/components/Features"
import Hero from "@/components/Hero"
import { Button } from "@/components/ui/button"
import Container from "@/layouts/Container"

export default function Home() {
  return (
    <Container>
      <Hero />
      <Features />
    </Container>
  )
}
