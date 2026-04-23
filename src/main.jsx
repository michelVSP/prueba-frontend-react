import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Outlet, Route, Routes, Link } from 'react-router-dom'

import { Header } from './components/Header.jsx'

import App from './components/App.jsx'
import Menu from './components/Menu.jsx'
import MiForm from './components/MiForm.jsx'

import PanelEstructura from './components/PanelEstructura.jsx'

import  "./App.css";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <BrowserRouter>
      <Header/>  
      <Menu/>
      
      <Routes>
          <Route path="/" element={<PanelEstructura />} /> 
          <Route path="pnl" element={<PanelEstructura />} />
          <Route path="app" element={<App />} />
          <Route path="miForm" element={<MiForm />} />
          
          <Route path="*" element={<h2>Página no encontrada</h2>} />
      </Routes>

           
    </BrowserRouter>


  </StrictMode>,
)
