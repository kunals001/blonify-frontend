import React, { useEffect, useState } from 'react';
import ProtectedAdminRoute from '../AdminProtect';
import { useAuthStore } from '@/store/authStore';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import Link from 'next/link';
import toast from 'react-hot-toast';
import axios from 'axios';

interface Comment {
  _id: string;
  content: string;
  createdAt: string;
  updatedAt?: string;
  postId: string;
  user: {
    name: string;
    email: string;
    profilePic: string;
  };
  post?: {
    title: string;
    slug: string;
  };
}

const DashComments = () => {
  const { user } = useAuthStore();
  const [comments, setComments] = useState<Comment[]>([]);
  const API_URL_4 = process.env.NEXT_PUBLIC_API_KEY_4;

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get(`${API_URL_4}/get-all-comments`);
        setComments(response.data || []);
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    }

    if (user?.isAdmin) {
      fetchComments();
    }
  }, [user?._id]);

  const handleDelete = async (commentId: string) => {
    try {
      await axios.delete(`${API_URL_4}/delete-comment/${commentId}`);
      toast.success("Comment deleted successfully");
      setComments((prev) => prev.filter((comment) => comment._id !== commentId));
    } catch (error) {
      console.error("Error deleting comment:", error);
    }
  };

  return (
    <ProtectedAdminRoute>
      {user?.isAdmin && comments.length > 0 ? (
        <Table className='w-full'>
          <TableCaption>A list of all comments</TableCaption>
          <TableHeader>
            <TableRow className='text-[2.5vh] cursor-pointer'>
              <TableHead className="w-[120px]">Date</TableHead>
              <TableHead>Image</TableHead>
              <TableHead>Post Title</TableHead>
              <TableHead>Comment</TableHead>
              <TableHead className="text-right">Delete</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className='text-[2vh] cursor-pointer'>
            {comments.map((comment) => (
              <TableRow key={comment._id} className='hover:bg-green-200'>
                <TableCell className="text-gray-600">{comment.updatedAt ? new Date(comment.updatedAt).toLocaleDateString() : "N/A"}</TableCell>
                <TableCell>
                    <img
                      src={comment.user?.profilePic || "/placeholder.jpg"}
                      alt={"user image"}
                      className='w-20 h-20 rounded-full object-cover bg-gray-300'
                    />
                </TableCell>
                <TableCell className="font-medium text-prime hover:underline">
                  <Link href={`/article/${comment.post?.slug || ""}`}>
                    {comment.post?.title || "Untitled Post"}
                  </Link>
                </TableCell>
                <TableCell>{comment.content || "N/A"}</TableCell>
                <TableCell className="text-right">
                  <AlertDialog>
                    <AlertDialogTrigger className='text-white bg-red-500 px-3 rounded-md py-1 cursor-pointer'>
                      Delete
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                        <AlertDialogDescription>
                          This action cannot be undone. This will permanently delete this comment.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction onClick={() => handleDelete(comment._id)}>Delete</AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </TableCell>
                <TableCell className="text-right">
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        <p className='text-[2vh] md:text-[1.5vw] lg:text-[1.5vw] select-none mx-auto font-semibold text-zinc-800'>
          No comments found
        </p>
      )}
    </ProtectedAdminRoute>
  )
}

export default DashComments;
