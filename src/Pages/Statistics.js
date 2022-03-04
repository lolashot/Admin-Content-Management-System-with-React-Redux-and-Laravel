import React,  { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../ReUsables/Button'
import AuthService from "../Services/Auth/auth.service";



import StatisticsDataService from "../Services/StatisticsServices";

function Statistics() {
    let navigate = useNavigate();

    const [loading, setLoading] = useState(true);
    const [statistics, setStatistics] = useState([]);

    

    useEffect(() => {
        const user = AuthService.getCurrentUser();
        if (user) {
            retrieveStatistics();
        } else {
            navigate("/login");
  
        }
  
    }, []);

    const retrieveStatistics = () => {
    StatisticsDataService.getAll()
      .then(response => {
       console.log("tutossssr", response);
        setStatistics(response.data);

        setLoading(false);
        console.log("about", response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const deleteStatistic = (e, id) => {
    e.preventDefault(); 
    const thisClicked = e.currentTarget;
    thisClicked.innerText = "Deleting";
    StatisticsDataService.remove(id)
    .then(response => {
        console.log("delete", response.data);
        setStatistics(statistics.filter((statistic) => statistic.id !== id))
        // props.history.push("/tutorials");
      })
      .catch(e => {
        console.log(e);
        thisClicked.innerText = "error";

      });
  };

if (loading) {
        return <h4 className="text-center">Loading Statistics...</h4>
    }
else

       return ( 
        <div>
                <div className="row">
                    <Link to={'/addstatistics'} className="btn btn-primary btn-sm float-end"> Add  STATISTICS</Link>
                </div>


                <div class="row gutters">
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div class="card border-warning">
        <div class="card-header bg-warning">Statistics</div>
          <div class="card-body text-primary">
          <h5 class="card-title">Users Table</h5>
                                <div class="table-responsive">
                                    <table class="table table-bordered table-stripped m-0 text-center">
                                        <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>Title</th>
                                                <th>VALUE</th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {statistics.map((statistic, index) => (

                                                <tr key={index}>
                                                    <td>{statistic.id}</td>
                                                    <td>{statistic.title}</td>
                                                    <td>{statistic.value}</td>
                                                    <td>
                                                        <div className="text-center">
                                                            <Link to={`/editstatistic/${statistic.id}`}><span class="icon-pencil"></span></Link>
                                                            <span onClick={(e) => deleteStatistic(e, statistic.id)} class="icon-trash-2"></span>
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
    export default Statistics;  
