import React, { useState, useEffect } from 'react';
import AuthService from "../Services/Auth/auth.service";
import {Link, useNavigate } from 'react-router-dom';



function Navbar() {
	const [currentUser, setCurrentUser] = useState(undefined);
  useEffect(() => {
    const user = AuthService.getCurrentUser();
    if (user) {
      setCurrentUser(user);
      // setShowModeratorBoard(user.roles.includes("ROLE_MODERATOR"));
    //   setShowAdminBoard(user.role =="ADM");
    }
  }, []);
  const logOut = () => {
    AuthService.logout();
  };
    return (
        <div>
        <header className="header">
					<div className="toggle-btns">
						<a id="toggle-sidebar" href="#">
							<i className="icon-menu"></i>
						</a>
						<a id="pin-sidebar" href="#">
							<i className="icon-menu"></i>
						</a>
					</div>
					<div className="header-items">
						{/*-- Custom search start */}
						<div className="custom-search">
							<input type="text" className="search-query" placeholder="Search here ..."></input>
							<i className="icon-search1"></i>
						</div>
						{/*-- Custom search end */}

						{/*-- Header actions start */}
						<ul className="header-actions">
							<li className="dropdown d-none d-sm-block">
								<a href="#" id="notifications" data-toggle="dropdown" aria-haspopup="true">
									<i className="icon-calendar1"></i>
								</a>
								<div className="dropdown-menu dropdown-menu-right lrg" aria-labelledby="notifications">
									<div className="dropdown-menu-header">
										Events (10)
									</div>
									<ul className="header-notifications">
										<li>
											<a href="#">
												<div className="user-img away">
													<img src="img/user6.png" alt="User"></img>
												</div>
												<div className="details">
													<div className="user-title">Abbott</div>
													<div className="noti-details">Membership has been ended.</div>
													<div className="noti-date">Oct 20, 07:30 pm</div>
												</div>
											</a>
										</li>
										<li>
											<a href="#">
												<div className="user-img busy">
													<img src="img/user13.png" alt="User"></img>
												</div>
												<div className="details">
													<div className="user-title">Braxten</div>
													<div className="noti-details">Approved new design.</div>
													<div className="noti-date">Oct 10, 12:00 am</div>
												</div>
											</a>
										</li>
										<li>
											<a href="#">
												<div className="user-img online">
													<img src="img/user19.png" alt="User"></img>
												</div>
												<div className="details">
													<div className="user-title">Larkyn</div>
													<div className="noti-details">Check out every table in detail.</div>
													<div className="noti-date">Oct 15, 04:00 pm</div>
												</div>
											</a>
										</li>
									</ul>
								</div>
							</li>
							<li className="dropdown d-none d-sm-block">
								<a href="#" id="notifications" data-toggle="dropdown" aria-haspopup="true">
									<i className="icon-star2"></i>
									<span className="count-label blue"></span>
								</a>
								<div className="dropdown-menu dropdown-menu-right lrg" aria-labelledby="notifications">
									<div className="dropdown-menu-header">
										Bookmarks (21)
									</div>
									<div className="customScroll5">
										<ul className="bookmarks p-3">
											<li>
												<a href="#">Bootstrap admin template</a>
											</li>
											<li>
												<a href="#">Images resources</a>
											</li>
											<li>
												<a href="#">Best admin templates 2020</a>
											</li>
											<li>
												<a href="#">Javascript libraries</a>
											</li>
											<li>
												<a href="#">Angular widgets</a>
											</li>
											<li>
												<a href="#">UX library</a>
											</li>
											<li>
												<a href="#">Bootstrap admin template</a>
											</li>
											<li>
												<a href="#">Images resources</a>
											</li>
											<li>
												<a href="#">Best admin templates 2020</a>
											</li>
											<li>
												<a href="#">Javascript libraries</a>
											</li>
											<li>
												<a href="#">Angular widgets</a>
											</li>
											<li>
												<a href="#">UX library</a>
											</li>
											<li>
												<a href="#">Bootstrap admin template</a>
											</li>
											<li>
												<a href="#">Images resources</a>
											</li>
											<li>
												<a href="#">Best admin templates 2020</a>
											</li>
											<li>
												<a href="#">Javascript libraries</a>
											</li>
											<li>
												<a href="#">Angular widgets</a>
											</li>
											<li>
												<a href="#">UX library</a>
											</li>
										</ul>
									</div>
								</div>
							</li>
							<li className="dropdown d-none d-sm-block">
								<a href="#" id="notifications" data-toggle="dropdown" aria-haspopup="true">
									<i className="icon-bell"></i>
									<span className="count-label"></span>
								</a>
								<div className="dropdown-menu dropdown-menu-right lrg" aria-labelledby="notifications">
									<div className="dropdown-menu-header">
										Notifications (40)
									</div>
									<ul className="header-notifications">
										<li>
											<a href="#">
												<div className="user-img away">
													<img src="img/user21.png" alt="User"></img>
												</div>
												<div className="details">
													<div className="user-title">Abbott</div>
													<div className="noti-details">Membership has been ended.</div>
													<div className="noti-date">Oct 20, 07:30 pm</div>
												</div>
											</a>
										</li>
										<li>
											<a href="#">
												<div className="user-img busy">
													<img src="img/user10.png" alt="User"></img>
												</div>
												<div className="details">
													<div className="user-title">Braxten</div>
													<div className="noti-details">Approved new design.</div>
													<div className="noti-date">Oct 10, 12:00 am</div>
												</div>
											</a>
										</li>
										<li>
											<a href="#">
												<div className="user-img online">
													<img src="img/user6.png" alt="User"></img>
												</div>
												<div className="details">
													<div className="user-title">Larkyn</div>
													<div className="noti-details">Check out every table in detail.</div>
													<div className="noti-date">Oct 15, 04:00 pm</div>
												</div>
											</a>
										</li>
									</ul>
								</div>
							</li>
							<li className="dropdown user-settings">
								<a href="#" id="userSettings" data-toggle="dropdown" aria-haspopup="true">
									<img src="img/user2.png" className="user-avatar" alt="Avatar"></img>
								</a>
								<div className="dropdown-menu dropdown-menu-right" aria-labelledby="userSettings">
									<div className="header-profile-actions">
										<div className="header-user-profile">
											<div className="header-user">
												<img src="img/user2.png" alt="Admin Template"></img>
											</div>
											<h5>Yuki Hayashi</h5>
											<p>Super User</p>
										</div>
										<a href="user-profile.html"><i className="icon-user1"></i> My Profile</a>
										<a href="account-settings.html"><i className="icon-settings1"></i> Account Settings</a>
										<a href="login.html"><i className="icon-log-out1"></i> Sign Out</a>
									</div>
								</div>
							</li>
							{currentUser ? (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={"/profile"} className="nav-link">
                {currentUser.username}
              </Link>
            </li>
            <li className="nav-item">
              <a href="/login" className="nav-link" onClick={logOut}>
                LogOut
              </a>
            </li>
          </div>
        ) : (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={"/login"} className="nav-link">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/register"} className="nav-link">
                Sign Up
              </Link>
            </li>
          </div>
        )}
						</ul>						
						{/*-- Header actions end */}
					</div>
				</header>
        </div>

)
}
export default Navbar