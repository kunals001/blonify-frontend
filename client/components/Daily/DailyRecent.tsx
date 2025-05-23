"use client"
import React, { useEffect, useState } from 'react'
import DailyRecentPost from './DailyRecentPost'
import Pagination from "../Pagination";

const DailyRecent = ({posts}: {posts: any}) => {

  // Filter first
  const filteredPosts = posts.filter((post: any) => post.isdaily);

  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;

  // Calculate total pages based on filtered posts length
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  // Slice filtered posts for current page
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  // Scroll to top whenever page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className='mt-[2vh] md:mt-[1vw] lg:mt-[1vw] overflow-hidden'>

      <div className="flex gap-[1vh] md:h-[5vh] lg:h-[5vh] h-[3vh] "> 
          <div className='bg-prime h-full md:w-[2vh] w-[1vh] rounded-md'></div>
           <h1 className='text-[2vh] md:text-[1.5vw] lg:text-[1.5vw] font-semibold text-zinc-600 '> Recent Article</h1> 
      </div>

      {filteredPosts.length > 0 ? (
        <div className="flex flex-col gap-[1vh]">
          <div className="mt-[1vh] md:mt-[1vw] lg:mt-[1vw] flex flex-col gap-[1vh] md:gap-[.5vw] lg:gap-[.6vw]">
              {currentPosts.map((post: any, index: number) => (
                  <DailyRecentPost key={index} post={post} />
              ))}
          </div>

          {filteredPosts.length > postsPerPage && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          )}
        </div>
      ) : (
         <h1>No recent article</h1>
      )}
      
    </div>
  )
}

export default DailyRecent
