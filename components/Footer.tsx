import Link from "next/link"
import Image from "next/image"

import { Input } from "./ui/input"
import { Button } from "./ui/button"
import Container from "@/layouts/Container"
import {
  Facebook,
  Instagram,
  Linkedin,
  LucideFacebook,
  TwitterIcon,
} from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-[5rem] pb-[1.5rem]">
      <Container>
        <div className="flex flex-col md:flex-row items-start justify-between gap-y-[3rem] gap-x-2 lg:gap-[5.2375rem] pb-[3.75rem]">
          <div>
            <h1 className="text-xl uppercase mb-[1.5rem]">craftopia</h1>
            <h2 className="text-xl mb-[1.5rem]">Subscribe</h2>
            <p className="mb-[1rem]">Get 10% off your first order</p>
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
            <h2 className="text-xl mb-[1.5rem]">Support</h2>
            <div className="grid gap-[1rem]">
              <p>
                111 Bijoy sarani, Dhaka,
                <br />
                DH 1515, Bangladesh.
              </p>
              <p>exclusive@gmail.com</p>
              <p>+88015-88888-9999</p>
            </div>
          </div>
          {FOOTER_ITEMS.map((item) => (
            <div key={item.heading}>
              <h2 className="text-xl mb-[1.5rem]">{item.heading}</h2>
              <div className="grid gap-[1rem]">
                {item.items.map((t) => (
                  <Link className="hover:underline" key={t.title} href={t.link}>
                    <p>{t.title}</p>
                  </Link>
                ))}
              </div>
            </div>
          ))}
          <div className="w-fit">
            <h2 className="text-xl mb-[1.5rem]">Download App</h2>
            <div className="flex flex-col gap-[0.5rem] mb-[1.5rem]">
              <p className="col-span-2 text-[0.75rem]">
                Save $3 with App New User Only
              </p>
              <div className="flex gap-[0.5rem]">
                <Image
                  // className="w-[40%]"
                  src="/assets/qr_code.png"
                  alt="QR code icon"
                  width={76}
                  height={76}
                />
                <div className="grid gap-[0.5rem] items-stretch">
                  <Image
                    src="/assets/play_store_logo.png"
                    alt="play store icon"
                    width={104}
                    height={30}
                  />
                  <Image
                    src="/assets/appstore_logo.png"
                    alt="app store icon"
                    width={104}
                    height={34}
                  />
                </div>
              </div>
            </div>
            <div className="flex gap-[1.5rem]">
              <Link href="#">
                <Facebook />
              </Link>
              <Link href="#">
                <TwitterIcon />
              </Link>
              <Link href="#">
                <Instagram />
              </Link>
              <Link href="#">
                <Linkedin />
              </Link>
            </div>
          </div>
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
