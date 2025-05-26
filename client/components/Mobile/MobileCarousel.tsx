import { formatDistanceToNow } from 'date-fns'
import Link from 'next/link'
import React from 'react'
import type{Post} from "@/app/(pages)/mobiles/page"
import ImageKit from '../Image'

const MobileCarousel = ({post}:{post:Post}) => {
  return (
    <div className="p-[.5vh] md:p-[.5vw] lg:p-[.5vw] relative rounded-xl bg-gradient-to-b from-zinc-100 to-green-200">
            <Link href={`/article/${post?.slug}`} ><ImageKit w={800} h={800} src={post?.coverImg as string} alt={post?.altText as string} className="w-full h-[26.5vh] md:h-[15vw] lg:h-[16vw] rounded-xl object-cover"/></Link>

            <div className="pt-[1vh] md:pt-[.4vw] lg:pt-[.4vw] px-[.8vh]">
                <h1 className='text-[2vh] md:text-[1.4vw] lg:text-[1.2vw] font-second text-zinc-700 leading-none cursor-pointer hover:underline font-semibold'>{post?.title}</h1>
            </div>

           <div className="pb-[.3vh] md:pb-[.3vw] pl-[1vh] pt-[.5vh] md:pt-[.5vw] items-center">
            <p className='text-[1vh] md:text-[.8vw] lg:text-[.8vw] font-second text-zinc-500'>Written by <span className='text-prime'>Kunal Singh</span>on 
            <span className='text-zinc-500 text-[.8vh] md:text-[.8vw] lg:text-[.8vw] w-[14vh] md:w-[14vw] lg:w-[11vw] font-second '> {post?.createdAt? formatDistanceToNow(new Date(post.createdAt), { addSuffix: true }): 'Unknown'}</span>
            </p>
           </div>
       </div>
  )
}

export default MobileCarousel