import { useState } from 'react'
import '../assets/css/global.css'

function Sidebar() {
const [toggle, toggleNav] = useState(false)

const showSidebar = () => toggleNav(!toggle)

console.log(showSidebar)
return (
<div>
    <section className="sidebar">
        <div className='sidebar_top_nav'>
            <a onClick={showSidebar}>
                <i className="fa-solid fa-bars fa-xl" />
            </a>
        </div>

        <div className='sidebar_lower_links'>
            <a href='https://instagram.com/tur_lx'>
                <i className="fa-brands fa-instagram fa-xl" />
            </a>
            <a href='https://github.com/TurlxTheHuman'>
                <i className="fa-brands fa-github fa-xl" />
            </a>
            <a href='https://discord.gg/VfhrGySMTB'>
                <i className="fa-brands fa-discord fa-lg" />
            </a>
            <a href='/'>
                <img src='/assets/img/profile-picture.jpg' className="home_profile_picture_button"  />
            </a>
        </div>

    </section>


    <section className={toggle ? 'side_nav_menu active' : 'side_nav_menu close' }>
        <div className='sidebar_top_nav'>
            <a onClick={showSidebar}>
                <i className="fa-solid fa-x fa-xl" />
            </a>
        </div>
        <section className='nav_link_container'>
            <a className='gradient_text' href='#contact'><h1>CONTACT</h1></a>
            <a className='gradient_text' href='#projects'><h1>PROJECTS</h1></a>
            <a className='gradient_text' href='#about'><h1>ABOUT</h1></a>
        </section>
    </section>

</div>
)
}

export default Sidebar