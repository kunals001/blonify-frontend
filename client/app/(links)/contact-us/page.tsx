import Input from '@/components/Input'
import { Mail, Pen, User } from 'lucide-react'
import React from 'react'

const page = () => {
  return (
    <div className='w-full mt-[4vh] md:mt-[2vw] h-[70vh] md:h-screen md:px-[13vw] lg:px-[15vw] md:pt-[2vw] lg:p-[2.1vw] flex flex-col items-center px-[1vh] overflow-hidden'>
        <h1 className='text-[3vh] md:text-[2vw] lg:text-[2vw] select-none mx-auto font-semibold text-center bg-gradient-to-r from-prime to-emerald-500 text-transparent bg-clip-text'>Contact Us</h1>

        <p className='w-full md:w-[40vw] text-[1.3vh] md:text-[1vw] '>
            Got a question, suggestion, or feedback? We’d love to hear from you!
            <br />
            Feel free to reach out to us anytime. Whether it’s about a review, a tool, or just tech talk — we’re here to help.
            <br />
            Email: <a href="mailto:blonify25@gmail.com" className='text-prime'>blonify25@gmail.com</a>  <br />
            We're available online — anytime, anywhere!
        </p>

        <form className='w-full md:w-[40vw] flex flex-col pt-[1vh] md:pt-[1vw]'>
            <Input icon={User} type="text" placeholder="Enter your name" />
            <Input icon={Mail} type="text" placeholder="Email address" />

            <textarea placeholder='Enter your message' className='w-full h-[15vh] rounded-2xl px-4 py-2 bg-white bg-opacity-30' />

            <button type='submit' className='w-full bg-prime text-white py-2 rounded-2xl mt-4 '>Send</button>
        </form>
    </div>
  )
}

export default page