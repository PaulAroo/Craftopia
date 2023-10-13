import Hero from "@/components/Hero"
import Features from "@/components/Features"
import Categories from "@/features/Home/Categories"
import FlashSales from "@/features/Home/FlashSales"
import BestSelling from "@/features/Home/BestSelling"
import AllProducts from "@/features/Home/AllProducts"
import FeaturedProducts from "@/features/Home/FeaturedProducts"

export default function Home() {
  return (
    <>
      <Hero />
      <FlashSales />
      <Categories />
      <BestSelling />
      <AllProducts />
      <FeaturedProducts />
      <Features />
    </>
  )
}
