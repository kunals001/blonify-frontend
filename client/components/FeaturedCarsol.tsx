import Link from 'next/link'
import ImageKit from './Image';
import Head from 'next/head';

interface Post {
  _id: string;
  title: string;
  slug: string;
  coverImg: string;
  altText: string;
}


const FeaturedCarsol = ({ post }: { post: Post}) => {

  return (
    <>
     <Head>
      <title>{post?.title}</title>
      <link rel="preload" as='image' href={`${post?.coverImg}`} type='image/webp'/>
    </Head>
    <div className='md:relative w-full overflow-hidden rounded-xl flex flex-row md:block gap-[1vh] md:gap-0 bg-gradient-to-b from-transparent to-green-200'>
        <Link href={`/article/${post?.slug}`}>
            <ImageKit 
              w={400} 
              h={350} 
              src={post?.coverImg}
              alt={post?.altText}
              className="w-[16vh] md:w-full md:relative block h-[11.5vh] md:h-[30vw] rounded-xl object-cover overflow-hidden"
              loading="eager"
              priority={true}
              />
          </Link>

            <Link href={`/article/${post?.slug}`} ><h1 className='text-[2vh] w-[26.5vh] md:hidden block leading-none font-semibold text-zinc-800 pt-2'>{post?.title}</h1></Link>

           <div className="absolute bottom-0 w-full hidden md:h-[5vw] h-[6vh] md:flex gap-[1vh] rounded-b-xl md:px-[1vw] px-[1vh] md:py-[1vw] py-[1vh] items-center bg-gradient-to-b from-transparent to-zinc-300">
                <h1 className='text-[2vh] md:text-[1.7vw] hover:underline leading-none cursor-pointer font-semibold text-zinc-800'>{post?.title}</h1>
          </div>
    </div>
    </>
  )
}

export default FeaturedCarsol