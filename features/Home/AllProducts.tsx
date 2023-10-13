import Container from "@/layouts/Container"
import SectionHeader from "./SectionHeader"

export default function AllProducts() {
  return (
    <section>
      <Container>
        {/* HEADER */}
        <div className="mb-[3.75rem]">
          <SectionHeader name="our products" heading="explore our products" />
        </div>
        {/* CARDS */}
      </Container>
    </section>
  )
}
