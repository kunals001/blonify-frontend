"use client"

import { useState, useEffect } from 'react'
import Input from '@/components/Input'
import { Mail, ArrowLeft } from 'lucide-react';
import { toast } from 'react-hot-toast'
import { useAuthStore } from '@/store/authStore'
import Link from 'next/link';
import { useRouter } from 'next/navigation'
import dynamic from 'next/dynamic';

const AUTHLAYOUTS = dynamic(() => import('@/components/AuthLayout'), {
  ssr: false, 
  loading: () => <p>Loading animation...</p>,
});

const Page = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { forgotPassword, error, isLoading, isAuthenticated } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated) {
      router.replace("/");
    }
  }, [isAuthenticated, router]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await forgotPassword({ email });
      toast.success("Reset link sent to your email");
      setIsSubmitted(true);
    } catch (error) {
      console.error(error);
      toast.error("Forgot password failed");
    }
  };

  return (
    <AUTHLAYOUTS>
      <div
        className="w-[95vw] rounded-2xl md:w-[30vw] lg:w-[32vw] backdrop-filter backdrop-blur-xl flex flex-col items-center justify-center bg-gray-700 bg-opacity-30 relative overflow-hidden"
      >
        <div className="relative w-full md:p-[1vw] p-[2vh] lg:p-[1.1vw]">
          <h1 className="text-[3vh] md:text-[2vw] lg:text-[2vw] select-none mx-auto font-semibold text-center bg-gradient-to-r from-prime to-emerald-500 text-transparent bg-clip-text">
            Forgot Password
          </h1>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col w-full relative mt-[1vh]">

              <Input
                icon={Mail}
                type="email"
                placeholder="Enter your Email"
                value={email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
              />

              {error && <p className="text-red-500 font-semibold mt-2">{error}</p>}

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-prime to-emerald-600 text-white font-bold py-3 px-4 rounded-lg shadow-lg hover:from-green-600 hover:to-emerald-70 focus:ring-2 focus:ring-green-50 focus:ring-opacity-50 disabled:opacity-50 cursor-pointer"
              >
                {isLoading ? "Sending..." : "Send Link"}
              </button>
            </form>
          ) : (
            <div className="text-center">
              <div
                className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <Mail className="h-8 w-8 text-white" />
              </div>
              <p className="text-gray-300 mb-6">
                If an account exists for {email}, you will receive a password reset link shortly.
              </p>
            </div>
          )}
        </div>

        <div className="px-8 py-4 w-full bg-gray-900 bg-opacity-50 flex justify-center">
          <Link href="/signin" className="text-sm text-green-400 hover:underline flex items-center">
            <ArrowLeft className="h-4 w-4 mr-2" /> Back to Signin
          </Link>
        </div>
      </div>
    </AUTHLAYOUTS>
  );
};

export default Page;
