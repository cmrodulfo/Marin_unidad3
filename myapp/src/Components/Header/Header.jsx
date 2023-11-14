import { Nav, Container, Navbar } from 'react-bootstrap';

function Header() {
  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">GoW Store</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#features">Productos</Nav.Link>
            <Nav.Link href="#pricing">Ofertas</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;