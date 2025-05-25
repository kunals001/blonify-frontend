'use client';

import React, { useEffect, useState } from 'react';
import ProtectedAdminRoute from '@/components/AdminProtect';
import DashSidebar from '@/components/Admin/DashSidebar';
import { useSearchParams } from 'next/navigation';
import dynamic from 'next/dynamic';

const DashPosts = dynamic(() => import('@/components/Admin/DashPosts'), {
  ssr: false,
  loading: () => <p>Loading Editor...</p>,
});

const DashUsers = dynamic(() => import('@/components/Admin/DashUsers'), {
  ssr: false,
  loading: () => <p>Loading Editor...</p>,
});

const DashCommets = dynamic(() => import('@/components/Admin/DashCommets'), {
  ssr: false,
  loading: () => <p>Loading Editor...</p>,
});

const CreatePosts = dynamic(() => import('@/components/Admin/CreatePosts'), {
  ssr: false,
  loading: () => <p>Loading Editor...</p>,
});

const Page = () => {
  const searchParams = useSearchParams();
  const [tab, setTab] = useState('');

  useEffect(() => {
    const tabFromUrl = searchParams.get('tab');
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [searchParams]);

  return (
    <ProtectedAdminRoute>
      <div className='min-h-screen md:flex lg:flex flex-col hidden w-full'>
        <div className=''>
          {/* Sidebar */}
          <DashSidebar />
        </div>

        <div className="md:w-[calc(100%-12vw)] lg:w-[calc(100%-13vw)] md:pl-[14vw] lg:pl-[14vw] md:py-[1vw] lg:py-[1vw]">
          {tab === 'create-posts' && <CreatePosts />}
          {tab === 'dashposts' && <DashPosts />}
          {tab === 'dashusers' && <DashUsers />}
          {tab === 'dashcomments' && <DashCommets />}
        </div>
      </div>
    </ProtectedAdminRoute>
  );
};

export default Page;
