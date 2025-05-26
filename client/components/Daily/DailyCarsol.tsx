import React from 'react'
import Link from 'next/link';
import ImageKit from '../Image';
import type{Post} from "@/app/page"
import Date from '../Date'


const DailyCarsol = ({ post }: { post: Post}) => {
  return (
    <div>
        <div className="p-[.5vh] md:p-[.5vw] lg:p-[.5vw] relative rounded-xl bg-gradient-to-b from-zinc-100 to-green-200">
            <Link href={`/article/${post?.slug}`} ><ImageKit w={500} h={400} src={post?.coverImg as string} alt={post?.altText as string} className="w-full h-[26.5vh] md:h-[15vw] lg:h-[16vw] rounded-xl object-cover"/></Link>

            <div className="pt-[.5vh] md:pt-[.5vw] lg:pt-[.4vw] flex gap-[.5vw] md:gap-[1vw]  md:justify-start">
                <h1 className='text-[2vh] md:text-[1.4vw] lg:text-[1.2vw] font-second text-zinc-700 leading-none cursor-pointer hover:underline font-semibold'>{post?.title}</h1>

            </div>

           <Date post={post} />
       </div>
    </div>
  )
}

export default DailyCarsol