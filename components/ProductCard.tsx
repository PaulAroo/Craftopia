import Image from "next/image"
import { EyeIcon, HeartIcon } from "lucide-react"

export default function ProductCard() {
  return (
    <div className="group grid gap-[1rem] w-[16.9rem] min-h-[15.6rem]">
      <div className="relative grid bg-[#F5F5F5] h-[250px] rounded-[4px]">
        <div className=" self-center justify-self-center">
          <Image src="/assets/cam.png" width={146} height={163} alt="" />
        </div>
        <button className="hidden group-hover:block self-end bg-black text-white capitalize h-[41px] font-medium rounded-b-[4px]">
          add to cart
        </button>
        <button className="absolute right-[12px] top-[12px] bg-white rounded-full p-[0.31rem]">
          <HeartIcon />
        </button>
        <button className="absolute right-[12px] top-[54px] bg-white rounded-full p-[0.31rem]">
          <EyeIcon />
        </button>
      </div>
      <div className="font-medium flex flex-col gap-[0.5rem]">
        <h3 className="leading-[1.5rem]">CANON EOS DSLR Camera</h3>
        <div>
          <p className="text-[#DB4444]">$360</p>
        </div>
      </div>
    </div>
  )
}
