import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import UsersDataService from "../Services/UsersService";
import Button from '../ReUsables/Button'
import swal from 'sweetalert';
import AuthService from "../Services/Auth/auth.service";



function Userrs() {
    let navigate = useNavigate();

    const [loading, setLoading] = useState(true);
    const [userrs, setUserrs] = useState([]);
    const [currentUser, setCurrentUser] = useState(undefined);



    useEffect(() => {
        const user = AuthService.getCurrentUser();

        if (user) {
            retrieveUserrs();
        } else {
            navigate("/login");

        }

    }, []);

    const retrieveUserrs = () => { 
        UsersDataService.getAll()
            .then(response => {
                console.log("userrs", response);
                setUserrs(response.data.data)
                setLoading(false);
            })
            .catch(e => {
                console.log(e);
            });
       
    };

    const deleteUserr = (e, id) => {
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
                UsersDataService.remove(id)
                .then(response => {
                    console.log("delete", response.data);
                         swal("Poof! Your imaginary file has been deleted!", {
                        icon: "success",
                      });
                    setUserrs(Userrs.filter((Userr) => Userr.id !== id)) 
                });
            }
             else  {
              swal("Your imaginary file is safe!");
            }
     }) 
    };


    if (loading) {
        return <h4>Loading Users...</h4>
    }
    else
        return (

            <div>
                <div className="row">
                    <Link to={'/register'} className="btn btn-primary btn-sm float-end"> Add  Users</Link>
                </div>

                <div class="row gutters">
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div class="card border-warning">
        <div class="card-header bg-warning">USERS</div>
          <div class="card-body text-primary">
          <h5 class="card-title">Users Table</h5>
                                <div class="table-responsive">
                                    <table class="table table-bordered table-stripped m-0 text-center">
                                        <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>NAME</th>
                                                <th>EMAIL</th>
                                                <th>Date</th>
                                                <th>Status</th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {userrs.map((userr, index) => (

                                                <tr key={index}>
                                                    <td>{userr.id}</td>
                                                    <td>{userr.name}</td>
                                                    <td>{userr.email}</td>
                                                    <td>{userr.date}</td>
                                                    <td>{userr.status}</td>
                                                    <td>
                                                        <div className="text-center">
                                                            <Link to={`/editusers/${userr.id}`}><span class="icon-pencil"></span></Link>
                                                            <span onClick={(e) => deleteUserr(e, userr.id)} class="icon-trash-2"></span>
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

        )
}
export default Userrs;
