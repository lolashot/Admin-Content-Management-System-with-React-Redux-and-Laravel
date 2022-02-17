 
import React, { useState, useEffect } from 'react';

import StatisticsDataService from "../Services/StatisticsServices";

import { Routes, Route, Link, useParams, useNavigate } from "react-router-dom";
import axios from 'axios';
import swal from 'sweetalert-react';



function EditStatistics() {
  let params = useParams();
  let navigate = useNavigate();


  const initialStatisticsDetailsState = {
    id: null,
    title: "",
    date: "",
    details: ""
  };
  const [currentstatistic, setCurrentStatistic] = useState(initialStatisticsDetailsState);
  const [message, setMessage] = useState("");


  const getStatisticDetails = id => {
    StatisticsDataService.get(id)
      .then(response => {
        console.log("statistic", response);
        setCurrentStatistic(response.data);
      
        console.log("services", currentstatistic);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentStatistic({ ...currentstatistic, [name]: value });
  };


  useEffect(() => {
    getStatisticDetails(params.id);
  }, [params.id]);


  const updateStatistic = (e) => {
    e.preventDefault();

    StatisticsDataService.update(currentstatistic.id, currentstatistic)
      .then(response => {
        console.log( "statistic", response.data);
        setMessage("The statistic was updated successfully!");
        console.log( "statistic", message);

      })
      .catch(e => {
        console.log(e);
      });
      

 };

  

  return (
    <div className="container">

      <div>
        <Link to={'/addstatistics'} className="btn btn-warning btn-sm float-end"> Add Statistics</Link>
      </div>
      {currentstatistic ? (

            <div className="card">
              <div className="card-body">
              <form onSubmit={updateStatistic} >

                <div className="row gutters">

                    <div className="col-xl-4 col-lglg-4 col-md-4 col-sm-4 col-12">
                      <div className="form-group">
                        <label htmlFor="inputTitle">TITLE</label>
                        <input type="text" className="form-control" id="inputTitle"
                          placeholder="Enter full name" 
                          name="title" onChange={handleInputChange}
                          value={currentstatistic.title}></input>
                      </div>
                    </div>
                    <div className="col-xl-4 col-lglg-4 col-md-4 col-sm-4 col-12">
                      <div className="form-group">
                        <label htmlFor="inputDate">Input ID</label>
                        <input type="id" className="form-control" id="inputId"
                          placeholder="Enter Id"
                           name="id" onChange={handleInputChange}
                          value={currentstatistic.id}>
                          </input>
                      </div>
                    </div>

                    <div className="col-xl-4 col-lglg-4 col-md-4 col-sm-4 col-12">
                      <div className="form-group">
                        <label htmlFor="inputDetails">Input Value</label>
                        <input type="text" className="form-control" id="inputDetails"
                          placeholder="Enter Value"
                            name="value" onChange={handleInputChange}
                          value={currentstatistic.value}>
                          </input>
                      </div>
                    </div>
                  
                    </div>
                    </form>
                    <div className="d-flex">
        <div>
 <button type="submit" className="btn btn-primary"
               onClick={updateStatistic}
               >Update Statistics</button>
               <p>{message}</p>
           </div>
           <div>
 <Link to ="/statistics"
  type="submit" className="btn btn-danger "
               >All Statistics</Link>
           </div>
           </div>

              </div>
            </div>
            
      ) : (
        <div>
          <br />
          <p>Please Click on a Statistic...</p>
        </div>
      )}

    </div>
    );

}

export default EditStatistics;
