import '../styles/globals.css'
import 'react-toastify/dist/ReactToastify.css'

import DefaultLayout from '../components/layout/DefaultLayout'
import UseScrollToTop from '../hooks/useScrollToTop'

function MyApp({ Component, pageProps }) {
  return (
    <div className=' bg-secondary-light dark:bg-primary-dark transition duration-300'>
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>

      <UseScrollToTop />
    </div>
  )
}

export default MyApp
