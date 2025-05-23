"use client"
import React, { useEffect,useState } from 'react'
import Head from 'next/head';
import { useParams } from 'next/navigation';
import LoadingSpinner from '@/components/LoadingSpinner';
import axios from 'axios';
import MobilePostPage from '@/components/Mobile/MobilePostPage';
import DailyPostPage from '@/components/Daily/DailyPostPage';
import "../../../globals.css"
import LaptopPostPage from '@/components/Laptop/LaptopPostPage';

interface Post {
  _id?: string;
  title: string;
  slug: string;
  content: string;
  desc?: string;
  coverImg?: string;
  altText?: string;
  category?: string;
  isFeatured?: string;
  keywords?: string;
  highlight?: string;
  visits?: number;
  ismobile?: string;
  islaptop?: string;
  isdaily?: string;
  createdAt: string | number;
  updatedAt: string | number;

  network?: {
    technology?: string;
    towbands?: string;
    threebands?: string;
    fourbands?: string;
    fivebands?: string;
    speed?: string;
  }[];

  launch?: {
    date?: string;
    status?: string;
  }[];

  body?: {
    dimensions?: string;
    weight?: string;
    build?: string;
    sim?: string;
  }[];

  display?: {
    type?: string;
    resolution?: string;
    size?: string;
    refreshrate?: string;
    protection?: string;
    pixel?: string;
    big?: string;
  }[];

  platform?: {
    os?: string;
    osversion?: string;
    chipset?: string;
    gpu?: string;
    cpu?: string;
    process?: string;
    ram?: string;
  }[];

  memory?: {
    cardslot?: string;
    ram?: string;
    storage?: string;
  }[];

  permormance?: {
    antutuscore?: string;
    geeksbenchscore?: string;
    fps?: string;
  }[];

  battery?: {
    battery?: string;
    capacity?: string;
    fastcharge?: string;
    gamingbackup?: string;
    standbybackup?: string;
    mah?: string;
    wiredcharge?: string;
    wirelesscharge?: string;
  }[];

  maincam?: {
    type?: string;
    mp?: string;
    resolution?: string;
    zoom?: string;
    features?: string;
    videofps?: string;
    mega?: string;
    pixel?: string;
  }[];

  frontcam?: {
    type?: string;
    mp?: string;
    resolution?: string;
    features?: string;
    videofps?: string;
  }[];

  sound?: {
    speaker?: string;
    headphonejack?: string;
    quality?: string;
  }[];

  comms?: {
    wifi?: string;
    bluetooth?: string;
    gps?: string;
    nfc?: string;
  }[];

  features?: {
    sensor?: string;
    fingerprint?: string;
    faceunlock?: string;
    ir?: string;
  }[];

  mics?: {
    color?: string;
    quality?: string;
    model?: string;
    price?: string;
  }[];
}


const page = () => {
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(false);
  const params = useParams()
  const slug = params.slug as string;
  const API_URL_3 = process.env.NEXT_PUBLIC_API_KEY_3;
    
  useEffect(()=>{
    const fetchPost = async () => {
      try {
        setLoading(true)
        const response = await axios.get(`${API_URL_3}/${slug}`);
        const data = await response.data;
        setPost(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching post:", error);
      }
    }

    fetchPost();
  },[slug])

  if(loading){
    return <LoadingSpinner/>
  }


  return (
    <>
      <Head>
        <title>{post?.title}</title>
        <meta name="description" content={post?.desc} />
        <meta name="keywords" content={post?.keywords} />
      </Head>

        <div className='overflow-hidden'>
          {post?.isdaily && <DailyPostPage post={post} />}
          {post?.ismobile && <MobilePostPage post={post} />}
          {post?.islaptop && <LaptopPostPage post={post} />}
        </div>
    </>
  )
}

export default page