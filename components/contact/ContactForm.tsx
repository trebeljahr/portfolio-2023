import { BsFillSendFill } from 'react-icons/bs'
import FormInput from '../reusable/FormInput'

export function ContactForm() {
  return (
    <div id='contact-form' className='w-full lg:w-1/2'>
      <div className='leading-loose'>
        <form
          onSubmit={(e) => {
            e.preventDefault()
          }}
          className='max-w-xl p-6 m-4 text-left shadow-xl sm:p-10 bg-secondary-light dark:bg-secondary-dark rounded-xl'>
          <p className='mb-8 text-2xl font-general-medium text-primary-dark dark:text-primary-light'>Contact Form</p>

          <FormInput
            inputLabel='Full Name'
            labelFor='name'
            inputType='text'
            inputId='name'
            inputName='name'
            placeholderText='Your Name'
            ariaLabelName='Name'
          />
          <FormInput
            inputLabel='Email'
            labelFor='email'
            inputType='email'
            inputId='email'
            inputName='email'
            placeholderText='Your email'
            ariaLabelName='Email'
          />
          <FormInput
            inputLabel='Subject'
            labelFor='subject'
            inputType='text'
            inputId='subject'
            inputName='subject'
            placeholderText='Subject'
            ariaLabelName='Subject'
          />

          <div className='mt-6'>
            <label className='block mb-2 text-lg text-primary-dark dark:text-primary-light' htmlFor='message'>
              Message
            </label>
            <textarea
              className='w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md'
              id='message'
              name='message'
              cols={14}
              rows={6}
              aria-label='Message'
            />
          </div>

          <div className='mt-6'>
            <button className='flex items-center justify-center mt-12 mb-6 text-lg text-gray-600 border border-indigo-200 rounded-lg shadow-lg font-general-medium w-36 sm:w-48 sm:mb-0 dark:border-ternary-dark py-2.5 sm:py-3  bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:ring-darkblue hover:border-darkblue hover:bg-darkblue hover:text-white duration-500'>
              <BsFillSendFill className='w-5 h-5 ml-0 mr-2 sm:ml-1 sm:mr-3 sn:w-6 sm:h-6 duration-100' />
              <span className='text-sm sm:text-lg duration-100'>Send Message</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
