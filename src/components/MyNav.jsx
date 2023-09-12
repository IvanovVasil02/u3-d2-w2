import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



const MyNav = (props)=>{
    return (
        <Navbar expand="lg" className="bg-body-secondary">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="#">About</Nav.Link>   
              <Nav.Link href="#">Browse</Nav.Link> 
             
            </Nav>
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default MyNav;