import React from 'react'
import Button from './Button'
const Header = () => {
  return (
     <div className="bg-red-400">
        <header className="max-[440]: px-6 flex justify-between items-center text-[18px] text-black/80 max-w-[60rem]
         m-auto py-5">
          <h1 className="text-3xl">
            <span className="font-extrabold text-[#8a3829]">T</span>ousif
          </h1>
          <nav className="max-[768px]:hidden flex gap-10">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
            <a href="#">Projects</a>
          </nav>
          <Button title="JOIN US"/>
        </header>
      </div>
  )
}

export default Header