

import React, { useState, useEffect } from 'react';
import AuthService from "../Services/Auth/auth.service";

import PreviousEventService from "../Services/PreviouseventsService";

import { Routes, Route, Link, useParams, useNavigate } from "react-router-dom";

function EditPrevious() {
  let params = useParams();
  let navigate = useNavigate();

  const initialPreviousDetailsState = {
    id: null,
    title: "", 
    date: "",
    details: ""
  };
  const [currentpreviousevent, setCurrentPreviousEvent] = useState(initialPreviousDetailsState);
  const [message, setMessage] = useState("");

const getPreviousDetails = id => {
  PreviousEventService.get(id)
    .then(response => {
       console.log("eventD", response);
      setCurrentPreviousEvent(response.data);
      console.log("eventD2",currentpreviousevent);
    })
    .catch(e => {
      console.log(e);
    });
};

const handleInputChange = event => {
  const { name, value } = event.target;
  setCurrentPreviousEvent({ ...currentpreviousevent, [name]: value });
};


useEffect(() => {
    getPreviousDetails(params.id);
  }, [params.id]);
  

  
     return (
<div className="container">
      <Link to={'/addstudent'} className="btn btn-primary btn-sm float-end"> Add Student</Link>
<div>
{currentpreviousevent ? (
 
<form>
  <div className="form-group container" style={{marginLeft:"200px",}}>
    <label htmlFor="formGroupExampleInput">TITLE</label>
    <input type="text" className="form-control" id="title"
     placeholder="title"
          value={currentpreviousevent.title}
          
          onChange={handleInputChange}/>

  </div>
  <div className="form-group container" style={{marginLeft:"200px",}}>
    <label htmlFor="formGroupExampleInput2">DETAILS</label>
    <input type="text" class="form-control" id="formGroupExampleInput2"
     placeholder="date"
          value={currentpreviousevent.date}
          
          onChange={handleInputChange}/>

  </div>
  <div className="form-group container" style={{marginLeft:"200px",}}>
    <label htmlFor="formGroupExampleInput2">DATE</label>
    <input type="text" class="form-control" id="formGroupExampleInput2" 
    placeholder="details" 
    name="details" 
      value={currentpreviousevent.details}
      
      onChange={handleInputChange}/>

  </div>
</form>
) : (
        <div>
          <br />
          <p>Loading EVENTDETAILS Page Please...</p>
        </div>
      )}
    </div>
    </div>

    );
}
export default EditPrevious;
