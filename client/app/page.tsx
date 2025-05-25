"use client"
import DesktopCategories from "@/components/DesktopCategories"
import WebHeadline from "@/components/WebHeadline"
import { useEffect, useState } from "react"
import axios from "axios"
import dynamic from "next/dynamic"
import { Skeleton } from "@/components/ui/skeleton"


export type Post = {
  coverImg: string; // ✅ Only allow string if that's what's expected in components
  title: string;
  slug: string;
  desc: string;
  content: string;
  category: string;
  isFeatured: boolean;
  altText: string;
  _id: string;
  createdAt?: string | number | null;
  updatedAt?: string | number | null;
  ismobile?: boolean;
  islaptop?: boolean;
  isdaily?: boolean;
};

const FeaturedPost = dynamic(() => import('@/components/FeaturedPost'), {
  ssr: false,
  loading: () => <Skeleton className='w-full h-[26vh] md:w-full md:h-[15vw] lg:w-full lg:h-[26.5vw] rounded-xl bg-green-200' /> 
});

const PostList = dynamic(() => import('@/components/PostList'), {
  ssr: false,
  loading: () => <Skeleton className='w-full h-[10vh] md:h-[16vw] lg:h-[16vw] rounded-xl bg-green-200' /> 
});

const MobileCategories = dynamic(() => import('@/components/MobileCategories'), {
  ssr: false,
  loading: () => <Skeleton className='w-full h-[3vh] rounded-lg bg-green-200' /> 
});

const ShareLinks = dynamic(() => import('@/components/ShareLinks'), {
  ssr: false,
  loading: () => <Skeleton className='w-full h-[3vh] md:h-[8vw] rounded-lg bg-green-200' /> 
});

const Navigate = dynamic(() => import('@/components/navigate'), {
  ssr: false,
  loading: () => <Skeleton className='w-full h-[1vh] md:h-[1vw] rounded-lg bg-green-200' /> 
});


const Page = () => {
  const API_URL_3 = process.env.NEXT_PUBLIC_API_KEY_3
  const [posts,setposts] = useState<Post []>([]);
  axios.defaults.withCredentials = true;

  useEffect(() => {
   const fetchPosts = async () => {
    try {
      const response = await axios.get(`${API_URL_3}/get-all-posts`);
      const data = response.data;
      setposts(data);
    } catch (error) {
      console.log("Error fetching posts:", error);
    }
   }

   fetchPosts();
  }, [API_URL_3]); 

  return (
    <div className="w-full min-h-screen px-[1vh] md:px-[13vw] lg:px-[15vw] pt-[2vh] md:pt-[2vw] lg:p-[2.1vw] flex flex-col gap-[1vh] md:gap[.8vw] lg:gap-[.9vw]">

      <Navigate/>

      {/* Mobiles category */}

      <MobileCategories/>

      {/* Headline */}

      <WebHeadline/>

      <ShareLinks className="md:hidden lg:hidden flex md:flex-col flex-row gap-[1vh] md:gap-[.5vw] items-center md:items-start"/>

      {/* Desktop Category */}

      <DesktopCategories/>

      {/* Featured Post */}

      <FeaturedPost posts={posts} />

      <h4 className="text-[1.8vh] md:text-[1.5vw] lg:text-[1.5vw] font-medium  text-zinc-700">Recent Posts</h4>

      <PostList posts={posts}/>

    </div>
  )
}

export default Page

