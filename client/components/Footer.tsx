
import React from 'react'
import ImageKit from './Image'
import Link from 'next/link'

const Footer = () => {

  return (
    

<footer className="bg-second">
    <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
              <Link href="https://blonify.com/" className="flex items-center">
                  <ImageKit w={20} h={20} src="https://ik.imagekit.io/8jagcyqun/logo.svg?updatedAt=1748001400021" className="h-8 w-8 mr-3" alt="blonify Logo" />
                  <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Blonify</span>
              </Link>
          </div>
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
                          <Link href="/mobiles" className="hover:underline">Mobiles</Link>
                      </li>
                      <li>
                          <Link href="/laptops" className="hover:underline">Laptops</Link>
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
