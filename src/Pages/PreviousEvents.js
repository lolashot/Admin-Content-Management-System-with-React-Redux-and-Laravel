import React,  { useState, useEffect } from 'react';
import { Link, } from 'react-router-dom';


import PreviousDataService from "../Services/PreviouseventsService";

function PreviousEvents() {

    const [loading, setLoading] = useState(true);
    const [previousevents, setPreviousEvents] = useState([]);
    

    useEffect(() => {
    retrievePrevious();
  }, []);

    const retrievePrevious = () => {
    PreviousDataService.getAll()
      .then(response => {
       console.log("tutossssr", response);
        setPreviousEvents(response.data);

        setLoading(false);
        console.log("about", response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };


if (loading) {
        return <h4 className="text-center">Loading PreviousEvents...</h4>
    }
else

    return (
      <div>
                <div className="row">
                    <Link to={'/addevents'} className="btn btn-primary btn-sm float-end"> Add  PREVIOUSEVENTS</Link>
                </div>


                <div class="row gutters">
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div class="card">
                            <div class="card-body">
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
                                            {previousevents.map((previousevent, index) => (

                                                <tr key={index}>
                                                    <td>{previousevent.id}</td>
                                                    <td>{previousevent.title}</td>
                                                    <td>{previousevent.details}</td>
                                                    <td>{previousevent.date}</td>
                                                    <td>
                                                        <div className="text-center">
                                                            <Link to={`/editprevious/${previousevent.id}`}><span class="icon-pencil"></span></Link>
                                                            <span class="icon-trash-2"></span>
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
  );
}


export default PreviousEvents;


    