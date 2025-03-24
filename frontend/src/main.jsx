import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import PaginaInicial from './pages/pagina-inicial.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PaginaInicial />
  </StrictMode>,
)
