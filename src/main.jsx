import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import RouterPage from '../router.jsx'
import SideBarComponents from './components/sidebar/SideBar.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <>
  {/* <SideBarComponents/> */}
  <BrowserRouter>

  <div className='min-w-full'>
    <RouterPage />
  </div>
  </BrowserRouter>
  </>
  // </React.StrictMode>,
)
