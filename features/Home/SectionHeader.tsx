export default function SectionHeader({
  name,
  heading,
  className,
}: {
  name: string
  heading: string
  className?: string
}) {
  return (
    <div className={className ? className : ""}>
      <div className="flex items-center gap-[1rem] mb-[1.25rem]">
        <div
          className="w-[1.25rem] h-[2.5rem] bg-[#DB4444] rounded"
          aria-hidden
        />
        <p className="capitalize text-[#DB4444] font-semibold">{name}</p>
      </div>
      <h1 className="capitalize text-[2.25rem] font-semibold leading-[3rem] tracking-[0.09rem]">
        {heading}
      </h1>
    </div>
  )
}
