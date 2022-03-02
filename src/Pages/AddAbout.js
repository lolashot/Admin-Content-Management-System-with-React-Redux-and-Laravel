import React, { useState } from "react";
import {Link,  useNavigate} from 'react-router-dom';
import Button from '../ReUsables/Button'
import AuthService from "../Services/Auth/auth.service";


import AboutDataService  from "../Services/AboutService";

const AddAbout = () => {
  let navigate = useNavigate();

  const initialAboutState = {
    id: null,
    title: "",
    details: ""
  };
  const userr = AuthService.getCurrentUser();

  const [about, setAbout] = useState(initialAboutState);
  const [submitted, setSubmitted] = useState(false);
  const [user, setUser] = useState(userr);


  const handleInputChange = event => {
    const { name, value } = event.target;
    setAbout({ ...about, [name]: value });
  };

  const saveAbout = () => {
    var data = {
      title: about.title,
      details: about.details
    };

    AboutDataService.create(data)
      .then(response => {
        setAbout({
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

  const newAbout = () => {
    setAbout(initialAboutState);
    setSubmitted(false);
  };

      
if (user) {   
      
   return (
    <div className="submit-form">
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <Link to={'/about'} className="btn btn-warning btn-sm float-end">About</Link>
        </div>
      ) : (
        <div>
                    <h2 className="text-info text-center">ADD ABOUT!</h2>

          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              required
              value={about.title}
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
              value={about.details}
              onChange={handleInputChange}
              name="details"
            />
          </div>
          <Button
              size='btn-sm'
              textcolor='white'
              color='btn-warning'
               text="Submit About"
               onClick={saveAbout} />
        </div>
      )}
    </div>

  );
} else {
  navigate("/login");

}
};

export default AddAbout
  