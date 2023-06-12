'use client'
import { useState } from 'react'
import '../assets/css/global.css'

function Sidebar() {
const [toggle, toggleNav] = useState(false)

const showSidebar = () => toggleNav(!toggle)
return (
<div>
    <section className="sidebar">
        <div className='sidebar_top_nav'>
            <a onClick={showSidebar}>
                <i className="fa-solid fa-bars fa-xl" />
            </a>
        </div>

        <div className='sidebar_lower_links'>
            <a href='mailto:contact@turlxthehuman.com'>
                <i className="fa-solid fa-envelope fa-xl" />
            </a>
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
            <a className='gradient_text' href='/'><img src='/assets/img/profile-picture.jpg' className="home_profile_picture_button_nav_menu"  /></a>
            <a className='gradient_text' href='mailto:contact@turlxthehuman.com'><h2>Contact</h2></a>
            <a className='gradient_text' href='/projects'><h2>Projects</h2></a>
            <a className='gradient_text' href='/blog'><h2>Blog</h2></a>
            {/*<a className='gradient_text' href='/about'><h2>About</h2></a>*/}
        </section>
    </section>

</div>
)
}

export default Sidebar