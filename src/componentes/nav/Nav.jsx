import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';   
import { NavLink } from 'react-router-dom';


function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container className='text-center'>
        <Navbar.Brand as={NavLink} to='/' id='txt_home'>Home</Navbar.Brand>
          <Nav className='me-center'>
                <Nav.Link href="/Contato">Contato</Nav.Link>
                <Nav.Link href="/Quem_somos">Quem somos</Nav.Link>
                <Nav.Link href="/Como_funciona">Como Funciona</Nav.Link>
                <Nav.Link href="/calculo">Cálculo</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
    </>
  );
}

export default ColorSchemesExample;