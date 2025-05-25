"use client"
import DesktopCategories from "@/components/DesktopCategories"
import { useEffect, useState } from "react"
import axios from "axios"
import FeaturedPost from "@/components/FeaturedPost"
import PostList from "@/components/PostList"
import MobileCategories from "@/components/MobileCategories"
import ShareLinks from "@/components/ShareLinks"
import Navigate from "@/components/navigate"
import dynamic from 'next/dynamic';

const WebHeadline = dynamic(() => import('@/components/WebHeadline'), {
  loading: () => <p>Loading...</p>,
  ssr: true,
});


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
    <>
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
    </>
  )
}

export default Page

