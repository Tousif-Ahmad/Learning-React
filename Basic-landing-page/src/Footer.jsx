import React from 'react'
import Button from './Button'
const Footer = () => {
  return (
     <div className="bg-red-400">
        <footer className="grid grid-cols-5  text-[18px] text-black/80 max-w-[60rem]
         m-auto py-5 max-[768px]:grid-cols-2 max-[500px]:grid-cols-2">
          <h1 className="text-3xl">
            <span className="font-extrabold text-[#8a3829]">T</span>ousif
          </h1>
          <nav className="flex flex-col">
            <h1 className='mb-4 font-bold'>Company</h1>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
            <a href="#">Projects</a>
          </nav>
          <nav className="flex flex-col">
            <h1 className='mb-4 font-bold'>Description</h1>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
            <a href="#">Projects</a>
          </nav>
          <nav className="flex flex-col">
            <h1 className='mb-4 font-bold'>Account Detail</h1>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
            <a href="#">Projects</a>
          </nav>
          <nav className="flex flex-col">
            <h1 className='mb-4 font-bold'>Packages</h1>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
            <a href="#">Projects</a>
          </nav>
         
        </footer>
        <div className='w-full h-1 bg-black'></div>
      </div>
  )
}

export default Footer