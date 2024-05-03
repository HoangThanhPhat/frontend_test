import React, {useContext, useState} from "react";
import {Navbar, Nav, Form, FormControl, Button, Badge} from "react-bootstrap"
import {Link} from "react-router-dom"
import { UserContext } from "../../UserContext";
import "bootstrap/dist/css/bootstrap.css"


const NavBar = () => {
    const [search, setSearch] = useState("")
    const [users, setUsers] = useContext(UserContext);

    const hanleOnChangeSearch = (event) => {
        setSearch(event.target.value)
    }

    const filtterUser = (event) => {
        event.preventDefault()
        const filteredUsers = users.data.filter(user => user.username?.toLowerCase() === search.toLowerCase()); 
        setUsers({"data": [...filteredUsers]})
    }


    return (
        <Navbar bg='dark' expand='lg' variant='dark'>
            <Navbar.Brand href='/usermanage'>
                User Manage
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Badge className="mt-2" variant='primary'> Member: {users.data.length} </Badge>
                </Nav>
                <Nav className="mr-auto">
                    <Nav.Link href="/home">Home</Nav.Link>
                </Nav>
                <Form  onSubmit={filtterUser}>
                    <Nav.Link href='/usermanage/adduser'
                          className="btn btn-primary btn-sm mr-4 ">
                        Add User
                    </Nav.Link>
                    <FormControl type='text' placehoder='User Name' className='mr-sm-2' 
                                 value={search} onChange={hanleOnChangeSearch}  />
                    <Button type="submit"  variant="online-primary" className="text-dark bg-light" >
                        Search
                    </Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavBar;