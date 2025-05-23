import { formatDistanceToNow } from 'date-fns'
import Link from 'next/link'
import React from 'react'

const MobileCarousel = ({post}:any) => {
  return (
    <div className="p-[.5vh] md:p-[.5vw] lg:p-[.5vw] relative rounded-xl bg-gradient-to-b from-zinc-100 to-green-200">
            <Link href={`/article/${post?.slug}`} ><img src={post?.coverImg} alt={post?.altText} className="w-full h-[24vh] md:w-full md:h-[15vw] lg:w-full lg:h-[16vw] rounded-xl object-cover" /></Link>

            <div className="pt-[1vh] md:pt-[.4vw] lg:pt-[.4vw] flex gap-[1vh] md:gap-[1vw] items-center md:justify-start px-[.8vh]">
                <h1 className='text-[1.5vh] md:text-[1.4vw] lg:text-[1.2vw] font-second text-zinc-700 leading-none cursor-pointer hover:underline font-semibold'>{post?.title}</h1>

                <span className='text-zinc-500 text-[.8vh] md:text-[.8vw] lg:text-[.8vw] w-[10vh] md:w-[11vw] lg:w-[11vw] font-second '> {post?.createdAt? formatDistanceToNow(new Date(post.createdAt), { addSuffix: true }): 'Unknown'}</span>
            </div>

           <div className="flex gap-[1vh] md:gap-[1vw] lg:gap-[1vw] pb-[.3vh] md:pb-[.3vw] pl-[1vh] pt-[.5vh] md:pt-[.5vw]">
            <p className='text-[.8vh] md:text-[.8vw] lg:text-[.8vw] font-second text-zinc-500'>Written by <span className='text-prime'>Kunal Singh</span></p>

            <Link href={`/article/${post?.slug}`}><div className="px-[.4vh] md:px-[.3vw] lg:px-[.4vw] rounded-full md:text-white text-prime md:bg-prime cursor-pointer text-[.9vh] md:text-[.7vw] lg:text-[.8vw] text-center">Read more...</div></Link>
           </div>
       </div>
  )
}

export default MobileCarousel