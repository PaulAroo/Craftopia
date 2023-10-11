import Link from 'next/link';
import Image from "next/image"

import { Input } from "./ui/input"
import { Button } from "./ui/button"

const Header = () => {
return (
    <div className="w-full h-20 bg-emerald-800 sticky top-0">
        <div className="container mx-auto px-4 h-full">
            <div className="flex justify-between items-center h-full">
                <div className='flex items-center gap-x-6'>
                    <Link href="#">
                        <p className="text-white text-2xl font-bold">Exclusive</p>
                    </Link>
                    <ul className="hidden md:flex gap-x-6 text-white">
                        <li>
                            <Link href="/Home">
                                <p>Home</p>
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact">
                                <p>Contact</p>
                            </Link>
                        </li>
                        <li>
                            <Link href="/about">
                                <p>About</p>
                            </Link>
                        </li>
                        <li>
                            <Link href="/signup">
                                <p>Sign Up</p>
                            </Link>
                        </li>
                    </ul>
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
                  src="/icons/Vector.svg"
                  alt="search icon"
                  width={24}
                  height={24}
                />
              </Button>
            </div>
                </div>
            </div>
        </div>
    </div>
  );
};
export default Header;