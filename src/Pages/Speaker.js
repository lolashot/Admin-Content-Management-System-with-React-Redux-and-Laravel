
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../ReUsables/Button'
import AuthService from "../Services/Auth/auth.service";
import swal from 'sweetalert';
import SpeakerDataService from "../Services/SpeakerService";

function Speakers() {
    let navigate = useNavigate();

    const [loading, setLoading] = useState(true);
    const [speakers, setSpeakers] = useState([]);

    useEffect(() => {
        const user = AuthService.getCurrentUser();
        if (user) {
            retrieveSpeakers();
        } else {
            navigate("/login");

        }

    }, []);

    const retrieveSpeakers = () => {
        SpeakerDataService.getAll()
            .then(response => {
                console.log("speaker", response);
                setSpeakers(response.data.data);

                setLoading(false);
                console.log("about", response.data.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    const deleteSpeaker = (e, id) => {
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
                    SpeakerDataService.remove(id)
                        .then(response => {
                            console.log("delete", response.data);
                            swal("Poof! Your imaginary file has been deleted!", {
                                icon: "success",
                            });
                            setSpeakers(speakers.filter((speaker) => speaker.id !== id))
                        });
                }
                else {
                    swal("Your imaginary file is safe!");
                }
            })
    };
    if (loading) {
        return <h4 className="text-center">Loading Speakers...</h4>
    }
    else

        return (

            <div class="row gutters">
                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div class="card border-warning">
                        <div class="card-header bg-warning">Speakers</div>
                        <div class="card-body text-primary">
                            <h5 class="card-title">Users Table</h5>
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
                                        {speakers.map((speaker, index) => (

                                            <tr key={index}>
                                                <td>{speaker.fullname}</td>
                                                <td>{speaker.title}</td>
                                                <td>{speaker.qualifications}</td>
                                                <td>{speaker.topic_details}</td>
                                                <td>
                                                    <div className="text-center">
                                                        <Link to={`/editspeakers/${speaker.id}`}><span class="icon-pencil"></span></Link>
                                                        <span onClick={(e) => deleteSpeaker(e, speaker.id)} class="icon-trash-2"></span>
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
export default Speakers;  
