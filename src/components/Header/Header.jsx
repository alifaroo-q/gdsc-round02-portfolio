import { useState } from "react";
import { MdMenu, MdClose } from "react-icons/md";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const navHandler = () => {
    setIsNavOpen((prev) => !prev);
  };

  return (
    <>
      <header
        id="home"
        className="flex justify-between items-center py-5 px-3 md:max-w-[1200px] md:m-auto"
      >
        <h1 className="text-3xl text-red-500">AliceSmith.</h1>
        <nav className="hidden md:flex">
          <ul className="flex text-white">
            <li className="p-3 hover:text-red-500 transition-all ease-in">
              <a href="#home">Home</a>
            </li>
            <li className="p-3 hover:text-red-500 transition-all ease-in">
              <a href="#main-service-area">Services</a>
            </li>
            <li className="p-3 hover:text-red-500 transition-all ease-in">
              <a href="#main-service-area">Experience</a>
            </li>
            <li className="p-3 hover:text-red-500 transition-all ease-in">
              <a href="#projects">Projects</a>
            </li>
          </ul>
        </nav>
        <div className="block md:hidden">
          {!isNavOpen ? (
            <MdMenu onClick={navHandler} color="#fff" size="30" />
          ) : (
            <MdClose onClick={navHandler} color="#fff" size="30" />
          )}
        </div>
      </header>
      {/* mobile menu */}
      <div className={!isNavOpen ? "hidden" : "fixed right-0"}>
        <nav className="bg-gray-800 block md:hidden h-screen w-[10rem]">
          <ul className="flex flex-col ease-linear pt-8 text-red-500 overflow-hidden cursor-pointer">
            <li
              onClick={navHandler}
              className="px-5 p-2 transition-all ease-in hover:text-white"
            >
              <a href="#home">Home</a>
            </li>
            <li
              onClick={navHandler}
              className="px-5 p-2 transition-all ease-in hover:text-white"
            >
              <a href="#main-service-area">Services</a>
            </li>
            <li
              onClick={navHandler}
              className="px-5 p-2 transition-all ease-in hover:text-white"
            >
              <a href="#main-service-area">Experience</a>
            </li>
            <li
              onClick={navHandler}
              className="px-5 p-2 transition-all ease-in hover:text-white"
            >
              <a href="#projects">Projects</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;
