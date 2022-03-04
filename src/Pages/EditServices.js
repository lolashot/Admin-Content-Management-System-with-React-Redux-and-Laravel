 
import React, { useState, useEffect } from 'react';

import ServicesDataService from "../Services/ServicesComp";
import AuthService from "../Services/Auth/auth.service";
import { Routes, Route, Link, useParams, useNavigate } from "react-router-dom";
import axios from 'axios';
import Button from '../ReUsables/Button'

function EditServices() {
  let params = useParams();
  let navigate = useNavigate();


  const initialServiceDetailsState = {
    id: null,
    title: "",
    date: "",
    details: ""
  };
  const [currentservice, setCurrentService] = useState(initialServiceDetailsState);
  const [message, setMessage] = useState("");

 
  const getServiceDetails = id => {
    ServicesDataService.get(id)
      .then(response => {
        console.log("service", response);
        setCurrentService(response.data);
      
        console.log("services", currentservice);
      })
      .catch(e => {
        console.log(e);
      });
  };
  

  const handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentService({ ...currentservice, [name]: value });
  };


  useEffect(() => {
    getServiceDetails(params.id);
  }, [params.id]);


  const updateService = (e) => {
    e.preventDefault();

    ServicesDataService.update(currentservice.id, currentservice)
      .then(response => {
        console.log( "service", response.data);
        setMessage("The Service was updated successfully!");
        console.log( "services", message);

      })
      .catch(e => {
        console.log(e);
      });
      

 };

  

  return (
    <div className="container">

      <div>
        <Link to={'/addservice'} className="btn btn-warning btn-sm float-end"> Add Service</Link>
      </div>
      {currentservice ? (

            <div className="card">
              <div className="card-body">
              <form onSubmit={updateService} >

                <div className="row gutters">

                    <div className="col-xl-4 col-lglg-4 col-md-4 col-sm-4 col-12">
                      <div className="form-group">
                        <label htmlFor="inputTitle">TITLE</label>
                        <input type="text" className="form-control" id="inputTitle"
                          placeholder="Enter full name" 
                          name="title" onChange={handleInputChange}
                          value={currentservice.title}></input>
                      </div>
                    </div>
                    <div className="col-xl-4 col-lglg-4 col-md-4 col-sm-4 col-12">
                      <div className="form-group">
                        <label htmlFor="inputDate">Input ID</label>
                        <input type="id" className="form-control" id="inputId"
                          placeholder="Enter Id"
                           name="id" onChange={handleInputChange}
                          value={currentservice.id}>
                          </input>
                      </div>
                    </div>

                    <div className="col-xl-4 col-lglg-4 col-md-4 col-sm-4 col-12">
                      <div className="form-group">
                        <label htmlFor="inputDetails">Input DETAILS</label>
                        <input type="text" className="form-control" id="inputDetails"
                          placeholder="Enter Details"
                            name="details" onChange={handleInputChange}
                          value={currentservice.details}>
                          </input>
                      </div>
                    </div>
                  
                    </div>
                    </form>
                    <div className="d-flex justify-content-between">
        <div>
        <Button
              size='btn-sm'
              textcolor='white'
              color='btn-primary'
               text="Update Service"
               onClick={updateService} />
               <p>{message}</p>
           </div>
           <div>
 <Link to ="/services"
  type="submit" className="btn btn-danger "
               >All Services</Link>
           </div>
           </div>

              </div>
            </div>
            
      ) : (
        <div>
          <br />
          <p>Please Click on an Service...</p>
        </div>
      )}

    </div>
    );

}

export default EditServices;
