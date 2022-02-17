import React from 'react';
import { Link, } from 'react-router-dom';


function Users() {
  return (
    <div class="row gutters">
      <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
        <div class="card">
          <div class="card-body">
            <div class="table-responsive">
              <table class="table table-bordered table-dark m-0 text-center">
                <thead>
                  <tr>
                    <th>Customer ID</th>
                    <th>Name</th>
                    <th>Descripton</th>
                    <th>Email</th>
                    <th>Date</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>#00001</td>
                    <td>Alia</td>
                    <td>Willams</td>
                    <td>+143-148-60985</td>
                    <td>aliawilllams@Tycoon.com</td>
                    <td>
                      <div className="text-center">
                        <Link to="contact"><span class="icon-pencil"></span></Link>
                        <span class="icon-trash-2"></span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>#00002</td>
                    <td>Nathan</td>
                    <td>James</td>
                    <td>+278-119-88790</td>
                    <td>nathanjames@Tycoon.com</td>
                    <td>
                      <div className="text-center">
                        <Link to="contact"><span class="icon-pencil"></span></Link>
                        <span class="icon-trash-2"></span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
export default Users