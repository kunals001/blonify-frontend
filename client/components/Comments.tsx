"use client"
import React, { useState,useEffect } from 'react'
import { SendHorizontal } from 'lucide-react'
import Comment from './Comment'
import axios from 'axios'
import { useAuthStore } from '@/store/authStore'
import { toast } from 'react-hot-toast'



const Comments = ({postId}:any) => {
  const [content,setContent] = useState<string>("")
  const [comment,setComment] = useState<any>([])

  const {user} = useAuthStore()

  const API_URL_4 = process.env.NEXT_PUBLIC_API_KEY_4

  const handleSubmit = async (e:any) => {
    e.preventDefault()

    try {
       const response = await axios.post(`${API_URL_4}/send`, {
         content,
         postId,
         userId: user?._id
       });

       toast.success("Comment post successfully")
       if (response.status === 200) {
         setContent("");
       }
     } catch (error:any) {
       // Console me error dikhao
       console.error("Error from backend:", error);

       if (error.response && error.response.data && error.response.data.message) {
         alert(error.response.data.message); 
       } else {
         alert("You are not logged in.");
       }
     }
  }

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get(`${API_URL_4}/get-comments/${postId}`);
        const data = response.data;
        setComment(data);
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };

    fetchComments();
  },[postId])


  return (
    <div className='flex flex-col gap-[1vh] md:gap-[.5vw] lg:gap-[.5vw]  px-[.5vh] md:px-[.5vw] lg:px-[.5vw] py-[1vh] md:py-[.5vw] lg:py-[.5vw]'>
      <form onSubmit={handleSubmit} className="flex relative flex-col" >
          <p className='text-[1.7vh] md:text-[1.5vw] lg:text-[1.5vw] font-second font-semibold bg-gradient-to-r from-prime to-emerald-500 text-transparent bg-clip-text'>Comments</p>

          <textarea name='content' value={content} onChange={(e) => setContent(e.target.value)} maxLength={300} placeholder='Write a comment' className='relative w-full text-[1.3vh] md:text-[1.1vw] lg:text-[1.2vw] font-second font-medium text-zinc-700 py-[.5vh] md:py-[.3vw] lg:py-[.3vw] bg-zinc-100 rounded-xl h-[6vh] md:h-[3.8vw] lg:h-[4.2vw] border-1 border-prime outline-none px-[1vh] md:px-[1vw] lg:px-[1vw] resize-none'/>

          <button type='submit' className='hover:cursor-pointer'><SendHorizontal className='absolute text-[1vh] md:text-[1vw] lg:text-[1vw] bottom-[1.4vh] right-[1vh] md:bottom-[1vw] md:right-[1vw] lg:bottom-[1.5vw] lg:right-[1.5vw] text-white px-[.5vh] py-[.2vh] rounded-sm bg-prime size-6 md:size-7 cursor-pointer'/></button>
      </form>

      {comment.length === 0 ?(
        <p className='text-[1.3vh] md:text-[1.1vw] lg:text-[1.2vw] font-second font-medium text-zinc-700 py-[1vh] md:py-[.5vw] lg:py-[.5vw]'>No comments yet</p>
      ) : (
        <div>
          {comment.slice(0, 10).map((comment: any) => (
            <Comment key={comment._id} comment={comment} />
          ))}
        </div>
      ) }
        
    </div>
  )
}

export default Comments