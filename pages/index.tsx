import { AboutSections } from 'components/about'
import { ContactSection } from 'components/contact'
import PagesMetaHead from '../components/PagesMetaHead'
import ProjectsGrid from '../components/projects/ProjectsGrid'
import AppBanner from '../components/shared/AppBanner'

export default function Home() {
  return (
    <div className='container mx-auto'>
      <PagesMetaHead title='Home' />
      <AppBanner />

      <ProjectsGrid />
      <AboutSections />
      <ContactSection />
    </div>
  )
}
