import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css'
import { useNavigate } from 'react-router-dom';


const NavBar = () => {
    const navigation = useNavigate() ;

    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand onClick={()=> navigation('/')}>Home</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link onClick={()=> navigation('/login')}>Login</Nav.Link>
                        <Nav.Link onClick={()=> navigation('/registration')}>Registration</Nav.Link>
                        <Nav.Link onClick={()=> navigation('/about')}>About Us</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
           
        </>
    )
}
export default NavBar