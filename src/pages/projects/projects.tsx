import { useState } from 'react'
import '../../assets/css/global.css'

function Projects() {
const [count, setCount] = useState(0)

return (
<section id='project_page'>
    <div className='project_grid'>

        <div className='project_card'>
            <div>
                <h2>Path Network</h2>
                <p>A website for a network security company that specializes in ddos protection.</p>
            </div>
            <div className='project_card_icons'>
                <a className='not_available_strikethrough'>
                    <i className="fa-brands fa-github fa-xl" />
                </a>
                <a href='https://path.net'>
                    <i className="fa-solid fa-eye fa-lg" />
                </a>
            </div>
            <img src='/assets/img/projects/path-network.png' alt='project-preview' />
        </div>
        <div className='project_card'>
            <div>
                <h2>Dropnode Hosting</h2>
                <p>My server hosting site that offers cheap and reliable vps and game server hosting.</p>
            </div>
            <div className='project_card_icons'>
                <a className='not_available_strikethrough'>
                    <i className="fa-brands fa-github fa-xl" />
                </a>
                <a href='https://dropnode.net'>
                    <i className="fa-solid fa-eye fa-lg" />
                </a>
            </div>
            <img src='/assets/img/projects/nginx-not-found.png' alt='project-preview' />
        </div>
        
    </div>
</section>
)
}

export default Projects