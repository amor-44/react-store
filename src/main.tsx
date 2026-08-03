import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ThemeProvider } from './context/ThemeProvider.tsx'
import { CartProvider } from './context/CartContext.tsx'
import {BrowserRouter, Routes, Route} from "react-router"
import Cart from './pages/Cart.tsx'
import Products from './pages/Products.tsx'
import About from './pages/About.tsx'
import Contact from './pages/Contact.tsx'
import ProductDetails from './pages/ProductDetails.tsx'
import MainLayout from './components/layout/Navbar/MainLayout.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <ThemeProvider>
    <CartProvider>
<Routes>
  <Route element={<MainLayout />}>
    <Route path="/" element={<App />} />
    <Route path="/products" element={<Products />} />
    <Route path="/products/:id" element={<ProductDetails />} />
    <Route path="/cart" element={<Cart />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
  </Route>
</Routes>
    </CartProvider>
    </ThemeProvider>  
    </BrowserRouter>
  </StrictMode>,
)
