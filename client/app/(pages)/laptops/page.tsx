"use client"
import IsLaptop from '@/components/Laptop/IsLaptop'
import Recent from '@/components/Laptop/Recent'
import React, { useEffect, useState } from 'react'
import axios from "axios"
import NavigationBreadcrumb from '@/components/navigate'

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

  const [posts, setposts] = useState<Post[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;
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

  // Filter laptop posts
  const filteredPosts = posts.filter(post => post.islaptop);

  // Calculate total pages based on filtered posts
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  // Slice posts for current page
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  }

  return (
    <div className='w-full flex flex-col min-h-screen px-[1vh] md:px-[13vw] lg:px-[15vw] pt-[1vh] md:pt-[1.5vw] lg:pt-[1.6vw]'>

      <NavigationBreadcrumb />

      <IsLaptop posts={posts} />

      <div className='mt-[2vh] md:mt-[1vw] lg:mt-[1vw] overflow-hidden'>

        <div className="flex gap-[1vh] md:h-[5vh] lg:h-[5vh] h-[3vh] "> 
          <div className='bg-prime h-full md:w-[2vh] w-[1vh] rounded-md'></div>
          <h1 className='text-[2vh] md:text-[1.5vw] lg:text-[1.5vw] font-semibold text-zinc-600 '>Recent Post</h1> 
        </div>

        {filteredPosts.length > 0 ? (
          <div className="mt-[1vh] md:mt-[1vw] lg:mt-[1vw] flex flex-col gap-[1vh] md:gap-[.5vw] lg:gap-[.6vw]">
            {currentPosts.map((post, index) => (
              <Recent key={index} post={post} />
            ))}
          </div>
        ) : (
          <h1>No recent article</h1>
        )}

        {/* Pagination */}
        {filteredPosts.length > postsPerPage && (
          <div className="flex justify-center items-center gap-4 mt-4">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`px-3 py-1 rounded ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'bg-prime text-white'}`}
            >
              Previous
            </button>

            <span>
              Page {currentPage} of {totalPages}
            </span>

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`px-3 py-1 rounded ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'bg-prime text-white'}`}
            >
              Next
            </button>
          </div>
        )}

      </div>
    </div>
  )
}

export default page
