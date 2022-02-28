import React, { useState } from "react";
import Button from '../ReUsables/Button'
import {Link, } from 'react-router-dom';
import ServiceDataService  from "../Services/StatisticsServices";

const AddServices = () => {
  const initialServiceState = {
    id: null,
    title: "",
    details: ""
    

    // published: false
  };
  const [services, setServices] = useState(initialServiceState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setServices({ ...services, [name]: value });
  };

  const saveService = () => {
    var data = {
      title: services.title,
      details: services.details
    };

    ServiceDataService.create(data)
      .then(response => {
        setServices({
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

  const newService = () => {
    setServices(initialServiceState);
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
               onClick={newService} />
        </div>
                <Link to={'/services'} className="btn btn-warning btn-sm float-end"> Services</Link>
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
              value={services.title}
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
              value={services.details}
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
               onClick={saveService} />
                       <Link to={'/services'} className="btn btn-warning btn-sm float-end"> Services</Link>
</div>
        </div>
      )}
    </div>
  );
};

export default AddServices
  