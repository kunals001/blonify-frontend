// components/ScrollManager.tsx
"use client"
import { useEffect } from 'react';

const RefreshManage = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    // Restore scroll position from localStorage
    const savedScrollY = localStorage.getItem("scroll-position");
    if (savedScrollY) {
      window.scrollTo(0, parseInt(savedScrollY));
    }

    // Save scroll position before unload
    const handleBeforeUnload = () => {
      localStorage.setItem("scroll-position", window.scrollY.toString());
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  return  children ;
};

export default RefreshManage;
