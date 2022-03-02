import React,  { useState, useEffect } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import AuthService from "../Services/Auth/auth.service";



import UpcomingDataService from "../Services/UpcomingEventsServices";

function Upcoming() {
    let navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [upcomingevents, setUpcomingEvents] = useState([]);
    const [length, setLength] = useState(false);



    useEffect(() => {
        const user = AuthService.getCurrentUser();
  
        if (user) {
            retrieveUpcoming();
        } else {
            navigate("/login");
  
        }
  
    }, []);

    const retrieveUpcoming = () => {
    UpcomingDataService.getAll()
      .then(response => {
       console.log("tutossssr", response);
       upcomingevents.length < 1 && setLength(true);
        setUpcomingEvents(response.data);

        setLoading(false);
        console.log("about", response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };
if (loading) {
        return <h4 className="text-center">Loading Upcoming Events...</h4>
    }
else

    return (
<div>
                <div className="row">
                    <Link to={'/addupcomingevents'} className="btn btn-primary btn-sm float-end"> Add  UPCOMINGEVENTS</Link>
                </div>


                <div class="row gutters">
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div class="card">
                            <div class="card-body">
                     {setLength ? (
                        <h2 className="text-center text-primary"> 
                            No Upcoming Event please....
                        </h2>     
                        ):(
                                <div class="table-responsive">
                                    <table class="table table-bordered table-dark m-0 text-center">
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
                                            {upcomingevents.map((upcomingevent, index) => (

                                                <tr key={index}>
                                                    <td>{upcomingevent.id}</td>
                                                    <td>{upcomingevent.title}</td>
                                                    <td>{upcomingevent.details}</td>
                                                    <td>{upcomingevent.date}</td>
                                                    <td>
                                                        <div className="text-center">
                                                            <Link to={`/editevents/${upcomingevent.id}`}><span class="icon-pencil"></span></Link>
                                                            <span class="icon-trash-2"></span>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                                )}
                            </div>
                        </div>

                    </div>
                </div>
    
            </div>

      );
    }
    export default Upcoming;  

