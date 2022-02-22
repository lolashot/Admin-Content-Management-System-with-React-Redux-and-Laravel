 
import React, { useState, useEffect } from 'react';

import TopicDataService from "../Services/TopicService";

import { Routes, Route, Link, useParams, useNavigate } from "react-router-dom";
import axios from 'axios';
import Button from '../ReUsables/Button'




function EditTopics() {
  let params = useParams();
  let navigate = useNavigate();


  const initialTopicDetailsState = {
    id: null,
    title: "",
    date: "",
    details: ""
  };
  const [currenttopic, setCurrentTopic] = useState(initialTopicDetailsState);
  const [message, setMessage] = useState("");


  const getTopicDetails = id => {
    TopicDataService.get(id)
      .then(response => {
        console.log("topic", response);
        setCurrentTopic(response.data);
      
        console.log("topics", currentservice);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentTopic({ ...currenttopic, [name]: value });
  };


  useEffect(() => {
    getTopiceDetails(params.id);
  }, [params.id]);


  const updateTopic = (e) => {
    e.preventDefault();

    TopicDataService.update(currenttopic.id, currenttopic)
      .then(response => {
        console.log( "topic", response.data);
        setMessage("The Topic was updated successfully!");
        console.log( "topic", message);

      })
      .catch(e => {
        console.log(e);
      });
      

 };

 const retrieveS = () => {
    EventsDataService.getAll()
      .then(response => {
        console.log("events", response);
        setEvents(response.data)
        setLoading(false);
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <div className="container">

      <div>
        <Link to={'/events'} className="btn btn-warning btn-sm float-end"> Add events</Link>
      </div>
      {currenttopic ? (

            <div className="card">
              <div className="card-body">
              <form onSubmit={updateTopic} >

                <div className="row gutters">

                    <div className="col-xl-4 col-lglg-4 col-md-4 col-sm-4 col-12">
                      <div className="form-group">
                        <label htmlFor="inputTitle">TITLE</label>
                        <input type="text" className="form-control" id="inputTitle"
                          placeholder="Enter full name" 
                          name="title" onChange={handleInputChange}
                          value={currenttopic.title}></input>
                      </div>
                    </div>
                    <div className="col-xl-4 col-lglg-4 col-md-4 col-sm-4 col-12">
                      <div className="form-group">
                        <label htmlFor="inputDate">Input ID</label>
                        <input type="id" className="form-control" id="inputId"
                          placeholder="Enter Id"
                           name="id" onChange={handleInputChange}
                          value={currenttopic.id}>
                          </input>
                      </div>
                    </div>

                    <div className="col-xl-4 col-lglg-4 col-md-4 col-sm-4 col-12">
                      <div className="form-group">
                        <label htmlFor="inputDetails">Input DETAILS</label>
                        <input type="text" className="form-control" id="inputDetails"
                          placeholder="Enter Details"
                            name="details" onChange={handleInputChange}
                          value={currenttopic.details}>
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
               text="Update Topic"
               onClick={updateTopic} />
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
          <p>Please Click on a Topic...</p>
        </div>
      )}

    </div>
    );

}

export default EditTopics;
