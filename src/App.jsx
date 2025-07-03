import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/fonts.css'
import './styles/reset.css'
import './App.css'
import { Main } from './components/Main.jsx'
import {Header} from "./components/Header.jsx";


createRoot(document.getElementById('app')).render(
  <StrictMode>
      <Header />
      <Main />
  </StrictMode>,
)