import React from "react";

const Card = (props) => {
  return (
    <div
      className={
        props.active
          ? "p-10 mt-5 bg-red-500 rounded-md"
          : "p-10 mt-5 bg-gray-700 rounded-md"
      }
    >
      {props.children}
      <h3 className="mt-2 text-2xl text-white">{props.title}</h3>
      <p className="mt-3 text-white">{props.text}</p>
      <p
        className={
          props.active
            ? "mt-3 uppercase text-white"
            : "mt-3 uppercase text-red-500"
        }
      >
        Know More
      </p>
    </div>
  );
};

export default Card;
