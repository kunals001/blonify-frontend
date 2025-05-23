'use client'

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuthStore } from '@/store/authStore'

type Props = {
  children: React.ReactNode
}

const ProtectedAdminRoute: React.FC<Props> = ({ children }) => {
  const { isAuthenticated, user} = useAuthStore()
  const router = useRouter()
  const [checking, setChecking] = useState(true)

  useEffect(() => {
    const verify = async () => {

      if (!isAuthenticated || user?.isAdmin === false) {
        router.push('/')
      } else {
        setChecking(false)
      }
    }

    verify()
  }, [isAuthenticated, user])

  if (checking) {
    return <div>Checking permissions...</div>
  }

  return <>{children}</>
}

export default ProtectedAdminRoute
