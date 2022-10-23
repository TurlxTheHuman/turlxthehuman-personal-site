import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './assets/css/global.css'

/* COMPONENT IMPORTS */
import Header from './components/header';
import Footer from './components/footer';
import Sidebar from './components/sidebar';

/* CONTENT IMPORTS */
import Main from './pages/home/index';

import NotFound from './pages/misc/404';

function App() {
const [count, setCount] = useState(0)

return (
<Router>
  <div>

    <head>
      <title>TurlxTheHuman</title>
      <link rel="icon" href="/assets/img/favicon.ico" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" />
    </head>

    <Header />
    <Sidebar />
    <Routes>
      <Route path="/" element={
        <div>
          <Main />
        </div>
      }/>


  <Route path="*" element={<NotFound />}/>

  </Routes>
  <Footer />
  </div>
</Router>
)
}

export default App