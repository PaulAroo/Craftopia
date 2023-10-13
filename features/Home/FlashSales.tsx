import Container from "@/layouts/Container"
import SectionHeader from "./SectionHeader"

export default function FlashSales() {
  return (
    <section>
      <Container>
        {/* HEADER */}
        <div className="mb-[3.75rem]">
          <SectionHeader name="today's" heading="flash sales" />
        </div>
        {/* CARDS */}
      </Container>
    </section>
  )
}
