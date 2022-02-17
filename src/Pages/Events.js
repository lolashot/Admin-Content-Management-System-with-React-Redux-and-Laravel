import React, { useState, useEffect } from 'react';
import { Link, } from 'react-router-dom';
import EventsDataService from "../Services/EventsService";





function Events() {
    const [loading, setLoading] = useState(true);
    const [events, setEvents] = useState([]);


    useEffect(() => {
        retrieveEvents();

    }, []);

    const retrieveEvents = () => {
        EventsDataService.getAll()
            .then(response => {
                console.log("events", response);
                setEvents(response.data)
                setLoading(false);
            })
            .catch(e => {
                console.log(e);
            });
    };

    const deleteEvent = (e, id) => {
        e.preventDefault(); 
        const thisClicked = e.currentTarget;
        thisClicked.innerText = "Deleting";
        EventsDataService.remove(id)
        .then(response => {
            console.log("delete", response.data);
            setEvents(events.filter((event) => event.id !== id))
            // props.history.push("/tutorials");
          })
          .catch(e => {
            console.log(e);
            thisClicked.innerText = "error";

          });
      };


    

    if (loading) {
        return <h4>Loading Events...</h4>
    }
    else
        return (

            <div>
                <div className="row">
                    <Link to={'/addevents'} className="btn btn-primary btn-sm float-end"> Add  EVENTS</Link>
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
                                                <th>Details</th>
                                                <th>Date</th>
                                                <th>Status</th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {events.map((event, index) => (

                                                <tr key={index}>
                                                    <td>{event.id}</td>
                                                    <td>{event.title}</td>
                                                    <td>{event.details}</td>
                                                    <td>{event.date}</td>
                                                    <td>{event.status}</td>
                                                    <td>
                                                        <div className="text-center">
                                                            <Link to={`/editevent/${event.id}`}><span class="icon-pencil"></span></Link>
                                                            <span onClick={(e) => deleteEvent(e, event.id)} class="icon-trash-2"></span>
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
export default Events;
