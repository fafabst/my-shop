import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Login from './login';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AppContext } from '../App';

const Header = () => {
    const { isLogin } = useContext(AppContext);
    return (
        <Navbar bg="dark" data-bs-theme="dark" dir="rtl">
            <Container >
                <Navbar.Brand href="#home">خوش آمدید</Navbar.Brand>
                <Nav className="me-auto">
                    <Link to="/">
                        <Nav.Link href="#home">خانه</Nav.Link>
                    </Link>
                    <Link to="/article">
                        <Nav.Link href="#features">مقاله</Nav.Link>
                    </Link>
                </Nav>
                <Link to="/login">
                    {isLogin ? <span>fatemeh bassati</span> :
                        <Button variant="secondary" onClick={<Login />}>ورود</Button>}
                </Link>
            </Container>
        </Navbar>
    );
}

export default Header;