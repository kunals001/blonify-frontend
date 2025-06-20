"use client"
import { useState } from 'react'
import {Menu,Search,X} from 'lucide-react'
import Link from 'next/link'
import { useAuthStore } from '@/store/authStore'
import { useRouter } from 'next/navigation'
import { toast } from 'react-hot-toast'
import axios from 'axios';
import { useEffect } from 'react';
import Image from 'next/image'

interface Post {
  _id: string;
  title: string;
  slug: string;
}


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isSearch, setIsSearch] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState<Post[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const {user,logout} = useAuthStore();
    const router = useRouter();

    const handlelogout = async () => {
        try {
            logout();
            toast.success('Logged out successfully');
            router.push('/signin');
        } catch (error) {
            console.log(error);
            toast.error('Logout failed');
        }
    }

    const BarMenu = [
    { label: "Home", href: "/" },
    { label: "Daily", href: "/daily" },
    { label: "About", href: "/about" },
    { label: "Contact Us", href: "/contact-us" },
    ]

   useEffect(() => {
    const fetchSearchResults = async () => {
    if (!searchTerm.trim()) {
      setSearchResults([]);
      return;
    }

    setIsLoading(true);
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_KEY_3}/search-posts?query=${searchTerm}`);
      setSearchResults(response.data.posts);
    } catch (error) {
      console.error("Search error:", error);
    } finally {
      setIsLoading(false);
    }
  };

   const delayDebounce = setTimeout(() => {
    fetchSearchResults();
   }, 500); // debounce 500ms

  return () => clearTimeout(delayDebounce);
   }, [searchTerm]);

  return (
    <nav className='z-20 w-full flex items-center h-[6vh] md:h-[4vw] lg:h-[4vw] px-[1vh] md:px-[13vw] lg:px-[15vw] justify-between  gap-[1vw] backdrop-filter backdrop-blur-xl select-none sticky top-0 '>

        
        {/*  Mobile Menu */}
        <div className="menu lg:hidden md:hidden flex items-center relative justify-center">
            <Menu className='w-[3.5vh] h-[3.5vh] text-zinc-700 p-[1vw] rounded-md bg-green-200' onClick={() => setIsOpen(true)}/>

            <div className={` w-[16vh] h-[100vh] bg-green-200 transition-all duration-300 absolute -top-[1.1vh] -left-[1.1vh] z-10 ${isOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
                <X className='absolute top-[1vh] right-[1vh] w-[3.5vh] h-[3.5vh] text-zinc-700 p-[1vw] rounded-md bg-green-100' onClick={() => setIsOpen(false)}/>

                <ul className='flex flex-col gap-[.5vh] items-center justify-center px-[3vh] pt-[10vh] w-[16vh]'>
                    {BarMenu.map((item)=>(
                        <li className='w-[15vh] px-[3vw] py-[.5vh] rounded-md bg-green-100 text-zinc-700 ' key={item.href}>
                            <Link href={item.href} onClick={() => setIsOpen(false)} >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>

        {/*  Logo */}

        <Link href="/" aria-label="Go to homepage">
        <div className={`nav-logo w-[10vh] hidden md:flex lg:flex md:gap-[.5vw] lg:gap-[.5vw] items-center select-none `}>
            <Image width={40} height={40} src="/logo.svg" alt="logo" className='w-[3.5vh] h-[3.5vh] md:w-[1.9vw] md:h-[1.9vw] lg:w-[1.8vw] lg:h-[1.8vw]' priority={true}/>
            <h6 className='font-second text-[2.2vh] md:text-[1.6vw] lg:text-[1.7vw] text-zinc-700 '>Blonify</h6>
        </div>
        </Link>


        <Link href="/" aria-label="Go to homepage">
          <div className={`nav-logo-mobile w-[10vh] flex gap-[1vw] md:hidden lg:hidden items-center select-none transition-all duration-500 ${isSearch ? 'hidden' : 'visible'}`}>
          <Image width={40} height={40} src="/logo.svg" alt="Blonify logo" className='w-[3.2vh] h-[3.2vh]' priority />
          <h6 className='font-second text-[2.4vh] md:text-[1.6vw] lg:text-[1.7vw] text-zinc-700'>Blonify</h6>
           </div>
        </Link>


        {/* Mobile Search bar */}

        <div className={`relative mobile-search md:hidden lg:hidden flex flex-col w-full items-center justify-center transition-all duration-500 ${isSearch ? 'visible' : 'overflow-hidden'}`} >
            {/* Search Input */}
              <div className='relative w-full'>
                <input 
                  type="text" 
                  placeholder='Search...'
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className={`relative px-[1.5vh] pt-[.4vh] pb-[.2vw] w-full h-[4.2vh] bg-white outline-none rounded-full transition-all duration-300 ${isSearch ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'} border-1 border-green-200 text-zinc-700 transition-all duration-300`}
                  name='search'
                />
                <div onClick={() => setIsSearch(prev => !prev)} className="rounded-full absolute right-0 top-0 bg-prime w-[5vh] flex items-center justify-center h-full">
                  <Search className='text-white'/>
                </div>
              </div>

              {/* Search Results Dropdown */}
              {searchTerm && searchResults.length > 0 && (
                <div className="absolute z-50 top-[4.5vh] left-[0%] w-full bg-white border border-zinc-200 shadow-lg rounded-lg max-h-[40vh] overflow-auto">
                  {searchResults.map((post) => (
                    <div 
                      key={post._id}
                      className="px-4 py-2 text-sm hover:bg-zinc-100 cursor-pointer"
                      onClick={() => router.push(`/article/${post.slug}`)}
                    >
                      {post.title}
                    </div>
                  ))}
                </div>
              )}

              {isLoading && (
                <div className="absolute z-50 top-[4.5vh] left-[0%] w-full bg-white border border-zinc-200 shadow-lg rounded-lg max-h-[40vh] overflow-auto">
                  <div className="px-4 py-2 text-prime text-sm hover:bg-zinc-100 cursor-pointer">
                    Loading...
                  </div>
                </div>
              )}
            </div>


        {/* Desktop Menu */}
        <div className="desktop-menu hidden md:block lg:block mt-[.7vw] items-center  justify-center ">
            <ul className='flex rounded-full md:px-[.2vw] md:py-[.1vw] lg:px-[.2vw] lg:py-[.1vw]  items-center justify-center '>
                
                {BarMenu.map((item)=>(
                    <li className='md:text-[1vw] lg:text-[1.1vw] px-[.7vw] py-[.2vw] rounded-full text-zinc-700 group hover:bg-green-200 transition-all duration-300 overflow-hidden leading-[1.3vw] font-medium' key={item.href}>
                        <Link href={item.href} >
                                {item.label}

                             <div className="group-hover:translate-x-0 group-hover:opacity-100 w-full h-[2px] bg-zinc-700 transition-all duration-300 -translate-x-full opacity-0"></div>
                        </Link>
                    </li>
                ))}

            </ul>
        </div>

        {!user?(
             <div className=" flex md:gap-[.6vw] lg:gap-[.5vw]">
        <Link aria-label='Signin' href={'/signin'}><button className='group  relative text-zinc-800 px-[1vh] py-[.5vh] rounded-full bg-gradient-to-l from-green-300 via-lime-300 to-prime border-1 border-prime hover:cursor-pointer text-[1.8vh] md:text-[1vw] lg:text-[1.2vw] md:px-[1vw] md:py-[.1vw] lg:px-[1vw] lg:py-[.1vw] text-center transform active:scale-95 transition-all duration-200'>Signin</button></Link>

        <Link aria-label='Signup' href={'/signup'}><button className='group hidden md:block lg:block relative text-zinc-800 px-[1vh] py-[.4vh] rounded-full bg-gradient-to-l from-green-300 via-lime-300 to-prime border-1 border-prime hover:cursor-pointer text-[1.7vh] md:text-[1vw] lg:text-[1.2vw] md:px-[1vw] md:py-[.1vw] lg:px-[1vw] lg:py-[.1vw] text-center transform active:scale-95 transition-ease duration-200'>Signup</button></Link>
        </div>
        ):(
            <div className="">
            <div className="flex md:hidden lg:hidden ">
                <Link aria-label='Profile' href={'/profile'}>
                    <div className='group  relative border-1 border-prime h-[4.5vh] w-[4.5vh] rounded-full flex items-center justify-center '>
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
                </Link>
            </div>


            <div className={` group relative hidden md:w-[3.2vw] md:h-[3.2vw] lg:w-[3.3vw] lg:h-[3.3vw] rounded-full border-2 border-prime md:flex lg:flex items-center justify-center cursor-pointer `}>
                <Link aria-label='Profile' href={'/profile'}>
                {user && typeof user.profilePic === 'string' && (
                  <Image
                    src={user.profilePic}
                    alt="User Profile"
                    width={100}
                    height={100}
                    className="rounded-full object-cover"
                    
                  />
                )}
                </Link>

                <div className="hidden z-40 md:flex lg:flex absolute bg-zinc-800 rounded-md -right-[11vw] top-[2.5vw] md:px-[1vw] md:py-[.5vw] lg:px-[1vw] lg:py-[.6vw] transform scale-0 group-hover:scale-100 transition-all duration-300 flex-col gap-[.5vh] md:w-[10vw] lg:w-[11vw]">
                   <Link href={'/profile'}> <h3 className='text-zinc-100 text-[1vw] px-[.4vw] py-[.1vw] rounded-md hover:bg-zinc-600 cursor-pointer transition-all duration-300 md:w-full lg:w-full'>{user.name}</h3></Link>

                   {user.isAdmin ?(
                    <Link href={'/admin-dashboard?tab=dashposts'}><div className="'text-zinc-100 text-[1vw] px-[.4vw] py-[.1vw] rounded-md hover:bg-zinc-600 cursor-pointer transition-all duration-300 md:w-full lg:w-full text-zinc-200">Admin</div></Link>
                   ):("")}

                    <h3 onClick={handlelogout} className='text-zinc-100 text-[1vw] px-[.4vw] py-[.1vw] rounded-md hover:bg-red-400 cursor-pointer transition-all duration-300'>logout</h3>
                </div>
            </div>
            </div>
        )}
       
    </nav>
  )
}

export default Navbar