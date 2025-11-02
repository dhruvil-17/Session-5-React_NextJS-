import React from 'react'
import NewProject from '../assets/project-img/new-project.png'
import Project1 from '../assets/project-img/project-1.png'
import Project2 from '../assets/project-img/project-2.png'
import Underline from '../assets/project-img/underline.png'
export default function Projects() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-12 w-3/4 ">
        <div className='grid justify-center '>
          <h3 className="text-4xl font-bold text-center">OUR PROJECTS</h3>
          <img src={Underline} alt="" className='w-65' />
        </div>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 ">
          <div className="col-span-1 md:col-span-1 relative overflow-hidden rounded-md  hover:scale-105 transition-transform duration-300">
            <img src={NewProject} alt="project" className="h-full w-full object-cover" />
          </div>
          <div className="grid grid-rows-2 gap-4 ">
            <img src={Project1} alt="p1" className="w-full h-full object-cover rounded-md hover:scale-105 transition-transform duration-300" />
            <img src={Project2} alt="p2" className="w-full h-full object-cover rounded-md hover:scale-105 transition-transform duration-300" />
          </div>
        </div>
      </div>
    </section>
  )
}
