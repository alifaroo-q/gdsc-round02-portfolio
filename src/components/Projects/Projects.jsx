import React from "react";
import FeaturedProjects from "./FeaturedProjects";
import data from "./projectData";
import ProjectStatCard from "./ProjectStatCard";
import "./index.css";

const Projects = () => {
  const projectStats = data.map((stat) => {
    return <ProjectStatCard key={Object.keys(stat)[0]} data={stat} />;
  });

  return (
    <main className="mt-20">
      <div className="md:flex justify-around items-center">
        <div id="experience-years" className="flex flex-col items-center">
          <h2 className="text-8xl text-red-500">15</h2>
          <h3 className="text-2xl text-white">Year Experience</h3>
        </div>
        <div className="grid grid-cols-2 gap-3 mt-10 mx-5 md:w-1/2">
          {projectStats}
        </div>
      </div>
      <FeaturedProjects />
    </main>
  );
};

export default Projects;
