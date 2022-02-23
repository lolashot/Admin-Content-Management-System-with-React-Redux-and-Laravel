 
import React, { useState, useEffect } from 'react';

import SpeakersDataService from "../Services/SpeakerService";

import { Routes, Route, Link, useParams, useNavigate } from "react-router-dom";
import axios from 'axios';
import Button from '../ReUsables/Button'


function EditSpeakers() {
  let params = useParams();
  let navigate = useNavigate();


  const initialSpeakerDetailsState = {
    id: null,
    title: "",
    date: "",
    details: ""
  };
  const [currentspeaker, setCurrentSpeaker] = useState(initialSpeakerDetailsState);
  const [message, setMessage] = useState("");


  const getSpeakerDetails = id => {
    SpeakersDataService.get(id)
      .then(response => {
        console.log("speaker", response);
        setCurrentSpeaker(response.data);
      
        console.log("speaker", currentspeaker);
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

    SpeakersDataService.update(currentspeaker.id, currentspeaker)
      .then(response => {
        console.log( "speaker", response.data);
        setMessage("The Speaker was updated successfully!");
        console.log( "speaker", message);

      })
      .catch(e => {
        console.log(e);
      });
      

 };

  

  return (
    <div className="container">

      <div>
        <Link to={'/events'} className="btn btn-warning btn-sm float-end"> Events </Link>
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
                        <label htmlFor="inputDetails">Input DETAILS</label>
                        <input type="text" className="form-control" id="inputDetails"
                          placeholder="Enter Details"
                            name="details" onChange={handleInputChange}
                          value={currentspeaker.details}>
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
               text="Update Speaker"
               onClick={updateSpeaker} />
               <p>{message}</p>
           </div>
           <div>
 <Link to ="/events"
  type="submit" className="btn btn-danger "
               >All Speakers</Link>
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
