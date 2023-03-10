import { motion } from 'framer-motion'
import Image from 'next/image'

const ProjectSingle = (props: { url: string; img: string; title: string; category: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        ease: 'easeInOut',
        duration: 0.7,
        delay: 0.15,
      }}>
      <a href={props.url} aria-label='Single Project' target='_blank' rel='noreferrer'>
        <div className='mb-10 shadow-lg cursor-pointer rounded-xl hover:shadow-xl sm:mb-0 bg-secondary-light dark:bg-ternary-dark'>
          <div>
            <Image
              src={props.img}
              alt='Single Project'
              width='0'
              height='0'
              sizes='(min-width: 1540px) 630px, (min-width: 1280px) 534px, (min-width: 1040px) 422px, (min-width: 780px) 704px, (min-width: 640px) 576px, calc(100vw - 32px)'
              className='w-full h-auto border-none rounded-t-xl'
            />
          </div>
          <div className='px-4 py-6 text-center'>
            <p className='mb-2 text-xl font-general-medium md:text-2xl text-ternary-dark dark:text-ternary-light'>
              {props.title}
            </p>
            <span className='text-lg text-ternary-dark dark:text-ternary-light'>{props.category}</span>
          </div>
        </div>
      </a>
    </motion.div>
  )
}

export default ProjectSingle
