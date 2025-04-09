
import React from "react";
// import data from '/public/data/projects.json' assert { type: 'json' };
import './Projects.css';

// console.log(data);

// const project_cards = data.project_cards;

// let filtered_projects = project_cards.filter((project) => {
// 	return project.tag.includes("");
// }


const BentoList: React.FC = () => {
	

 
	return (
			
			<div className="container p-0 mt-5">
				{/* <div className="row">
					{project_cards.map((item, index) => (
					<div key={item.id} className="col-md-4 mb-2 g-2">
						<div className="bento-item p-1 bg-dark text-white rounded shadow">
								<h2 className="card-header-title">{item.name}</h2>
			
							<div className="row card-header text-center">
								<img className="card-header-img-top row" src={item.image} alt={item.name} style={{height: "400px"}}/>
							</div>

						</div>
					</div>
					))}
				</div> */}
				<a style={{ textDecoration: "none", color: "black"}} href="https://github.com/josephcheel">
					<h2 className="text-center justify-content-center" style={{
						fontSize: '10rem', 
						lineHeight: '1',
						wordWrap: 'break-word',
						overflowWrap: 'break-word',
						wordBreak: 'break-word',
						
					}}>
						Check my GitHub for more info!
					</h2>
				</a>
				<div className="text-center mt-5">
					<h3 className="text-center text-black">Some of my most relevant projects</h3>
					{/* <h5 className="text-center text-black">Some of my most relevant projects</h5> */}
					<div className="d-flex flex-wrap justify-content-center gap-3 mt-3">
						<a href="https://github.com/josephcheel/Pong-Game" target="_blank">
							<img src="https://github-readme-stats.vercel.app/api/pin/?username=josephcheel&repo=Pong-Game" alt="Next.js Repo"></img>
							<h5 className="text-center text-black mt-2">
								<a href="/projects/Pong-Game" style={{ color: 'red' }}>Play here 🎮</a>
							</h5>
						</a>
						<a href="https://github.com/josephcheel/josephcheel.github.io" target="_blank">
							<img src="https://github-readme-stats.vercel.app/api/pin/?username=josephcheel&repo=josephcheel.github.io" alt="Next.js Repo"></img>
						</a>
						<a href="https://github.com/josephcheel/42-MiniRT" target="_blank">
							<img src="https://github-readme-stats.vercel.app/api/pin/?username=josephcheel&repo=42-MiniRT" alt="Next.js Repo"></img>
						</a>
						<a href="https://github.com/josephcheel/Django-Chat-Channels" target="_blank">
							<img src="https://github-readme-stats.vercel.app/api/pin/?username=josephcheel&repo=Django-Chat-Channels" alt="Next.js Repo"></img>
						</a>
						<a href="https://github.com/josephcheel/Pong-Game-Online" target="_blank">
							<img src="https://github-readme-stats.vercel.app/api/pin/?username=josephcheel&repo=Pong-Game-Online" alt="Next.js Repo"></img>
						</a>
						<a href="https://github.com/josephcheel/42-Webserv" target="_blank">
							<img src="https://github-readme-stats.vercel.app/api/pin/?username=josephcheel&repo=42-Webserv" alt="Next.js Repo"></img>
						</a>
						
					</div>
				</div>
				

			</div>
	
	)
};

export default BentoList;