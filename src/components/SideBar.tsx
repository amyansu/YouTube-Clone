import { FaRegCircleUser } from "react-icons/fa6";
import { GoHome } from "react-icons/go";
import { MdOutlineSubscriptions } from "react-icons/md";
import { RiHistoryFill } from "react-icons/ri";
import { SiYoutubeshorts } from "react-icons/si";

export const SideBar = () => {
  return (
    <div className="flex justify-start items-center flex-col">
      <SideBarButtom name="Home" svg={<GoHome size={"28px"} />} />
      <SideBarButtom name="Shorts" svg={<SiYoutubeshorts size={"22px"} />} />
      <SideBarButtom name="Subscriptions" svg={<MdOutlineSubscriptions size={"22px"} />} />
      <SideBarButtom name="You" svg={<FaRegCircleUser size={"22px"} />} />
      <SideBarButtom name="History" svg={<RiHistoryFill size={"22px"} />} />
    </div>
  );
};

function SideBarButtom({ name, svg }: { name: string; svg: any }) {
  return (
    <button className="flex flex-col w-full items-center hover:bg-gray-100 py-3 gap-2 rounded-lg text-xs font-normal ">
      <div>{svg}</div>
      <div>{name}</div>
    </button>
  );
}
