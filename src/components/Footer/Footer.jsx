import React from "react";
import {
  BsFacebook,
  BsTwitter,
  BsYoutube,
  BsFillHeartFill,
} from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="flex flex-col justify-center items-center p-3 md:p-5 mt-20 bg-zinc-800 md:grid md:grid-cols-3 md:place-content-baseline">
      <h1 className="md:flex md:justify-center text-3xl text-red-500">
        AliceSmith.
      </h1>
      <div className="flex mt-5 md:mt-0 md:justify-center">
        <BsFacebook color="white" size={20} className="mr-4" />
        <BsTwitter color="white" size={20} className="mr-4" />
        <BsYoutube color="white" size={20} />
      </div>
      <div className="flex justify-center items-center mt-5 md:mt-0">
        <BsFillHeartFill className="mr-2" color="red" />
        <p className="text-white">Created by Ali</p>
      </div>
    </footer>
  );
};

export default Footer;
