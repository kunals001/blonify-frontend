"use client"
import FeaturedPost from "@/components/FeaturedPost"
import PostList from "@/components/PostList"
import DesktopCategories from "@/components/DesktopCategories"
import WebHeadline from "@/components/WebHeadline"
import MobileCategories from "@/components/MobileCategories"
import Navigate from "@/components/navigate"
import ShareLinks from "@/components/ShareLinks"
import { useEffect, useState } from "react"
import axios from "axios"

type Post = {
  coverImg: string | File | null;
  title: string;
  slug: string | null;
  desc: string | null;
  content: string;
  category: string | null;
  isFeatured: boolean | null;
  altText: string | null;
  _id: string;
  createdAt?: string | number | null;
  updatedAt?: string | number | null;
};



const page = () => {
  const [posts,setposts] = useState<Post []>([]);
  const API_URL_3 = process.env.NEXT_PUBLIC_API_KEY_3

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
  }, []); 

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

export default page

