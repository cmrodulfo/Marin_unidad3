import { useState } from 'react'
import Header from './Components/Header/Header'
import './App.css'
import ProductDetail from './Components/ProductDetail/ProductDetail'
import { ChakraProvider } from '@chakra-ui/react'
import Footer from './Components/Footer/Footer'

const product = {
  code: "GOW001",
  image: "https://http2.mlstatic.com/D_NQ_NP_790481-MLM32575781979_102019-F.jpg",
  name: "Figura de Kratos",
  description: "Figura coleccionable de Kratos de 25cm",
  price: 49.99,
  stock: 10
}


function App() {
  
  return (
  
    <ChakraProvider>
      <Header />
      <ProductDetail product={product} />
      <Footer/>
    </ChakraProvider>
  )
}

export default App
