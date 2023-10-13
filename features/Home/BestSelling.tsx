import Container from "@/layouts/Container"
import SectionHeader from "./SectionHeader"

export default function BestSelling() {
  return (
    <section>
      <Container>
        {/* HEADER */}
        <div className="mb-[3.75rem]">
          <SectionHeader name="this month" heading="best selling products" />
        </div>
        {/* CARDS */}
      </Container>
    </section>
  )
}
