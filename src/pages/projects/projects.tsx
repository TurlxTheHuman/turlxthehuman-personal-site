import { useState } from 'react'
import '../../assets/css/global.css'

function Projects() {
  const [count, setCount] = useState(0)

  return (
    <section id='project_page'>
      <div className='project_grid'>
        <div className='project_card'>
            <h2>Project Title</h2>
            <p>Project Description</p>
            <img src='' alt='project-preview' />
        </div>
        <div className='project_card'>
            <h2>Project Title</h2>
            <p>Project Description</p>
            <img src='' alt='project-preview' />
        </div>
        <div className='project_card'>
            <h2>Project Title</h2>
            <p>Project Description</p>
            <img src='' alt='project-preview' />
        </div>
        <div className='project_card'>
            <h2>Project Title</h2>
            <p>Project Description</p>
            <img src='' alt='project-preview' />
        </div>
      </div>
    </section>
  )
}

export default Projects
