import React from 'react'
import { formatDistanceToNow } from 'date-fns';
import Link from 'next/link';
import ImageKit from '../Image';
import type { Post } from "@/app/(pages)/daily/page";


const DailyCarsol = ({ post }: { post: Post}) => {
  return (
    <div>
        <div className="p-[.5vh] md:p-[.5vw] lg:p-[.5vw] relative rounded-xl bg-gradient-to-b from-zinc-100 to-green-200">
            <Link href={`/article/${post?.slug}`} ><ImageKit w={500} h={400} src={post?.coverImg as string} alt={post?.altText as string} className="w-full h-[26.5vh] md:h-[15vw] lg:h-[16vw] rounded-xl object-cover" /></Link>

            <div className="pt-[.5vh] md:pt-[.5vw] lg:pt-[.4vw] flex gap-[.5vw] md:gap-[1vw]  md:justify-start">
                <h1 className='text-[2vh] md:text-[1.4vw] lg:text-[1.2vw] font-second text-zinc-700 leading-none cursor-pointer hover:underline font-semibold'>{post?.title}</h1>

                <span className='text-zinc-500 text-[.9vh] md:text-[.8vw] lg:text-[.8vw] w-[14vh] md:w-[14vw] lg:w-[11vw] font-second]'> {post?.createdAt? formatDistanceToNow(new Date(post.createdAt), { addSuffix: true }): 'Unknown'}</span>
            </div>

           <div className="gap-[1vh] md:gap-[1vw] lg:gap-[1vw] pb-[.3vh] md:pb-[.3vw] pl-[.2vh] pt-[.5vh] md:pt-[.5vw] flex items-center">
            <p className='text-[1vh] md:text-[.8vw] lg:text-[.8vw] font-second text-zinc-500'>Written by <span className='text-prime'>Kunal Singh</span></p>

            <Link href={`/article/${post?.slug}`}><div className="px-[.4vh] md:px-[.3vw] lg:px-[.4vw] rounded-full md:text-white text-prime md:bg-prime cursor-pointer text-[1.2vh] md:text-[.7vw] lg:text-[.8vw] text-center">Read more...</div></Link>
           </div>
       </div>
    </div>
  )
}

export default DailyCarsol