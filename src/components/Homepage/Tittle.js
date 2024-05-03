import Reactm, {useState} from "react";
import {Navbar, Nav, Form, FormControl, Button, Badge} from "react-bootstrap"
import {Link} from "react-router-dom"



const Title = () => {
    return (
        <Navbar bg="dark" expand='lg' variant='dark'>
            <Navbar.Brand href="/home">phatAI</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="/usermanage">Pricing</Nav.Link>
            </Nav>
        </Navbar>
    );
}
export default Title