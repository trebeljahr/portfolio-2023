import { AboutClients } from 'components/about/AboutClients'
import { AboutMeBio } from 'components/about/AboutMeBio'
import { ContactSection } from 'components/contact'
import PagesMetaHead from '../components/PagesMetaHead'
import ProjectsGrid from '../components/projects/ProjectsGrid'
import AppBanner from '../components/shared/AppBanner'

export default function Home() {
  return (
    <div className='container mx-auto'>
      <PagesMetaHead title='Home' />
      <AppBanner />

      <AboutMeBio />

      <ProjectsGrid />

      <AboutClients />

      <ContactSection />
    </div>
  )
}
