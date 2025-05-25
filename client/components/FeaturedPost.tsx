import React from 'react'
import FeaturedCarsol from './FeaturedCarsol';
import type{Post} from "@/app/page"


const FeaturedPost = ({posts}: {posts: Post[]}) => {

  

  return (
    <div className='w-full md:h-[30vw] lg:h-[30vw] py-[1vh] md:py-[.1vw] lg:py-[.1vw] lg:flex md:flex gap-[3vh] md:gap-[.5vw] lg:gap-[.5vw] flex flex-col md:flex-row lg:flex-row relative select-none'>


        {posts.length > 0 ? (
          <div className="w-full">
            {posts
              .filter((post: Post) => post.isFeatured)
              .map((post: Post, index: number) => (
                <div className='w-full' key={index}>
                  <FeaturedCarsol post={post} />
                  </div>
            ))}
            </div>
        ) :(
          <h1>Loading...</h1>
        )}

    </div>
  )
}

export default FeaturedPost