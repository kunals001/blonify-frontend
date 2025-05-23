"use client"
import DailyRecent from "@/components/Daily/DailyRecent"
import DailyTrending from "@/components/Daily/DailyTrending"
import NavigationBreadcrumb from "@/components/navigate";
import axios from "axios";
import { useEffect, useState } from "react"

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
  ismobile?: boolean | null;
  islaptop?: boolean | null;
  isdaily?: boolean | null;
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
    <div className='w-full flex flex-col min-h-screen px-[1vh] md:px-[13vw] lg:px-[15vw] pt-[1vh] md:pt-[1.5vw] lg:pt-[1.6vw]'>
      <NavigationBreadcrumb/>

       <DailyTrending posts={posts} />

       <DailyRecent posts={posts}/>
    </div>
  )
}

export default page