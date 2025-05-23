"use client"
import { useAuthStore } from "@/store/authStore"
import AUTHLAYOUTS from '@/components/AuthLayout';
import { motion } from 'framer-motion'
import { useState } from 'react'
import Input from '@/components/Input';
import {  Mail } from 'lucide-react';
import {toast} from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

const page = () => {
    const [code ,setCode] = useState("")
    const {verifyEmail,isLoading,error,isAuthenticated,checkAuth} = useAuthStore()
    const router = useRouter();

   
  useEffect(() => {
    if (isAuthenticated) {
      router.replace("/");
    }
  }, [isAuthenticated]);

    const handleSubmit = async (e:any) => {
        e.preventDefault()

        try {
            await verifyEmail({code});
            toast.success("Verify successful");
            router.push("/")
            await checkAuth();
        } catch (error) {
           console.log(error);
           toast.error("Verify failed");
        }
    }
  return (
    <AUTHLAYOUTS>
        <motion.div 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-[95vw] rounded-2xl md:w-[30vw] lg:w-[32vw]   backdrop-filter backdrop-blur-xl flex flex-col items-center justify-center bg-gray-700 bg-opacity-30 relative overflow-hidden">
            <div className="relative w-full md:p-[1vw] p-[2vh] lg:p-[1.1vw]">
                <h1 className="text-[3vh] md:text-[2vw] lg:text-[2vw] select-none mx-auto font-semibold text-center bg-gradient-to-r from-prime to-emerald-500 text-transparent bg-clip-text">Verify Your Email</h1>

                <form onSubmit={handleSubmit} className='flex flex-col w-full relative mt-[1vh]'>
                <Input
				icon={Mail}
				type='text'
				placeholder='Enter your code'
				value={code}
				onChange={(e:any) => setCode(e.target.value)}
					/>

                {error && <p className='text-red-500 font-semibold mt-2'>{error}</p>}

                <motion.button
				whileHover={{ scale: 1.003 }}
				whileTap={{ scale: 0.95 }}
				type='submit'
				disabled={isLoading}
				className='w-full bg-gradient-to-r from-prime to-emerald-600 text-white font-bold py-3 px-4 rounded-lg shadow-lg hover:from-green-600 hover:to-emerald-70 focus:ring-2 focus:ring-green-50 focus:ring-opacity-50 disabled:opacity-50 cursor-pointer'
					>
						{isLoading ? "Verifying..." : "Verify Email"}
					</motion.button>
                </form>
            </div>
        </motion.div>
    </AUTHLAYOUTS>
  )
}

export default page