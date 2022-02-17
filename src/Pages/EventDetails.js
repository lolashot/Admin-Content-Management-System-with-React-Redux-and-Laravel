import React, { useState, useEffect } from 'react';


import EventDetailsDataService from "../Services/EventDetailsService";
import { Routes, Route, Link, useParams, useNavigate } from "react-router-dom";


function EventDetails() {
    let params = useParams();

   const initialeventDetailsState = {
    id: null,
    title: "",
    details: ""
  };


  const [currenteventdetails, setCurrentEventDetails] = useState(initialeventDetailsState);
  const [message, setMessage] = useState("");



useEffect(() => {
    getEventDetails(params.id);
  }, [params.id]);


    const getEventDetails = id => {
    EventDetailsDataService.get(id)
      .then(response => {
         console.log("eventD", response);
        setCurrentEventDetails(response.data);
        console.log("eventD2", currenteventdetails);
      })
      .catch(e => {
        console.log(e);
      });
  };



    
     return ( 

            <div className="table-responsive scrollbar">
            {currenteventdetails ? (
          <table className="table container" style={{marginLeft:"200px",}}>
            <thead>
              <tr>
              <th scope="col">ID</th>
                <th scope="col">DETAILS</th>
                <th scope="col" className="text-end" >Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
              <td>{currenteventdetails.id}</td>
                <td>{currenteventdetails.details}</td>
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
                <p>Loading DETAILS Content...</p>
              </div>
            )}
        </div>
        
          );
      }
      export default EventDetails;
