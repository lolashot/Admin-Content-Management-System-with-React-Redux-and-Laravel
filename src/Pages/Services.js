import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ServiceDataService from "../Services/ServicesComp";
import Button from '../ReUsables/Button'
import AuthService from "../Services/Auth/auth.service";



function Services() {
    let navigate = useNavigate();

    const [loading, setLoading] = useState(true);
    const [services, setServices] = useState([]);

    useEffect(() => {
        const user = AuthService.getCurrentUser();
  
        if (user) {
            retrieveService();
        } else {
            navigate("/login");
  
        }
  
    }, []);
    const retrieveService = () => {
    ServiceDataService.getAll()
      .then(response => {
       console.log("tutossssr", response);
        setServices(response.data);

        setLoading(false);
        console.log("about", response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const deleteServices = (e, id) => {
    e.preventDefault(); 
    const thisClicked = e.currentTarget;
    thisClicked.innerText = "Deleting";
    ServiceDataService.remove(id)
    .then(response => {
        console.log("delete", response.data);
        setServices(services.filter((service) => service.id !== id))
        // props.history.push("/tutorials");
      })
      .catch(e => {
        console.log(e);
        thisClicked.innerText = "error";

      });
  };

if (loading) {
        return <h4>Loading Services...</h4>
    }
else

    return (
      <div>
      <div className="row">
          <Link to={'/addservice'} className="btn btn-primary btn-sm float-end"> Add  SERVICE</Link>
      </div>


      <div class="row gutters">
          <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
          <div class="card border-warning">
        <div class="card-header bg-warning">SERVICES</div>
          <div class="card-body text-primary">
          <h5 class="card-title">Services Table</h5>
                      <div class="table-responsive">
                          <table class="table table-bordered table-stripped m-0 text-center">
                              <thead>
                                  <tr>
                                      <th>ID</th>
                                      <th>Title</th>
                                      <th>Descripton</th>
                                      <th>Date</th>
                                      <th>Actions</th>
                                  </tr>
                              </thead>
                              <tbody>
                                  {services.map((service, index) => (

                                      <tr key={index}>
                                          <td>{service.id}</td>
                                          <td>{service.title}</td>
                                          <td>{service.details}</td>
                                          <td>{service.date}</td>
                                          <td>
                                              <div className="text-center">
                                                  <Link to={`/editservice/${service.id}`}><span class="icon-pencil"></span></Link>
                                                  <span onClick={(e) => deleteServices(e, service.id)}class="icon-trash-2"></span>
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
export default Services;