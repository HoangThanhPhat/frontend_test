import React from "react";

const InfoRow = ({Id, Username, Password, Firstname, Lastname, DoB, Phone, Email, Address, RoleId}) => {
    return (
        <tr>
            <td>
            <td>{Id}</td>
            <td>{Username}</td>
            <td>{Password}</td>
            <td>{Firstname}</td>
            <td>{Lastname}</td>
            <td>{DoB}</td>
            <td>{Phone}</td>
            <td>{Email}</td>
            <td>{Address}</td>
            <td>{RoleId}</td>
            </td>
        </tr>
    );
}

export default InfoRow