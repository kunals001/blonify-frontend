import React from 'react'


const page = () => {
  return (
    <div className='w-full mt-[4vh] md:mt-[2vw] h-[70vh] md:h-screen md:px-[13vw] lg:px-[15vw] md:pt-[2vw] lg:p-[2.1vw] flex flex-col'>
        <h1 className='text-[3vh] md:text-[2vw] lg:text-[2vw] select-none mx-auto font-semibold text-center bg-gradient-to-r from-prime to-emerald-500 text-transparent bg-clip-text'>About Us</h1>

        <div className=" flex flex-col items-center justify-center px-[1vh] md:px-0 lg:px-0 gap-[.7vh] md:gap-[.3vw]">
          <p className='w-full md:w-[30vw] text-[1.3vh] md:text-[1vw] '>Welcome to <span className='font-semibold'>Blonify</span>  – your go-to place for everything tech!</p>

          <p className='w-full md:w-[30vw] text-[1.3vh] md:text-[1vw] '>We’re here to make your tech journey easier, smarter, and more fun. Whether you're looking for <span className='font-semibold'> mobile phone reviews, detailed specifications, laptop comparisons,</span> or the latest on <span className='font-semibold'>smartwatches,</span>  we’ve got you covered. We also provide <span className='font-semibold'>useful online tools</span>  to make your daily digital life more productive. – your go-to place for everything tech!</p>

          <p className='w-full md:w-[30vw] text-[1.3vh] md:text-[1vw]'>
            This website is built and managed by me, <span className='font-semibold'>Kunal Singh,</span>  a tech enthusiast who loves exploring the latest gadgets and sharing honest, helpful content that makes sense to everyone — not just tech experts.
          </p>

          <p className='w-full md:w-[30vw] text-[1.3vh] md:text-[1vw] '>At Blonify Tech, our goal is simple:</p>

          <p className='w-full md:w-[30vw] text-[1.3vh] md:text-[1vw]'>
            <span className='font-semibold'>Simplify technology for everyone.</span>
            <br />

            <span className='font-semibold'>Give you clear, real-world reviews.</span>
            <br />

            <span className='font-semibold'>Help you make smart buying decisions.</span>
          </p>

          <p className='w-full md:w-[30vw] text-[1.3vh] md:text-[1vw]'>
            We’re not here to confuse you with complicated terms. Instead, we want to make tech feel friendly, understandable, and useful for your life.
          </p>

          <p className='w-full md:w-[30vw] text-[1.3vh] md:text-[1vw]'>
            If you ever have questions, suggestions, or just want to say hello, feel free to reach out at 📧
          </p>

          <p className='w-full md:w-[30vw] text-[1.3vh] md:text-[1vw]'>
            <span className='font-semibold'>Email:</span>  <a href='mailto:blonify25@gmail.com'   className='text-prime'>blonify25@gmail.com</a>
          </p>

          <p className='w-full md:w-[30vw] text-[1.3vh] md:text-[1vw]'>
            Thanks for visiting — and welcome to the Blonify family!
            <br />Let’s grow in tech, together.
          </p>


        </div>
    </div>
  )
}

export default page