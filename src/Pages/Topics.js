import React,  { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../ReUsables/Button'
import AuthService from "../Services/Auth/auth.service";
import ItemDataService from "../Services/ItemService";
import swal from 'sweetalert';


function Topics() {
    let navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [topics, setTopics] = useState([]);

    useEffect(() => {
        const user = AuthService.getCurrentUser();
        if (user) {
            retrieveTopics();
        } else {
            navigate("/login");
  
        }
  
    }, []);

    const retrieveTopics = () => {
    ItemDataService.getAll()
      .then(response => {
       console.log("topics", response);
        setTopics(response.data.data);
        setLoading(false);
        console.log("topics", response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const deleteTopic = (e, id) => {
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
            ItemDataService.remove(id)
            .then(response => {
                console.log("delete", response.data);
                     swal("Poof! Your imaginary file has been deleted!", {
                    icon: "success",
                  });
                setTopics(topics.filter((topic) => topic.id !== id)) 
            });
        }
         else  {
          swal("Your imaginary file is safe!");
        }
 }) 
};
if (loading) {
        return <h4 className="text-center">Loading Topics...</h4>
    }
else

       return ( 
        
                <div class="row gutters">
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div class="card border-warning">
        <div class="card-header bg-warning">Topics</div>
          <div class="card-body text-primary">
          <h5 class="card-title">Users Table</h5>
                                <div class="table-responsive">
                                    <table class="table table-bordered table-stripped m-0 text-center">
                                        <thead>
                                            <tr>
                                                <th>Date</th>
                                                <th>Title</th>
                                                <th>Details</th>
                                                <th>Start Time</th>
                                                <th>End Time</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {topics.map((topic, index) => (

                                                <tr key={index}>
                                                    <td>{topic.date}</td>
                                                    <td>{topic.title}</td>
                                                    <td>{topic.details}</td>
                                                    <td>{topic.time_start}</td>
                                                    <td>{topic.time_end}</td>
                                                    <td>
                                                        <div className="text-center">
                                                            <Link to={`/edittopics/${topic.id}`}><span class="icon-pencil"></span></Link>
                                                            <span onClick={(e) => deleteTopic(e, topic.id)} class="icon-trash-2"></span>
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
    export default Topics;  
