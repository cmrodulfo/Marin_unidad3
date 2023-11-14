import { Card, ListGroup } from 'react-bootstrap';


function KitchenSinkExample({ products }) {
  console.log(products)
  return (
    
      <Card className='mx-auto mt-5' style={{ width: '18rem' }}>
        <Card.Img variant="top" src={products.imagen} />
        <Card.Body>
          <Card.Title>{products.nombre}</Card.Title>
          <Card.Text>
            {products.descripcion}
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Codigo producto: {products.codigo} </ListGroup.Item>
          <ListGroup.Item>Precio: ${products.precio} </ListGroup.Item>
          <ListGroup.Item>Stock: {products.cantidad}</ListGroup.Item>
        </ListGroup>
      </Card>
    )
  ;
}

export default KitchenSinkExample;