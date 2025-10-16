import React from 'react'
import Button from './Button'
const Hero = () => {
  return (
    <div className="max-w-[62rem] text-center m-auto p-[8rem]">
        <h1 className="text-6xl font-serif font-bold max-[670px]:text-3xl max-[480px]:text-[16px]">
          The Best way to
          <span className="bg-red-300 rounded-xl px-3">Review</span> Creative
          Assets
        </h1>
        <p className="text-lg my-6 max-[670px]:text-[20px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
          neque fuga quaerat magnam eius deleniti! Distinctio porro eveniet
          laudantium quasi?
        </p>
        <Button title="Join Subscription"/>
      </div>
  )
}

export default Hero