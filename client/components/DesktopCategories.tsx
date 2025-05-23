"use client"
import React from 'react'
import Link from 'next/link'
import { useState,useEffect } from 'react'
import { Search } from 'lucide-react'
import axios from 'axios'
import { useRouter } from 'next/navigation'

const DesktopCategories = () => {
  const [selected, setSelected] = useState("/");
  const [isSearch, setIsSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const menuItems = [
    { label: "Daily", href: "/daily" },
    { label: "Mobiles", href: "/mobiles" },
    { label: "Laptops", href: "/laptops" },
  ];
  const router = useRouter();

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
    <div className="category-search hidden md:flex lg:flex w-full border-1 border-prime md:px-[.2vw] md:py-[.2vw] lg:px-[.2vw] lg:py-[.2vw] rounded-full items-center gap-[.6vw] relative select-none">
        <div className="category">
          <ul className="flex gap-[.4vw]">
            {menuItems.map((item) => (
              <Link href={item.href} key={item.href}>
                <li
                  onClick={() => setSelected(item.href)}
                  className={`px-[1vw] py-[.3vw] rounded-full bg-green-200
                   text-center flex items-center justify-center text-[1vw] text-medium text-zinc-700 ease-in-out hover:bg-green-400 hover:text-white transition-all duration-300 border-1 border-prime cursor-pointer`}
                >
                  {item.label}
                </li>
              </Link>
            ))}
          </ul>
        </div>

    <div className="search h-[2.2vw] w-full relative flex items-center justify-end">
      <input
        type="text"
        placeholder="Search..."
        className="relative px-[1.5vw] pt-[.4vw] pb-[.2vw] w-full bg-white outline-none rounded-full transition-all duration-300 border-2 border-green-400 text-zinc-700 h-full"
        name="search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
         <div className="rounded-full absolute right-0 top-0 bg-prime w-[2.5vw] flex items-center justify-center h-full cursor-pointer">
          <Search className="text-white" />
         </div>

         {searchTerm && searchResults.length > 0 && (
          <div className="absolute z-50 top-[4.5vh] left-0 w-full bg-white border border-zinc-200 shadow-lg rounded-lg max-h-[40vh] overflow-auto">
            {searchResults.map((post) => (
              <div 
                key={post._id}
                className="px-4 py-2 text-sm hover:bg-zinc-100 cursor-pointer"
                onClick={() => router.push(`/article/${post?.slug}`)}
              >
                {post.title}
              </div>
            ))}
          </div>
        )}

      {/* Optional loading state */}
       {isLoading && <p className="text-sm text-center text-zinc-500 mt-2">Searching...</p>}
    </div>
  </div>
  )
}

export default DesktopCategories