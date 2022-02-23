
import React, { useState, useEffect } from 'react';
import EventsDataService from "../Services/EventsService";
import TopicDataService from "../Services/TopicService";
import { Routes, Route, Link, useParams, useNavigate } from "react-router-dom";
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
  const [topics, setTopics] = useState([]);

  const getEventDetails = id => {
    EventsDataService.get(id)
      .then(response => {
        console.log("eventD", response);
        setCurrentEvent(response.data);

        console.log("eventD2", currentevent);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const retrieveTopics = () => {
    TopicDataService.getAll()
      .then(response => {
        console.log("topic", response);
        setTopics(response.data)
        setLoading(false);
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
    retrieveTopics();
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



  const deleteTopics = (e, id) => {
    e.preventDefault();
    const thisClicked = e.currentTarget;
    thisClicked.innerText = "Deleting";
    TopicDataService.remove(id)
      .then(response => {
        console.log("delete", response.data);
        setTopics(topics.filter((topic) => topic.id !== id))
        // props.history.push("/tutorials");
      })
      .catch(e => {
        console.log(e);
        thisClicked.innerText = "error";

      });
  };


  return (
    <div className="container">

      <div>
        <Link to={'/addevents'} className="btn btn-warning btn-sm float-end"> Add Event</Link>
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



      {/* <!-- Button trigger modal --> */}
      <button type="button" className="btn btn-info" data-toggle="modal" data-target="#customModalTwo">
        Add Topics To Event
      </button>
      {/* <!-- Modal --> */}
      <div className="modal fade" id="customModalTwo" tabindex="-1" role="dialog" aria-labelledby="customModalTwoLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="customModalTwoLabel">Modal Title</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <input type="hidden" className="form-control" readonly id="inputTitle"
                    placeholder="Enter full name"
                    name="id" onChange={handleInputChange}
                    value={topics.id}></input>
                </div>

                <div className="form-group">
                  <label for="recipient-name" className="col-form-label">Topic:</label>
                  <input type="text" className="form-control" id="recipient-name" />
                </div>
                <div class="form-group">
                  <label for="message-text" className="col-form-label">Message:</label>
                  <textarea className="form-control" id="message-text"></textarea>
                </div>
              </form>
            </div>
            <div className="modal-footer custom">

              <div className="left-side">
                <button type="button" class="btn btn-link danger" data-dismiss="modal">Cancel</button>
              </div>
              <div className="divider"></div>
              <div className="right-side">
                <button type="button" className="btn btn-link success">Send Message</button>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Table fo all topics in event */}




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
                      <th>Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {topics.map((topic, index) => (

                      <tr key={index}>
                        <td>{topic.id}</td>
                        <td>{topic.title}</td>
                        <td>{topic.details}</td>
                        <td>{topic.date}</td>
                        <td>{topic.status}</td>
                        <td>
                          <div className="text-center">
                            <Link to={`/edittopic/${topic.id}`}><span class="icon-pencil"></span></Link>
                            <span onClick={(e) => deleteTopics(e, topic.id)} class="icon-trash-2"></span>
                          </div>
                        </td>
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
