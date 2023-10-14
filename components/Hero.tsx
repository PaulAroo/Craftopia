import Container from "@/layouts/Container"
import Image from "next/image"
import Link from "next/link"

function Hero() {
  const CATEGORIES = [
    { title: "Woman’s Fashion", link: "#" },
    { title: "Men’s Fashion", link: "#" },
    { title: "Electronics", link: "#" },
    { title: "Home & Lifestyle", link: "#" },
    { title: "Medicine", link: "#" },
    { title: "Sports & Outdoor", link: "#" },
    { title: "Baby’s & Toys", link: "#" },
    { title: "Groceries & Pets", link: "#" },
    { title: "Health & Beauty", link: "#" },
  ]

  return (
    <>
      <Container>
        <section className="md:flex lg:h-[21.5rem] items-center justify-between md:mb-[8.75rem] mt-10">
          <div className="inline-flex px-5 flex-col items-start gap-4 h-[21.5rem] md:w-[13.6rem]">
            {CATEGORIES.map((category) => (
              <Link key={category.title} href={category.link}>
                <p>{category.title}</p>
              </Link>
            ))}
          </div>

          <Image
            alt="line"
            src="/icons/Line 4.svg"
            width={0}
            height={0}
            className="bg-black opacity-30 md:w-[0.03125rem] md:h-[24rem] ms-[1rem] me-[2.81rem]"
          />
          <div className=" bg-black">
            <div className="block md:flex">
              <div className="text-white p-[4rem]">
                <div className="inline-flex items-center gap-6">
                  <Image
                    alt="apple logo"
                    src="/assets/apple_logo.png"
                    width={40}
                    height={38}
                  />
                  <p>iPhone 14 Series</p>
                </div>
                <h3 className="font-semibold text-5xl w-[18.375rem] leading-snug my-5">
                  Up to 10% off Voucher
                </h3>
                <div className="inline-flex items-center gap-2">
                  <p className="underline">Shop Now</p>
                  <Image
                    alt=" arrow right"
                    src="/icons/icons arrow-right.svg"
                    width={24}
                    height={24}
                  />
                </div>
              </div>
              <div className="heroImage">
                <Image
                  className="h-full w-full"
                  alt="image of an iPhone"
                  src="/assets/hero_image.png"
                  width={496}
                  height={352}
                />
              </div>
            </div>
            <div className="flex items-center gap-3 justify-center py-2">
              <Image
                alt="circle icon"
                src="icons/carousel_circle_grey.svg"
                width={12}
                height={12}
              />
              <Image
                alt="circle icon"
                src="icons/carousel_circle_grey.svg"
                width={12}
                height={12}
              />
              <Image
                alt="circle icon"
                src="icons/carousel_circle_pink.svg"
                width={12}
                height={12}
              />
              <Image
                alt="circle icon"
                src="icons/carousel_circle_grey.svg"
                width={12}
                height={12}
              />
              <Image
                alt="circle icon"
                src="icons/carousel_circle_grey.svg"
                width={12}
                height={12}
              />
            </div>
          </div>
        </section>
      </Container>
    </>
  )
}
export default Hero
