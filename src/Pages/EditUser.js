
import React, { useState, useEffect } from 'react';
import UsersDataService from "../Services/UsersService";
import { Routes, Route, Link, useParams, useNavigate } from "react-router-dom";
import AuthService from "../Services/Auth/auth.service";
import axios from 'axios';
import Button from '../ReUsables/Button'




function EditUsers() {
  let params = useParams();
  let navigate = useNavigate();

  const initialUserrDetailsState = {
    id: null,
    name: "",
    email: "",
    details: ""
  };
  const [currentUserr, setCurrentUserr] = useState(initialUserrDetailsState);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);

  
  const getUserDetails = id => {
    UsersDataService.get(id)
      .then(response => {
        console.log("eventD", response);
        setCurrentUserr(response.data.data);
        
        console.log("userr", response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };


  const handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentUserr({ ...currentUserr, [name]: value });
  };

  useEffect(() => {
    getUserDetails(params.id);
  }, [params.id]);
  

  const updateUserr = (e) => {
    e.preventDefault();

    UsersDataService.update(currentUserr.id, currentUserr)
      .then(response => {
        console.log("users", response.data);
        setMessage("The user was updated successfully!");
        console.log("userss", message);

      })
      .catch(e => {
        console.log(e);
      });
  };




  return (
    <div className="container">

      <div>
        <Link to={'/register'} className="btn btn-warning btn-sm float-end"> Add User</Link>
      </div>
      {currentUserr ? (

        <div className="card">
          <div className="card-body">
            <form onSubmit={updateUserr} >

              <div className="row gutters">

                <div className="col-xl-4 col-lglg-4 col-md-4 col-sm-4 col-12">
                  <div className="form-group">
                    <label htmlFor="inputTitle">TITLE</label>
                    <input type="text" className="form-control" id="inputTitle"
                      placeholder="Enter full name"
                      name="title" onChange={handleInputChange}
                      value={currentUserr.name}></input>
                  </div>
                </div>
                <div className="col-xl-4 col-lglg-4 col-md-4 col-sm-4 col-12">
                  <div className="form-group">
                    <label htmlFor="inputDate">Input DATE</label>
                    <input type="date" className="form-control" id="inputDate"
                      placeholder="Enter Date"
                      name="date" onChange={handleInputChange}
                      value={currentUserr.email}>
                    </input>
                  </div>
                </div>

                <div className="col-xl-4 col-lglg-4 col-md-4 col-sm-4 col-12">
                  <div className="form-group">
                    <label htmlFor="inputDetails">Input DETAILS</label>
                    <input type="text" className="form-control" id="inputDetails"
                      placeholder="Enter Details"
                      name="details" onChange={handleInputChange}
                      value={currentUserr.details}>
                    </input>
                  </div>
                </div>

              </div>
            </form>
            <div className="d-flex justify-content-between">
              <div>
                <Button
                  size='btn-sm'
                  textcolor='white'
                  color='btn-primary'
                  text="Update User"
                  onClick={updateUserr} />
                <p>{message}</p>
              </div>
              <div>
                <Link to="/users"
                  type="submit" className="btn btn-danger "
                >All Users</Link>
              </div>
            </div>

          </div>
        </div>

      ) : (
        <div>
          <br />
          <p>Please Click on a User...</p>
        </div>
      )}
</div>

        );

}

export default EditUsers;
