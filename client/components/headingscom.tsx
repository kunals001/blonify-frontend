import React from 'react'

const headingscom = ({text}:{text:string}) => {
  return (
    <div>
        <h1 className='text-[1.7vh] md:text-[1.2vw] lg:text-[1.2vw] select-none font-regular text-zinc-800'>{text}</h1>
    </div>
  )
}

export default headingscom