import React, { useState,useEffect } from "react";
import Button from '../ReUsables/Button'
import {Link,useNavigate, useParams } from 'react-router-dom';
import AuthService from "../Services/Auth/auth.service";
import ItemDataService from "../Services/ItemService";


const AddTopic = () => {
  let params = useParams();

  let navigate = useNavigate();

  const initialTopicState = {
    title: "",
    date: "",
    time: "",
    details: ""

    // published: false
  };
  const [addtopics, setAddtopics] = useState(initialTopicState);
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
    setAddtopics({ ...addtopics, [name]: value });
  };

  const saveaddtopics = () => {
    var data = {
      title: addtopics.title,
      date: addtopics.date,
      time: addtopics.time,
      details: addtopics.details

    };

    ItemDataService.create(params.id, data)
      .then(response => {
        setAddtopics({
          title: response.data.title,
          date: response.data.date,
          time: response.data.time,
          details: response.data.details
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const newTopic = () => {
    setAddtopics(initialTopicState);
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
               text="Add Topic"
               onClick={newTopic} />
        </div>
                <Link to={'/alltopics'} className="btn btn-warning btn-sm float-end"> All Topics</Link>
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
              value={addtopics.title}
              onChange={handleInputChange}
              name="title"
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Date</label>
            <input
              type="date"
              className="form-control"
              id="date"
              required
              value={addtopics.date}
              onChange={handleInputChange}
              name="date"
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Time</label>
            <input
              type="text"
              className="form-control"
              id="time"
              required
              value={addtopics.time}
              onChange={handleInputChange}
              name="time"
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Details</label>
            <input
              type="text"
              className="form-control"
              id="details"
              required
              value={addtopics.details}
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
               onClick={saveaddtopics} />
                       <Link to={'/allitems'} className="btn btn-warning btn-sm float-end"> All Items</Link>
</div>
        </div>
      )}
    </div>
  );
};

export default AddTopic
  