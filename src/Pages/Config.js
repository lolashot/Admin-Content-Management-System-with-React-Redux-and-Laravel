import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link, } from 'react-router-dom';
import ConfigDataService from "../Services/ConfigService";
import Contact from "./Contact"


function Config() {
const [loading, setLoading] = useState(true);
const [config, setConfig] = useState({});
const [message, setMessage] = useState({});


    useEffect(() => {
    retrieveConfig();
  }, []);

    const retrieveConfig = () => {
    ConfigDataService.getAll()
      .then(response => {
       console.log("config", response);
        setConfig(response.data);
        setLoading(false);

        console.log("configg", response.data);
      })
      .catch(e => {
        console.log(e);
        // setConfig({});
      });
  };

  const handleInputChange = event => {
    const { name, value } = event.target;
    setConfig({ ...config, [name]: value });
  };

  const updateConfig = (e) => {
    e.preventDefault();
    ConfigDataService.update(config.id, config)
      .then(response => {
        console.log( "config", response.data);
        setMessage(" Config Status was updated successfully!");
        console.log( "configs", message);

      })
      .catch(e => {
        console.log(e);
      });
      

 };

  

  if (loading) {
    return <h4 className="text-center">Loading Config Page....
     </h4>
}
else

return 

<div className="container">

<div>
  <Link to={'/addconfig'} className="btn btn-warning btn-sm float-end"> Add About</Link>
</div>
{config ? (

      <div className="card">
        <div className="card-body">
        <form onSubmit={updateConfig} >

          <div className="row gutters">

              <div className="col-xl-4 col-lglg-4 col-md-4 col-sm-4 col-12">
                <div className="form-group">
                  <label htmlFor="inputTitle">EMAIL 1</label>
                  <input type="email" className="form-control" id="inputemail"
                    placeholder="Enter email"
                     name="date" onChange={handleInputChange}
                    value={config.email_1}>
                    </input>
                </div>
              </div>
              <div className="col-xl-4 col-lglg-4 col-md-4 col-sm-4 col-12">
                <div className="form-group">
                  <label htmlFor="inputTitle">EMAIL 2</label>
                  <input type="email" className="form-control" id="inputEmail"
                    placeholder="Enter email" 
                    name="title" onChange={handleInputChange}
                    value={config.email_2}></input>
                </div>
              </div>
              <div className="col-xl-4 col-lglg-4 col-md-4 col-sm-4 col-12">
                <div className="form-group">
                  <label htmlFor="inputDetails">TWITTER</label>
                  <input type="text" className="form-control" id="inputDetails"
                    placeholder="Enter Details"
                      name="details" onChange={handleInputChange}
                    value={config.twitter}>
                    </input>
                </div>
              </div>
              <div className="col-xl-4 col-lglg-4 col-md-4 col-sm-4 col-12">
                <div className="form-group">
                  <label htmlFor="inputTitle">LINKEDIN</label>
                  <input type="text" className="form-control" id="inputText"
                    placeholder="Enter text" 
                    name="title" onChange={handleInputChange}
                    value={config.linkedin}></input>
                </div>
              </div>
              <div className="col-xl-4 col-lglg-4 col-md-4 col-sm-4 col-12">
                <div className="form-group">
                  <label htmlFor="inputTitle">INSTAGRAM</label>
                  <input type="text" className="form-control" id="inputText"
                    placeholder="Enter text" 
                    name="title" onChange={handleInputChange}
                    value={config.instagram}></input>
                </div>
              </div>
              <div className="col-xl-4 col-lglg-4 col-md-4 col-sm-4 col-12">
                <div className="form-group">
                  <label htmlFor="inputTitle">FACEBOOK</label>
                  <input type="text" className="form-control" id="inputText"
                    placeholder="Enter text" 
                    name="title" onChange={handleInputChange}
                    value={config.facebook}></input>
                </div>
              </div>
              <div className="col-xl-4 col-lglg-4 col-md-4 col-sm-4 col-12">
                <div className="form-group">
                  <label htmlFor="inputTitle">YOUTUBE</label>
                  <input type="text" className="form-control" id="inputText"
                    placeholder="Enter text" 
                    name="title" onChange={handleInputChange}
                    value={config.youtube}></input>
                </div>
              </div>
              </div>
              </form>
              <div className="d-flex">
  <div>
<button 
type="submit" className="btn btn-primary"
         onClick={updateConfig}
         >Update Config</button>
         <p>{message}</p>
     </div>
     <div>
<button
type="submit" className="btn btn-danger "
         >Delete</button>
     </div>
     </div>

        </div>
      </div>
      
) : (
  <div>
    <br />
    <p>Please Wait...</p>
  </div>
)}

</div>


}
export default Config;
