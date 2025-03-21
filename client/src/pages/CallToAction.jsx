import { Button } from 'flowbite-react'
import React from 'react'

export default function CallToAction() {
  return (
    <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
         <div className='flex-1 justify-center flex flex-col' >
            <h2 className='text-2xl'>Want to learn more about Cars ?</h2>
            <p className='text-gray-500 my-2'>
                Checkout these resources with Our Website
            </p>
            <Button  className='rounded-tl-xl rounded-bl-none bg-cyan-500'>
                <a href='#' target='_blank' rel='noopener noreferrer'>Our Projects </a>
            </Button>
         </div>
         <div className='p-7 flex-1'>
            <img src='https://i.gaw.to/vehicles/photos/40/30/403012-2023-rolls-royce-ghost.jpg'  />
         </div>
    </div>
  )
}
