import { motion } from 'framer-motion'
import AboutClients from './AboutClients'
import AboutCounter from './AboutCounter'
import AboutMeBio from './AboutMeBio'

export function AboutSections() {
  return (
    <div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className='container mx-auto'>
        <AboutMeBio />
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
        <AboutCounter />
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className='container mx-auto'>
        <AboutClients />
      </motion.div>
    </div>
  )
}
