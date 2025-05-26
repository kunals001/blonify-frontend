import React from 'react'
import type{Post} from "@/app/page"

const PostDate = ({post}:{post:Post}) => {

  return (
      <div className="text-[1vh] md:text-[1.1vw] lg:text-[1.1vw] md:pb-[.3vw] pt-[.2vh] md:pt-[.5vw] items-cente text-zinc-800">
        <p >Written by <span className='text-zinc-900'>Kunal Singh </span>on 
        <span > {post?.createdAt ? new Date(post.createdAt).toLocaleDateString() : 'Unknown'}</span>
        </p>
     </div>
  )
}

export default PostDate