import React, { useEffect } from 'react';
import ProtectedAdminRoute from '../AdminProtect';
import { usePostStore } from '@/store/postStore';
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


const DashPosts = () => {
  const { posts, getPosts, getMorePosts, showMore, isLoading,deletePost } = usePostStore();
  const { user } = useAuthStore();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        await getPosts();
      } catch (error) {
        console.log("❌ Error fetching posts:", error);
      }
    };

    if (user?.isAdmin) {
      fetchPosts();
    }
  }, [user?._id]);

  const handleDelete = async (postId: string) => {
  try {
    await deletePost(postId);
    toast.success("Post deleted successfully");
  } catch (err) {
    alert("Failed to delete post");
  }
  };

  return (
    <ProtectedAdminRoute>
      {user?.isAdmin && posts.length > 0 ? (
        < >
          <Table className='w-full'>
            <TableCaption>A list of your posts</TableCaption>
              <TableHeader >
                <TableRow className='text-[2.5vh] cursor-pointer'>
                  <TableHead className="w-[100px]">Date</TableHead>
                  <TableHead>Image</TableHead>
                  <TableHead>Title</TableHead>
                  <TableHead >Category</TableHead>
                  <TableHead className="text-right">Delete</TableHead>
                  <TableHead className="text-right">Edit</TableHead>
                </TableRow>
              </TableHeader>
            <TableBody className='text-[2vh] cursor-pointer'>
            {posts.map((post) => (
              
                <TableRow key={post._id} className='hover:bg-green-200'>
                  <TableCell className="font-medium text-gray-600 hover:underline">{post.updatedAt ? new Date(post.updatedAt).toLocaleDateString() : "N/A"}</TableCell>
                  <TableCell>
                    <Link href={`/article/${post.slug}`}><img src={post?.coverImg as string} alt={post?.altText as string} className='w25 h-15 rounded-md object-cover bg-gray-500'/></Link>

                  </TableCell>
                  <TableCell className="font-medium hover:underline hover:text-gray-700 text-prime"><Link href={`/article/${post.slug}`}>{post.title}</Link></TableCell>

                  <TableCell className="font-medium hover:underline hover:text-gray-700">{post.category}</TableCell>

                  <TableCell className="text-right">
                    <AlertDialog>
                      <AlertDialogTrigger className='text-white bg-red-500 px-[1vh] rounded-md py-[.3vw] cursor-pointer'>
                        Delete
                      </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                            <AlertDialogDescription>
                            This action cannot be undone. This will permanently delete your post.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction onClick={() => handleDelete(post._id)}>Delete</AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                  </TableCell>

                  <TableCell className="text-right">
                    <button className='text-white bg-prime px-[1vh] rounded-md py-[.3vw] cursor-pointer'><Link href={`/update-post/${post._id}`}>Edit</Link></button>
                  </TableCell>

                </TableRow>
              
            ))}
            </TableBody>
         </Table>
        </>
      ) : (
        <p className='text-[2vh] md:text-[1.5vw] lg:text-[1.5vw] select-none mx-auto font-semibold text-zinc-800 '>No posts found</p>
      )}

      {showMore && (
        <div className="flex justify-center mt-[1vh] md:mt-[.5vw] lg:mt-[.5vw]">
          <button onClick={getMorePosts} disabled={isLoading} className='text-white bg-prime px-[1vh] rounded-md py-[.3vw] cursor-pointer'>{isLoading ? "Loading..." : "Load More"}</button>
        </div>
      )}
    </ProtectedAdminRoute>
  );
};

export default DashPosts;
