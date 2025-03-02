import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './Component/Navbar.jsx'
import Halaman1 from './Component/Halaman1.jsx'
import Halaman2 from './Component/Halaman2.jsx'
import Halaman3 from './Component/Halaman3.jsx'
import Halaman4 from './Component/Halaman4.jsx'
import Halaman5 from './Component/Halaman5.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <Halaman1 />
    <Halaman2 />
    <Halaman3 />
    <Halaman5 />
      </StrictMode>,
)
