import Footer from "@/components/Footer"
import Hero from "@/components/Hero"

export default function MainContainer({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <header>Header</header>
      <main>
        {children}
        <Hero />
      </main>
      <Footer />
    </>
  )
}
