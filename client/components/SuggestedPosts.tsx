"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import ShareLinks from "./ShareLinks";

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

const SuggestedPosts = ({ post }: { post: Post }) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [suggested, setSuggested] = useState<Post[]>([]);
  const API_URL_3 = process.env.NEXT_PUBLIC_API_KEY_3;

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(`${API_URL_3}/get-all-posts`);
        const data = response.data;

        setPosts(data);

        let filtered: Post[] = [];

        if (post.ismobile) {
          filtered = data.filter((p: Post) => p.ismobile && p._id !== post._id);
        } else if (post.islaptop) {
          filtered = data.filter((p: Post) => p.islaptop && p._id !== post._id);
        } else {
          filtered = data.filter((p: Post) => p.isdaily && p._id !== post._id);
        }

        setSuggested(filtered.slice(0, 6)); // ✅ Limit to 6 suggestions
      } catch (error) {
        console.log("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, [post]);

  return (
    <div className="mt-[2vh] md:mt-[5vw] lg:mt-[6vw]">
      <h2 className="text-xl font-semibold mb-4">Suggested Posts</h2>
      <div className="grid grid-cols-1 lg:grid-rows-1 gap-1 md:gap-3">
        {suggested.map((item) => (
          <Link
            href={`/article/${item.slug}`}
            key={item._id}
            className=" p-3 rounded hover:shadow-md transition flex gap-[1vh] md:gap-[.5vw]"
          >
            <img
              src={
                typeof item.coverImg === "string" ? item.coverImg : "/placeholder.jpg"
              }
              alt={item.altText || item.title || "Suggested post"}
              className="w-[16vh] h-[10vh] md:w-[10vw] md:h-[6vw] object-cover rounded"
            />
            <div className="">
            <h3 className="text-lg font-bold mt-1">{item.title}</h3>
            <p className="text-sm text-gray-600">{item.desc?.slice(0, 70)}...</p></div>
          </Link>
        ))}
      </div>

      <ShareLinks className='hidden md:flex md:flex-col flex-row gap-[1vh] md:gap-[.5vw] items-center md:items-start ml-[1vw]'/>
    </div>
  );
};

export default SuggestedPosts;
