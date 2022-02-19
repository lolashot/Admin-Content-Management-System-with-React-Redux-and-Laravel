import Sidebar from './Components/Sidebar'
import Navbar from './Components/Navbar'
import TopCards from './Components/TopCards'
import {BrowserRouter as Router,  Routes, Route } from 'react-router-dom';
import Users from './Pages/Users'
import About from './Pages/About' 
import Config from './Pages/Config'
import Gallery from './Pages/Gallery' 
import Partners from './Pages/Partners' 
import PreviousEvents from './Pages/PreviousEvents'
import Services from './Pages/Services' 
import Slider from './Pages/Slider' 
import Statistics from './Pages/Statistics' 
import Testimonials from './Pages/Testimonial' 
import UpcomingEvents from './Pages/UpcomingEvents'
import EditUpcoming from './Pages/EditUpcoming'
import EditPrevious from './Pages/EditPrevious'
import Events from './Pages/Events'
import EventDetails from './Pages/EventDetails'
import EditEvent from './Pages/EditEvents'
import EditServices from './Pages/EditServices' 
import EditStatistics from './Pages/EditStatistics'
import EditTestimonials from './Pages/EditTestimonials'
import AddAbout from './Pages/AddAbout' 
import AddEvent from './Pages/AddEvents' 
import AddStatistics from './Pages/AddStatistics'
import AddConfig from './Pages/AddConfig' 







function App() {
  return (


<Router>
  <div className="page-wrapper">
    <Sidebar />
    <div className="page-content">
      <Navbar />
      <div className="main-container">
      <TopCards />

      <Routes>
        <Route exact path="/" element={<Users />} />
        <Route exact path="/users" element={<Users />} />
        <Route exact path="/about" element={<About />} />
        <Route path="/config" element={<Config />} />
        <Route exact path="/gallery" element={<Gallery />} /> 
        <Route exact path="/partners" element={<Partners />} /> 
        <Route exact path="/previousevents" element={<PreviousEvents />} />
        <Route exact path="/services" element={<Services />} /> 
        <Route exact path="/slider" element={<Slider />} /> 
        <Route exact path="/statistics" element={<Statistics />} /> 
        <Route exact path="/testimonials" element={<Testimonials />} /> 
        <Route exact path="/upcomingevents" element={<UpcomingEvents />} />
        <Route exact path="/events" element={<Events />} />
        <Route exact path="/editupcoming/:id" element={<EditUpcoming />} />
        <Route  path="/editprevious/:id" element={<EditPrevious />} />
        <Route  path="/eventdetails/:id" element={<EventDetails />} />
        <Route  path="/editevent/:id" element={<EditEvent />} /> 
        <Route  path="/editservice/:id" element={<EditServices />} /> 
        <Route  path="/editstatistic/:id" element={<EditStatistics />} />
        <Route  path="/edittestimonial/:id" element={<EditTestimonials />} /> 
        <Route exact path="/addabout" element={<AddAbout />} />
        <Route exact path="/addevents" element={<AddEvent />} />
        <Route exact path="/addstatistics" element={<AddStatistics />} />
        <Route exact path="/addconfig" element={<AddConfig />} />



        

        {/*<Route exact path="/events" element={<Events />} />
        <Route path="/eventdetails/:id" element={<EventDetails />} />*/}
      </Routes>
      </div>
      </div>

    </div>

</Router>
  );
}

export default App;
