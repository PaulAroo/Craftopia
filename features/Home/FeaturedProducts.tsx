import Container from "@/layouts/Container"
import SectionHeader from "./SectionHeader"

export default function FeaturedProducts() {
  return (
    <section>
      <Container>
        {/* HEADER */}
        <SectionHeader
          name="featured"
          heading="new arrival"
          className="mb-[3.75rem]"
        />
        {/* CARDS */}
      </Container>
    </section>
  )
}
