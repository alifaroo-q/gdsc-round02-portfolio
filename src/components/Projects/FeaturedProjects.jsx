import React from "react";
import FeaturedProjectCard from "./FeaturedProjectCard";
import data from "./featuredProjectsData";

const FeaturedProjects = () => {
  const projectCards = data.map((project) => {
    return (
      <FeaturedProjectCard
        key={project.id}
        title={project.title}
        image={project.img}
        github={project.github}
        preview={project.preview}
      />
    );
  });

  return (
    <main className="mt-24 mx-5">
      <div className="flex justify-between items-center md:w-4/5 md:mx-auto">
        <h2 className="text-2xl text-white uppercase">Featured Projects</h2>
        <button className="px-6 py-3 bg-red-500 hover:bg-red-900 transition-all ease-in rounded-sm shadow-md text-white uppercase">
          View All
        </button>
      </div>
      <div className="mt-5 md:mt-10 md:grid md:grid-cols-2 gap-3 md:gap-5 md:w-4/5 md:mx-auto">
        {projectCards}
      </div>
    </main>
  );
};

export default FeaturedProjects;
