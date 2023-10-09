export default function MainContainer({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="container">
      <header>Header</header>
      <main>{children}</main>
      <footer>footer</footer>
    </div>
  )
}
