import { useCountUp } from 'react-countup'
import CounterItem from './CounterItem'
import { motion } from 'framer-motion'

export function AboutCounter() {
  useCountUp({ ref: 'experienceCounter', end: 4, duration: 2 })
  useCountUp({ ref: 'githubStarsCounter', end: 1, duration: 2 })
  useCountUp({ ref: 'feedbackCounter', end: 92, duration: 2 })
  useCountUp({ ref: 'projectsCounter', end: 77, duration: 2 })

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <div className='mt-10 sm:mt-20 bg-primary-light dark:bg-ternary-dark shadow-sm'>
        <div className='container items-center block py-20 mx-auto font-general-medium sm:flex sm:justify-between'>
          <CounterItem title='Years of experience' counter={<span id='experienceCounter' />} measurement='' />

          <CounterItem title='Stars on GitHub' counter={<span id='githubStarsCounter' />} measurement='k+' />

          <CounterItem title='Positive feedback' counter={<span id='feedbackCounter' />} measurement='%' />

          <CounterItem title='Projects completed' counter={<span id='projectsCounter' />} measurement='%' />
        </div>
      </div>
    </motion.div>
  )
}
