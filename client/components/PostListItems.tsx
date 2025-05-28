import Link from 'next/link'
import type{Post} from "@/app/page"
import Image from 'next/image'; 
import Date from './Date';


const PostListItems = ({post}:{post:Post}) => {

  

  return (
    <>
    <div className='w-full flex md:gap-[.5vw] lg:gap-[.5vw] relative'>

        <Link href={`/article/${post?.slug}`} ><Image width={500} height={400} src={post?.coverImg as string} alt={post?.altText as string} className="w-[16vh] h-[12vh] md:w-[25vw] md:h-[16vw] lg:w-[25vw] lg:h-[16vw] rounded-xl object-cover" loading='eager' priority/></Link>

        {/* details */}

        <div className=" mt-[1vh] px-[1vh] md:px-[1vw] lg:px-[1vw] flex flex-col gap-[.3vh] md:gap-[.2vw] lg:gap-[.2vw]">

            <Link href={`/article/${post?.slug}`} ><h1 className='text-[2vh] md:text-[1.7vw] lg:text-[1.7vw] font-second font-semibold text-zinc-700 hover:underline leading-none tracking-tight cursor-pointer w-[55vw] md:w-[30vw] md:mb-[1.5vw]'>{post?.title}...</h1></Link> 

             {/* discription */}

             <p className='text-[1.4vh] hidden md:block md:text-[1.1vw] lg:text-[1.2vw] font-second font-medium text-zinc-700 w-[25vh] md:w-[30vw] lg:w-[30vw] leading-none'>{post?.desc?.slice(0, 130)}...
            </p>

            <Date post={post} />
        </div>

    </div>
    </>
  )
}

export default PostListItems