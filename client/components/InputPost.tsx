import React from 'react'

const InputPost = ({ ...props }:any) => {
  return (
    <div className='relative w-full'>
        <input {...props} className='w-full px-[2.5vh] md:px-[2vw] lg:px-[2vw] outline-none py-[1vh] md:py-[.5vw] lg:py-[.5vw] rounded-xl text-[1.3vh] md:text-[1vw] lg:text-[1vw] bg-zinc-100 border-1 border-prime font-second font-medium text-zinc-700 relative overflow-y-auto'/>
    </div>
  )
}

export default InputPost