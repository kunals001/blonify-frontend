"use client"

import React from 'react'
import { useAuthStore } from '@/store/authStore'
import {  User,Lock, Loader } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { useEffect} from 'react';
import Image from 'next/image';


const Page = () => {
    const {user,isAuthenticated,error,isLoading,logout,updateProfile,checkAuth} = useAuthStore();
    const [name,setName] = useState("");
    const [password,setPassword] = useState("");
    const router = useRouter();

    useEffect(() => {
        if (!isAuthenticated) {
          toast.error("User not authenticated");
          router.push('/');
        }
        
      }, [isAuthenticated,router]);


    const handlelogout = async () => {
        try {
            logout();
            toast.success('Logged out successfully');
            router.push('/');
        } catch (error) {
            console.log(error);
        }
    }


    const handleUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
          await updateProfile({name,password});
          toast.success("Profile updated successfully");
          await checkAuth();
        } catch (error) {
          console.log(error);
          toast.error("Profile update failed");
        }
     };

  return (
    <div className='w-full h-[calc(100vh-5.5vh)] md:h-[calc(100vh-4vw)] lg:h-[calc(100vh-4vw)] px-[1vh] md:px-[13vw] lg:px-[15vw]  flex items-center justify-center'>

        <div className="w-full md:w-[35vw] lg:w-[35vw] p-[1vh] md:p-[1vw] lg:p-[1vw] rounded-xl bg-green-200">
            <h1 className="text-[2.6vh] md:text-[2vw] lg:text-[2vw] font-semibold text-zinc-700 leading-none text-center select-none">Hello, {user?.name}</h1>

            <div className=" pt-[1vh] md:pt-[.7vw] lg:pt-[.7vw]  w-[10vh] h-[10vh] md:w-[6vw] md:h-[6vw] lg:w-[6vw] lg:h-[6vw] relative mx-auto pb-1">

              {user && typeof user.profilePic === 'string' && (
                 <Image
                   src={user.profilePic}
                   alt="User Profile"
                   width={100}
                   height={100}
                   className="rounded-full object-cover"
                 />
               )}
            </div>

            <form onSubmit={handleUpdate} className='flex flex-col w-full mt-[1vh] md:mt-[.8vw] lg:mt-[.8vw]'>
                <div className="relative w-full flex items-center justify-center">
                    <input type="name" placeholder={user?.name} value={name} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)} className='w-full px-[2.8vh] md:px-[2vw] lg:px-[2vw] outline-none py-[1vh] md:py-[.5vw] lg:py-[.5vw] rounded-lg text-[1.3vh] md:text-[1vw] lg:text-[1vw] bg-zinc-100 border-1 border-prime font-second font-medium text-zinc-700 relative' />

                    <User className='absolute text-prime left-0 pl-[.5vh] md:pl-[.5vw] lg:pl-[.5vw] cursor-pointer size-6 md:size-8 lg:size-8'/>
                </div>

                 <div className="relative w-full flex items-center justify-center pt-[.7vh] md:pt-[.5vw] lg:pt-[.5vw]">
                    <input type="password" placeholder={"Set new password"} value={password} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} className='w-full px-[2.8vh] md:px-[2vw] lg:px-[2vw] outline-none py-[1vh] md:py-[.5vw] lg:py-[.5vw] rounded-lg text-[1.3vh] md:text-[1vw] lg:text-[1vw] bg-zinc-100 border-1 border-prime font-second font-medium text-zinc-700 relative' />

                    <Lock className='absolute text-prime left-0 pl-[.5vh] md:pl-[.5vw] lg:pl-[.5vw] cursor-pointer size-6 md:size-8 lg:size-8'/>
                </div>

                {error && <p className='text-sm text-red-500 '>{error}</p>}

                <div className="flex items-center justify-between pt-[1vh] md:pt-[.8vw] lg:pt-[.8vw] px-[1vh] md:px-[.5vw] lg:px-[.5vw]">
                   <button type='submit' className='text-[1.3vh] md:text-[1vw] lg:text-[1vw] font-second font-semibold text-zinc-200 bg-prime px-[1.3vh] md:px-[.5vw] lg:px-[.5vw] cursor-pointer hover:bg-green-600 py-[.8vh] md:py-[.2vw] lg:py-[.2vw] rounded-md'>{isLoading ? <Loader className='animate-spin mx-auto size-5 md:size-6 lg:size-7'/> : 'Update User'}</button>

                    <button onClick={handlelogout} disabled={isLoading} className='text-[1.3vh] md:text-[1vw] lg:text-[1vw] font-second font-semibold text-zinc-200 bg-red-500 px-[1.3vh] md:px-[.5vw] lg:px-[.5vw] cursor-pointer hover:bg-red-600 py-[.8vh] md:py-[.2vw] lg:py-[.2vw] rounded-md'>{isLoading ? <Loader className='animate-spin mx-auto size-5 md:size-6 lg:size-7'/> : 'Logout'}</button>
                </div>
                
            </form>
        </div>

    </div>
  )
}

export default Page