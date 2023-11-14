import { useState } from 'react'
import Header from './Components/Header/Header'
import Card from './Components/Card/Card'
import './App.css'

const productos = [
  {
    codigo: "GOW001",
    imagen: "https://http2.mlstatic.com/D_NQ_NP_790481-MLM32575781979_102019-F.jpg",
    nombre: "Figura de Kratos",
    descripcion: "Figura coleccionable de Kratos de 25cm",
    precio: 49.99,
    cantidad: 10
  },
  {
    codigo: "GOW002",
    imagen: "https://th.bing.com/th/id/R.df063a61e3fcccc30f5eb75cd365c9e2?rik=Okv8jYpZ%2fmhxjQ&pid=ImgRaw&r=0",
    nombre: "Libro de arte de God of War",
    descripcion: "Libro de arte conceptual del videojuego God of War",
    precio: 29.99,
    cantidad: 5
  },
  {
    codigo: "GOW003",
    imagen: "https://th.bing.com/th/id/OIP.00TxBytSqX-AlobQEt-c1AHaG2?pid=ImgDet&rs=1",
    nombre: "Remera de God of War",
    descripcion: "Remera de God of War color negro",
    precio: 19.99,
    cantidad: 20
  }
]

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      {productos.map(producto=><Card imagen={producto.imagen} nombre={producto.nombre} descripcion={producto.descripcion} cantidad={producto.cantidad} precio={producto.precio} codigo={producto.codigo} /> )  }
    </>
  )
}

export default App
