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
import LaptopCarousel from './LaptopCarousel'
import RefreshManage from "@/components/RefreshManage";

const IsLaptop = ({posts}:any) => {
   // Filter only featured laptop posts
  let filteredPosts = posts.filter(
    (post: any) => post.isFeatured && post.islaptop
  );

 
  if (filteredPosts.length > 6) {
    filteredPosts = filteredPosts.slice(filteredPosts.length - 6);
  }

  return (
    <RefreshManage>
    <div>
         <div className="flex gap-[1vh] md:h-[5vh] lg:h-[5vh] h-[3vh] "> 
            <div className='bg-prime h-full md:w-[2vh] w-[1vh] rounded-md'></div>
             <h1 className='text-[2vh] md:text-[1.5vw] lg:text-[1.5vw] font-semibold text-zinc-600 '>Latest Post</h1> 
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
            {filteredPosts.map((post: any, index: number) => (
              <CarouselItem key={index} className='md:basis-1/2 lg:basis-1/2 '>
                <LaptopCarousel post={post} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className='hidden md:block lg:block' />
          <CarouselNext className='hidden md:block lg:block' />
        </Carousel>
      ) : (
        <h1>No Featured Post</h1>
      )}
    </div>
    </RefreshManage>
  )
}

export default IsLaptop