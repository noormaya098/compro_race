import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import RouterPage from '../router.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <BrowserRouter>
  <div className='min-w-full'>
    <RouterPage />
  </div>
  </BrowserRouter>
  // </React.StrictMode>,
)
