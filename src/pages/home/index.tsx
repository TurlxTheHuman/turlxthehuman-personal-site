import { useState, useCallback } from 'react';
import '../../assets/css/global.css'
import Particle from '../../components/particles';



function Main() {
  const [count, setCount] = useState(0)

  return (
    <div className='index_page_container'>
        <Particle />
            
      <section id='hero' className='index_page_content'>
        <img src='/assets/img/coolturtle.webp' className='cool_turtle' />
        <h1>TurlxTheHuman</h1>
        <p>- Small Developer -</p>
      </section>
    </div>
  )
}

export default Main
