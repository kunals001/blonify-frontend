import React from 'react'
import { useAuthStore } from '@/store/authStore'
import axios from 'axios';
import {toast} from 'react-hot-toast'
import Image from 'next/image'

interface User {
  profilePic: string
  name: string
  isAdmin?: boolean
}

interface CommentType {
  _id: string
  user: User
  createdAt?: string
  content: string
}

interface CommentProps {
  comment: CommentType
}


const Comment = ({ comment }: CommentProps) => {
  const API_URL_4 = process.env.NEXT_PUBLIC_API_KEY_4;
  const { user } = useAuthStore();

  const handleDelete = async (commentId:string) => {
    try {
     const response = await axios.delete(`${API_URL_4}/delete-comment/${commentId}`);

     if(response.status === 200){
        toast.success("Comment deleted successfully")
     }else{
        toast.error("Failed to delete comment")
     }
     
    } catch (error) {
      console.log("Delete error:", error);
    }
  };

  return (
    <div className='w-full px-[.5vh] md:px-[.5vw] lg:px-[.5vw] py-[1vh] md:py-[.5vw] lg:py-[.5vw] rounded-xl bg-zinc-100 mt-[1vh]'>
      <div className="flex gap-[.5vh] md:gap-[.5vw] lg:gap-[.6vw] items-center text-center">
        <Image
          src={comment?.user?.profilePic}
          alt="profile pic"
          width={30}
          height={30}
          className="w-[2.8vh] md:w-[2vw] lg:w-[2vw] h-[2.8vh] md:h-[2vw] lg:h-[2vw] rounded-full object-cover"
        />

        <p className='text-[1vh] md:text-[.7vw] lg:text-[.7vw] text-zinc-800 font-second text-center'>
          @{comment?.user?.name}
        </p>

        {user?.isAdmin === true && (
          <button
            onClick={() => handleDelete(comment._id)}
            className='text-red-500 cursor-pointer text-[1.3vh]'
          >
            Delete
          </button>
        )}

        <p className='text-[.9vh] md:text-[.7vw] lg:text-[.7vw] text-zinc-500 font-second text-center'>
          {comment?.createdAt ? new Date(comment.createdAt).toLocaleDateString() : 'Unknown'}
        </p>
      </div>

      <p className='text-[1.5vh] md:text-[1vw] lg:text-[1vw] text-zinc-800 font-second pl-[3.5vh] md:pl-[3vw] leading-none'>
        {comment.content}
      </p>
    </div>
  );
};

export default Comment