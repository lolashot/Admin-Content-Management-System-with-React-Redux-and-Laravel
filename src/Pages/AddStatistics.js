import React, { useState,useEffect } from "react";
import Button from '../ReUsables/Button'
import {Link,useNavigate } from 'react-router-dom';
import AuthService from "../Services/Auth/auth.service";
import StatisticsDataService  from "../Services/StatisticsServices";

const AddStatistics = () => {
  let navigate = useNavigate();

  const initialStatisticState = {
    id: null,
    title: "",
    value: "",
    // published: false
  };
  const [statistics, setStatistics] = useState(initialStatisticState);
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
    setStatistics({ ...statistics, [name]: value });
  };

  const saveStatistic = () => {
    var data = {
      title: statistics.title,
      value: statistics.value
    };

    StatisticsDataService.create(data)
      .then(response => {
        setStatistics({
          id: response.data.id,
          title: response.data.title,
          value: response.data.value
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const newStatistic = () => {
    setStatistics(initialStatisticState);
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
               text="Add Statistic"
               onClick={newStatistic} />
        </div>
                <Link to={'/statistics'} className="btn btn-warning btn-sm float-end"> Statistics</Link>
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
              value={statistics.title}
              onChange={handleInputChange}
              name="title"
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Value</label>
            <input
              type="text"
              className="form-control"
              id="value"
              required
              value={statistics.value}
              onChange={handleInputChange}
              name="value"
            />
          </div>
<div className="d-flex justify-content-between">
          <Button
              size='btn-sm'
              textcolor='white'
              color='btn-danger'
               text="Submit"
               onClick={saveStatistic} />
                       <Link to={'/statistics'} className="btn btn-warning btn-sm float-end"> Statistics</Link>
</div>
        </div>
      )}
    </div>
  );
};

export default AddStatistics
  