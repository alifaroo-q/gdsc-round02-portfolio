import React from "react";

const Card = (props) => {
  return (
    <div
      className={
        props.active
          ? "p-10 mt-5 bg-red-500 rounded-md hover:bg-red-900 transition-all ease-out shadow-md"
          : "p-10 mt-5 bg-gray-700 rounded-md hover:bg-gray-900 transition-all ease-in shadow-md"
      }
    >
      {props.children}
      <h3 className="mt-2 text-2xl text-white">{props.title}</h3>
      <p className="mt-3 text-white">{props.text}</p>
      <p
        className={
          props.active
            ? "mt-3 uppercase text-white hover:translate-x-3 transition-all ease-linear"
            : "mt-3 uppercase text-red-500 hover:translate-x-3 transition-all ease-linear"
        }
      >
        Know More
      </p>
    </div>
  );
};

export default Card;
