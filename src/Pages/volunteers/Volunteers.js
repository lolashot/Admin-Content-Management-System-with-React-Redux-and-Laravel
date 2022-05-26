
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../ReUsables/Button'
import AuthService from "../../Services/Auth/auth.service";
import swal from 'sweetalert';
import VolunteerDataService from "../../Services/VolunteerService";

function Volunteers() { 
    let navigate = useNavigate();

    const [loading, setLoading] = useState(true);
    const [volunteers, setVolunteers] = useState([]);

    useEffect(() => {
        const user = AuthService.getCurrentUser();
        if (user) {
            retrieveVolunteers();
        } else {
            navigate("/login");

        }

    }, []);

    const retrieveVolunteers = () => {
        VolunteerDataService.getAll()
            .then(response => {
                console.log("volunteer", response);
                setVolunteers(response.data.data);

                setLoading(false);
                console.log("volunteer", response.data.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    const deleteVolunteer = (e, id) => {
        e.preventDefault();
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    VolunteerDataService.remove(id)
                        .then(response => {
                            console.log("delete", response.data);
                            swal("Poof! Your imaginary file has been deleted!", {
                                icon: "success",
                            });
                            setVolunteers(volunteers.filter((volunteer) => volunteer.id !== id))
                        });
                }
                else {
                    swal("Your imaginary file is safe!");
                }
            })
    };
    if (loading) {
        return <h4 className="text-center">Loading Volunteers...</h4>
    }
    else

        return (

            <div class="row gutters">
                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div class="card border-warning">
                        <div class="card-header bg-warning">Volunteers</div>
                        <div class="card-body text-primary">
                            <h5 class="card-title">Volunteers Table</h5>
                            <div class="table-responsive">
                                <table class="table table-bordered table-stripped m-0 text-center">
                                    <thead>
                                        <tr>
                                            <th>FULLNAME</th>
                                            <th>Title</th>
                                            <th>QUALIFICATIONS</th>
                                            <th>TOPIC</th>
                                            <th>ACTIONS</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {volunteers.map((volunteer, index) => (

                                            <tr key={index}>
                                                <td>{volunteer.fullname}</td>
                                                <td>{volunteer.title}</td>
                                                <td>{volunteer.qualifications}</td>
                                                <td>{volunteer.topic_details}</td>
                                                <td>
                                                    <div className="text-center">
                                                        <Link to={`/editvolunteers/${volunteer.id}`}><span class="icon-pencil"></span></Link>
                                                        <span onClick={(e) => deleteVolunteer(e, volunteer.id)} class="icon-trash-2"></span>
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
        );
}
export default Volunteers;  
