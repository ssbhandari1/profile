import React from 'react'

export const Marquee = ({to, children}: any) => {
  return (
    <marquee  direction={to} scrollamount="4">
   <div className='flex gap-3  items-center' >
   {children}
   </div>
    </marquee>
  )
}
