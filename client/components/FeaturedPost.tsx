import React from 'react'
import Autoplay from "embla-carousel-autoplay"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import FeaturedCarsol from './FeaturedCarsol';
import type{Post} from "@/app/page"
import { Skeleton } from './ui/skeleton';


const FeaturedPost = ({posts}: {posts: Post[]}) => {

  

  return (
    <div className='w-full md:w-full lg:w-full md:h-[31vw] lg:h-[31vw] py-[1vh] md:py-[.1vw] lg:py-[.1vw] lg:flex md:flex gap-[3vh] md:gap-[.5vw] lg:gap-[.5vw] flex flex-col md:flex-row lg:flex-row relative select-none'>
        {/* first post */}

        {posts.length > 0 ? (
          <Carousel   plugins={[
           Autoplay({
             delay: 2000,
           }),
          ]} className='w-full md:w-full lg:w-full'>
          <CarouselContent>
            {posts
              .filter((post: Post) => post.isFeatured)
              .map((post: Post, index: number) => (
                <CarouselItem key={index} className='md:basis-1/2 lg:basis-1/2'>
                  <FeaturedCarsol post={post} />
                </CarouselItem>
            ))}

          </CarouselContent>
           <CarouselPrevious className='hidden md:block lg:block cursor-pointer'/>
           <CarouselNext className='hidden md:block lg:block cursor-pointer'/>
        </Carousel>
        ) :(
          <Skeleton className='w-full h-[26vh] md:w-full md:h-[15vw] lg:w-full lg:h-[26.5vw] rounded-xl bg-green-200' />
        )}

    </div>
  )
}

export default FeaturedPost