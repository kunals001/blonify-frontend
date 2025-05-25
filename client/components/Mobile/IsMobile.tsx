"use client"
import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from 'embla-carousel-autoplay'
import MobileCarousel from './MobileCarousel'
import type{Post} from "@/app/(pages)/mobiles/page"
import { Skeleton } from '../ui/skeleton'

interface IsMobileProps {
  posts: Post[];
}

const IsMobile: React.FC<IsMobileProps> = ({posts}) => {

 // Filter only featured laptop posts
  let filteredPosts = posts
  .filter(post => post.isFeatured && post.ismobile)
  .map(post => ({ ...post, id: String(post._id) }));

  if (filteredPosts.length > 6) {
    filteredPosts = filteredPosts.slice(filteredPosts.length - 6);
  }

  return (
    <div>
         <div className="flex gap-[1vh] md:h-[5vh] lg:h-[5vh] h-[3vh] "> 
            <div className='bg-prime h-full md:w-[2vh] w-[1vh] rounded-md'></div>
             <h1 className='text-[2vh] md:text-[1.5vw] lg:text-[1.5vw] font-semibold text-zinc-600 '>Latest</h1> 
        </div>


        {posts.length > 0 ? (
        <Carousel
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
          className='mt-[1.2vh] md:mt-[.8vw] lg:mt-[.8vw]'
        >
          <CarouselContent>
            {filteredPosts.map((post, index: number) => (
              <CarouselItem key={index} className='md:basis-1/2 lg:basis-1/2 '>
                <MobileCarousel post={post} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className='hidden md:block lg:block' />
          <CarouselNext className='hidden md:block lg:block' />
        </Carousel>
      ) : (
         <Skeleton className='w-full h-[26vh] md:w-full md:h-[15vw] lg:w-full lg:h-[16vw] rounded-xl bg-green-200' />
      )}
    </div>
  )
}

export default IsMobile