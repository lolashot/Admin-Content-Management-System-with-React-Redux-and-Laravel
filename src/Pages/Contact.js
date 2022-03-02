import React, { useState, useEffect } from 'react';
import { Link, } from 'react-router-dom';
import AuthService from "../Services/Auth/auth.service";


function Contact({config}) {

    const initialContactState = {
        email: null,
        address: "",
        phone: "",
      };
    const [loading, setLoading] = useState(true);
    const [contacts, setContacts] = useState(initialContactState);

    useEffect(() => {

    }, []);
    if (loading) {
        return <h4 className="text-center">Loading Contact Page....
         </h4>
    }
    
    else     
    
    return (
    <div className="table-responsive scrollbar">
      {config ? (
    <table className="table container">
      <thead>
        <tr>          
          <th scope="col">EMAIL</th>          
          <th scope="col">EMAIL</th>
          <th scope="col">ADDRESS</th> 
          <th scope="col">PHONE NUMBER</th>
          <th scope="col" className="text-end" >Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{config.email}</td>
          <td>{config.email}</td>
          <td>{config.address}</td>
          <td>{config.phone}</td>
          <td className="text-end">
            <div><button className="btn p-0" type="button" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit">
              <span className="text-500 fas fa-edit"></span></button><button className="btn p-0 ms-2" type="button" 
              data-bs-toggle="tooltip" data-bs-placement="top" title="Delete"><span className="text-500 fas fa-trash-alt"></span></button></div>
          </td>
        </tr>
      </tbody>
    </table>
    ) : (
        <div>
          <br />
          <p>Loading Config Content...</p>
        </div>
      )}
  </div>
  
    );
}
export default Contact;








