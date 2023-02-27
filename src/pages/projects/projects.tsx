import { useState } from 'react'
import '../../assets/css/global.css'
import projects from './projects.json'

function Projects() {
const [count, setCount] = useState(0)








return (




<section id='project_page'>
    <h1>Projects</h1>
    <p>List of my past and current projects, sites, etc.</p>

    <div className='project_type_divider' />

    <div className='project_grid'>
        {projects.web_projects.map((project) => (
        <div className='project_card'>
            <div>
                <h2>{project.title}</h2>
                <p>{project.description}</p>
            </div>
            <div className='project_card_icons'>
                {project.github.enabled == false ? (
                    <a className='not_available_strikethrough'>
                    <i className="fa-brands fa-github fa-xl" />
                    </a>
                ) : (
                    <a href={project.github.href}>
                    <i className="fa-brands fa-github fa-xl" />
                    </a>
                )}

                {project.product.enabled == false ? (
                    <a className='not_available_strikethrough'>
                        <i className="fa-solid fa-eye fa-lg" />
                    </a>
                ) : (
                    <a href={project.product.href}>
                        <i className="fa-solid fa-eye fa-lg" />
                    </a>
                )}
            </div>
            <img src={project.backgroundImage} alt='project-preview' />
        </div>

        ))}

    </div>

    <div className='project_type_divider' />

    <div className='project_grid'>
        {projects.misc_projects.map((project) => (
        <div className='project_card'>
            <div>
                <h2>{project.title}</h2>
                <p>{project.description}</p>
            </div>
            <div className='project_card_icons'>
                {project.github.enabled == false ? (
                    <a className='not_available_strikethrough'>
                    <i className="fa-brands fa-github fa-xl" />
                    </a>
                ) : (
                    <a href={project.github.href}>
                    <i className="fa-brands fa-github fa-xl" />
                    </a>
                )}

                {project.product.enabled == false ? (
                    <a className='not_available_strikethrough'>
                        <i className="fa-solid fa-eye fa-lg" />
                    </a>
                ) : (
                    <a href={project.product.href}>
                        <i className="fa-solid fa-eye fa-lg" />
                    </a>
                )}
            </div>
            <img src={project.backgroundImage} alt='project-preview' />
        </div>

        ))}

    </div>

    <div className='project_type_divider' />

</section>
)
}

export default Projects