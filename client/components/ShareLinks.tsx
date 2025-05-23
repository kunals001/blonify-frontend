import { Send, Copy } from 'lucide-react'
import React, { useState } from 'react'
import ImageKit from './Image'

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
      <p className='text-[1.7vh] md:text-[1.1vw] text-zinc-700 gap-[.5vh] flex flex-row items-center'>
        Share <Send className='size-4 md:size-6 text-prime ml-1' />
      </p>

      <div className="md:w-[10vw] w-full flex md:flex-col flex-row md:px-[.5vw] rounded-md cursor-pointer gap-[.5vh] md:gap-[.3vw]">

        {/* Instagram */}
        <a href={shareLinks.instagram} target="_blank" rel="noopener noreferrer" className='flex items-center rounded-md hover:bg-green-200 gap-[.2vw]'>
          <ImageKit src="https://ik.imagekit.io/8jagcyqun/icons8-instagram-logo.svg?updatedAt=1747225348664" alt="Instagram" className="w-[2vh] h-[2vh] md:w-[1.5vw] md:h-[1.5vw]" w={50} h={50} />
          <span className='hidden md:block text-[.9vw] text-zinc-700'>Instagram</span>
        </a>

        {/* Facebook */}
        <a href={shareLinks.facebook} target="_blank" rel="noopener noreferrer" className='flex items-center rounded-md hover:bg-green-200 gap-[.2vw]'>
          <ImageKit src="https://ik.imagekit.io/8jagcyqun/icons8-facebook.svg?updatedAt=1747225348707" alt="Facebook" className="w-[2vh] h-[2vh] md:w-[1.5vw] md:h-[1.5vw]" w={50} h={50} />
          <span className='hidden md:block text-[.9vw] text-zinc-700'>Facebook</span>
        </a>

        {/* WhatsApp */}
        <a href={shareLinks.whatsapp} target="_blank" rel="noopener noreferrer" className='flex items-center rounded-md hover:bg-green-200 gap-[.2vw]'>
          <ImageKit src="https://ik.imagekit.io/8jagcyqun/icons8-whatsapp.svg?updatedAt=1747225348817" alt="WhatsApp" className="w-[2vh] h-[2vh] md:w-[1.5vw] md:h-[1.5vw]" w={50} h={50} />
          <span className='hidden md:block text-[.9vw] text-zinc-700'>WhatsApp</span>
        </a>

        {/* Copy Link Button */}
        <button onClick={copyLink} className='flex items-center mt-1 rounded-md hover:bg-green-200 gap-[.2vw] px-1 py-[.3vh]'>
          <Copy className='w-[2vh] h-[2vh] md:w-[1.5vw] md:h-[1.5vw] text-zinc-700' />
          <span className='hidden md:block text-[.9vw] text-zinc-700'>Copy Link</span>
        </button>
      </div>

      {copied && <p className="text-green-600 text-[.9vw] mt-1">Link Copied!</p>}
    </div>
  );
};

export default ShareLinks;
