import Link from 'next/link'
import ImageKit from './Image'

interface Post {
  _id: string;
  title: string;
  slug: string;
  coverImg: string;
  altText: string;
}


const FeaturedCarsol = ({ post }: { post: Post}) => {
  return (
    <div  className='relative overflow-hidden rounded-xl'>
        <Link href={`/article/${post?.slug}`}><ImageKit w={1200} h={800} src={post?.coverImg}
              alt={post?.altText}
              className="w-full relative h-[26.5vh] md:h-[31vw] lg:h-[31vw] rounded-xl object-cover overflow-hidden"
              priority={true}
              /></Link>

              <div className="absolute bottom-0 w-full md:h-[5vw] h-[6vh] flex gap-[1vh] rounded-b-xl md:px-[1vw] px-[1vh] md:py-[1vw] py-[1vh] items-center bg-gradient-to-b backdrop-blur-sm from-transparent to-zinc-400">
                <h1 className='text-[2vh] md:text-[1.7vw] lg:text-[1.7vw] font-second hover:underline leading-none cursor-pointer font-semibold text-zinc-800'>{post?.title}</h1>
            </div>
    </div>
  )
}

export default FeaturedCarsol