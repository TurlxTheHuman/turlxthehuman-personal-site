import { useState } from 'react'
import '../../assets/css/global.css'

function Main() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <section id='hero'>
        <h1>TurlxTheHuman</h1>
      </section>
    </div>
  )
}

export default Main
