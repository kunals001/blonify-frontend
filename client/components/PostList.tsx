"use client"
import React, { useEffect, useState } from 'react'
import PostListItems from './PostListItems'
import ShareLinks from './ShareLinks'
import Pagination from "./Pagination"; // import karo

const PostList = ({ posts }: { posts: any[] }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;

  const totalPages = Math.ceil(posts.length / postsPerPage);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Scroll to top whenever currentPage changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className='flex gap-[1vw] relative'>

      {posts.length > 0 ? (
        <div className='flex flex-col gap-[1vh]'>
          <div className="flex flex-col gap-2">
            {currentPosts.map((post) => (
              <PostListItems key={post._id || post.slug} post={post} />
            ))}
          </div>

          {totalPages > 1 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          )}
        </div>
      ) : (
        <h1>No Post Found</h1>
      )}

      <div className="w-1/6 hidden md:flex lg:flex p-[.5vw] flex-col gap-[.5vw] h-[30vw] sticky top-15">
        <ShareLinks />
      </div>
    </div>
  )
}

export default PostList;
