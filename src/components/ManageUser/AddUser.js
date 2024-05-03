import React, {useState} from "react";
import {Form, Button, Card} from "react-bootstrap";

const AddUser = () => {

    const [UserInfo, setUserInfo] = useState({
        Username: "",
        Password: "",
        Firstname: "",
        Lastname: "",
        DoB: "",
        Address: "",
        Email: "",
        Phone_number: "",
        RoleID: "",

    })

    const updateForm = (e) => {
        setUserInfo(
            {...UserInfo, [e.target.name] : e.target.value}
        )

    }

    const postData = async (e) => {
        e.preventDefault();
        console.log(UserInfo)
    
        const url = "http://127.0.0.1:8000/user/" 
        // + productInfo['Supplier'] 

        const response = await fetch(
            url, {
                method: 'POST',
                mode: 'cors',
                cache: 'no-cache',
                credentials: 'same-origin', 
                headers: {
                'Content-Type': 'application/json'
                },
                redirect: 'follow',
                referrerPolicy: 'no-referrer', 
                body: JSON.stringify({
                    "username": UserInfo['Username'],
                    "password": UserInfo['Password'],
                    "firstname": UserInfo['Firstname'],
                    "lastname": UserInfo['Lastname'],
                    "DoB": UserInfo['DoB'],
                    "address": UserInfo['Address'],
                    "email": UserInfo['Email'],
                    "phone_number": UserInfo['Phone_number'],
                    "roleID": UserInfo['RoleID']
                }) 
            });
        response.json().then(response => {
            if (response.status === 'ok') {
                alert("User added successfully")
            } else {
                alert("Failed to add User")
            }
        });
        setUserInfo({
            Username: "",
            Password: "",
            Firstname: "",
            Lastname: "",
            DoB: "",
            Address: "",
            Email: "",
            Phone_number: "",
            RoleID: ""
        });
    }

    return(
        <Card >
            <Card.Body>
                <Form onSubmit = {postData}>
                    <Form.Group controlId="Username">
                        <Form.Label>User Name</Form.Label>
                        <Form.Control type="text" name="Username" 
                            value={UserInfo.Username} onChange = {updateForm} placeholder="User Name" />
                    </Form.Group>

                    <Form.Group controlId="Password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="number" name="Password"
                            value={UserInfo.Password} onChange = {updateForm}  placeholder="Password" />
                    </Form.Group>

                    <Form.Group controlId="Firstname">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" name="Firstname" 
                            value={UserInfo.Firstname} onChange = {updateForm}  placeholder="First Name" />
                    </Form.Group>

                    <Form.Group controlId="Lastname">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" name="Lastname" 
                            value={UserInfo.Lastname} onChange = {updateForm}  placeholder="Last Name" />
                    </Form.Group>

                    <Form.Group controlId="DoB">
                        <Form.Label>Day of Birth</Form.Label>
                        <Form.Control type="text" name="DoB" 
                            value={UserInfo.DoB} onChange = {updateForm} placeholder="Day of Birth" />
                    </Form.Group>

                    <Form.Group controlId="Address">
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="text" name="Address" 
                            value={UserInfo.Address} onChange = {updateForm} placeholder="Address" />
                    </Form.Group>

                    <Form.Group controlId="Email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="text" name="Email" 
                            value={UserInfo.Email} onChange = {updateForm} placeholder="Email" />
                    </Form.Group>

                    <Form.Group controlId="Phone_number">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control type="text" name="Phone_number"
                            value={UserInfo.Phone_number} onChange = {updateForm}  placeholder="Phone Number" />
                    </Form.Group>

                    <Form.Group controlId="RoleID">
                        <Form.Label>Role Id</Form.Label>
                        <Form.Control type="number" name="RoleID"
                            value={UserInfo.RoleID} onChange = {updateForm}  placeholder="Role Id" />
                    </Form.Group>
                    
                    <Button variant="primary" type="submit">
                        Add User
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    );
}

export default AddUser

