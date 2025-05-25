"use client";

import { useAuthStore } from "@/store/authStore";
import AUTHLAYOUTS from '@/components/AuthLayout';
import { useState, useEffect } from 'react';
import Input from '@/components/Input';
import { Mail } from 'lucide-react';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';

const Page = () => {
  const [code, setCode] = useState("");
  const { verifyEmail, isLoading, error, isAuthenticated, checkAuth } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated) {
      router.replace("/");
    }
  }, [isAuthenticated, router]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await verifyEmail({ code });
      toast.success("Verify successful");
      await checkAuth();
      router.push("/");
    } catch (error) {
      console.error(error);
      toast.error("Verify failed");
    }
  };

  return (
    <AUTHLAYOUTS>
      <div
        className="w-[95vw] rounded-2xl md:w-[30vw] lg:w-[32vw] backdrop-filter backdrop-blur-xl flex flex-col items-center justify-center bg-gray-700 bg-opacity-30 relative overflow-hidden"
      >
        <div className="relative w-full md:p-[1vw] p-[2vh] lg:p-[1.1vw]">
          <h1 className="text-[3vh] md:text-[2vw] lg:text-[2vw] select-none mx-auto font-semibold text-center bg-gradient-to-r from-prime to-emerald-500 text-transparent bg-clip-text">
            Verify Your Email
          </h1>

          <form onSubmit={handleSubmit} className="flex flex-col w-full relative mt-[1vh]">

            <Input
              icon={Mail}
              type="text"
              placeholder="Enter your code"
              value={code}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCode(e.target.value)}
            />

            {error && <p className="text-red-500 font-semibold mt-2">{error}</p>}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-prime to-emerald-600 text-white font-bold py-3 px-4 rounded-lg shadow-lg hover:from-green-600 hover:to-emerald-70 focus:ring-2 focus:ring-green-50 focus:ring-opacity-50 disabled:opacity-50 cursor-pointer"
            >
              {isLoading ? "Verifying..." : "Verify Email"}
            </button>
          </form>
        </div>
      </div>
    </AUTHLAYOUTS>
  );
};

export default Page;
