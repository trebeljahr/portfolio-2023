function AppFooterCopyright() {
  return (
    <div className='flex items-center justify-center text-center font-general-regular'>
      <div className='text-lg text-ternary-dark dark:text-ternary-light'>
        &copy; {new Date().getFullYear()}.{' '}
        <a
          href='https://trebeljahr.com'
          target='__blank'
          className='ml-1 font-medium uppercase text-secondary-dark dark:text-secondary-light hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 duration-500'>
          Rico Trebeljahr
        </a>
      </div>
    </div>
  )
}

export default AppFooterCopyright
