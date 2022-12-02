import React from "react";
import { GoMarkGithub } from "react-icons/go";
import { BsGlobe } from "react-icons/bs";

const FeaturedProjectCard = (props) => {
  return (
    <div>
      <div className="bg-neutral-700 p-8">
        <img
          className="rounded-sm shadow hover:opacity-80 transition-all ease-linear hover:scale-105"
          src={props.image}
          alt={props.title}
        />
      </div>
      <div className="w-full mt-5 h-[1px] bg-red-500"></div>
      <div className="p-3 flex items-center justify-between">
        <h2 className="text-3xl text-white">{props.title}</h2>
        <div className="flex">
          <a href={props.github}>
            <GoMarkGithub
              size={30}
              className="text-red-500 hover:text-red-700 transition-all ease-in shadow-md mr-3"
            />
          </a>
          <a href={props.preview}>
            <BsGlobe
              size={30}
              className="text-red-500 hover:text-red-700 transition-all shadow-md ease-in"
            />
          </a>
        </div>
      </div>
      <div className="w-full mb-5 h-[.5px] bg-red-500"></div>
      <p className="text-white pb-10 px-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, hic
        temporibus voluptate nihil quas sequi possimus debitis vero consequatur
        eaque.
      </p>
    </div>
  );
};

export default FeaturedProjectCard;
