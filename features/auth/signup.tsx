import React from 'react'
import Image from 'next/image'
export const SignupFeat = () => {
  return (
    <div
    className="flex items-center"
    >
      <img src="/assets/images/auth/SideImage.png" alt="" />

      {/* form */}
      <div className="w-full px-32">
        <h1 className="text-3xl font-medium">
        Create an account
        </h1>
        <p className="text-base mt-6">
        Enter your details below 
        </p>
     <div
     className="w-full mt-12 "
     >
      <div>
      <input placeholder="Name" 
      className="border-b border-gray-900 focus:outline-none focus:border-b focus:border-gray-800 w-full "
      />
      </div>
      <div>      
        <input
       className="border-b border-gray-900 focus:outline-none focus:border-b focus:border-gray-800 w-full mt-5"
      placeholder="Email or Phone Number" />
      </div>
      <div> 
      <input className="border-b border-gray-900 focus:outline-none focus:border-b focus:border-gray-800 w-full mt-5" type="password" placeholder="Password" />
      </div>
      <div>
      <button className="w-full h-14 text-xl bg-red-500 text-white hover:bg-red-600 focus:outline-none focus:ring focus:border-red-700 rounded mt-5">
      Create Account
      </button>
      </div>
      {/* <div>
        <button>
      Sign up with Google
      </button>
      </div> */}

     </div>
     </div>
    </div>
  )
}
