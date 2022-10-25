import { useState } from 'react'
import '../../assets/css/global.css'

function Main() {
  const [count, setCount] = useState(0)

  return (
    <div className='index_page_container'>
      <section id='hero' className='index_page_content'>
        <h1>Name</h1>
      </section>
      <section id='about' className='index_page_content'>
          <h1>About</h1>
      </section>
      <section id='contact' className='index_page_content'>
          <h1>Contact</h1>
      </section>
    </div>
  )
}

export default Main
