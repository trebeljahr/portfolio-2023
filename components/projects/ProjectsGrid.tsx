import { useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import ProjectSingle from './ProjectSingle'
import { projectsData } from '../../data/projectsData'
import ProjectsFilter from './ProjectsFilter'

function ProjectsGrid() {
  const [selectProject, setSelectProject] = useState()

  const selectProjectsByCategory = projectsData.filter((item) => {
    let category = item.category.charAt(0).toUpperCase() + item.category.slice(1)
    return category.includes(selectProject)
  })

  return (
    <section className='py-5 mt-5 sm:py-10 sm:mt-10'>
      <div className='text-center'>
        <p className='mb-1 text-2xl font-general-medium sm:text-4xl text-ternary-dark dark:text-ternary-light'>
          Projects portfolio
        </p>
      </div>

      <div className='mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:gap-5'>
        {selectProject
          ? selectProjectsByCategory.map((project, index) => {
              return <ProjectSingle key={index} {...project} />
            })
          : projectsData.map((project, index) => <ProjectSingle key={index} {...project} />)}
      </div>
    </section>
  )
}

export default ProjectsGrid
