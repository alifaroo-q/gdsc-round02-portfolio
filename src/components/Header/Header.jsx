import { useState } from "react";
import { MdMenu, MdClose } from "react-icons/md";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const navHandler = () => {
    setIsNavOpen((prev) => !prev);
  };

  return (
    <>
      <header className="flex justify-between items-center py-5 px-3 md:max-w-[1200px] md:m-auto">
        <h1 className="text-3xl text-red-500">AliceSmith.</h1>
        <nav className="hidden md:flex">
          <ul className="flex ease-linear text-white">
            <li className="p-3 hover:text-red-500">Home</li>
            <li className="p-3 hover:text-red-500">Services</li>
            <li className="p-3 hover:text-red-500">Experience</li>
            <li className="p-3 hover:text-red-500">Projects</li>
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
            <li className="px-5 p-2 hover:text-white">Home</li>
            <li className="px-5 p-2 hover:text-white">Services</li>
            <li className="px-5 p-2 hover:text-white">Experience</li>
            <li className="px-5 p-2 hover:text-white">Projects</li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;
