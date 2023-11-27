import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Login from '../login/login';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AppContext } from '../../App';


const Layout = ({ children }) => {
    const { isLogin, setIsLogin } = useContext(AppContext)
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark" dir="rtl">
                <Container >
                    <Navbar.Brand href="#home">Welcome </Navbar.Brand>
                    <Nav className="me-auto">
                        <Link to="/">
                            <Nav.Link href="#home">Home</Nav.Link>
                        </Link>
                        <Link to="/articles">
                            <Nav.Link href="#features">Articles</Nav.Link>
                        </Link>
                        <Link to="/createarticle">
                            <Nav.Link href="#features">Make New Article</Nav.Link>
                        </Link>
                        <Link to="/catFact">
                            <Nav.Link href="#features">Facts About Cats</Nav.Link>
                        </Link>
                        <Link to="/makeExcuses">
                            <Nav.Link href="#features">Making Excuses</Nav.Link>
                        </Link>
                        <Link to="/exercises">
                            <Nav.Link href="#features">Exercises</Nav.Link>
                        </Link>
                    </Nav>
                    <Link to="/login">
                        {isLogin ? <span>fatemeh bassati</span> :
                            <Button variant="secondary" onClick={<Login />}>ورود</Button>}
                    </Link>
                    <Button variant="secondary" onClick={() => setIsLogin(false)}>خروج</Button>
                </Container>
            </Navbar>
            <main>{children}</main>
        </>
    )
}

export default Layout;