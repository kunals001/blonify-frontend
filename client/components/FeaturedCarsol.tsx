import Link from 'next/link'

const FeaturedCarsol = ({post}:any) => {
  return (
    <div  className='relative overflow-hidden rounded-xl'>
        <Link href={`/article/${post?.slug}`}><img src={post?.coverImg}
              alt={post?.altText}
              className="w-full relative h-[24vh] md:w-full md:h-[31vw] lg:w-full lg:h-[31vw] rounded-xl object-cover overflow-hidden"
              /></Link>

              <div className="absolute bottom-0 w-full md:h-[5vw] h-[6vh] flex gap-[1vh] rounded-b-xl md:px-[1vw] px-[1vh] md:py-[1vw] py-[1vh] items-center bg-gradient-to-b from-transparent to-green-200 ">
                <h1 className='text-[1.6vh] md:text-[1.7vw] lg:text-[1.7vw] font-second hover:underline leading-none cursor-pointer font-semibold text-zinc-800'>{post?.title}</h1>
            </div>
    </div>
  )
}

export default FeaturedCarsol