import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css'
import App from './App.tsx'
import Body from './Body.tsx'
import Footer from './Footer.tsx'
import Header from './Header.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <Header />
    <Body />
    <Footer />
    
  </StrictMode>,
)
