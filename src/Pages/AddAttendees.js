import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AttendeeDataService from "../Services/AttendeeService";
import Button from '../ReUsables/Button'
import swal from 'sweetalert';
import AuthService from "../Services/Auth/auth.service";



function AddAttendees() {
    let navigate = useNavigate();

    const [loading, setLoading] = useState(true);
    const [attendees, setAttendees] = useState([]);
    const [currentUser, setCurrentUser] = useState(undefined);

    useEffect(() => {
        const user = AuthService.getCurrentUser();

        if (user) {
            retrieveAttendees();
        } else {
            navigate("/login");

        }

    }, []);

    const retrieveAttendees = () => { 
        AttendeeDataService.getAll()
            .then(response => {
                console.log("attendee", response);
                setAttendees(response.data.data)
                setLoading(false);
            })
            .catch(e => {
                console.log(e);
            });
       
    };
    const addAttendee= () => {
        
    }



    if (loading) {
        return <h4>Loading Add Attendees Page...</h4>
    }
    else
        return (

            <div>
                <div className="row">
                    <Link to={'/addattendee'} className="btn btn-primary btn-sm float-end"> Add  Attendee</Link>
                </div>


                <div class="row gutters">
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div class="card border-warning">
        <div class="card-header bg-warning">Attendees</div>
          <div class="card-body text-primary">
          <h5 class="card-title">Attendees Table</h5>
                                <div class="table-responsive">
                                    <table class="table table-bordered table-stripped m-0 text-center">
                                        <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>NAME</th>
                                                <th>EMAIL</th>
                                                <th>Add Attendee</th>
                                                <th>Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {attendees.map((attendee, index) => (

                                                <tr key={index}>
                                                    <td>{attendees.id}</td>
                                                    <td>{attendees.name}</td>
                                                    <td>{attendees.email}</td>
                                                    <td>
          
          <Button
              size='btn-sm'
              textcolor='white'
              color='btn-success'
               text="Add Attendee"
               onClick={addAttendee} />
                                                    </td>
                                                    <td>{attendees.status}</td>
                                                    
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

        )
}
export default AddAttendees;
