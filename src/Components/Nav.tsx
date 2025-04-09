import React from "react";
import { Link } from "react-router-dom";
import './Nav.css';

const Nav: React.FC = () => {
	
	return (
	<nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Joseph Cheel Nakashima</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
		<div className="collapse navbar-collapse" id="navbarNav">
			<div className="container">
				<div className="row justify-content-end position-relative">
					<div className="col-2 position-relative" id="column1">
					<Link to="/" className="image-container" id="folder1">
						<img src="/icons/folder-solid.svg" alt="Folder 1" />
						<div className="image-title">Home</div>
					</Link>
					</div>
					<div className="col-2 position-relative" id="column2">
					<Link to="/work" className="image-container" id="folder2">
						<img src="/icons/folder-solid2.svg" alt="Folder 2" />
						<div className="image-title">Work</div>
					</Link>
					</div>
					<div className="col-2 position-relative" id="column3">
						<Link to="/projects" className="image-container" id="folder3">
							<img src="/icons/folder-solid4.svg" alt="Folder 3" />
							<div className="image-title">Projects</div>
						</Link>
					</div>
					<div className="col-2 position-relative" id="column4">
						<Link to="/contact" className="image-container" id="folder4">
							<img src="/icons/folder-solid3.svg" alt="Folder 4" />
							<div className="image-title">Contact</div>
						</Link>
					</div>
					{/* <div className="col-3 position-relative d-flex justify-content-end ">
						<div className="image-container d-none d-lg-block"  >
							<img id="languages" src="/icons/languages.svg" alt="Languages" />
						</div>
					</div> */}
					<div className="col-3 position-relative d-flex justify-content-end">
						<div className="rounded-circle overflow-hidden" style={{ width: "65px", height: "65px", border: "2px solid rgba(128, 131, 133, 0.5)" }}>
							<img 
								src="/images/profile.jpeg" 
								alt="User Profile" 
								className="img-fluid" 
								style={{ objectFit: "cover", width: "100%", height: "100%" 

								}} 
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
      </div>
    </nav>
	);
};

export default  Nav;