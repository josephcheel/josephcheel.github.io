
import React from "react";
import './Projects.css';

const NavProjects: React.FC = () => {
	return (
		<>
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<div className="container-fluid ms-5">
					<div>
						<ul className="navbar-nav">
							<li className="nav-item">
								<a className="nav-link active" aria-current="page" href="#All">
									All
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#Frontend">
									Frontend
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#MachineLearning">
									Machine Learning
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#Backend">
									Backend
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#Web">
									Web
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	)
};

export default NavProjects;