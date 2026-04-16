import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import { BrowserRouter, Outlet, Route, Routes, Link } from 'react-router-dom'
import PanelEstructura from './components/PanelEstructura.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <h1>Mi Panel Estructura </h1>
    
    <BrowserRouter>
        <ul>
          <li>
            <Link to={'/'}> panel Estructura  </Link>
          </li>

        <li>  
            <Link to={'/app'}> App  </Link>
        </li>
      </ul>

      <Routes>
          <Route path="/" element={<PanelEstructura />} /> 
          <Route path="pnl" element={<PanelEstructura />} />
          <Route path="app" element={<App />} />
           <Route path="*" element={<h2>Página no encontrada</h2>} />
      </Routes>

           
    </BrowserRouter>

   <Outlet></Outlet>

  </StrictMode>,
)
