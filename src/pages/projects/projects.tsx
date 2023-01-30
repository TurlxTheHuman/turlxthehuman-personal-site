import { useState } from 'react'
import '../../assets/css/global.css'

function Projects() {
const [count, setCount] = useState(0)

return (
<section id='project_page'>
    <h1>Projects</h1>
    <p>List of my past and current projects, sites, etc.</p>

    <div className='project_type_divider' />

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
                <a href='https://path.turlxthehuman.com'>
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
            <img src='/assets/img/projects/dropnode.png' alt='project-preview' />
        </div>
        <div className='project_card'>
            <div>
                <h2>as57450.net</h2>
                <p>Autonomous system number display page, displays list of announced ip prefixes.</p>
            </div>
            <div className='project_card_icons'>
                <a className='not_available_strikethrough'>
                    <i className="fa-brands fa-github fa-xl" />
                </a>
                <a href='https://as57450.net'>
                    <i className="fa-solid fa-eye fa-lg" />
                </a>
            </div>
            <img src='/assets/img/projects/nginx-not-found.png' alt='project-preview' />
        </div>
    </div>
    
    <div className='project_type_divider' />

    <div className='project_grid'>
        <div className='project_card'>
            <div>
                <h2>DHTExporter</h2>
                <p>Esp8266 temperature and humidity sensor using the DHT11 sensor, all data is available for prometheus to grab.</p>
            </div>
            <div className='project_card_icons'>
                <a href='https://github.com/TurlxTheHuman/dhtexporter'>
                    <i className="fa-brands fa-github fa-xl" />
                </a>
            </div>
            <img src='/assets/img/projects/dhtexporter.png' alt='project-preview' />
        </div>
        
        <div className='project_card'>
            <div>
                <h2>IPMIFan</h2>
                <p>Fan speed control program using ipmitool, used to control fan speed for my dell poweredge r410.</p>
            </div>
            <div className='project_card_icons'>
                <a href='https://github.com/TurlxTheHuman/ipmifan'>
                    <i className="fa-brands fa-github fa-xl" />
                </a>
            </div>
            <img src='/assets/img/projects/dhtexporter.png' alt='project-preview' />
        </div>
        
    </div>

    <div className='project_type_divider' />

</section>
)
}

export default Projects