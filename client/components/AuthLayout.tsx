import React from 'react'
import FloatingShape from './FloatingShape'

const AuthLayout = ({children}:any) => {
  return (
    <div className="w-full h-[calc(100vh-5.5vh)] md:h-[calc(100vh-4vw)] flex items-center justify-center bg-gradient-to-t from-second via-green-300 to-second relative overflow-hidden">
        <FloatingShape color='bg-lime-400' size='w-64 h-64' top='10%' left='10%' delay={0} />
		   
		    <FloatingShape color='bg-prime' size='w-32 h-32' top='40%' left='-10%' delay={2} />
        <FloatingShape color='bg-green-700' size='w-40 h-40' top='40%' left='60%' delay={2} />

        <div className="">
            {children}
        </div> 
    </div>
  )
}

export default AuthLayout