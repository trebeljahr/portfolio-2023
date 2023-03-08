import { useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import ProjectSingle from './ProjectSingle'
import { projectsData } from '../../data/projectsData'

function ProjectsGrid() {
  return (
    <section className='py-5 mt-5 sm:py-10 sm:mt-10'>
      <div className='text-center'>
        <h3 className='mb-1 text-2xl font-general-medium sm:text-4xl text-ternary-dark dark:text-ternary-light'>
          Projects portfolio
        </h3>
      </div>

      <div className='mt-6 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 sm:gap-5'>
        {projectsData.map((project, index) => (
          <ProjectSingle key={index} {...project} />
        ))}
      </div>
    </section>
  )
}

export default ProjectsGrid
