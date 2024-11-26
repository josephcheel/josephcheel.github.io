import React from "react";
import './Home.css';
// import Nav from "../Nav";


const Home: React.FC = () => {

	
	const styles = {
		container: {
		  display: 'flex',
		  justifyContent: 'center',
		  alignItems: 'center',
		  height: '100vh',
		  backgroundColor: '#f0f0f0',
		},
		header: {
		  fontSize: '2rem',
		  color: '#333',
		  animation: 'fadeIn 3s ease-out',
		},
	  };
    return (
		<>
			<div className="container-fluid p-4">
				<div className="row mb-5">
					<div className="col">
					</div>
					<div className="col">
						<img src="/icons/location.svg" style={{ marginBottom: '5px' }}/><p style={{ display: 'inline', marginLeft: '8px'}}>Barcelona · Spain</p>
					</div>
					<div className="col">
					</div>
					<div className="col">
					</div>
				</div>
				<div className="text-start">
					<h1 className="text-center justify-content-center" style={{ 
						// fontSize: 'clamp(3rem, 100vw, 12rem)'
						lineHeight: '0.6',
					}}>
						Joseph Cheel
					</h1>
					<h2 className="text-overflow fst-italic text-body-secondary justify-content-end" style={{
						fontSize: 'clamp(1.5rem, 5vw, 2rem)',
						fontWeight: '300',
						}}>
						a software developer, researcher, technologist, artist.
					</h2>
				</div>
				<div className="row mt-5">
					<div className="col text-center">
						<h3 style={styles.header}>Coming Soon...</h3>
					</div>
				</div>
			</div>
		</>
    );
};

export default Home;
