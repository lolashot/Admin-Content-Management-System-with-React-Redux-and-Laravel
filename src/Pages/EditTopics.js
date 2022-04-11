 
import React, { useState, useEffect } from 'react';
import ItemDataService from "../Services/ItemService";
import SpeakersDataService from "../Services/SpeakerService";
import { Routes, Route, Link, useParams, useNavigate } from "react-router-dom";
import axios from 'axios';
import AuthService from "../Services/Auth/auth.service";
import Button from '../ReUsables/Button'
import swal from 'sweetalert';


function EditTopics() {
  let params = useParams();
  let navigate = useNavigate();


  const initialTopicDetailsState = {
    id: null,
    title: "",
    date: "",
    time: "",
    details: ""
  };
  const [currenttopic, setCurrentTopic] = useState(initialTopicDetailsState);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const [speakers, setSpeakers] = useState([]);


  const getTopicDetails = id => {
    ItemDataService.get(id)
      .then(response => {
        console.log("topic", response);
        setCurrentTopic(response.data.data);
        setSpeakers(response.data.data.speakers);
        console.log("topics", response.data.data);
      
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
  }, [params.id]);


  const updateTopic = (e) => {
    e.preventDefault();

    ItemDataService.update(currenttopic.id, currenttopic)
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
  swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
          SpeakersDataService.remove(id)
          .then(response => {
              console.log("delete", response.data);
                   swal("Poof! Your imaginary file has been deleted!", {
                  icon: "success",
                });
              setSpeakers(speakers.filter((speaker) => speaker.id !== id)) 
          });
      }
       else  {
        swal("Your imaginary file is safe!");
      }
}) 
};


  return (
    <div className="container">

      <div>
        <Link to={'/events'} className="btn btn-warning btn-sm float-end">  events</Link>
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
                  
                    <div className="col-xl-4 col-lglg-4 col-md-4 col-sm-4 col-12">
                      <div className="form-group">
                        <label htmlFor="inputDate">Input Time</label>
                        <input type="id" className="form-control" id="inputId"
                          placeholder="Enter Time"
                           name="time" onChange={handleInputChange}
                          value={currenttopic.time}>
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
 <Link to ="/topics"
  type="submit" className="btn btn-danger "
               >All Topics</Link>
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



      {/* Table for all speakers in topic */}
<div>
<div class="d-flex justify-content-between">
      <h2 className="text-danger"> EVENT ITEM SPEAKER </h2>
       <Link to={`/item/${params.id}/addspeaker`}
                  type="submit" className="btn btn-success "
                >Add Item Speaker(s)</Link>
                </div>

      <div class="row gutters">
        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
          <div class="card">
            <div class="card-body">
            {speakers ? (
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
                      <tr>
                        <td>{speakers.id}</td>
                        <td>{speakers.fullname}</td>
                        <td>{speakers.title}</td>
                        <td>{speakers.qualifications}</td>
                        <td>{speakers.topic_details}</td>
                        <td>{speakers.time_end}</td>
                        <td>{speakers.time_end}</td>
                        <td>
                          <div className="text-center">
                            <Link to={`/editspeakers/${speakers.id}`}><span class="icon-pencil"></span></Link>
                            <span onClick={(e) => deleteSpeakers(e, speakers.id)} class="icon-trash-2"></span>
                          </div>
                        </td>
                        </tr> 
                  </tbody>
                </table>
              </div>
               ) : (
                <h3 className="text-center text-secondary">Please Add A Speaker For This Topic....</h3>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    );

}

export default EditTopics;
   