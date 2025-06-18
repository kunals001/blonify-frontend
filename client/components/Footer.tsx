
import React from 'react'
import Link from 'next/link'

const Footer = () => {

  return (
    

<footer className="bg-second">
    <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
            <form className="md:w-[33vw] w-full flex md:flex-col flex-row md:gap-0 gap-2 py-[2vh]">
             <input
               type="text"
               placeholder="Subscribe to our newsletter"
               className="w-full text-zinc-800 placeholder:text-zinc-400 bg-zinc-100 border-2 border-green-400 outline-none rounded-2xl
               px-4 py-2 md:px-[1vw] md:py-[0.5vw]
               text-sm md:text-[1.1vw] placeholder:text-sm md:placeholder:text-[1vw]"
                />

             <button
               type="submit"
               className="bg-gradient-to-l from-prime to-emerald-500 text-white font-medium rounded-xl
               px-4 py-2 md:px-[1.5vw] md:py-[0.5vw]
               text-sm md:text-[1vw] md:mt-[0.8vw] mt-0 cursor-pointer"
               >
                 Subscribe
               </button>
             </form>
             
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Quick links</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li>
                          <Link href="/" className="hover:underline">Home</Link>
                      </li>
                      <li>
                          <Link href="/daily" className="hover:underline">Daily</Link>
                      </li>
                      <li>
                          <Link href="/tools" className="hover:underline">Tools</Link>
                      </li>

                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                     <li>
                          <Link href="/about" className="hover:underline">About Us</Link>
                      </li>
                      <li >
                          <Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link>
                      </li>
                      <li>
                          <Link href="/terms-and-conditions" className="hover:underline">Terms &amp; Conditions</Link>
                      </li>
                      <li>
                          <Link href="/disclaimer" className="hover:underline">Disclaimer</Link>
                      </li>
                      <li>
                          <Link href="/contact-us" className="hover:underline">Contact Us</Link>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2025 <Link href="https://blonify.com/" className="hover:underline">Blonify™</Link>. All Rights Reserved.
          </span>
      </div>
    </div>
</footer>

  )
}

export default Footer
