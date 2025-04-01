
import React from "react";
import './Projects.css';
import BentoList from "./BentoList.tsx";
import NavProjects from "./Nav.tsx";

const Projects: React.FC = () => {
	return (
		<>
			
			<NavProjects></NavProjects>
			<BentoList></BentoList>

		</>
	)
};

export default Projects;