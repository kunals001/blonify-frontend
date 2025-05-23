"use client"
import ProtectedAdminRoute from '@/components/AdminProtect'
import SunEditor from '@/components/SunEditor'
import { LetterText, Pen, SquarePen } from 'lucide-react'
import { useEffect, useState } from 'react'
import { usePostStore } from '@/store/postStore'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import Upload from '@/components/upload'
import { useAuthStore } from '@/store/authStore'
import MobilePost from '../MobilePost'
import InputPost from '../InputPost'
import { set } from 'date-fns'


const page = () => {
    const [content,setContent] = useState('');
    const [coverImg,setCoverImg] = useState("");
    const [innerImage,setInnerImage] = useState("");
    const router = useRouter();
    const {createPost,error,isLoading} = usePostStore();
    const {user} = useAuthStore();

    useEffect(() => {
        if (!user?.isAdmin) {
          router.push("/signin");
        }
    }, [user]);

    const handleSubmit = async (e:any) =>{
        e.preventDefault();
        try {
            const formData = new FormData(e.target);

             // 1. Network Section
            const network = [
            {
                technology: formData.get("technology") as string,
                towbands: formData.get("towbands") as string,
                threebands: formData.get("threebands") as string,
                fourbands: formData.get("fourbands") as string,
                fivebands: formData.get("fivebands") as string,
                speed: formData.get("speed") as string,
            },
            ];

            // Launch

            const launch = [
              {
                date: formData.get("date") as string,
                status: formData.get("status") as string,
              },
            ];

            // 2. Body Section
            const body = [
              {
                dimensions: formData.get("dimensions") as string,
                weight: formData.get("weight") as string,
                build: formData.get("build") as string,
                sim: formData.get("sim") as string,
              },
            ];

            // Display

            const display = [
              {
                type: formData.get("type") as string,
                size: formData.get("size") as string,
                resolution: formData.get("resolution") as string,
                refreshrate: formData.get("refreshrate") as string,
                protection: formData.get("protection") as string,
                pixle: formData.get("pixle") as string,
                big: formData.get("big") as string,
              },
            ];

            // 3. Platform Section
            const platform = [
              {
                os: formData.get("os") as string,
                chipset: formData.get("chipset") as string,
                cpu: formData.get("cpu") as string,
                gpu: formData.get("gpu") as string,
                process: formData.get("process") as string,
                ram: formData.get("ram") as string,
              },
            ];

         // 4. Memory Section
         const memory = [
           {
             cardslot: formData.get("cardslot") as string,
             ram: formData.get("ram") as string,
             storage: formData.get("storage") as string,
           },
         ];

         // Permormance
         const permormance = [
           {
             antutuscore: formData.get("antutuscore") as string,
             geeksbenchscore: formData.get("geeksbenchscore") as string,
             fps: formData.get("pubgfps") as string,
           },
         ];

         // Battery

         const battery = [
           {
             type: formData.get("type") as string,
             capacity: formData.get("capacity") as string,
             fastcharge: formData.get("fastcharge") as string,
             gamingbackup: formData.get("gamingbackup") as string,
             standbybackup: formData.get("standbybackup") as string,
             mah: formData.get("mah") as string,
             wiredcharge: formData.get("wiredcharge") as string,
             wirelesscharge: formData.get("wirelesscharge") as string,
           },
         ];


         // Main camera

         const maincam = [
           {
            type: formData.get("type") as string,
            mp: formData.get("mp") as string,
            resolution: formData.get("resolution") as string,
            zoom: formData.get("zoom") as string,
            features: formData.get("features") as string,
            videofps: formData.get("videofps") as string,
            mega: formData.get("mega") as string,
            pixel: formData.get("pixel") as string,
           },
         ];


         // Front camera

         const frontcam = [
           {
            type: formData.get("type") as string,
            mp: formData.get("mp") as string,
            resolution: formData.get("resolution") as string,
            features: formData.get("features") as string,
            videofps: formData.get("videofps") as string,
           },
         ];

         // Sound

         const sound = [
           {
               speaker: formData.get("speaker") as string,
               headphonejack: formData.get("headphonejack") as string,
               quality: formData.get("quality") as string
           }
         ]

         // Comms

         const comms = [
           {
               wifi: formData.get("wifi") as string,
               bluetooth: formData.get("bluetooth") as string,
               gps: formData.get("gps") as string,
               nfc: formData.get("nfc") as string
           }
         ]

         // Features

         const features = [
           {
               sensor: formData.get("sensor") as string,
               fingerprint: formData.get("fingerprint") as string,
               faceunlock: formData.get("faceunlock") as string,
               ir: formData.get("ir") as string
           }
         ]

         // Mics

         const mics = [
           {
               color: formData.get("color") as string,
               quality: formData.get("quality") as string,
               model: formData.get("model") as string,
               price: formData.get("price") as string,
           }
         ]
  
            const data = {
                title: formData.get("title") as string,
                desc: formData.get("desc") as string,
                highlight: formData.get("highlight") as string,
                keywords: formData.get("keywords") as string,
                content: content,
                category: formData.get("category") as string,
                coverImg: coverImg,
                innerImage:innerImage,
                altText: formData.get("altText") as string,
                ismobile:formData.get("ismobile") as string,
                islaptop:formData.get("islaptop") as string,
                isdaily:formData.get("isdaily") as string,
                rating:formData.get("ismobile") as string,
                isFeatured: formData.get("isFeatured") as string,
                userId: user?._id,
                 network,
                 body,
                 launch,
                 display,
                 platform,
                 memory,
                 permormance,
                 battery,
                 maincam,
                 frontcam,
                 sound,
                 comms,
                 features,
                 mics,

                 
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

                <div className="w-full flex items-center justify-between md:px-[.5vw] lg:px-[.6vw] outline-none py-[1vh] md:py-[.5vw] lg:py-[.5vw] rounded-xl text-[1.3vh] md:text-[1vw] lg:text-[1vw] bg-zinc-100 border-1 border-prime font-second font-medium text-zinc-700 relative">

                    <Upload coverImg={innerImage} setCoverImg={setInnerImage} />
                    
                </div>

                <MobilePost />

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

export default page