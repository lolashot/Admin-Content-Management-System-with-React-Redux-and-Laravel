import React, { useState,useEffect } from "react";
import Button from '../ReUsables/Button'
import {Link,useNavigate, useParams } from 'react-router-dom';
import AuthService from "../Services/Auth/auth.service";
import SpeakerDataService from "../Services/SpeakerService";


const AddSpeaker = () => {
  let params = useParams();

  let navigate = useNavigate();

  const initialSpeakerState = {
    fullname: "",
    title: "",
    qualifications: "",

  };
  const [addspeakers, setAddspeakers] = useState(initialSpeakerState);
  const [submitted, setSubmitted] = useState(false);
  useEffect(() => {
    const user = AuthService.getCurrentUser();
    if (!user) {
      navigate("/login");
    } else {
         return
    }

}, []);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setAddspeakers({ ...addspeakers, [name]: value });
  };

  const saveaddspeakers = () => {
    var data = {
      title: addspeakers.title,
      fullname: addspeakers.fullname,
      qualifications: addspeakers.qualifications,
      
    };

    SpeakerDataService.create(params.id, data)
      .then(response => {
        setAddspeakers({
          title: response.data.title,
          fullname: response.data.fullname,
          qualifications: response.data.qualifications,
         
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const newSpeaker = () => {
    setAddspeakers(initialSpeakerState);
    setSubmitted(false);
  };

   return (
    <div className="submit-form">
      {submitted ? (
        <div className="d-flex justify-content-between">
        <div>
          <h4>You submitted successfully!</h4>
          <Button
              size='btn-sm'
              textcolor='white'
              color='btn-success'
               text="Add Speaker"
               onClick={newSpeaker} />
        </div>
                <Link to={'/speakers'} className="btn btn-warning btn-sm float-end"> All SPEAKERS</Link>
</div>
      ) : (
        <div>

          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              required
              value={addspeakers.title}
              onChange={handleInputChange}
              name="title"
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">FULLNAME</label>
            <input
              type="text"
              className="form-control"
              id="fullname"
              required
              value={addspeakers.fullname}
              onChange={handleInputChange}
              name="fullname"
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Qualifications</label>
            <input
              type="text"
              className="form-control"
              id="qualification"
              required
              value={addspeakers.qualifications}
              onChange={handleInputChange}
              name="qualifications"
            />
          </div>

          
          
<div className="d-flex justify-content-between">
          <Button
              size='btn-sm'
              textcolor='white'
              color='btn-danger'
               text="Submit"
               onClick={saveaddspeakers} />
                       <Link to={'/speakers'} className="btn btn-warning btn-sm float-end"> All SPEAKERS</Link>
</div>
        </div>
      )}
    </div>
  );
};

export default AddSpeaker
  