import React from 'react'
import FeaturedCarsol from './FeaturedCarsol';
import type{Post} from "@/app/page"
import { Skeleton } from './ui/skeleton';


const FeaturedPost = ({posts}: {posts: Post[]}) => {

  let filteredPosts = posts.filter(
    (post) => post.isFeatured 
  );

  if (filteredPosts.length > 1) {
    filteredPosts = filteredPosts.slice(filteredPosts.length - 1);
  }

  return (
    <div className='w-full md:h-[30vw] lg:h-[30vw] py-[1vh] md:py-[.1vw] lg:py-[.1vw] lg:flex md:flex gap-[3vh] md:gap-[.5vw] lg:gap-[.5vw] flex flex-col md:flex-row lg:flex-row relative select-none'>
        {/* first post */}

        {posts.length > 0 ? (
          <div className="w-full">
            {filteredPosts
              .map((post: Post, index: number) => (
                <div className='w-full' key={index}>
                  <FeaturedCarsol post={post} />
                </div>
            ))}
            </div>
        ) :(
          <Skeleton className='w-full h-[26vh] md:w-full md:h-[15vw] lg:w-full lg:h-[26.5vw] rounded-xl bg-green-200' />
        )}

    </div>
  )
}

export default FeaturedPost