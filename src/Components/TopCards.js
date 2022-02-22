import React, { useState, useEffect } from 'react';
import EventsDataService from "../Services/EventsService";
import countAllEvents from "../Utils/topcardsutils";
import UpcomingDataService from "../Services/UpcomingEventsServices";
import TopCard from './TopCard'




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
							<TopCard
							 color='info-icon info'
							 total="Total Events"
							 icon='icon-eye1'
							 events={events}
							 />
						</div>
						<div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12">
						<TopCard
							 color='info-icon danger'
							 total="Upcoming Event(s)"
							 icon='icon-shopping-cart1'
							 events={upcomingevents}
							 />
						</div>
						<div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12">
						<TopCard
							 color='info-icon warning'
							 total="Total Users"
							 icon='icon-shopping-bag1'
							 events="3456"
							 />
						</div>
						<div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12">
						<TopCard
							 color='info-icon success'
							 total="Total"
							 icon='icon-activity'
							 events="1000"
							 />
						</div>
					</div>
</div>

    )
}
export default TopCards