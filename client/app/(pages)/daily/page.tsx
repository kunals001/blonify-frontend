"use client";

import DailyRecent from "@/components/Daily/DailyRecent";
import DailyTrending from "@/components/Daily/DailyTrending";
import axios from "axios";
import { useEffect, useState } from "react";
import dynamic from 'next/dynamic'

const NavigationBreadcrumb = dynamic(() => import('@/components/navigate'), { ssr: false })

export type Post = {
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

const Page = () => {
  const [posts, setposts] = useState<Post[]>([]);
  const API_URL_3 = process.env.NEXT_PUBLIC_API_KEY_3;
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
    };

    fetchPosts();
  }, [API_URL_3]); // add API_URL_3 to dependencies to fix warning

  return (
    <div className="w-full flex flex-col min-h-screen px-[1vh] md:px-[13vw] lg:px-[15vw] pt-[1vh] md:pt-[1.5vw] lg:pt-[1.6vw]">
      <NavigationBreadcrumb />

      <DailyTrending posts={posts} />

      <DailyRecent posts={posts} />
    </div>
  );
};

export default Page;
