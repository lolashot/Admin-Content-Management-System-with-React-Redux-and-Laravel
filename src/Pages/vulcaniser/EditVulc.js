 
import React, { useState, useEffect } from 'react';
import VulcDataService from "../../Services/VulcService";
import { Routes, Route, Link, useParams, useNavigate } from "react-router-dom";
import axios from 'axios';
import AuthService from "../../Services/Auth/auth.service";
import Button from '../../ReUsables/Button'


function EditVulc() {
  let params = useParams();
  let navigate = useNavigate();


  const initialVulcDetailsState = {
    id: null,
    fullname: "",
    title: "",
    qualifications: "",
    topic_details: ""
  };
  const [currentvulc, setCurrentVulc] = useState(initialVulcDetailsState);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);


  const getVulcDetails = id => {
    VulcDataService.get(id)
      .then(response => {
        console.log("vulc", response);
        setCurrentVulc(response.data.data);
        console.log("vulcs", response.data.data);
      
      })
      .catch(e => {
        console.log(e);
      });
  };


  const handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentVulc({ ...currentvulc, [name]: value });
  };


  useEffect(() => {
    getVulcDetails(params.id);
  }, [params.id]);


  const updateVulc = (e) => {
    e.preventDefault();

    VulcDataService.update(currentvulc.id, currentvulc)
      .then(response => {
        console.log( "vulc", response.data);
        setMessage("The Speaker was updated successfully!");
        console.log( "vulc", message);

      })
      .catch(e => {
        console.log(e);
      });
      

 };



  return (
    <div className="container">

      <div>
        <Link to={'/vulcs'} className="btn btn-warning btn-sm float-end">vulcs</Link>
      </div>
      {currentvulc ? (

            <div className="card">
              <div className="card-body">
              <form onSubmit={updateVulc} >

                <div className="row gutters">

                    <div className="col-xl-4 col-lglg-4 col-md-4 col-sm-4 col-12">
                      <div className="form-group">
                        <label htmlFor="inputTitle">VULC</label>
                        <input type="text" className="form-control" id="inputTitle"
                          placeholder="Enter full name" 
                          name="title" onChange={handleInputChange}
                          value={currentvulc.title}></input>
                      </div>
                    </div>
                    <div className="col-xl-4 col-lglg-4 col-md-4 col-sm-4 col-12">
                      <div className="form-group">
                        <label htmlFor="inputDate"> Qualifications</label>
                         <input type="text" className="form-control" id="inputtext"
                          placeholder="Enter qualifications"
                           name="id" onChange={handleInputChange}
                          value={currentvulc.qualifications}>
                          </input>
                      </div>
                    </div>

                    <div className="col-xl-4 col-lglg-4 col-md-4 col-sm-4 col-12">
                      <div className="form-group">
                        <label htmlFor="inputDetails">TOPIC DETAILS</label>
                        <input type="text" className="form-control" id="inputDetails"
                          placeholder="Enter Details"
                            name="details" onChange={handleInputChange}
                          value={currentvulc.topic_details}>
                          </input>
                      </div>
                    </div>
                  
                    <div className="col-xl-4 col-lglg-4 col-md-4 col-sm-4 col-12">
                      <div className="form-group">
                        <label htmlFor="inputDate">FULL NAME</label>
                        <input type="text" className="form-control" id="inputId"
                          placeholder="Enter Full Name"
                           name="time" onChange={handleInputChange}
                          value={currentvulc.fullname}>
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
              color='btn-success'
               text="Update VULC"
               onClick={updateVulc} />
               <p>{message}</p>
           </div>
           <div>
 <Link to ="/vulcs"
  type="submit" className="btn btn-danger "
               >All Vulcs</Link>
           </div>
           </div>

              </div>
            </div>
            
      ) : (
        <div>
          <br />
          <p>Please Click on a Vulc...</p>
        </div>
      )}
      
    </div>
    );

}

export default EditVulc;
   