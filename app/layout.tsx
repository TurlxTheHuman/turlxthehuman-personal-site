import { FC, ReactNode } from 'react';
import './assets/css/global.css';
import Sidebar from './components/sidebar';



interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <html className='layout-bg'>
    <head>
      <title>TurlxTheHuman</title>
      <link rel="icon" href="/assets/img/favicon.ico" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" />
    </head>
    <body>
      <Sidebar />
      {children}
    
    </body>
    </html>
  )
}

export default Layout;