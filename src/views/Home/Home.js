import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
function Home() {
  return (
    <>
     <div>
      <Navbar/>
      </div>
      <div className='relative text-white '>
        <img src='https://t3.ftcdn.net/jpg/03/69/00/58/360_F_369005893_UYbUUUHDiB0HT7vs7EpO0JZ4vf830R5K.jpg' className='w-full blur-sm ' style={{height : "416px"}}/>
        <h1 className='font-semibold text-2xl absolute top-1 right-auto px-96 py-1 '>Welcome to Learn Well School</h1>
        <p className='absolute top-10 right-auto px-48 py-3'>LearnWell School is dedicated to nurturing young minds with a commitment to excellence. Our mission is to provide a comprehensive education that fosters intellectual growth, creativity, and a love for lifelong learning. At LearnWell, we believe in cultivating a supportive and inclusive environment where every student is encouraged to achieve their fullest potential. Join us on a journey of discovery, innovation & academic success</p>

     </div>
    </>
  )
}

export default Home
