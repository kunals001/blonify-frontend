import Link from 'next/link'
import { formatDistanceToNow } from 'date-fns';
import type{Post} from "@/app/page"
import Image from 'next/image';
import Head from 'next/head';


const PostListItems = ({post}:{post:Post}) => {
  return (
    <>
    <Head>
      <title>{post?.title}</title>
      <link fetchPriority='high' rel="preload" as='image' href={`${post?.coverImg}`} type='image/webp'/>
    </Head>
    <div className='w-full flex gap-[1vh] md:gap-[.5vw] lg:gap-[.5vw] relative'>

        <Link href={`/article/${post?.slug}`} ><Image width={400} height={250} src={post?.coverImg} alt={post?.altText} className="w-[16vh] h-[11.5vh] md:w-[25vw] md:h-[16vw] lg:w-[25vw] lg:h-[16vw] rounded-xl object-cover" loading='eager' priority={true}/></Link>

        {/* details */}

        <div className=" mt-[1vh] px-[1vh] md:px-[1vw] lg:px-[1vw] flex flex-col gap-[.3vh] md:gap-[.2vw] lg:gap-[.2vw]">

            <Link href={`/article/${post?.slug}`} ><h1 className='text-[1.6vh] md:text-[1.7vw] lg:text-[1.7vw] font-second font-semibold text-zinc-700 hover:underline leading-none cursor-pointer w-[53vw] md:w-[30vw] md:mb-[1.5vw]'>{post?.title}</h1></Link> 

             {/* discription */}

             <p className='text-[1.2vh] md:text-[1.1vw] lg:text-[1.2vw] font-second font-medium text-zinc-700 w-[25vh] md:w-[30vw] lg:w-[30vw] leading-none'>{post?.desc?.slice(0, 80)}
            </p>

             <div className="text-[1vh] md:text-[1.1vw] lg:text-[1.1vw] md:pb-[.3vw] pt-[.2vh] md:pt-[.5vw] items-cente text-zinc-500">
              <p className=''>Written by <span className='text-prime'>Kunal Singh </span>on 
              <span className=''> {post?.createdAt? formatDistanceToNow(new Date(post.createdAt), { addSuffix: true }): 'Unknown'}</span>
              </p>
              </div>
        </div>

    </div>
    </>
  )
}

export default PostListItems