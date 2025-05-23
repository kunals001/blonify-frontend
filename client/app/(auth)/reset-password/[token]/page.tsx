"use client"
import React, { useState, useEffect } from 'react'
import AUTHLAYOUT from '@/components/AuthLayout';
import { motion } from 'framer-motion'
import Input from '@/components/Input'
import { Lock, Loader } from 'lucide-react';
import { toast } from 'react-hot-toast'
import { useAuthStore } from '@/store/authStore'
import { useRouter, useParams } from 'next/navigation'

const Page = () => {
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("");
    const { resetPassword, error, isLoading, isAuthenticated } = useAuthStore();
    const router = useRouter();
    const params = useParams();
    const token = params.token as string;

    useEffect(() => {
      if (isAuthenticated) {
        router.replace("/");
      }
    }, [isAuthenticated, router]);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (password !== confirmpassword) {
            alert("Passwords do not match");
            return;
        }
        
        try {
            await resetPassword({ token, password });
            toast.success("Password reset successfully");
            router.push("/signin");
        } catch (error) {
            console.log(error);
            toast.error("Reset password failed");
        }
    }

    return (
      <AUTHLAYOUT>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }} className="w-[95vw] rounded-2xl md:w-[30vw] lg:w-[32vw] backdrop-filter backdrop-blur-xl flex flex-col items-center justify-center bg-gray-700 bg-opacity-30 relative overflow-hidden">

            <div className="relative w-full md:p-[1vw] p-[2vh] lg:p-[1.1vw]">
                <h2 className='text-[3vh] md:text-[2vw] lg:text-[2vw] select-none mx-auto font-semibold text-center bg-gradient-to-r from-prime to-emerald-500 text-transparent bg-clip-text'>Reset Password</h2>

                <form onSubmit={handleSubmit} className='flex flex-col w-full relative mt-[1vh]'>
                    <Input
                      icon={Lock}
                      type='password'
                      placeholder='Password'
                      value={password}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                    />

                    <Input
                      icon={Lock}
                      type='password'
                      placeholder='Confirm Password'
                      value={confirmpassword}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setConfirmPassword(e.target.value)}
                    />

                    {error && <p className='text-red-500 font-semibold mt-2'>{error}</p>}

                    <motion.button 
                      className='mt-5 w-full py-3 px-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-lg shadow-lg hover:from-green-600 hover:to-emerald-700 outline-none focus:ring-2 focus:ring-green-500 transition duration-200 cursor-pointer'
                      whileHover={{ scale: 1.003 }}
                      whileTap={{ scale: 0.98 }}
                      type='submit'
                      disabled={isLoading}
                    >
                      {isLoading ? <Loader className='animate-spin w-6 h-6 mx-auto' /> : "Reset Password"}
                    </motion.button>
                </form>
            </div>

        </motion.div>
      </AUTHLAYOUT>
    )
}

export default Page;
