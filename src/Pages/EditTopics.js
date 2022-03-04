 
import React, { useState, useEffect } from 'react';
import TopicDataService from "../Services/TopicService";
import SpeakersDataService from "../Services/SpeakerService";
import { Routes, Route, Link, useParams, useNavigate } from "react-router-dom";
import axios from 'axios';
import AuthService from "../Services/Auth/auth.service";
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
  const [loading, setLoading] = useState(true);
  const [speakers, setSpeakers] = useState([]);


  const getTopicDetails = id => {
    TopicDataService.get(id)
      .then(response => {
        console.log("topic", response);
        setCurrentTopic(response.data);
      
        console.log("topics", currenttopic);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const retrieveSpeakers = () => {
    SpeakersDataService.getAll()
      .then(response => {
        console.log("speakers", response);
        setSpeakers(response.data)
        setLoading(false);
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
    getTopicDetails(params.id);
    retrieveSpeakers();
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

 const deleteSpeakers = (e, id) => {
  e.preventDefault();
  const thisClicked = e.currentTarget;
  thisClicked.innerText = "Deleting";
  SpeakersDataService.remove(id)
    .then(response => {
      console.log("delete", response.data);
      setSpeakers(speakers.filter((speaker) => speaker.id !== id))
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

      {/* <!-- Button trigger modal --> */}
      <button type="button" className="btn btn-info" data-toggle="modal" data-target="#customModalTwo">
        Add Speakers To Event
      </button>
      {/* <!-- Modal --> */}
      <div className="modal fade" id="customModalTwo" tabindex="-1" role="dialog" aria-labelledby="customModalTwoLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="customModalTwoLabel">Speakers</h5>
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
                    value={speakers.id}></input>
                </div>

                <div className="form-group">
                  <label for="recipient-name" className="col-form-label">Name:</label>
                  <input type="text" className="form-control" id="recipient-name" />
                </div>
                <div class="form-group">
                  <label for="message-text" className="col-form-label">Qualification:</label>
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


      {/* Table for all speakers in event */}




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
                    {speakers.map((speaker, index) => (

                      <tr key={index}>
                        <td>{speaker.id}</td>
                        <td>{speaker.title}</td>
                        <td>{speaker.details}</td>
                        <td>{speaker.date}</td>
                        <td>{speaker.status}</td>
                        <td>
                          <div className="text-center">
                            <Link to={`/editspeakers/${speaker.id}`}><span class="icon-pencil"></span></Link>
                            <span onClick={(e) => deleteSpeakers(e, speaker.id)} class="icon-trash-2"></span>
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

export default EditTopics;
