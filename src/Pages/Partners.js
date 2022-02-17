import React from 'react';

function PartnersComponent() {
    return (

<div className="table-responsive scrollbar" style={{marginLeft:"200px",}}>
    <table className="table container">
      <thead>
        <tr>          
          <th scope="col">Email</th>          
          <th scope="col">Name</th>
          <th scope="col">Date</th>
          <th scope="col">Position</th>
          <th scope="col" className="text-end" >Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>ricky@example.com</td>
          <td>Ricky Antony</td>
          <td>22-10-2020</td>
          <td>supervisor</td>
          <td className="text-end">
            <div><button className="btn p-0" type="button" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit">
              <span className="text-500 fas fa-edit"></span></button><button className="btn p-0 ms-2" type="button" 
              data-bs-toggle="tooltip" data-bs-placement="top" title="Delete"><span className="text-500 fas fa-trash-alt"></span></button></div>
          </td>
        </tr>
        <tr>
          <td>emma@example.com</td>
          <td>Emma Watson</td>
          <td>22-10-2020</td>
          <td>cleaner</td>
          <td className="text-end">
            <div><button className="btn p-0" type="button" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit"><span className="text-500 fas fa-edit"></span></button><button className="btn p-0 ms-2" type="button" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete"><span className="text-500 fas fa-trash-alt"></span></button></div>
          </td>
        </tr>
        <tr>
          <td>rown@example.com</td>
          <td>Rowen Atkinson</td>
          <td>6-10-2022</td>
          <td>Teacher</td>
          <td className="text-end">
            <div><button className="btn p-0" type="button" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit"><span className="text-500 fas fa-edit"></span></button><button className="btn p-0 ms-2" type="button" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete"><span className="text-500 fas fa-trash-alt"></span></button></div>
          </td>
        </tr>
        <tr>
          <td>antony@example.com</td>
          <td>Antony Hopkins</td>
          <td>6-10-2022</td>
          <td>Instructor</td>
          <td className="text-end">
            <div><button className="btn p-0" type="button" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit"><span className="text-500 fas fa-edit"></span></button><button className="btn p-0 ms-2" type="button" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete"><span className="text-500 fas fa-trash-alt"></span></button></div>
          </td>
        </tr>
        <tr>
          <td>antony@example.com</td>
          <td>Jennifer Schramm</td>
          <td>16-10-2022</td>
          <td>Junior Instructor</td>
          <td className="text-end">
            <div><button className="btn p-0" type="button" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit"><span className="text-500 fas fa-edit"></span></button><button className="btn p-0 ms-2" type="button" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete"><span className="text-500 fas fa-trash-alt"></span></button></div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>



        );
    }
    
    export default PartnersComponent     