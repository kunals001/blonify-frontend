import React from 'react'
import { DateTime } from 'luxon';
import type{Post} from "@/app/page"

const Date = ({post}:{post:Post}) => {
    const formattedTimeAgo = post?.createdAt
  ? (typeof post.createdAt === 'string'
      ? DateTime.fromISO(post.createdAt).toRelative({ locale: 'en' })
      : DateTime.fromMillis(post.createdAt).toRelative({ locale: 'en' }))
  : 'Unknown';
  return (
      <div className="text-[1vh] md:text-[1.1vw] lg:text-[1.1vw] md:pb-[.3vw] pt-[.2vh] md:pt-[.5vw] items-cente text-zinc-800">
        <p className=''>Written by <span className='text-zinc-900'>Kunal Singh </span>on 
        <span className=''> {formattedTimeAgo}</span>
        </p>
     </div>
  )
}

export default Date