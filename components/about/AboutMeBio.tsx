import Image from 'next/image'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export function AboutMeBio() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className='container mx-auto'>
      <div className='block mt-10 sm:flex sm:gap-10 sm:mt-20'>
        <div id='profile-image' className='w-full sm:w-1/4 mb-7 sm:mb-0'>
          <Image
            src='/images/cropped/profile-books-serious.jpeg'
            width='0'
            height='0'
            sizes='(min-width: 1540px) 246px, (min-width: 1280px) 214px, (min-width: 1040px) 166px, (min-width: 780px) 150px, (min-width: 640px) 118px, calc(100vw - 64px)'
            className='w-full h-auto rounded-lg switchero'
            alt='Profile Image Serious'
          />
          <Image
            src='/images/cropped/profile-books-quirky.jpeg'
            width='0'
            height='0'
            sizes='(min-width: 1540px) 246px, (min-width: 1280px) 214px, (min-width: 1040px) 166px, (min-width: 780px) 150px, (min-width: 640px) 118px, calc(100vw - 64px)'
            className='w-full h-auto rounded-lg hide-switchero'
            alt='Profile Image Quirky'
          />
        </div>

        <div className='w-full text-left sm:w-3/4'>
          <p className='mb-4 text-lg leading-normal text-ternary-dark dark:text-ternary-light'>
            My passion lies in developing innovative and user-friendly applications that have a positive impact on the
            world. I am a natural problem-solver, always striving to improve my skills through new challenges and
            experiences. I specialize in Typescript, Node.js, and React. With my expertise in various programming
            languages, databases, and frameworks, I deliver high-quality solutions that exceed user expectations and
            meet the unique needs of the businesses I work with. For more info about me you can also{' '}
            <Link href='/cv' className='hover-underline-animation'>
              check out my CV.
            </Link>
          </p>
        </div>
      </div>
    </motion.div>
  )
}
