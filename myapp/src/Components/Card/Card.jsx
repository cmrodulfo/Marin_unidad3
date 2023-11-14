import { Card, ListGroup } from 'react-bootstrap';


function KitchenSinkExample({ imagen, nombre, descripcion, cantidad, precio, codigo }) {
  
  return (
    
      <Card className='container mx-auto mt-5' style={{ width: '18rem' }}>
        <Card.Img variant="top" src={imagen} />
        <Card.Body>
          <Card.Title>{nombre}</Card.Title>
          <Card.Text>
            {descripcion}
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Codigo producto: {codigo} </ListGroup.Item>
          <ListGroup.Item>Precio: ${precio} </ListGroup.Item>
          <ListGroup.Item>Stock: {cantidad}</ListGroup.Item>
        </ListGroup>
      </Card>
    )
  ;
}

export default KitchenSinkExample;