import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import AOS from 'aos'
import 'aos/dist/aos.css';

AOS.init({
  // once: true,
  // delay: 50,
  duration: 300
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
