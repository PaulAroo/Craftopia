import Container from "@/layouts/Container"
import SectionHeader from "./SectionHeader"
import ProductCard from "@/components/ProductCard"

export default function AllProducts() {
  return (
    <section className="mb-[8.75rem]">
      <Container>
        {/* HEADER */}
        <div className="mb-[3.75rem]">
          <SectionHeader name="our products" heading="explore our products" />
        </div>
        {/* CARDS */}
        <div className="flex flex-wrap gap-x-[1rem] gap-y-[3.75rem] justify-evenly">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Container>
    </section>
  )
}
