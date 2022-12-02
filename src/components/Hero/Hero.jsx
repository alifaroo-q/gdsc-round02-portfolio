import React from "react";

const Hero = () => {
  return (
    <main className="mt-10 md:flex md:mt-24 md:justify-center md:items-center">
      <div className="flex justify-center">
        <img src="src\assets\model.png" alt="model" height="400" width="300" />
      </div>

      <div className="mt-10 md:mt-20 mx-5 md:w-[40%]">
        <h2 className="text-red-500">Hello, I'm Alice Smith</h2>
        <h1 className="text-2xl mt-2 text-white">Graphics Designer</h1>
        <p className="mt-3 text-white text-justify  md:text-start">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          odio deleniti corrupti quas minus. Voluptate tempora quisquam natus,
          excepturi, nostrum iure dolor vitae itaque voluptatibus fuga fugiat
          perspiciatis facere repellat?
        </p>
        <button className="mt-5 px-5 py-3 rounded-md shadow-md text-white bg-red-500 hover:bg-red-900 transition-all ease-in-out">
          About Me
        </button>
      </div>
    </main>
  );
};

export default Hero;
