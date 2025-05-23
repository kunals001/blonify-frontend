import Link from 'next/link'
import React from 'react'

const Footer = () => {

    const QuickLinks = [
    { label: "About", href: "/about" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms-and-conditions" },
    { label: "Disclaimer", href: "/disclaimer" },
    { label: "Contact Us", href: "/contact-us" },
    ]

  return (
    

<footer className="bg-second">
    <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
              <a href="https://blonify.com/" className="flex items-center">
                  <img src="/logo.svg" className="h-8 me-3" alt="blonify Logo" />
                  <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Blonify</span>
              </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Quick links</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li>
                          <a href="/" className="hover:underline">Home</a>
                      </li>
                      <li>
                          <a href="/daily" className="hover:underline">Daily</a>
                      </li>
                      <li>
                          <a href="/mobiles" className="hover:underline">Mobiles</a>
                      </li>
                      <li>
                          <a href="/laptops" className="hover:underline">Laptops</a>
                      </li>

                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                     <li>
                          <a href="/about" className="hover:underline">About Us</a>
                      </li>
                      <li >
                          <a href="/privacy-policy" className="hover:underline">Privacy Policy</a>
                      </li>
                      <li>
                          <a href="/terms-and-conditions" className="hover:underline">Terms &amp; Conditions</a>
                      </li>
                      <li>
                          <a href="/disclaimer" className="hover:underline">Disclaimer</a>
                      </li>
                      <li>
                          <a href="/contact-us" className="hover:underline">Contact Us</a>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2025 <a href="https://blonify.com/" className="hover:underline">Blonify™</a>. All Rights Reserved.
          </span>
      </div>
    </div>
</footer>

  )
}

export default Footer
