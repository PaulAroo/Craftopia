import Footer from "@/components/Footer"

export default function MainContainer({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <header>Header</header>
      <main>{children}</main>
      <Footer />
    </>
  )
}
