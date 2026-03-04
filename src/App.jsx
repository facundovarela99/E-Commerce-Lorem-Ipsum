import './App.css'
import { Navbar } from './components/Navbar.jsx'
import { Footer } from './components/Footer.jsx'
import { ItemListContainer } from './components/ItemListContainer.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { About } from './components/about.jsx'
import { ProductDetail } from './components/productDetail.jsx'
import { Cart } from './components/Cart.jsx'
import { FormCheckout } from './components/FormCheckout.jsx'

function App() {
  return (
    <div className='divRootHijo1'>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<ItemListContainer />}/>
          <Route path='/categoria/:nombreCategoria' element={<ItemListContainer/>}/> 
          <Route path="/producto/:id" element={<ProductDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/carrito" element={<Cart />} />
          <Route path="/checkout" element={<FormCheckout />} />
        </Routes>
      </BrowserRouter>
      <Footer texto="Una promesa es un objeto asíncrono"></Footer>
    </div>
  )
}


export default App
