import React, { useState, useEffect } from 'react';


import EventDetailsDataService from "../Services/EventDetailsService";
import { Routes, Route, Link, useParams, useNavigate } from "react-router-dom";


function EditUpcoming() {
    let params = useParams();

   const initialUpcomingDetailsState = {
    id: null,
    title: "",
    date: "",
    details: ""
  };


  const [currentUpcomingdetails, setCurrentUpcomingDetails] = useState(initialUpcomingDetailsState);
  const [message, setMessage] = useState("");



useEffect(() => {
    getUpcomingDetails(params.id);
  }, [params.id]);


    const getUpcomingDetails = id => {
    EventDetailsDataService.get(id)
      .then(response => {
         console.log("eventD", response);
        setCurrentUpcomingDetails(response.data);
        console.log("eventD2", currentUpcomingdetails);
      })
      .catch(e => {
        console.log(e);
      });
  };


    
     return ( 
        <div>
        {currentUpcomingdetails ? (
        <div className="table-responsive scrollbar" style={{marginLeft:"200px",}}>
        <table className="table container">
          <thead>
            <tr>          
              <th scope="col">ID</th>          
              <th scope="col">TITLE</th>
              <th scope="col">DATE</th>
              <th scope="col">DETAILS</th>
              <th  scope="col" className="text-end" >Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{currentUpcomingdetails.id}</td>
              <td>{currentUpcomingdetails.title}</td>
              <td>{currentUpcomingdetails.date}</td>
              <td>{currentUpcomingdetails.details}</td>
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
      </div>) : (
        <div>
          <br />
          <p>Loading UPCOMINGEVENTDETAILS Page Please...</p>
        </div>
      )}
    </div>

    );
}
export default EditUpcoming;


