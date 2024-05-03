import React, {useEffect, useContext} from "react";
import {Table} from 'react-bootstrap'
import { UserContext } from "../../UserContext";
import UserRow from "./UserRow";

const UserTable = () => {

    const [users, setUsers] = useContext(UserContext);

    const handleDelete = (Id) => {
        fetch("http://127.0.0.1:8000/user/" + Id, {
            method: "DELETE",
            headers: {
                accept: 'application/json'
            }
        })
        .then(resp => {
            return resp.json
        })
        .then(results => {
            if(results.status === "ok"){
                const filterdUsers = users.data.filter((user) => user.Id !== Id);
                setUsers({data : [...filterdUsers]})
                alert("User have ID: " + {Id} + " deleted!")
            } else {
                alert("User deleted!")
            }
        })
    }

    useEffect(() => {
        fetch("http://127.0.0.1:8000/user")
        .then(Response => {
            return Response.json();
        })
        .then(results => {
            console.log(results)
            setUsers({"data": [...results.data]})
        })
    })
    return (
        <div className="row col-12 mr-auto ml-auto mt-4 mb-4">
            <Table striped bordered hover className="text-center ">
                <thead>
                    <tr >
                        <th>ID</th>
                        <th>User Name</th>
                        <th>Password</th>
                        <th>Phone</th>
                        <th>Email</th>
                        {/* <th>Address</th> */}
                        <th>Role ID</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.data.map(user => (
                        <UserRow
                            // key={user.id} // Important for list rendering performance and reactivity
                            Id={user.id}
                            Username={user.username}
                            Password={user.password}
                            Phone={user.phone_number}
                            Email={user.email}
                            // Address={user.address}
                            RoleId={user.roleID}
                            handleDelete={handleDelete}
                        />
                    ))}
                </tbody>
            </Table>
        </div>
    );
}

export default UserTable













