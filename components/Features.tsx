import Container from "@/layouts/Container"
import Image from "next/image"
import React from "react"

export default function Features() {
  return (
    <section className="my-[8.75rem]">
      <Container>
        <div className="flex flex-col md:flex-row items-center gap-[5.5rem] justify-center">
          {FEATURES.map((f) => (
            <div key={f.heading} className="flex flex-col items-center w-fit">
              <div className="p-3 bg-[#c1c1c1] w-fit rounded-full mb-[1.5rem]">
                <div className="w-fit bg-black p-2 rounded-full">
                  <Image
                    src={f["icon-link"]}
                    width={40}
                    height={40}
                    alt={f.alt}
                  />
                </div>
              </div>
              <h2 className="uppercase text-[1.25rem] font-semibold text-center">
                {f.heading}
              </h2>
              <p className="text-center">{f.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

const FEATURES = [
  {
    "icon-link": "/icons/delivery.svg",
    "heading": "free and fast delivery",
    "description": "Free delivery for all orders over $140",
    "alt": "delivery icon",
  },
  {
    "icon-link": "/icons/customer_service.svg",
    "heading": "24/7 customer service",
    "description": "Friendly 24/7 customer support",
    "alt": "customer service icon",
  },
  {
    "icon-link": "/icons/shield-tick.svg",
    "heading": "money back guarantee",
    "description": "We reurn money within 30 days",
    "alt": "shield tick icon",
  },
]
