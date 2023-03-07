import { motion } from 'framer-motion'
import ContactDetails from './ContactDetails'
import ContactForm from './ContactForm'

export function ContactSection() {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          ease: 'easeInOut',
          duration: 0.5,
          delay: 0.1,
        }}
        className='container flex flex-col-reverse py-5 mx-auto lg:flex-row lg:py-10 lg:mt-5'>
        <ContactForm />

        <ContactDetails />
      </motion.div>
    </div>
  )
}
