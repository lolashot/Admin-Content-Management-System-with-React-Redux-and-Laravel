import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom';
import ConfigDataService from "../Services/ConfigService";
import Button from '../ReUsables/Button'




function Config() {
  let navigate = useNavigate();

// const initialConfigState = {
//   id: null,
//   title: "",
//   details: "",
//   phone_1: "",
//   phone_2: "",
//   phone_3: "",
//   email_1: "",
//   email_2: "",
//   email_3: "",
//   address: "",
//   facebook: "",
//   linkedin: "",
//   twitter: "",
//   youtube: "",
//   instagram: ""
// };

const [loading, setLoading] = useState(true);
const [config, setConfig] = useState({});
const [message, setMessage] = useState("");

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

 const deleteConfig = (e, id) => {
  e.preventDefault();
    ConfigDataService.remove(config.id)
      .then(response => {
        console.log(response.data);
        setMessage(" Config Status was deleted successfully!");
        navigate("/addconfig");
        // props.history.push("/tutorials");
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

return (

<div className="container">

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
                     name="email_1" onChange={handleInputChange}
                    value={config.email_1}>
                    </input>
                </div>
              </div>
              <div className="col-xl-4 col-lglg-4 col-md-4 col-sm-4 col-12">
                <div className="form-group">
                  <label htmlFor="inputTitle">EMAIL 2</label>
                  <input type="email" className="form-control" id="inputEmail"
                    placeholder="Enter email" 
                    name="email_2" onChange={handleInputChange}
                    value={config.email_2}></input>
                </div>
              </div>
              <div className="col-xl-4 col-lglg-4 col-md-4 col-sm-4 col-12">
                <div className="form-group">
                  <label htmlFor="inputTitle">EMAIL 2</label>
                  <input type="email" className="form-control" id="inputEmail"
                    placeholder="Enter email" 
                    name="email_3" onChange={handleInputChange}
                    value={config.email_3}></input>
                </div>
              </div>
              <div className="col-xl-4 col-lglg-4 col-md-4 col-sm-4 col-12">
                <div className="form-group">
                  <label htmlFor="inputTitle">PHONE</label>
                  <input type="phone" className="form-control" id="inputPhone"
                    placeholder="Enter phone" 
                    name="phone_1" onChange={handleInputChange}
                    value={config.phone_1}></input>
                </div>
              </div>
              <div className="col-xl-4 col-lglg-4 col-md-4 col-sm-4 col-12">
                <div className="form-group">
                  <label htmlFor="inputTitle">PHONE</label>
                  <input type="phone" className="form-control" id="inputPhone"
                    placeholder="Enter phone" 
                    name="phone_2" onChange={handleInputChange}
                    value={config.phone_2}></input>
                </div>
              </div>
              <div className="col-xl-4 col-lglg-4 col-md-4 col-sm-4 col-12">
                <div className="form-group">
                  <label htmlFor="inputTitle">PHONE</label>
                  <input type="phone" className="form-control" id="inputPhone"
                    placeholder="Enter phone" 
                    name="phone_3" onChange={handleInputChange}
                    value={config.phone_3}></input>
                </div>
              </div>
              <div className="col-xl-4 col-lglg-4 col-md-4 col-sm-4 col-12">
                <div className="form-group">
                  <label htmlFor="inputTitle">ADDRESS</label>
                  <input type="address" className="form-control" id="inputAddress"
                    placeholder="Enter address" 
                    name="address" onChange={handleInputChange}
                    value={config.address}></input>
                </div>
              </div>
              <div className="col-xl-4 col-lglg-4 col-md-4 col-sm-4 col-12">
                <div className="form-group">
                  <label htmlFor="inputDetails">TWITTER</label>
                  <input type="text" className="form-control" id="inputDetails"
                    placeholder="Enter Details"
                      name="twitter" onChange={handleInputChange}
                    value={config.twitter}>
                    </input>
                </div>
              </div>
              <div className="col-xl-4 col-lglg-4 col-md-4 col-sm-4 col-12">
                <div className="form-group">
                  <label htmlFor="inputTitle">LINKEDIN</label>
                  <input type="text" className="form-control" id="inputText"
                    placeholder="Enter text" 
                    name="linkedin" onChange={handleInputChange}
                    value={config.linkedin}></input>
                </div>
              </div>
              <div className="col-xl-4 col-lglg-4 col-md-4 col-sm-4 col-12">
                <div className="form-group">
                  <label htmlFor="inputTitle">INSTAGRAM</label>
                  <input type="text" className="form-control" id="inputText"
                    placeholder="Enter text" 
                    name="instagram" onChange={handleInputChange}
                    value={config.instagram}></input>
                </div>
              </div>
              <div className="col-xl-4 col-lglg-4 col-md-4 col-sm-4 col-12">
                <div className="form-group">
                  <label htmlFor="inputTitle">FACEBOOK</label>
                  <input type="text" className="form-control" id="inputText"
                    placeholder="Enter text" 
                    name="facebook" onChange={handleInputChange}
                    value={config.facebook}></input>
                </div>
              </div>
              <div className="col-xl-4 col-lglg-4 col-md-4 col-sm-4 col-12">
                <div className="form-group">
                  <label htmlFor="inputTitle">YOUTUBE</label>
                  <input type="text" className="form-control" id="inputText"
                    placeholder="Enter text" 
                    name="youtube" onChange={handleInputChange}
                    value={config.youtube}></input>
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
               text="Update Config"
               onClick={updateConfig} />
         <p>{message}</p>
     </div>
     <div>
     <Button
              size='btn-sm'
              textcolor='white'
              color='btn-info'
               text="Delete"
               onClick={(e)=>deleteConfig(e, config.id)} />
     </div>
     </div>

        </div>
      </div>
      
) : (
  <div>
          <br />
          <h2 className="text-center text-danger">No Config Details, please Add Config Details ...</h2>
          <Link to={'/addconfig'} className="btn btn-warning btn-sm float-end">Add Config</Link>
        </div>
)}

</div>
);

}
export default Config;
