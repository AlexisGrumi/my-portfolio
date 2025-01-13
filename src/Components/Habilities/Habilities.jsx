import React from 'react'

// Logos
import Docker from 'assets/Icon/Docker.svg'
import ReactJs from 'assets/Icon/ReactJs.svg'
import JS from 'assets/Icon/Js.svg'
import TS from 'assets/Icon/Ts.svg'
import Angular from 'assets/Icon/Angular.svg'
import NodeJs from 'assets/Icon/NodeJs.svg'
import HTML from 'assets/Icon/HTML.svg'
import CSS from 'assets/Icon/CSS.svg'
import TailwindCss from 'assets/Icon/TailwindCss.svg'
import Figma from 'assets/Icon/Figma.svg'
import GitHub from 'assets/Icon/GitHub.svg'
import Git from 'assets/Icon/Git.svg'
import MongoDB from 'assets/Icon/MongoDB.svg'
import GCP from 'assets/Icon/GCP.svg'
import Firebase from 'assets/Icon/Firebase.svg'
function Habilities() {

  const projectsData = [
    {
      image: Docker,
      title: 'Docker',
    },
    {
      image: ReactJs,
      title: 'ReactJs',
    },
    {
      image: JS,
      title: 'JavaScript',
    },
    {
      image: Angular,
      title: 'Angular'
    },
    {
      image: TS,
      title: 'TypeScript',
    },
    {
      image: NodeJs,
      title: 'NodeJs',
    },
    
    {
      image: MongoDB,
      title: 'MongoDB'
    },
    {
      image: GCP,
      title: 'GCP'
    },
    {
      image: Firebase,
      title: 'Firebase'
    },
    {
      image: HTML,
      title: 'HTML',
    },
    {
      image: CSS,
      title: 'CSS',
    },
    {
      image: TailwindCss,
      title: 'TailwindCss'
    },
    {
      image: GitHub,
      title: 'GitHub',
    },
    {
      image: Git,
      title: 'Git'
    },
    {
      image: Figma,
      title: 'Figma',
    }
  ];


  return (
    <div id='Hablities' className='flex flex-col items-center mb-20 text-white'>
      <div className='text-3xl mb-6 flex flex-col items-center'>
        HABILIDADES
        <h1 className='flex p-1 bg-fourth rounded-lg shadow-lg neon-effect text-center w-10/12' />
      </div>

      <div className='grid grid-cols-5'>
        {projectsData.map((project, index) => (
          <div key={index} className='m-2 flex flex-row items-center p-2 border-[3px] border-[#293548] rounded-lg'>
            <img
              src={project.image}
              className='w-full mr-2 max-w-[40px] flex justify-self-start'
            />
            <h2 className='text-sm text-nowrap font-semibold'>{project.title}</h2>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Habilities