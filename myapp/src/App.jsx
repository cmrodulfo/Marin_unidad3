import { useState } from 'react'
import Header from './Components/Header/Header'
import './App.css'
import ProductDetail from './ProductDetail/ProductDetail'
import { ChakraProvider } from '@chakra-ui/react'

const product = {
  code: "GOW001",
  image: "https://http2.mlstatic.com/D_NQ_NP_790481-MLM32575781979_102019-F.jpg",
  name: "Figura de Kratos",
  description: "Figura coleccionable de Kratos de 25cm",
  price: 49.99,
  stock: 10
}


function App() {
  const [count, setCount] = useState(0)

  return (
    <ChakraProvider>
      <Header />
      <ProductDetail product={product} />
    </ChakraProvider>
  )
}

export default App
