"use client"
import BestMobiles from '@/components/Mobile/BestMobiles'
import IsMobile from '@/components/Mobile/IsMobile'
import NavigationBreadcrumb from '@/components/navigate';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

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

const POSTS_PER_PAGE = 10;

const page = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const API_URL_3 = process.env.NEXT_PUBLIC_API_KEY_3;

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(`${API_URL_3}/get-all-posts`);
        setPosts(response.data);
      } catch (error) {
        console.log("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  // Filter posts for mobiles only
  const filteredPosts = posts.filter(post => post.ismobile);

  // Pagination calculations
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const indexOfLastPost = currentPage * POSTS_PER_PAGE;
  const indexOfFirstPost = indexOfLastPost - POSTS_PER_PAGE;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className='w-full flex flex-col min-h-screen px-[1vh] md:px-[13vw] lg:px-[15vw] pt-[1vh] md:pt-[1.5vw] lg:pt-[1.6vw]'>

      <NavigationBreadcrumb />

      <IsMobile posts={posts} />

      <div className='mt-[2vh] md:mt-[1vw] lg:mt-[1vw] overflow-hidden'>
        <div className="flex gap-[1vh] md:h-[5vh] lg:h-[5vh] h-[3vh] ">
          <div className='bg-prime h-full md:w-[2vh] w-[1vh] rounded-md'></div>
          <h1 className='text-[2vh] md:text-[1.5vw] lg:text-[1.5vw] font-semibold text-zinc-600 '>Best Mobiles</h1>
        </div>

        {filteredPosts.length > 0 ? (
          <>
            <div className="mt-[1vh] md:mt-[1vw] lg:mt-[1vw] flex flex-col gap-[1vh] md:gap-[.5vw] lg:gap-[.6vw]">
              {currentPosts.map((post, index) => (
                <BestMobiles key={post._id || index} post={post} />
              ))}
            </div>

            {/* Pagination buttons */}
            {totalPages > 1 && (
              <div className="flex justify-center gap-3 mt-4">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className={`px-3 py-1 rounded ${currentPage === 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 text-white hover:bg-blue-600'}`}
                >
                  Previous
                </button>

                <span className="flex items-center px-3">
                  Page {currentPage} of {totalPages}
                </span>

                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className={`px-3 py-1 rounded ${currentPage === totalPages ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 text-white hover:bg-blue-600'}`}
                >
                  Next
                </button>
              </div>
            )}
          </>
        ) : (
          <h1>No recent article</h1>
        )}

      </div>
    </div>
  )
}

export default page;
