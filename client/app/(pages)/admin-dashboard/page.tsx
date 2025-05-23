'use client';

import React, { useEffect, useState } from 'react';
import ProtectedAdminRoute from '@/components/AdminProtect';
import DashSidebar from '@/components/Admin/DashSidebar';
import CreatePosts from '@/components/Admin/CreatePosts';
import { useSearchParams } from 'next/navigation';
import DashPosts from '@/components/Admin/DashPosts';
import DashUsers from '@/components/Admin/DashUsers';
import DashCommets from '@/components/Admin/DashCommets';

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
