import Container from "@/layouts/Container"
import SectionHeader from "./SectionHeader"
import Link from "next/link"
import Image from "next/image"

const renderDetails = ({
  heading,
  desc,
}: {
  heading: string
  desc: string
}) => {
  return (
    <div className="pl-[1.5rem] pb-[1.5rem] max-w-[17rem] absolute left-0 bottom-0">
      <h2 className="text-[1.5rem] font-semibold leading-[1.5rem] capitalize mb-[1rem] tracking-[0.045rem]">
        {heading}
      </h2>
      <p className="text-[0.875rem] leading-[1.3125rem] font-normal mb-[1rem]">
        {desc}
      </p>
      <Link className="capitalize underline font-medium" href="#">
        shop now
      </Link>
    </div>
  )
}

export default function FeaturedProducts() {
  return (
    <section>
      <Container>
        {/* HEADER */}
        <SectionHeader
          name="featured"
          heading="new arrival"
          className="mb-[3.75rem]"
        />
        {/* CARDS */}
        <div className="grid md:grid-cols-2 gap-[1rem] lg:gap-[1.88rem] text-white">
          <div className="grid relative bg-black h-[37.5rem]">
            <div className="w-fit h-fit self-end justify-self-center">
              <Image
                src="/assets/ps5_image.png"
                width={511}
                height={511}
                alt=""
              />
            </div>
            {renderDetails({
              heading: "PlayStation 5",
              desc: "Black and White version of the PS5 coming out on sale.",
            })}
          </div>
          <div className="grid gap-[1rem] lg:gap-[1.88rem]">
            <div className="grid relative bg-black h-[17.875rem]">
              <div className="w-fit h-fit self-center justify-self-end">
                <Image
                  src="/assets/hat_black.png"
                  width={432}
                  height={286}
                  alt=""
                />
              </div>
              {renderDetails({
                heading: "women’s collections",
                desc: "Featured woman collections that give you another vibe.",
              })}
            </div>
            <div className="grid grid-cols-2 gap-[1rem] lg:gap-[1.88rem]">
              <div className="grid relative bg-black h-[17.875rem]">
                <div className="w-fit h-fit self-center justify-self-center">
                  <Image
                    src="/assets/amazon_echo.png"
                    width={190}
                    height={221}
                    alt=""
                  />
                </div>
                {renderDetails({
                  heading: "Speakers",
                  desc: "Amazon wireless speakers",
                })}
              </div>
              <div className="grid relative bg-black h-[17.875rem]">
                <div className="w-fit h-fit self-center justify-self-center">
                  <Image
                    src="/assets/gucci_perfume.png"
                    width={201}
                    height={203}
                    alt=""
                  />
                </div>
                {renderDetails({
                  heading: "Perfume",
                  desc: "GUCCI INTENSE OUD EDP",
                })}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

// width: 35.625rem;
// height: 37.5rem;
