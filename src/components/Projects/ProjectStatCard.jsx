import React from "react";

const ProjectStatCard = (props) => {
  return (
    <div className="flex justify-center rounded-md shadow-md bg-zinc-800 hover:bg-zinc-700 transition-all ease-in-out p-10">
      {/* extracting both key and value from object */}
      {Object.entries(props.data).map(([key, value], i) => {
        return (
          <section key={i}>
            <p className="text-center text-red-500 text-3xl">{value}</p>
            <p className="text-center text-white text-md mt-2">{key}</p>
          </section>
        );
      })}
    </div>
  );
};

export default ProjectStatCard;
