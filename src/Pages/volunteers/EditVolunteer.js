 
import React, { useState, useEffect } from 'react';
import VolunteerDataService from "../../Services/VolunteerService";
import { Routes, Route, Link, useParams, useNavigate } from "react-router-dom";
import axios from 'axios';
import AuthService from "../../Services/Auth/auth.service";
import Button from '../../ReUsables/Button'


function EditVolunteers() {
  let params = useParams();
  let navigate = useNavigate();


  const initialVolunteerDetailsState = {
    id: null,
    fullname: "",
    title: "",
    qualifications: "",
    topic_details: ""
  };
  const [currentvolunteer, setCurrentVolunteer] = useState(initialVolunteerDetailsState);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);


  const getVolunteerDetails = id => {
    VolunteerDataService.get(id)
      .then(response => {
        console.log("vulc", response);
        setCurrentVolunteer(response.data.data);
        console.log("vulcs", response.data.data);
      
      })
      .catch(e => {
        console.log(e);
      });
  };


  const handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentVolunteer({ ...currentvolunteer, [name]: value });
  };


  useEffect(() => {
    getVolunteerDetails(params.id);
  }, [params.id]);


  const updateVolunteer = (e) => {
    e.preventDefault();

    VolunteerDataService.update(currentvolunteer.id, currentvolunteer)
      .then(response => {
        console.log( "vulc", response.data);
        setCurrentVolunteer("The Speaker was updated successfully!");
        console.log( "vulc", message);

      })
      .catch(e => {
        console.log(e);
      });
      

 };



  return (
    <div className="container">

      <div>
        <Link to={'/vulcs'} className="btn btn-warning btn-sm float-end">volunteer</Link>
      </div>
      {currentvolunteer ? (

            <div className="card">
              <div className="card-body">
              <form onSubmit={updateVolunteer} >

                <div className="row gutters">

                    <div className="col-xl-4 col-lglg-4 col-md-4 col-sm-4 col-12">
                      <div className="form-group">
                        <label htmlFor="inputTitle">Volunteer</label>
                        <input type="text" className="form-control" id="inputTitle"
                          placeholder="Enter full name" 
                          name="title" onChange={handleInputChange}
                          value={currentvolunteer.title}></input>
                      </div>
                    </div>
                    <div className="col-xl-4 col-lglg-4 col-md-4 col-sm-4 col-12">
                      <div className="form-group">
                        <label htmlFor="inputDate"> Qualifications</label>
                         <input type="text" className="form-control" id="inputtext"
                          placeholder="Enter qualifications"
                           name="id" onChange={handleInputChange}
                          value={currentvolunteer.qualifications}>
                          </input>
                      </div>
                    </div>

                    <div className="col-xl-4 col-lglg-4 col-md-4 col-sm-4 col-12">
                      <div className="form-group">
                        <label htmlFor="inputDetails">Volunteer</label>
                        <input type="text" className="form-control" id="inputDetails"
                          placeholder="Enter Details"
                            name="details" onChange={handleInputChange}
                          value={currentvolunteer.topic_details}>
                          </input>
                      </div>
                    </div>
                  
                    <div className="col-xl-4 col-lglg-4 col-md-4 col-sm-4 col-12">
                      <div className="form-group">
                        <label htmlFor="inputDate">FULL NAME</label>
                        <input type="text" className="form-control" id="inputId"
                          placeholder="Enter Full Name"
                           name="time" onChange={handleInputChange}
                          value={currentvolunteer.fullname}>
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
               text="Update VOLUNTEER"
               onClick={updateVolunteer} />
               <p>{message}</p>
           </div>
           <div>
 <Link to ="/volunteer"
  type="submit" className="btn btn-danger "
               >All Volunteers</Link>
           </div>
           </div>

              </div>
            </div>
            
      ) : (
        <div>
          <br />
          <p>Please Click on a Volunteer...</p>
        </div>
      )}
      
    </div>
    );

}

export default EditVolunteers;
   