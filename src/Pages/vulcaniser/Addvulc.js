import React, { useState,useEffect } from "react";
import AuthService from "../../Services/Auth/auth.service";
import VulcsDataService  from "../../Services/VulcService";
import {Link, useNavigate} from 'react-router-dom';
import Button from '../../ReUsables/Button'


const AddVulc  = () => {
  let navigate = useNavigate();

  const initialVulcState = {
    // id: null,
    title: "",
    details: "",
    date: "",
    // status: ""
  };
  const [vulc, setVulc] = useState(initialVulcState);
  const [submitted, setSubmitted] = useState(false);


  useEffect(() => {
    const user = AuthService.getCurrentUser();
    if (!user) {
      navigate("/login");
    } else {
         return
    }

}, []);

  const handleInputChange = input => {
    const { name, value } = input.target;
    setVulc({ ...vulc, [name]: value });
  };

  const saveVulc = () => {
    var data = {
      title: vulc.title,
      details: vulc.details,
      date: vulc.date,
      // status: event.status

    };

    VulcsDataService.create(data)
      .then(response => {
        setVulc({
          // id: response.data.id,
          title: response.data.title,
          details: response.data.details,
          date: response.data.date,
          // status: response.data.status
        });
        setSubmitted(true);
        console.log( "addevent",response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const newVulc = () => {
    setVulc(initialVulcState);
    setSubmitted(false);
  };

   return (
    <div className="submit-form">
      {submitted ? (
        <div>
                  <h4>You submitted successfully!</h4>
        <div className="d-flex justify-content-between">
          <Button
              size='btn-sm'
              textcolor='white'
              color='btn-warning'
               text="Add Event"
               onClick={newVulc} />
          <Link to={'/vulcs'} className="btn btn-warning btn-sm float-end">Vulcs</Link>

        </div></div>
      ) : (
        <div>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              required
              value={vulc.title}
              onChange={handleInputChange}
              name="title"
            />
          </div>

          <div className="form-group">
            <label htmlFor="details">Details</label>
            <input
              type="text"
              className="form-control"
              id="details"
              required
              value={vulc.details}
              onChange={handleInputChange}
              name="details"
            />
          </div>
          <div className="form-group">
            <label htmlFor="date">Date</label>
            <input
              type="date"
              className="form-control"
              id="date"
              required
              value={vulc.date}
              onChange={handleInputChange}
              name="date"
            />
          </div>
          {/*<div className="form-group">
            <label htmlFor="date">Status</label>
            <input
              type="status"
              className="form-control"
              id="status"
              required
              value={event.status}
              onChange={handleInputChange}
              name="status"
            />
      </div>*/}
<div className="d-flex justify-content-between">
<Button
              size='btn-sm'
              textcolor='white'
              color='btn-warning'
               text="Submit"
               onClick={saveVulc} />
                         <Link to={'/vulcs'} className="btn btn-warning btn-sm float-end">Events</Link>
</div>
        </div>
      )}
    </div>
  );
};

export default AddVulc
  