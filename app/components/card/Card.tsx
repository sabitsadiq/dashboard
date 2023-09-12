import { MdOutlineRadioButtonUnchecked } from "react-icons/md";
import { FaClipboardList } from "react-icons/fa";
import { HiOutlineCheckCircle } from "react-icons/hi";

export const Card = () => {
  return (
    <>
      <main className="w-full mt-4 border-l-[5px] h-44 border-blue-700/80 py-8 px-3 md:px-5 bg-white rounded-md shadow-md">
        <div className="flex gap-4 ">
          <div className="w-11/12">
            <p className="mb-4  text-blue-400/90 font-bold text-sm leading-3">
              TASK COMPLETED
            </p>
            <div className="flex gap-4 items-center">
              <span className="font-bold text-2xl text-black">0/3</span>
              <span className="h-2 bg-gray-400/40 rounded-md w-full"></span>
            </div>
          </div>
          <div className=" flex self-center items-start">
            <FaClipboardList className="text-gray-400/40 w-[16px] h-20" />
          </div>
        </div>
      </main>
    </>
  );
};
export const Card2 = () => {
  return (
    <>
      <main className="w-full mt-4 border-l-[5px] border-green-700/80 h-44 py-8 px-3  md:px-5 bg-white rounded-md shadow-md">
        <div className="flex flex-col md:flex-row">
          <div className="xl:w-11/12">
            <p className="mb-2  text-green-400/90 font-bold text-sm leading-3">
              LATEST TASK
            </p>
            <div className="flex items-center gap-1">
              <HiOutlineCheckCircle size={25} />
              <p className="text-base font-normal leading-3">
                Convert html to React app
              </p>
            </div>
            <div className="flex items-center gap-1 py-1">
              <HiOutlineCheckCircle size={25} />
              <p className="text-base font-normal leading-3">
                Create Node.js app
              </p>
            </div>
            <div className="flex items-center gap-1">
              <MdOutlineRadioButtonUnchecked size={25} />
              <p className="text-base font-normal leading-3">
                Upload to Github
              </p>
            </div>
          </div>
          <div className="flex justify-end md:justify-center md:self-center md:ml-auto md:items-center h-10">
            <FaClipboardList size={22} className="text-gray-400/40" />
          </div>
        </div>
      </main>
    </>
  );
};
export const Card3 = () => {
  return (
    <>
      <main className="w-full mt-4 p-4 border-l-[5px] h-44 border-green-700/80 bg-white rounded-md shadow-md">
        <div className="flex justify-center items-center w-full h-full">
          <span className="bg-red-700 rounded-full w-24 h-24"></span>
        </div>
      </main>
    </>
  );
};
