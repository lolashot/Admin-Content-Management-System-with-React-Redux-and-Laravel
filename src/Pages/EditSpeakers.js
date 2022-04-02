 
import React, { useState, useEffect } from 'react';
import SpeakerDataService from "../Services/SpeakerService";
import { Routes, Route, Link, useParams, useNavigate } from "react-router-dom";
import axios from 'axios';
import AuthService from "../Services/Auth/auth.service";
import Button from '../ReUsables/Button'


function EditSpeakers() {
  let params = useParams();
  let navigate = useNavigate();


  const initialSpeakerDetailsState = {
    id: null,
    fullname: "",
    title: "",
    qualifications: "",
    topic_details: ""
  };
  const [currentspeaker, setCurrentSpeaker] = useState(initialSpeakerDetailsState);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);


  const getSpeakerDetails = id => {
    SpeakerDataService.get(id)
      .then(response => {
        console.log("speaker", response);
        setCurrentSpeaker(response.data.data);
        console.log("speakers", response.data.data);
      
      })
      .catch(e => {
        console.log(e);
      });
  };


  

  const handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentSpeaker({ ...currentspeaker, [name]: value });
  };


  useEffect(() => {
    getSpeakerDetails(params.id);
  }, [params.id]);


  const updateSpeaker = (e) => {
    e.preventDefault();

    SpeakerDataService.update(currentspeaker.id, currentspeaker)
      .then(response => {
        console.log( "speaker", response.data);
        setMessage("The Topic was updated successfully!");
        console.log( "speaker", message);

      })
      .catch(e => {
        console.log(e);
      });
      

 };


  return (
    <div className="container">

      <div>
        <Link to={'/events'} className="btn btn-warning btn-sm float-end"> events</Link>
      </div>
      {currentspeaker ? (

            <div className="card">
              <div className="card-body">
              <form onSubmit={updateSpeaker} >

                <div className="row gutters">

                    <div className="col-xl-4 col-lglg-4 col-md-4 col-sm-4 col-12">
                      <div className="form-group">
                        <label htmlFor="inputTitle">TITLE</label>
                        <input type="text" className="form-control" id="inputTitle"
                          placeholder="Enter full name" 
                          name="title" onChange={handleInputChange}
                          value={currentspeaker.title}></input>
                      </div>
                    </div>
                    <div className="col-xl-4 col-lglg-4 col-md-4 col-sm-4 col-12">
                      <div className="form-group">
                        <label htmlFor="inputDate">Input ID</label>
                         <input type="id" className="form-control" id="inputId"
                          placeholder="Enter Id"
                           name="id" onChange={handleInputChange}
                          value={currentspeaker.id}>
                          </input>
                      </div>
                    </div>

                    <div className="col-xl-4 col-lglg-4 col-md-4 col-sm-4 col-12">
                      <div className="form-group">
                        <label htmlFor="inputDetails">TOPIC DETAILS</label>
                        <input type="text" className="form-control" id="inputDetails"
                          placeholder="Enter Details"
                            name="details" onChange={handleInputChange}
                          value={currentspeaker.topic_details}>
                          </input>
                      </div>
                    </div>
                  
                    <div className="col-xl-4 col-lglg-4 col-md-4 col-sm-4 col-12">
                      <div className="form-group">
                        <label htmlFor="inputDate">FULL NAME</label>
                        <input type="text" className="form-control" id="inputId"
                          placeholder="Enter Full Name"
                           name="time" onChange={handleInputChange}
                          value={currentspeaker.fullname}>
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
               text="Update SPEAKER"
               onClick={updateSpeaker} />
               <p>{message}</p>
           </div>
           <div>
 <Link to ="/events"
  type="submit" className="btn btn-danger "
               >All Events</Link>
           </div>
           </div>

              </div>
            </div>
            
      ) : (
        <div>
          <br />
          <p>Please Click on a Speaker...</p>
        </div>
      )}
      
    </div>
    );

}

export default EditSpeakers;
   