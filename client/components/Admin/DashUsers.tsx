import React, { useEffect } from 'react';
import ProtectedAdminRoute from '../AdminProtect';
import { useAuthStore } from '@/store/authStore';
import { toast } from 'react-hot-toast';

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

const DashPosts = () => {
  const {
    getUsers,
    userData,
    isLoading,
    error,
    showMore,
    getMoreUsers,
    user,
    deleteUser
  } = useAuthStore();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        await getUsers();
      } catch (error) {
        console.error("❌ Error fetching users:", error);
      }
    };

    if (user?.isAdmin) {
      fetchUsers();
    }
  }, [user?._id]);

  const handleDelete = async (userId: string) => {
  try {
    await deleteUser(userId);
    toast.success("User deleted successfully");
  } catch (error) {
    console.error("❌ Error deleting user:", error);
    toast.error("Failed to delete user");
  }
};

  return (
    <ProtectedAdminRoute>
      {user?.isAdmin && Array.isArray(userData) && userData.length > 0 && userData.length > 0 ? (
        <>
          <Table className='w-full'>
            <TableCaption>A list of all users</TableCaption>
            <TableHeader>
              <TableRow className='text-[2.5vh] cursor-pointer'>
                <TableHead className="w-[100px]">Date</TableHead>
                <TableHead>Image</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Admin</TableHead>
                <TableHead className="text-right">Delete</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className='text-[2vh] cursor-pointer'>
              {userData.map((userItem: any) => (
                <TableRow key={userItem._id} className='hover:bg-green-200'>
                  <TableCell className="font-medium text-gray-600 hover:underline">
                    {userItem.updatedAt ? new Date(userItem.updatedAt).toLocaleDateString() : "N/A"}
                  </TableCell>

                  <TableCell>
                    <img
                      src={userItem.profilePic}
                      alt="profile"
                      className='w-8 h-8 rounded-full object-cover bg-gray-500'
                    />
                  </TableCell>

                  <TableCell className="font-medium hover:underline hover:text-gray-700 text-prime">
                    {userItem.name}
                  </TableCell>

                  <TableCell className="font-medium hover:underline hover:text-gray-700">
                    {userItem.isAdmin ? "Yes" : "No"}
                  </TableCell>

                  <TableCell className="text-right">
                    <AlertDialog>
                      <AlertDialogTrigger className='text-white bg-red-500 px-[1vh] rounded-md py-[.3vw] cursor-pointer'>
                        Delete
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                          <AlertDialogDescription>
                            This action cannot be undone. This will permanently delete the user.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction onClick={() => handleDelete(userItem._id)} >Delete</AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </>
      ) : (
        <p className='text-[2vh] md:text-[1.5vw] lg:text-[1.5vw] select-none mx-auto font-semibold text-zinc-800'>
          No users found
        </p>
      )}

      {error && (
        <p className='text-[2vh] md:text-[1.5vw] lg:text-[1.5vw] select-none mx-auto font-semibold text-red-500'>
          {error}
        </p>
      )}

      {showMore && (
        <div className="flex justify-center mt-[1vh] md:mt-[.5vw] lg:mt-[.5vw]">
          <button
            onClick={getMoreUsers}
            disabled={isLoading}
            className='text-white bg-prime px-[1vh] rounded-md py-[.3vw] cursor-pointer'
          >
            {isLoading ? "Loading..." : "Load More"}
          </button>
        </div>
      )}
    </ProtectedAdminRoute>
  );
};

export default DashPosts;
