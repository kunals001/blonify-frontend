"use client"
import ProtectedAdminRoute from '@/components/AdminProtect'
import { LetterText, Pen, SquarePen } from 'lucide-react'
import { useEffect, useState } from 'react'
import { usePostStore } from '@/store/postStore'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import Upload from '@/components/upload'
import { useAuthStore } from '@/store/authStore'
import InputPost from '../InputPost'
import dynamic from 'next/dynamic'

const SunEditor = dynamic(() => import('@/components/SunEditor'), { ssr: false })


const Page = () => {
    const [content,setContent] = useState('');
    const [coverImg,setCoverImg] = useState("");
    const router = useRouter();
    const {createPost,error,isLoading} = usePostStore();
    const {user} = useAuthStore();

    useEffect(() => {
        if (!user?.isAdmin) {
          router.push("/signin");
        }
    }, [user,router]);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        try {
            const formData = new FormData(e.currentTarget);
            const data = {
                title: formData.get("title") as string,
                desc: formData.get("desc") as string,
                highlight: formData.get("highlight") as string,
                keywords: formData.get("keywords") as string,
                content: content,
                category: formData.get("category") as string,
                coverImg: coverImg,
                altText: formData.get("altText") as string,
                isdaily:formData.get("isdaily") as string,
                isFeatured: formData.get("isFeatured") as string,
            }

            await createPost(data);
            toast.success("Post created successfully")
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <ProtectedAdminRoute>
        <div className='w-full min-h-screen md:pt-[2vw] lg:p-[2.1vw] hidden md:flex lg:flex flex-col md:gap[.8vw] lg:gap-[.9vw]'>

            <h1 className='text-[3vh] md:text-[2vw] lg:text-[2vw] select-none mx-auto font-semibold text-center bg-gradient-to-r from-prime to-emerald-500 text-transparent bg-clip-text'>
                Create A Post
            </h1>

            <form onSubmit={handleSubmit}  className='flex flex-col w-full mt-[1vh] md:mt-[.8vw] lg:mt-[.8vw] gap-[.6vw]'>

                {/* title */}
                <div className="relative w-full flex items-center justify-center">
                    <input name='title' type="title" placeholder="Title" className='w-full px-[2.5vh] md:px-[2vw] lg:px-[2vw] outline-none py-[1vh] md:py-[.5vw] lg:py-[.5vw] rounded-xl text-[1.3vh] md:text-[1vw] lg:text-[1vw] bg-zinc-100 border-1 border-prime font-second font-medium text-zinc-700 relative' />

                    <LetterText className='absolute text-prime left-0 pl-[.5vh] md:pl-[.5vw] lg:pl-[.5vw] cursor-pointer size-6 md:size-8 lg:size-8'/>

                    {/* category */}

                    <div className="w-[8vw] pl-[.5vw] ">
                        <select name='category' className='px-[.5vw] py-[.5vw] outline-none rounded-xl bg-zinc-100 text-[1vw] cursor-pointer h-[2.7vw] border-1 border-prime w-full'>
                          <option value='uncategorized'>Category </option>
                          <option value='daily'>Daily</option>
                          <option value='mobiles'>Mobiles</option>
                          <option value='laptops'>Laptops</option>
                          <option value='watches'>Watches</option>
                        </select>
                    </div>
                </div>

                {/* altText */}

                <div className="relative w-full flex items-center justify-center">
                    <input name='altText' type="text" placeholder="Alternate Text" className='w-full px-[2.5vh] md:px-[2vw] lg:px-[2vw] outline-none py-[1vh] md:py-[.5vw] lg:py-[.5vw] rounded-xl text-[1.3vh] md:text-[1vw] lg:text-[1vw] bg-zinc-100 border-1 border-prime font-second font-medium text-zinc-700 relative' />

                    <Pen className='absolute text-prime left-0 pl-[.5vh] md:pl-[.5vw] lg:pl-[.5vw] cursor-pointer size-6 md:size-8 lg:size-8'/>
                </div>

                {/* description */}

                 <div className="relative w-full flex items-center justify-center">
                    <textarea name='desc' placeholder="Description" className='w-full px-[2.5vh] md:px-[2vw] lg:px-[2vw] outline-none py-[1vh] md:py-[.5vw] lg:py-[.5vw] rounded-xl text-[1.3vh] md:text-[1vw] lg:text-[1vw] bg-zinc-100 border-1 border-prime font-second font-medium text-zinc-700 relative resize-none' />

                    <SquarePen className='absolute text-prime left-0 top-0 pl-[.5vh] md:pl-[.5vw] lg:pl-[.5vw] cursor-pointer size-6 md:size-10 lg:size-9 pt-[.6vw] block'/>
                </div>

                {/* HighLight */}

                <div className="w-full">
                  <InputPost name='highlight' placeholder='Highlight' />
                </div>

                {/* KeyWord */}

                 <div className="w-full">
                  <InputPost name='keywords' placeholder='Keywords' />
                </div>

                {/* cover image */}

                <div className="w-full flex items-center justify-between md:px-[.5vw] lg:px-[.6vw] outline-none py-[1vh] md:py-[.5vw] lg:py-[.5vw] rounded-xl text-[1.3vh] md:text-[1vw] lg:text-[1vw] bg-zinc-100 border-1 border-prime font-second font-medium text-zinc-700 relative">

                  <Upload coverImg={coverImg} setCoverImg={setCoverImg} />
                    
                </div>

                <div className="w-full flex gap-[2vw]">
                  <select name='isdaily' className='px-[.5vw] py-[.5vw] outline-none rounded-xl bg-zinc-100 text-[1vw] cursor-pointer h-[2.7vw] border-1 border-prime w-full'>
                    <option value="false" >isDaily</option>
                    <option value='true' >true</option>
                  </select>

                  <select name='isFeatured' className='px-[.5vw] py-[.5vw] outline-none rounded-xl bg-zinc-100 text-[1vw] cursor-pointer h-[2.7vw] border-1 border-prime w-full'>
                    <option value="false" >isFeatured</option>
                    <option value='true' >true</option>
                  </select>
                </div>

                {/* content */}

                <SunEditor setcontent={content} onchange={setContent} />

                {error && <p className='text-red-500 text-[1.3vh] md:text-[1vw] lg:text-[1vw]'>{error}</p>}

                {/* Post */}
                <button 
                className='mt-5 w-full py-3 px-4 bg-gradient-to-r  from-green-500 to-emerald-600 text-white font-bold rounded-lg shadow-lg hover:from-green-600hover:to-emerald-700 outline-none focus:ring-2 focus:ring-green-500  transition duration-200 cursor-pointer'
					        type='submit'
                  disabled={isLoading}
                >
					        {isLoading ? "Posting..." : "Post"}
				        </button>
                
            </form>
        </div>
    </ProtectedAdminRoute>
  )
}

export default Page