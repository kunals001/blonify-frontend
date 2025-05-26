import { Send, Copy } from 'lucide-react'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link';

const ShareLinks = ({ className }: { className?: string }) => {
  const url = typeof window !== "undefined" ? window.location.href : "";
  const [copied, setCopied] = useState(false);

  const copyLink = () => {
    if (!url) return;
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Hide message after 2 sec
  };

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    whatsapp: `https://api.whatsapp.com/send?text=${encodeURIComponent(url)}`,
    instagram: `https://www.instagram.com/`
  };

  return (
    <div className={className}>
      <p className='text-[1.9vh] md:text-[1.1vw] text-zinc-700 gap-[.5vh] flex flex-row items-center'>
        Share <Send className='size-5.5 md:size-6 text-prime ml-1' />
      </p>

      <div className="md:w-[10vw] w-full flex md:flex-col flex-row md:px-[.5vw] rounded-md cursor-pointer gap-[.6vh] md:gap-[.3vw]">

        {/* Instagram */}
        <Link href={shareLinks.instagram} target="_blank" rel="noopener noreferrer" className='flex items-center rounded-md hover:bg-green-200 gap-[.2vw] p-1'>
          <Image src="/instagram.svg" alt="Instagram share" className="w-[3.3vh] h-[3.3vh] md:w-[1.5vw] md:h-[1.5vw]" width={20} height={20} />
          <span className='hidden md:block text-[.9vw] text-zinc-700'>Instagram</span>
        </Link>

        {/* Facebook */}
        <Link href={shareLinks.facebook} target="_blank" rel="noopener noreferrer" className='flex items-center rounded-md hover:bg-green-200 gap-[.2vw] p-1'>
          <Image src="/facebook.svg" alt="Facebook share" className="w-[3.5vh] h-[3.5vh] md:w-[1.5vw] md:h-[1.5vw]" width={20} height={20} />
          <span className='hidden md:block text-[.9vw] text-zinc-700'>Facebook</span>
        </Link>

        {/* WhatsApp */}
        <Link href={shareLinks.whatsapp} target="_blank" rel="noopener noreferrer" className='flex items-center rounded-md hover:bg-green-200 gap-[.2vw] p-1'>
          <Image src={"/whatsapp.svg"} alt="WhatsApp share" className="w-[3.8vh] h-[3.8vh] md:w-[1.5vw] md:h-[1.5vw]" width={20} height={20} />
          <span className='hidden md:block text-[.9vw] text-zinc-700'>WhatsApp</span>
        </Link>

        {/* Copy Link Button */}
        <div onClick={copyLink} className='flex items-center mt-1 rounded-md hover:bg-green-200 gap-[.2vw] p-1'>
          <Copy className='w-[2.8vh] h-[2.8vh] md:w-[1.5vw] md:h-[1.5vw] text-zinc-700' />
          <span className='hidden md:block text-[.9vw] text-zinc-700'>Copy Link</span>
        </div>
      </div>

      {copied && <p className="text-green-600 text-[.9vw] mt-1">Link Copied!</p>}
    </div>
  );
};

export default ShareLinks;
