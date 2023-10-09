import Link from "next/link"
import Image from "next/image"

import { Input } from "./ui/input"
import { Button } from "./ui/button"
import Container from "@/layouts/Container"

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-[5rem] pb-[1.5rem]">
      <Container>
        <div className="flex justify-center gap-2 lg:gap-[5.2375rem]">
          <div className="pb-[3.75rem]">
            <h1 className="text-xl uppercase">craftopia</h1>
            <h2 className="text-xl">Subscribe</h2>
            <p>Get 10% off your first order</p>
            <div className="relative flex">
              <Input
                className="bg-transparent placeholder:text-[#FAFAFA] placeholder:opacity-40 pr-16"
                placeholder="Enter your email"
              />
              <Button
                className="py-0 px-0 hover:bg-transparent absolute right-0"
                variant="ghost"
                size="icon"
              >
                <Image
                  src="/icons/send.svg"
                  alt="send icon"
                  width={24}
                  height={24}
                />
              </Button>
            </div>
          </div>
          <div>
            <h2 className="text-xl">Support</h2>
            <p>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
            <p>exclusive@gmail.com</p>
            <p>+88015-88888-9999</p>
          </div>
          {FOOTER_ITEMS.map((item) => (
            <div key={item.heading}>
              <h2 className="text-xl">{item.heading}</h2>
              <div>
                {item.items.map((t) => (
                  <Link className="hover:underline" key={t.title} href={t.link}>
                    <p>{t.title}</p>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center w-full gap-1 opacity-40">
          <Image
            alt="copyright icon"
            src="/icons/copyright.svg"
            width={16.667}
            height={16.667}
            color="inherit"
          />
          <p>Copyright {new Date().getFullYear()}. All right reserved</p>
        </div>
      </Container>
    </footer>
  )
}

const FOOTER_ITEMS = [
  {
    heading: "Account",
    items: [
      { title: "My Account", link: "#" },
      { title: "Login / Register", link: "#" },
      { title: "Cart", link: "#" },
      { title: "Wishlist", link: "#" },
      { title: "Shop", link: "#" },
    ],
  },
  {
    heading: "Quick Link",
    items: [
      { title: "Privacy Policy", link: "#" },
      { title: "Terms of Use", link: "#" },
      { title: "FAQ", link: "#" },
      { title: "contact", link: "#" },
    ],
  },
]

const SOCIALS = [
  {
    src: "",
    alt: "facebook icon",
    link: "#",
  },
  {
    src: "",
    alt: "twitter icon",
    link: "#",
  },
  {
    src: "",
    alt: "instagram icon",
    link: "#",
  },
  {
    src: "",
    alt: "linkedin icon",
    link: "#",
  },
]
