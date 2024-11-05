import React from 'react'

export const Title = ({text1,text2}) => {
  return (
    <div className='inline-flex gap-2 items-center mb-3'>
        <p className='text-gray-500'>{text1} <span className='text-gray-700 font-medium'>{text2}</span></p>
        <hr className='border-none h-[2.5px] w-8 bg-gray-800'/>
    </div>
  )
}
