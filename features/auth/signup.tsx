import React from 'react'
import Image from 'next/image'
export const SignupFeat = () => {
  return (
    <div
    className="flex items-center "
    >
      <Image src="/assets/images/auth/SideImage.png" alt=""/>

      {/* form */}
      <div>
        <h1 className="">
        Create an account
        </h1>
        <p>
        Enter your details below
        </p>
     <form>
      <input placeholder="Name" />
      <input placeholder="Email or Phone Number" />
      <input type="password" placeholder="Password" />
      <button>
      Create Account
      </button>
      <button>
      Sign up with Google
      </button>
     </form>
     </div>
    </div>
  )
}
