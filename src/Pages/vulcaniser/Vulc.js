
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../ReUsables/Button'
import AuthService from "../../Services/Auth/auth.service";
import swal from 'sweetalert';
import VulcDataService from "../../Services/VulcService";

function Vulcs() { 
    let navigate = useNavigate();

    const [loading, setLoading] = useState(true);
    const [vulcs, setVulcs] = useState([]);

    useEffect(() => {
        const user = AuthService.getCurrentUser();
        if (user) {
            retrieveVulcs();
        } else {
            navigate("/login");

        }

    }, []);

    const retrieveVulcs = () => {
        VulcDataService.getAll()
            .then(response => {
                console.log("vulc", response);
                setVulcs(response.data.data);

                setLoading(false);
                console.log("vulc", response.data.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    const deleteVulc = (e, id) => {
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
                    VulcDataService.remove(id)
                        .then(response => {
                            console.log("delete", response.data);
                            swal("Poof! Your imaginary file has been deleted!", {
                                icon: "success",
                            });
                            setVulcs(vulcs.filter((vulc) => vulc.id !== id))
                        });
                }
                else {
                    swal("Your imaginary file is safe!");
                }
            })
    };
    if (loading) {
        return <h4 className="text-center">Loading Vulcs...</h4>
    }
    else

        return (

            <div class="row gutters">
                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div class="card border-warning">
                        <div class="card-header bg-warning">Vulcs</div>
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
                                        {vulcs.map((vulc, index) => (

                                            <tr key={index}>
                                                <td>{vulc.fullname}</td>
                                                <td>{vulc.title}</td>
                                                <td>{vulc.qualifications}</td>
                                                <td>{vulc.topic_details}</td>
                                                <td>
                                                    <div className="text-center">
                                                        <Link to={`/editvulcs/${vulc.id}`}><span class="icon-pencil"></span></Link>
                                                        <span onClick={(e) => deleteVulc(e, vulc.id)} class="icon-trash-2"></span>
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
export default Vulcs;  
