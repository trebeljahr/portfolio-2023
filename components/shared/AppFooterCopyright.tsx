function AppFooterCopyright() {
  return (
    <div className='flex items-center justify-center text-center font-general-regular'>
      <div className='text-lg text-ternary-dark dark:text-ternary-light'>
        &copy; {new Date().getFullYear()}
        <a
          href='https://github.com/realstoman/nextjs-tailwindcss-portfolio'
          target='__blank'
          className='ml-1 hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 duration-500'>
          Next.js & Tailwind CSS Portfolio
        </a>
        .{' '}
        <a
          href='https://stoman.me'
          target='__blank'
          className='ml-1 font-medium uppercase text-secondary-dark dark:text-secondary-light hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 duration-500'>
          Stoman
        </a>
      </div>
    </div>
  )
}

export default AppFooterCopyright
