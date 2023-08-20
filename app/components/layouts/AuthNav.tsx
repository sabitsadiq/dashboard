import Image from "next/image";
import React from "react";
import { GrSearch } from "react-icons/gr";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
interface navProp {
  onToggleNav?: any;
}

const AuthNav = ({ onToggleNav }: navProp) => {
  return (
    <nav className="bg-white fixed h-18 shadow-lg w-full md:px-10 py-3">
      <div className="flex items-center justify-between px-2  w- mx-au max-w-[1400px]">
        <div>
          <HiOutlineMenuAlt1
            className="text-black w-8 h-8 lg:hidden z-20"
            onClick={onToggleNav}
          />
        </div>
        <div className="hidden md:flex lg:ml-64">
          <input className="md:w-96 bg-gray-200/40 outline-none rounded-tl-md rounded-bl-md px-2 py-2" />
          <span className="bg-blue-700/80 flex items-center justify-center w-12 rounded-br-md rounded-tr-md">
            <GrSearch color="red" size="30px" className=" text-white" />
          </span>
        </div>
        <div className="w-50 h-50">
          <Image
            className="w-50 h-50 rounded-full"
            src="/images/nicolasAvater.jpg"
            width={35}
            height={35}
            alt="avater"
          />
        </div>
      </div>
    </nav>
  );
};

export default AuthNav;
