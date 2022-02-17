 
import React, { useState, useEffect } from 'react';

import TestimonialsDataService from "../Services/TestimonialServices";

import { Routes, Route, Link, useParams, useNavigate } from "react-router-dom";
import axios from 'axios';
import swal from 'sweetalert-react';



function EditTestimonial() {
  let params = useParams();
  let navigate = useNavigate();


  const initialTestimonialDetailsState = {
    id: null,
    title: "",
    date: "",
    details: ""
  };
  const [currenttestimonial, setCurrentTestimonial] = useState(initialTestimonialDetailsState);
  const [message, setMessage] = useState("");


  const getTestimonialDetails = id => {
    TestimonialsDataService.get(id)
      .then(response => {
        console.log("testimonial", response);
        setCurrentTestimonial(response.data);
      
        console.log("testimonials", currenttestimonial);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentTestimonial({ ...currenttestimonial, [name]: value });
  };
  

  useEffect(() => {
    getTestimonialDetails(params.id);
  }, [params.id]);


  const updateTestimonial = (e) => {
    e.preventDefault();

    TestimonialsDataService.update(currenttestimonial.id, currenttestimonial)
      .then(response => {
        console.log( "testimonial", response.data);
        setMessage("The Testimony was updated successfully!");
        console.log( "testimonial", message);

      })
      .catch(e => {
        console.log(e);
      });
      

 };

 


  return (
    <div className="container">

      <div>
        <Link to={'/addtestimony'} className="btn btn-warning btn-sm float-end"> Add Testimonial</Link>
      </div>
      {currenttestimonial ? (

            <div className="card">
              <div className="card-body">
              <form onSubmit={updateTestimonial} >

                <div className="row gutters">
                    <div className="col-xl-4 col-lglg-4 col-md-4 col-sm-4 col-12">
                      <div className="form-group">
                        <label htmlFor="inputDate">Input ID</label>
                        <input type="id" className="form-control" id="inputId"
                          placeholder="Enter Id"
                           name="id" onChange={handleInputChange}
                          value={currenttestimonial.id}>
                          </input>
                      </div>
                    </div>
                    <div className="col-xl-4 col-lglg-4 col-md-4 col-sm-4 col-12">
                      <div className="form-group">
                        <label htmlFor="inputTitle">NAME</label>
                        <input type="text" className="form-control" id="inputName"
                          placeholder="Enter full name" 
                          name="name" onChange={handleInputChange}
                          value={currenttestimonial.name}></input>
                      </div>
                    </div>

                    <div className="col-xl-4 col-lglg-4 col-md-4 col-sm-4 col-12">
                      <div className="form-group">
                        <label htmlFor="inputDetails">Input DETAILS</label>
                        <input type="text" className="form-control" id="inputDetails"
                          placeholder="Enter Details"
                            name="details" onChange={handleInputChange}
                          value={currenttestimonial.details}>
                          </input>
                      </div>
                    </div>
                    <div className="col-xl-4 col-lglg-4 col-md-4 col-sm-4 col-12">
                      <div className="form-group">
                        <label htmlFor="inputTitle">RATING</label>
                        <input type="text" className="form-control" id="inputRating"
                          placeholder="Enter Rating" 
                          name="rating" onChange={handleInputChange}
                          value={currenttestimonial.rating}></input>
                      </div>
                    </div>
                    <div className="col-xl-4 col-lglg-4 col-md-4 col-sm-4 col-12">
                      <div className="form-group">
                        <label htmlFor="inputProfession">Input PROFESSION</label>
                        <input type="text" className="form-control" id="inputProfession"
                          placeholder="Enter Profession"
                            name="professsion" onChange={handleInputChange}
                          value={currenttestimonial.profession}>
                          </input>
                      </div>
                    </div>
                    </div>
                    </form>
                    <div className="d-flex">
        <div>
 <button type="submit" className="btn btn-primary"
               onClick={updateTestimonial}
               >Update Testimonial</button>
               <p>{message}</p>
           </div>
           <div>
 <Link to ="/testimonials"
  type="submit" className="btn btn-danger "
               >All Testimonials</Link>
           </div>
           </div>

              </div>
            </div>
            
      ) : (
        <div>
          <br />
          <p>Please Click on an Testimonial...</p>
        </div>
      )}

    </div>
    );

}

export default EditTestimonial;
