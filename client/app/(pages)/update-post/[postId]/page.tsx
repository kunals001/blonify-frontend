"use client"
import ProtectedAdminRoute from '@/components/AdminProtect'
import SunEditor from '@/components/SunEditor'
import { LetterText, Pen, SquarePen } from 'lucide-react'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import Upload from '@/components/upload'
import { useAuthStore } from '@/store/authStore'
import InputPost from '@/components/InputPost'
import axios from 'axios'
import { useParams } from 'next/navigation'


const page = () => {
    const [post,setPost] = useState<any>(null);
    const [content,setContent] = useState('');
    const [coverImg,setCoverImg] = useState("");
    const [innerImage,setInnerImage] = useState("");
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [altText, setAltText] = useState('');
    const [category, setCategory] = useState('');
    const [highlight, setHighlight] = useState('');
    const [keywords, setKeywords] = useState('');


    const [isLoading, setIsLoading] = useState(false);
    const [error , setError] = useState("");
    const params = useParams();
    const router = useRouter();
    const {user} = useAuthStore();

    const postId = params.postId as string

    useEffect(() => {
        const fetchPost = async () => {
          try {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_API_KEY_3}/get-single-post/${postId}`);
            const data = await response.data;
            setPost(data);
            setContent(data.content);
            setCoverImg(data.coverImg);
            setInnerImage(data.innerImage);
            setTitle(data.title);
            setDesc(data.desc);
            setAltText(data.altText);
            setCategory(data.category);
            setHighlight(data.highlight);
            setKeywords(data.keywords);

          } catch (error) {
            console.error("Error fetching post:", error);
          }
        };

        fetchPost();

        if (!user?.isAdmin) {
          router.push("/signin");
        }
    }, [user]);

    const handleSubmit = async (e:any) =>{
        e.preventDefault();
        try {
            const data = {
                title,
                desc,
                highlight,
                keywords,
                content,
                category,
                coverImg,
                innerImage,
                altText,
              }

            setIsLoading(true)
            await axios.put(`${process.env.NEXT_PUBLIC_API_KEY_3}/update-post/${postId}`,data)
            toast.success("Post updated successfully")
            setIsLoading(false)
        }catch (error) {
            console.log(error);
            setError("Something went wrong")
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
                    <input name='title' value={title} onChange={(e) => setTitle(e.target.value)} type="title" placeholder="Title" className='w-full px-[2.5vh] md:px-[2vw] lg:px-[2vw] outline-none py-[1vh] md:py-[.5vw] lg:py-[.5vw] rounded-xl text-[1.3vh] md:text-[1vw] lg:text-[1vw] bg-zinc-100 border-1 border-prime font-second font-medium text-zinc-700 relative' />

                    <LetterText className='absolute text-prime left-0 pl-[.5vh] md:pl-[.5vw] lg:pl-[.5vw] cursor-pointer size-6 md:size-8 lg:size-8'/>

                    {/* category */}

                    <div className="w-[8vw] pl-[.5vw] ">
                        <select name='category' value={category} onChange={(e) => setCategory(e.target.value)} className='px-[.5vw] py-[.5vw] outline-none rounded-xl bg-zinc-100 text-[1vw] cursor-pointer h-[2.7vw] border-1 border-prime w-full'>
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
                    <input name='altText' value={altText} onChange={(e) => setAltText(e.target.value)} type="text" placeholder="Alternate Text" className='w-full px-[2.5vh] md:px-[2vw] lg:px-[2vw] outline-none py-[1vh] md:py-[.5vw] lg:py-[.5vw] rounded-xl text-[1.3vh] md:text-[1vw] lg:text-[1vw] bg-zinc-100 border-1 border-prime font-second font-medium text-zinc-700 relative' />

                    <Pen className='absolute text-prime left-0 pl-[.5vh] md:pl-[.5vw] lg:pl-[.5vw] cursor-pointer size-6 md:size-8 lg:size-8'/>
                </div>

                {/* description */}

                 <div className="relative w-full flex items-center justify-center">
                    <textarea name='desc' value={desc} onChange={(e) => setDesc(e.target.value)} placeholder="Description" className='w-full px-[2.5vh] md:px-[2vw] lg:px-[2vw] outline-none py-[1vh] md:py-[.5vw] lg:py-[.5vw] rounded-xl text-[1.3vh] md:text-[1vw] lg:text-[1vw] bg-zinc-100 border-1 border-prime font-second font-medium text-zinc-700 relative resize-none' />

                    <SquarePen className='absolute text-prime left-0 top-0 pl-[.5vh] md:pl-[.5vw] lg:pl-[.5vw] cursor-pointer size-6 md:size-10 lg:size-9 pt-[.6vw] block'/>
                </div>

                {/* HighLight */}

                <div className="w-full">
                  <InputPost value={highlight} onChange={(e:any) => setHighlight(e.target.value)} name='highlight' placeholder='Highlight' />
                </div>

                {/* KeyWord */}

                 <div className="w-full">
                  <InputPost value={keywords} onChange={(e:any) => setKeywords(e.target.value)} name='keywords' placeholder='Keywords' />
                </div>

                {/* cover image */}

                <div className="w-full flex items-center justify-between md:px-[.5vw] lg:px-[.6vw] outline-none py-[1vh] md:py-[.5vw] lg:py-[.5vw] rounded-xl text-[1.3vh] md:text-[1vw] lg:text-[1vw] bg-zinc-100 border-1 border-prime font-second font-medium text-zinc-700 relative">

                    <Upload coverImg={coverImg} setCoverImg={setCoverImg} />
                    
                </div>

                <div className="w-full flex items-center justify-between md:px-[.5vw] lg:px-[.6vw] outline-none py-[1vh] md:py-[.5vw] lg:py-[.5vw] rounded-xl text-[1.3vh] md:text-[1vw] lg:text-[1vw] bg-zinc-100 border-1 border-prime font-second font-medium text-zinc-700 relative">

                    <Upload coverImg={innerImage} setCoverImg={setInnerImage} />
                    
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
					{isLoading ? "Updating..." : "Update Post"}
				</button>
                
            </form>
        </div>
    </ProtectedAdminRoute>
  )
}

export default page