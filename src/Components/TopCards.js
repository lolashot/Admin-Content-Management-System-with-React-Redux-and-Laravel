import React, { useState, useEffect } from 'react';
import EventsDataService from "../Services/EventsService";
import countAllEvents from "../Utils/topcardsutils";
import UpcomingDataService from "../Services/UpcomingEventsServices";



function TopCards() {
	const [loading, setLoading] = useState(true);
    const [events, setEvents] = useState([]);
	const [countEvents, setCountEvents] = useState(0);
	const [upcomingevents, setUpcomingEvents] = useState([]);

    useEffect(() => {
        retrieveEvents();
		retrieveUpcoming();  
    }, []);

    const retrieveEvents = () => {
        EventsDataService.getAll()
            .then(response => {
                console.log("events", response);
                setEvents(response.data.length);
                setLoading(false);
            })
            .catch(e => {
                console.log(e);
            });
    };

	const retrieveUpcoming = () => {
		UpcomingDataService.getAll()
		  .then(response => {
		   console.log("tutossssr", response);
			setUpcomingEvents(response.data.length);
			setLoading(false);
			console.log("about", response.data);
		  })
		  .catch(e => {
			console.log(e);
		  });
	  };

    return (
    <div> 
			<div className="row gutters">
						<div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12">
							<div className="info-stats2">
								<div className="info-icon info">
									<i className="icon-eye1"></i>
								</div>
								<div className="sale-num">
									<h3>{events}</h3>
									<p>Total Events</p>
								</div>
							</div>
						</div>
						<div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12">
							<div className="info-stats2">
								<div className="info-icon danger">
									<i className="icon-shopping-cart1"></i>
								</div>
								<div className="sale-num">
									<h3>{upcomingevents}</h3>
									<p>UpcomingEvents</p>
								</div>
							</div>
						</div>
						<div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12">
							<div className="info-stats2">
								<div className="info-icon warning">
									<i className="icon-shopping-bag1"></i>
								</div>
								<div className="sale-num">
									<h3>43,456</h3>
									<p>Users</p>
								</div>
							</div>
						</div>
						<div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12">
							<div className="info-stats2">
								<div className="info-icon success">
									<i className="icon-activity"></i>
								</div>
								<div className="sale-num">
									<h3>29,425</h3>
									<p>Expenses</p>
								</div>
							</div>
						</div>
					</div>
</div>

    )
}
export default TopCards