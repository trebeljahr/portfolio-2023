import Image from 'next/image'
import { useState } from 'react'
import { aboutMeData } from '../../data/aboutMeData'
import { motion } from 'framer-motion'

export function AboutMeBio() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className='container mx-auto'>
      <div className='block mt-10 sm:flex sm:gap-10 sm:mt-20'>
        <div className='w-full sm:w-1/4 mb-7 sm:mb-0'>
          <Image
            src='/images/profile.jpeg'
            width='0'
            height='0'
            sizes='(min-width: 1540px) 246px, (min-width: 1280px) 214px, (min-width: 1040px) 166px, (min-width: 780px) 150px, (min-width: 640px) 118px, calc(100vw - 64px)'
            className='w-full h-auto rounded-lg'
            alt='Profile Image'
          />
        </div>

        <div className='w-full text-left font-general-regular sm:w-3/4'>
          {aboutMeData.map((bio) => (
            <p className='mb-4 text-lg text-ternary-dark dark:text-ternary-light' key={bio.id}>
              {bio.bio}
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
