import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link, useNavigate } from 'react-router-dom';
import AboutDataService from "../Services/AboutService";
import Button from '../ReUsables/Button'
import AuthService from "../Services/Auth/auth.service";


function About() {
  let navigate = useNavigate();

    const initialAboutState = {
    id: null,
    title: "",
    details: "",
  };

    const [loading, setLoading] = useState(true);
    const [about, setAbout] = useState(initialAboutState);
    const [message, setMessage] = useState("");
  

    useEffect(() => {
      const user = AuthService.getCurrentUser();
      if (!user) {
        navigate("/login");
      } else {
        retrieveAbout(); 

      }

  }, []);

    const retrieveAbout = () => {
    AboutDataService.getAll()
      .then(response => {
       console.log("tutossssr", response);
        setAbout(response.data);

        setLoading(false);
        console.log("about", response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const handleInputChange = event => {
    const { name, value } = event.target;
    setAbout({ ...about, [name]: value });
  };

  const updateAbout = (e) => {
    e.preventDefault();
    AboutDataService.update(about.id, about)
      .then(response => {
        console.log( "about", response.data);
        setMessage(" About Status was updated successfully!");
        console.log( "abouts", message);

      })
      .catch(e => {
        console.log(e);
      });
      

 };


const deleteAbout = (e, id) => {
  e.preventDefault();
    AboutDataService.remove(about.id)
      .then(response => {
        console.log(response.data);
        setMessage(" About Status was deleted successfully!");
        navigate("/addabout");
        // props.history.push("/tutorials");
      })
      .catch(e => {
        console.log(e);
      });
  };


  const newAbout = () => {
    setAbout(initialAboutState);
    
  };


if (loading) {
        return <h4 className="text-center">Loading About Page </h4>
    }
else

    return (

      <div className="container">
        
      {about ? (

            <div className="card">
              <div className="card-body">
              <form onSubmit={updateAbout} >

                <div className="row gutters">

                    <div className="col-xl-4 col-lglg-4 col-md-4 col-sm-4 col-12">
                      <div className="form-group">
                        <label htmlFor="inputTitle">ID</label>
                        <input type="text" className="form-control" id="inputid"
                          placeholder="Enter id" 
                          name="title" onChange={handleInputChange}
                          value={about.id}></input>
                      </div>
                    </div>
                    <div className="col-xl-4 col-lglg-4 col-md-4 col-sm-4 col-12">
                      <div className="form-group">
                        <label htmlFor="inputTitle">Input TITLE</label>
                        <input type="title" className="form-control" id="inputtitle"
                          placeholder="Enter title"
                           name="title" onChange={handleInputChange}
                          value={about.title}>
                          </input>
                      </div>
                    </div>

                    <div className="col-xl-4 col-lglg-4 col-md-4 col-sm-4 col-12">
                      <div className="form-group">
                        <label htmlFor="inputDetails">Input DETAILS</label>
                        <input type="text" className="form-control" id="inputDetails"
                          placeholder="Enter Details"
                            name="details" onChange={handleInputChange}
                          value={about.details}>
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
              color='btn-warning'
               text="Update About"
               onClick={updateAbout} />
               <p>{message}</p>
           </div>
           <div>
           <Button
              size='btn-sm'
              textcolor='red'
              color='btn-info'
               text="Delete About"
               onClick={(e)=>deleteAbout(e, about.id)} />
               
           </div>
           </div>

              </div>
            </div>
            
      ) : (
        <div>
          <br />
          <h2 className="text-center text-danger">No About Details, please Add About Details ...</h2>
          <Link to={'/addabout'} className="btn btn-warning btn-sm float-end">AddAbout</Link>
        </div>
      )}

    </div>
    );

}
export default About;