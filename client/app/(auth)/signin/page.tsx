"use client"
import AUTHLAYOUT from "@/components/AuthLayout"
import {motion} from 'framer-motion'
import { useState } from 'react'
import Input from '@/components/Input'
import { Lock, Mail,Loader } from 'lucide-react'
import Link from "next/link"
import { useRouter } from 'next/navigation'
import { useAuthStore } from '@/store/authStore'
import { toast } from 'react-hot-toast'
import GoogleSignin from '@/firebase/GoogleSignin'
import { useEffect } from 'react'


const page = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {signin,isLoading,error,isAuthenticated,checkAuth} = useAuthStore()
    const router = useRouter();


  useEffect(() => {
    if (isAuthenticated) {
      router.replace("/");
    }
  }, [isAuthenticated]);

    const handleSignup = async (e:any) => {
        e.preventDefault()

		try {
			await signin({ email, password});
			toast.success("Signin successful");
			router.push("/")
			await checkAuth();
		} catch (error) {
			console.log(error);
		}
    }
  return (
    <AUTHLAYOUT>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }} className="w-[95vw] rounded-2xl md:w-[30vw] lg:w-[32vw]   backdrop-filter backdrop-blur-xl flex flex-col items-center justify-center bg-gray-700 bg-opacity-30 relative overflow-hidden">

                <div className="relative w-full md:p-[1vw] p-[2vh] lg:p-[1.1vw]">
                    <h2 className='text-[3vh] md:text-[2vw] lg:text-[2vw] select-none mx-auto font-semibold text-center bg-gradient-to-r from-prime to-emerald-500 text-transparent bg-clip-text'>Welcome Back</h2>


                <form onSubmit={handleSignup} className='flex flex-col w-full relative mt-[1vh]'>
                
				<Input
				icon={Mail}
				type='email'
				placeholder='Email Address'
				value={email}
				onChange={(e:any) => setEmail(e.target.value)}
					/>
				<Input
				icon={Lock}
				type='password'
				placeholder='Password'
				value={password}
				onChange={(e:any) => setPassword(e.target.value)}
					/>

				<Link href={'/forgot-password'}><p className="text-sm text-gray-400 mt-2">Forgot password?</p></Link>

                {error && <p className='text-red-500 font-semibold mt-2'>{error}</p>}

                <motion.button 
                className='mt-5 w-full py-3 px-4 bg-gradient-to-r  from-green-500 to-emerald-600 text-white font-bold rounded-lg shadow-lg hover:from-green-600hover:to-emerald-700 outline-none focus:ring-2 focus:ring-green-500  transition duration-200 cursor-pointer'
                    whileHover={{ scale: 1.003 }}
					whileTap={{ scale: 0.98 }}
					type='submit'
					disabled={isLoading}
                >
					{isLoading ? <Loader className='animate-spin w-6 h-6 mx-auto' /> : "Sign In"}
				</motion.button>

                <GoogleSignin/>
                </form>
                </div>

                <div className='px-8 py-4 bg-gray-900 bg-opacity-50 flex justify-center w-full'>
				<p className='text-sm text-gray-400'>
                    Don't have an account{" "}
					<Link href={"/signup"} className='text-green-400 hover:underline'>
						Sign up
					</Link>
				</p>
			</div>

        </motion.div>
    </AUTHLAYOUT>
  )
}

export default page