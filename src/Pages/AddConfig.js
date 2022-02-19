import React, { useState } from "react";
import {Link, } from 'react-router-dom';



import ConfigDataService  from "../Services/ConfigService";

const AddConfig = () => {
  
    const initialConfigState = {
      id: null,
     title: "",
     details: "",
     phone_1: "",
     phone_2: "",
     phone_3: "",
     email_1: "",
     email_2: "",
     email_3: "",
     address: "",
     facebook: "",
     linkedin: "",
     twitter: "",
     youtube: "",
     instagram: ""
    };
  
  const [config, setConfig] = useState(initialConfigState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setConfig({ ...config, [name]: value });
  };

  const saveConfig = () => {
    var data = {
      title: config.title,
      details: config.details,
      phone_1: config.phone_1,
      phone_2: config.phone_2,
      phone_3: config.phone_3,
      email_1: config.email_1,
      email_2: config.email_2,
      email_3: config.email_3,
      address: config.address,
      facebook: config.facebook,
      linkedin: config.linkedin,
      twitter: config.twitter,
      youtube: config.youtube,
      instagram: config.instagram
    };

    ConfigDataService.create(data)
      .then(response => {
        setConfig({
          id: response.data.id,
          title: response.data.title,
          details: response.data.details,
          email: response.data.email_1,
          email: response.data.email_2,
          email: response.data.email_3,

        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const newConfig = () => {
    setConfig(initialConfigState);
    setSubmitted(false);
  };

   return (
    <div className="submit-form">
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
        
          <Link to={'/config'} className="btn btn-warning btn-sm float-end">Config</Link>
        </div>
      ) : (
        <div>
                    <h2 className="text-info text-center">ADD Config!</h2>

          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              required
              value={config.title}
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
              value={config.details}
              onChange={handleInputChange}
              name="details"
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              required
              value={config.email_1}
              onChange={handleInputChange}
              name="email_1"
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              required
              value={config.email_2}
              onChange={handleInputChange}
              name="email_2"
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              required
              value={config.email_3}
              onChange={handleInputChange}
              name="email_3"
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone number">Phone Number</label>
            <input
              type="text"
              className="form-control"
              id="text"
              required
              value={config.phone_1}
              onChange={handleInputChange}
              name="phone_1"
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone number">Phone Number</label>
            <input
              type="text"
              className="form-control"
              id="text"
              required
              value={config.phone_2}
              onChange={handleInputChange}
              name="phone_2"
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone number">Phone Number</label>
            <input
              type="text"
              className="form-control"
              id="text"
              required
              value={config.phone_3}
              onChange={handleInputChange}
              name="phone_3"
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Address</label>
            <input
              type="address"
              className="form-control"
              id="address"
              required
              value={config.address}
              onChange={handleInputChange}
              name="address"
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone number">FACEBOOK</label>
            <input
              type="text"
              className="form-control"
              id="text"
              required
              value={config.facebook}
              onChange={handleInputChange}
              name="facebook"
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone number">INSTAGRAM</label>
            <input
              type="text"
              className="form-control"
              id="text"
              required
              value={config.instagram}
              onChange={handleInputChange}
              name="phone_1"
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone number">TWITTER</label>
            <input
              type="text"
              className="form-control"
              id="text"
              required
              value={config.twitter}
              onChange={handleInputChange}
              name="twitter"
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone number">YOUTUBE</label>
            <input
              type="text"
              className="form-control"
              id="text"
              required
              value={config.youtube}
              onChange={handleInputChange}
              name="youtube"
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone number">LINKEDIN</label>
            <input
              type="text"
              className="form-control"
              id="text"
              required
              value={config.linkedin}
              onChange={handleInputChange}
              name="linkedin"
            />
          </div>

          <button onClick={saveConfig} className="btn btn-success">
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default AddConfig
  