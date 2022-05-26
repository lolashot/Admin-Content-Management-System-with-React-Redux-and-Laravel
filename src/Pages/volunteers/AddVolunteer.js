import React, { useState, useEffect } from "react";
import Button from '../../ReUsables/Button'
import {Link, useNavigate} from 'react-router-dom';
import AuthService from "../../Services/Auth/auth.service";
import VolunteerDataService  from "../../Services/VolunteerService";

const AddVolunteer = () => {
  let navigate = useNavigate();

  const initialVolunteerState = {
    id: null,
    title: "",
    details: ""
    

    // published: false
  };
  const [volunteers, setVolunteers] = useState(initialVolunteerState);
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
    setVolunteers({ ...volunteers, [name]: value });
  };

  const saveVolunteer = () => {
    var data = {
      title: volunteers.title,
      details: volunteers.details
    };

    VolunteerDataService.create(data)
      .then(response => {
        setVolunteers({
          id: response.data.id,
          title: response.data.title,
          details: response.data.details,
          

        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const newVolunteer = () => {
    setVolunteers(initialVolunteerState);
    setSubmitted(false);
  };

   return (
    <div className="submit-form">
      {submitted ? (
        <div>
        <div>
          <h4>You submitted successfully!</h4>
          <Button
              size='btn-sm'
              textcolor='white'
              color='btn-success'
               text="Add Service"
               onClick={newVolunteer} />
        </div>
                <Link to={'/volunteers'} className="btn btn-warning btn-sm float-end"> Services</Link>
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
              value={volunteers.title}
              onChange={handleInputChange}
              name="title"
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Details</label>
            <input
              type="text"
              className="form-control"
              id="details"
              required
              value={volunteers.details}
              onChange={handleInputChange}
              name="details"
            />
          </div>

          <div className="d-flex justify-content-between">
          <Button
              size='btn-sm'
              textcolor='white'
              color='btn-danger'
               text="Submit"
               onClick={saveVolunteer} />
                       <Link to={'/volunteers'} className="btn btn-warning btn-sm float-end"> Services</Link>
</div>
        </div>
      )}
    </div>
  );
};

export default AddVolunteer
  