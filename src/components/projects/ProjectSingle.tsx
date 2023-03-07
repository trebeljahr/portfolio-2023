import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const imageStyle = { maxWidth: '100%', height: 'auto' }

const ProjectSingle = (props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        ease: 'easeInOut',
        duration: 0.7,
        delay: 0.15,
      }}>
      <Link href='/projects/[id]' as={'/projects/' + props.id} aria-label='Single Project' passHref>
        <div className='mb-10 shadow-lg cursor-pointer rounded-xl hover:shadow-xl sm:mb-0 bg-secondary-light dark:bg-ternary-dark'>
          <div>
            <Image src={props.img} className='border-none rounded-t-xl' alt='Single Project' width={100} height={90} />
          </div>
          <div className='px-4 py-6 text-center'>
            <p className='mb-2 text-xl font-general-medium md:text-2xl text-ternary-dark dark:text-ternary-light'>
              {props.title}
            </p>
            <span className='text-lg text-ternary-dark dark:text-ternary-light'>{props.category}</span>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

export default ProjectSingle