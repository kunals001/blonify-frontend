import React, { ReactNode } from 'react'

type AuthLayoutProps = {
  children: ReactNode
}

const AuthLayout = ({children}:AuthLayoutProps) => {
  return (
    <div className="w-full h-[calc(100vh-5.5vh)] md:h-[calc(100vh-4vw)] flex items-center justify-center bg-gradient-to-t from-second via-green-300 to-second relative overflow-hidden">
        <div className="">
            {children}
        </div> 
    </div>
  )
}

export default AuthLayout