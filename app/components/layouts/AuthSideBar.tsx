import React from "react";
import { GiDoorWatcher } from "react-icons/gi";
import { AiFillDashboard } from "react-icons/ai";
import { TbLogout } from "react-icons/tb";
import { RxCross2 } from "react-icons/rx";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

interface closeSideProp {
  handleCloseSideBar?: any;
}

const AuthSideBar = ({ handleCloseSideBar }: closeSideProp) => {
  return (
    <nav className="fixed top-0 h-full bg-blue-700/80 z-40 px-8 min-w-[15rem] pt-4 text-white">
      <div className="flex gap-2 items-center justify-between mb-8">
        <div className="flex gap-2 items-center">
          <GiDoorWatcher />
          <h1>COMPANY</h1>
        </div>
        <div className="lg:hidden">
          <RxCross2 onClick={handleCloseSideBar} />
        </div>
      </div>
      <div className="">
        <div className="py-8 flex items-center border-t-[0.5px]">
          <AiFillDashboard /> <h2 className="ml-4">Dashboard</h2>
        </div>
        <div className="py-8 flex items-center border-b-[0.5px]">
          <TbLogout /> <h2 className="ml-4">Logout</h2>
        </div>
        <div className="flex items-center justify-center  mt-10 mx-auto w-10 h-10  rounded-full bg-white bg-opacity-20">
          <MdOutlineKeyboardArrowLeft size={"30px"} className="" />
        </div>
      </div>
    </nav>
  );
};

export default AuthSideBar;
