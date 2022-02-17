import React, { useState } from "react";

import StatisticsDataService  from "../Services/StatisticsServices";

const AddStatistics = () => {
  const initialStatisticState = {
    id: null,
    title: "",
    description: "",
    published: false
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
      value: statistics.description
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
          <button className="btn btn-success" onClick={newStatistic}>
            Add
          </button>
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

          <button onClick={saveStatistic} className="btn btn-success">
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default AddStatistics
  