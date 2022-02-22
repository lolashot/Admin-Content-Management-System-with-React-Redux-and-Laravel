import React, { useState } from "react";
import Button from '../ReUsables/Button'
import StatisticsDataService  from "../Services/StatisticsServices";

const AddStatistics = () => {
  const initialStatisticState = {
    id: null,
    title: "",
    value: "",
    // published: false
  };
  const [statistics, setStatistics] = useState(initialStatisticState);
  const [submitted, setSubmitted] = useState(false);

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
        <div>
          <h4>You submitted successfully!</h4>
          <Button
              size='btn-sm'
              textcolor='white'
              color='btn-success'
               text="Add Statistic"
               onClick={newStatistic} />
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

          <Button
              size='btn-sm'
              textcolor='white'
              color='btn-danger'
               text="Submit"
               onClick={saveStatistic} />
        </div>
      )}
    </div>
  );
};

export default AddStatistics
  