
import React, { useState, useEffect } from 'react';
import EventsDataService from "../Services/EventsService";
import TopicDataService from "../Services/TopicService";
import { Routes, Route, Link, useParams, useNavigate } from "react-router-dom";
import AuthService from "../Services/Auth/auth.service";
import axios from 'axios';
import Button from '../ReUsables/Button'




function EditEvents() {
  let params = useParams();
  let navigate = useNavigate();

  const initialEventDetailsState = {
    id: null,
    title: "",
    date: "",
    details: ""
  };
  const [currentevent, setCurrentEvent] = useState(initialEventDetailsState);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);
  // const [Topics, setTopics] = useState([]);

  
  const getEventDetails = id => {
    EventsDataService.get(id)
      .then(response => {
        console.log("eventD", response);
        setCurrentEvent(response.data.data);
        setItems(response.data.data.items)
        console.log("eventD3", response.data.data.items);
      })
      .catch(e => {
        console.log(e);
      });
  };


  const handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentEvent({ ...currentevent, [name]: value });
  };

  useEffect(() => {
    getEventDetails(params.id);
  }, [params.id]);
  

  const updateEvent = (e) => {
    e.preventDefault();

    EventsDataService.update(currentevent.id, currentevent)
      .then(response => {
        console.log("events", response.data);
        setMessage("The event was updated successfully!");
        console.log("eventss", message);

      })
      .catch(e => {
        console.log(e);
      });
  };




  return (
    <div className="container">
<div className="d-flex justify-content-around">
      <div>
        <Link to={'/addevents'} className="btn btn-warning btn-sm float-end"> Add Event</Link>
      </div>
      <div>
        <Link to={'/attendees'} className="btn btn-secondary btn-sm float-end"> See Attendees</Link>
      </div>
      <div>
        <Link to={'/addattendee'} className="btn btn-success btn-sm float-end"> Add Attendee</Link>
      </div>
      </div>
      {currentevent ? (

        <div className="card">
          <div className="card-body">
            <form onSubmit={updateEvent} >

              <div className="row gutters">

                <div className="col-xl-4 col-lglg-4 col-md-4 col-sm-4 col-12">
                  <div className="form-group">
                    <label htmlFor="inputTitle">TITLE</label>
                    <input type="text" className="form-control" id="inputTitle"
                      placeholder="Enter full name"
                      name="title" onChange={handleInputChange}
                      value={currentevent.title}></input>
                  </div>
                </div>
                <div className="col-xl-4 col-lglg-4 col-md-4 col-sm-4 col-12">
                  <div className="form-group">
                    <label htmlFor="inputDate">Input DATE</label>
                    <input type="date" className="form-control" id="inputDate"
                      placeholder="Enter Date"
                      name="date" onChange={handleInputChange}
                      value={currentevent.date}>
                    </input>
                  </div>
                </div>

                <div className="col-xl-4 col-lglg-4 col-md-4 col-sm-4 col-12">
                  <div className="form-group">
                    <label htmlFor="inputDetails">Input DETAILS</label>
                    <input type="text" className="form-control" id="inputDetails"
                      placeholder="Enter Details"
                      name="details" onChange={handleInputChange}
                      value={currentevent.details}>
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
                  text="Update Event"
                  onClick={updateEvent} />
                <p>{message}</p>
              </div>
              <div>
                <Link to="/events"
                  type="submit" className="btn btn-danger "
                >All Events</Link>
              </div>
            </div>

          </div>
        </div>

      ) : (
        <div>
          <br />
          <p>Please Click on an Event...</p>
        </div>
      )}


<h2 className="text-danger"> EVENT ITEMS </h2>

      <div class="row gutters">
        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
          <div class="card">
            <div class="card-body">
              <div class="table-responsive">
                <table class="table table-bordered table-dark m-0 text-center">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Title</th>
                      <th>Details</th>
                      <th>Date</th>
                      <th>Time</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                 <tbody>
                    {items.map((item, index) => (

                      <tr key={index}>
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                        <td>{item.details}</td>
                        <td>{item.date}</td>
                        <td>{item.time}</td>
                       {/*  <td>
                          <div className="text-center">
                            <Link to={`/edititem/${items.id}`}><span class="icon-pencil"></span></Link>
                            <span onClick={(e) => deleteItems(e, items.id)} class="icon-trash-2"></span>
                          </div>
                        </td>*/}
                    </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>

  );

}

export default EditEvents;
