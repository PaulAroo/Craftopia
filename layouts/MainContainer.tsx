import Footer from "@/components/Footer"
import Header from "@/components/Header"

export default function MainContainer({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}
