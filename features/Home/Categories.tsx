import Container from "@/layouts/Container"
import SectionHeader from "./SectionHeader"

export default function Categories() {
  return (
    <section>
      <Container>
        {/* HEADER */}
        <div className="mb-[3.75rem]">
          <SectionHeader name="categories" heading="browse by category" />
        </div>
        {/* CARDS */}
      </Container>
    </section>
  )
}
