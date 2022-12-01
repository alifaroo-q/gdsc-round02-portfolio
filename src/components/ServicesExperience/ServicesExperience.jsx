import React from 'react'
import { MdBrush, MdEditCalendar, MdPiano } from "react-icons/md";

const ServicesExperience = () => {
  return (
    <main className="mt-28 md:mt-44 mx-5 md:grid md:grid-cols-3 md:gap-3 md:w-3/4 md:mx-auto">
      <div className="p-10 bg-gray-700 rounded-md">
        <MdBrush className="text-red-500" size="50" />
        <h3 className="mt-2 text-2xl text-white">UI Design</h3>
        <p className="mt-3 text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing.
        </p>
        <p className="mt-3 uppercase text-red-500">Know More</p>
      </div>

      <div className="mt-5 md:mt-0 p-10 bg-red-500 rounded-md">
        <MdEditCalendar className="text-white" size="50" />
        <h3 className="mt-2 text-2xl text-white">Product Design</h3>
        <p className="mt-3 text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing.
        </p>
        <p className="mt-3 uppercase text-white">Know More</p>
      </div>

      <div className="mt-5 md:mt-0 p-10 bg-gray-700 rounded-md">
        <MdPiano className="text-red-500 -rotate-45" size="50" />
        <h3 className="mt-2 text-2xl text-white">Branding</h3>
        <p className="mt-3 text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing.
        </p>
        <p className="mt-3 uppercase text-red-500">Know More</p>
      </div>
    </main>
  );
}

export default ServicesExperience