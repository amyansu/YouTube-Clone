import { HiMiniBars3 } from "react-icons/hi2";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { LuCircleUserRound } from "react-icons/lu";
import { CiSearch } from "react-icons/ci";
import { IoMdMic } from "react-icons/io";

export const AppBar = ({ setSidebar }:{setSidebar:any}) => {
  return (
    <div className="flex justify-between p-2 ">
      <div className="flex items-center justify-center ml-2 ">
        <button className="hover:bg-gray-300 p-2 rounded-full mr-3 h-10" onClick={() => setSidebar((prev:boolean) => !prev)}> 
          {<HiMiniBars3 size={"22px"} />}
        </button>
        <img className=" w-24" src="logo.png" alt="YouTube Logo" />
      </div>
      {/* Search Bar */}
      <div className="hidden md:block">
        <div className="flex justify-center items-center ">
          <input
            type="text" 
            placeholder="Search"
            className="w-full lg:w-[600px] rounded-l-full p-2 h-10 border  border-gray-300 focus:outline-none"
          />

          <button className="border border-grey-900 rounded-r-full p-2 w-16 h-10 flex justify-center items-center bg-gray-100 hover:bg-gray-200">
            {<CiSearch size={"24px"} />}
          </button>
          <div className="bg-gray-100 p-2 ml-3 h-10 w-11 rounded-full flex justify-center items-center hover:bg-gray-300">
            <button>{<IoMdMic size={"20px"} />} </button>
          </div>
        </div>{" "}
      </div>
      {/* Signin */}
      <div>
        <div className="flex items-center justify-center gap-6 mr-6">
          {<HiOutlineDotsVertical className="cursor-pointer" size={"20px"} />}
          <button className="flex items-center justify-center gap-2 p-2 pr-3 border hover:bg-blue-100 text-blue-600 rounded-full text-sm">
            {<LuCircleUserRound size={"21px"} />}
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
};
