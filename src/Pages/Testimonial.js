import React, { useState, useEffect } from 'react';
import TestimonialDataService from "../Services/TestimonialServices";
import {Link, } from 'react-router-dom';
import Button from '../ReUsables/Button'
import swal from 'sweetalert';



function Testimonial() {
    const [loading, setLoading] = useState(true);
    const [testimonials, setTestimonials] = useState([]);



    useEffect(() => {
        retrieveTestimonial();
    }, []);

    const retrieveTestimonial = () => {
        TestimonialDataService.getAll()
            .then(response => {
                console.log("tutossssr", response);
                setTestimonials(response.data.data);
                // const lastTwo = cars.slice(-2);


                setLoading(false);
                console.log("about", response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    const MAX_LENGTH = 120;

    const deleteTestimonial = (e, id) => {
        e.preventDefault();
        swal("Confirm","Are you sure you want to Delete","confirm"); 
        const thisClicked = e.currentTarget;
        thisClicked.innerText = "Deleting";
        TestimonialDataService.remove(id)
        .then(response => {
            console.log("delete", response.data);
            setTestimonials(testimonials.filter((testimonial) => testimonial.id !== id))
            // props.history.push("/tutorials");
          })
          .catch(e => {
            console.log(e);
            thisClicked.innerText = "error";
            swal("Error","Not Deleted","error");

    
          });
      };
    
if (loading) {
        return <h4 className="text-center">Loading Testimonials...</h4>
    }
else

    return (

      <div>
      <div className="row">
          <Link to={'/addtestimonial'} className="btn btn-primary btn-sm float-end"> Add  TESTIMONIALS</Link>
      </div>


      <div class="row gutters">
          <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
          <div class="card border-warning">
        <div class="card-header bg-warning">Testimonials</div>
          <div class="card-body text-danger">
          <h5 class="card-title">Testimonial Table</h5>
                      <div class="table-responsive">
                          <table class="table table-bordered table-stripped m-0 text-center">
                              <thead>
                                  <tr>
                                      <th>ID</th>
                                      <th>Name</th>
                                      <th>Details</th>
                                      <th>Rating</th>
                                      <th>Profession</th>
                                      <th>Actions</th>
                                  </tr>
                              </thead>
                              <tbody>
                                  {testimonials.map((testimonial, index) => (

                                      <tr key={index}>
                                          <td>{testimonial.id}</td>
                                          <td>{testimonial.name}</td>
                                          <td>{testimonial.details}</td>
                                          <td>{testimonial.rating}</td>
                                          <td>{testimonial.Profession}</td>
                                          <td>
                                              <div className="text-center">
                                                  <Link to={`/edittestimonial/${testimonial.id}`}><span class="icon-pencil"></span></Link>
                                                  <span onClick={(e) => deleteTestimonial(e, testimonial.id)}class="icon-trash-2"></span>
                                              </div>
                                          </td>
                                      </tr>
                                  ))}
                              </tbody>
                          </table>
                      </div>
                  </div>
              </div>

          </div>
      </div>
  </div>
);
}
    export default Testimonial 

