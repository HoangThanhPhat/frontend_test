import React, {useEffect, useContext} from "react";
import {Table} from 'react-bootstrap'
import { UserContext } from "../../../UserContext";
import InfoRow from "./InfoRow";


const InfoTable = ({ close }) => {

    const [users, setUsers] = useContext(UserContext);

    useEffect(() => {
        fetch("http://127.0.0.1:8000/user/7")
        .then(Response => {
            return Response.json();
        })
        .then(results => {
            console.log(results)
            setUsers({"data": [...results.data]})
        })
    })

    return (
        <div className="">
            <a className="close" onClick={close}>&times;</a>
            <Table striped bordered hover>
                {/* <thead>
                    <ul>
                        <li>ID</li>
                        <li>User Name</li>
                        <li>Password</li>
                        <li>Firstname</li>
                        <li>Lastname</li>
                        <li>Day of Birth</li>
                        <li>Phone</li>
                        <li>Email</li>
                        <li>Address</li>
                        <li>Role ID</li>
                        <li>Action</li>
                    </ul>
                </thead> */}
                <tbody>
                    {users.data.map(user => (
                        <InfoRow
                            // Id={user.id}              
                            Username={user.username}
                            Password={user.password}
                            firstname={user.firstname}
                            lastname={user.lastname}
                            DoB={user.DoB}
                            Phone={user.phone_number}
                            Email={user.email}
                            Address={user.address}
                            RoleId={user.roleID}
                        />
                    ))}
                </tbody>
            </Table>
        </div>
    );
}

export default InfoTable