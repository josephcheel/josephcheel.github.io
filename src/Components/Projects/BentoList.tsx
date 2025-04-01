
import React from "react";
import './Projects.css';

const BentoList: React.FC = () => {
	return (
		<>
		
			<div className="container">
				
				<div className="row d-flex justify-content-center align-items-center m-0 p-0">
					{/* <!-- Large item --> */}
					<div className="col-md-6">
						<div className="row g-3 m-0 p-0">
							<div className="bento-item bento-tall bg-primary">
								Large Item
							</div>
							<div className="col-md-">
								<div className="bento-item bg-warning text-dark">
									Medium Item 1
								</div>
							</div>
						</div>
					</div>
					{/* <!-- Two small items --> */}
					<div className="col-md-6 ms-0">
						<div className="row g-4 m-0 p-0">
							<div className="col-12">
								<div className="row m-0 p-0">
									<div className="col-4">
										<div className="bento-item bg-success">
											Small Item 1
										</div>
									</div>
									<div className="col-8">
										<div className="bento-item" style={{ backgroundColor: '#004466' }}>
											<p className="text-center text-light" style={{
												fontSize: 'clamp(1.5rem, 5vw, 2rem)',
												fontWeight: '500',
												wordBreak: 'break-word',
												overflowWrap: 'break-word',
												wordWrap: 'break-word',
												lineHeight: '1.2',
												textAlign: 'justify',
											}}>
												<div style={{ color: '#00ffa2' }}>My personal projects</div>
												<p>including web apps, machine learning models, and more.</p>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-12">
								<div className="bento-item bg-danger">
									Small Item 2
								</div>
							</div>
						</div>
					</div>					
					
				</div>
			</div>
		</>
	)
};

export default BentoList;