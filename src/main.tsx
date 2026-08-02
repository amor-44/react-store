import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ThemeProvider } from './context/ThemeProvider.tsx'
import { CartProvider } from './context/CartContext.tsx'
import {BrowserRouter} from "react-router"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <ThemeProvider>
    <CartProvider>
    <App />
    </CartProvider>
    </ThemeProvider>  
    </BrowserRouter>
  </StrictMode>,
)
