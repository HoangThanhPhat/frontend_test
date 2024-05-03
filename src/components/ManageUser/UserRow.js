import React from "react";
import InfoTable from "./Information User/InfoTable";
import Popup from "reactjs-popup";

const UserRow = ({Id, Username, Password, Phone, Email, Address, RoleId, handleDelete}) => {
    return (
        <tr>
            <td>{Id}</td>
            <td>{Username}</td>
            <td>{Password}</td>
            <td>{Phone}</td>
            <td>{Email}</td>
            {/* <td>{Address}</td> */}
            <td>{RoleId}</td>
            <td>
                <button className="btn btn-outline-secondary btn-sm ml-1 mr-2"
                       
                        >
                    Update
                </button>


                <Popup modal trigger={
                    <button type="submit" className="btn btn-outline-info btn-sm ml-1 mr-2">Information</button>}>
                        {/* <div className="row">
                            <InfoTable className="mr-auto ml-auto mt-4 mb-4 col-10"/>
                        </div> */}
                </Popup>
       
                <button className="btn btn-outline-success btn-sm  mr-2">History Question</button>
                <button className="btn btn-outline-danger btn-sm  mr-2"
                        onClick={() => handleDelete(Id) }>
                    Delete
                </button>
            </td>
        </tr>
    );
}

export default UserRow