import {} from "react-icons/io";
import {
  MdLiveTv,
  MdOutlineKeyboardArrowRight,
  MdOutlinePlaylistPlay,
  MdOutlinePodcasts,
  MdOutlineSubscriptions,
  MdOutlineWatchLater,
} from "react-icons/md";
import { GoHistory, GoHome, GoVideo } from "react-icons/go";
import { TfiHelpAlt, TfiVideoClapper } from "react-icons/tfi";
import { LuGamepad2, LuGraduationCap } from "react-icons/lu";
import { AiOutlineLike } from "react-icons/ai";
import { HiOutlineFire } from "react-icons/hi2";
import { RiFeedbackLine, RiFlagLine, RiShoppingBag4Line } from "react-icons/ri";
import { IoMusicalNotesOutline, IoSettingsOutline } from "react-icons/io5";
import { PiNewspaperClippingDuotone } from "react-icons/pi";
import { GrTrophy } from "react-icons/gr";
import { TbHanger2 } from "react-icons/tb";
import {
  SiYoutubekids,
  SiYoutubemusic,
  SiYoutubeshorts,
  SiYoutubestudio,
} from "react-icons/si";
import { FaYoutube } from "react-icons/fa6";

export const Sidebar2 = () => {
  const sidebarItems = [
    {
      id: 1,
      name: "Home",
      icon: <GoHome />,
    },
    {
      id: 2,
      name: "Shorts",
      icon: <SiYoutubeshorts />,
    },
    {
      id: 3,
      name: "Subscriptions",
      icon: <MdOutlineSubscriptions />,
    },
  ];
  const sidebarItems2 = [
    {
      id: 1,
      name: "History",
      icon: <GoHistory />,
    },
    {
      id: 2,
      name: "Playlist",
      icon: <MdOutlinePlaylistPlay />,
    },
    {
      id: 3,
      name: "Your videos",
      icon: <GoVideo />,
    },
    {
      id: 4,
      name: "Your movies",
      icon: <TfiVideoClapper />,
    },
    {
      id: 5,
      name: "Your courses",
      icon: <LuGraduationCap />,
    },
    {
      id: 6,
      name: "Watch later",
      icon: <MdOutlineWatchLater />,
    },
    {
      id: 7,
      name: "Liked videos",
      icon: <AiOutlineLike />,
    },
  ];
  const sidebarItems3 = [
    {
      id: 1,
      name: "Trending",
      icon: <HiOutlineFire />,
    },
    {
      id: 2,
      name: "Shopping",
      icon: <RiShoppingBag4Line />,
    },
    {
      id: 3,
      name: "Music",
      icon: <IoMusicalNotesOutline />,
    },
    {
      id: 4,
      name: "Movies",
      icon: <TfiVideoClapper />,
    },
    {
      id: 5,
      name: "Live",
      icon: <MdLiveTv />,
    },
    {
      id: 6,
      name: "Gaming",
      icon: <LuGamepad2 />,
    },
    {
      id: 7,
      name: "News",
      icon: <PiNewspaperClippingDuotone />,
    },
    {
      id: 8,
      name: "Sports",
      icon: <GrTrophy />,
    },
    {
      id: 9,
      name: "Courses",
      icon: <AiOutlineLike />,
    },
    {
      id: 10,
      name: "Fashion & Beauty",
      icon: <TbHanger2 />,
    },
    {
      id: 11,
      name: "Podcast",
      icon: <MdOutlinePodcasts />,
    },
  ];
  const sidebarItems4 = [
    {
      id: 1,
      name: "YouTube Premium",
      icon: <FaYoutube />,
    },
    {
      id: 2,
      name: "YouTube Studio",
      icon: <SiYoutubestudio />,
    },
    {
      id: 3,
      name: "YouTube Music",
      icon: <SiYoutubemusic />,
    },
    {
      id: 4,
      name: "YouTube Kids",
      icon: <SiYoutubekids />,
    },
  ];
  const sidebarItems5 = [
    {
      id: 1,
      name: "Settings",
      icon: <IoSettingsOutline />,
    },
    {
      id: 2,
      name: "Report history",
      icon: <RiFlagLine />,
    },
    {
      id: 3,
      name: "Help",
      icon: <TfiHelpAlt />,
    },
    {
      id: 4,
      name: "Send feedback",
      icon: <RiFeedbackLine />,
    },
  ];
  return (
    <div className="items-center px-4 w-full h-[calc(100vh-3.625rem)] overflow-y-scroll overflow-x text-nowrap">
      <div>
        {/* Home */}
        {sidebarItems.map((item) => {
          return (
            <div className="flex items-center space-x-6 hover:bg-gray-200 cursor-pointer rounded-lg p-2">
              <div className="text-xl">{item.icon}</div>
              <span className=" text-base font-normal">{item.name}</span>
            </div>
          );
        })}
        <br />
        <hr />
      </div>
      {/* You */}
      <div>
        <div className="flex items-center mt-4 space-x-2 hover:bg-gray-200 cursor-pointer rounded-lg p-2">
          <h1 className="text-base font-semibold">You</h1>
          <MdOutlineKeyboardArrowRight />
        </div>
        {sidebarItems2.map((item) => {
          return (
            <div className="flex items-center space-x-6 hover:bg-gray-200 cursor-pointer rounded-lg p-2">
              <div className="text-xl">{item.icon}</div>
              <span className=" text-base font-normal">{item.name}</span>
            </div>
          );
        })}
        <br />
        <hr />
      </div>
      {/* Explore */}
      <div>
        <div className="items-center mt-4 p-2">
          <h1 className="text-base font-semibold">Explore</h1>
        </div>
        {sidebarItems3.map((item) => {
          return (
            <div className="flex items-center space-x-6 hover:bg-gray-200 cursor-pointer rounded-lg p-2">
              <div className="text-xl">{item.icon}</div>
              <span className=" text-base font-normal">{item.name}</span>
            </div>
          );
        })}
        <br />
        <hr />
      </div>
      {/* More from youtube */}
      <div>
        <div className="items-center mt-4 p-2">
          <h1 className="text-base font-semibold">More from youtube</h1>
        </div>
        {sidebarItems4.map((item) => {
          return (
            <div className="flex items-center space-x-6 hover:bg-gray-200 cursor-pointer rounded-lg p-2">
              <div className="text-xl text-red-600">{item.icon}</div>
              <span className=" text-base font-normal">{item.name}</span>
            </div>
          );
        })}
        <br />
        <hr />
      </div>
      {/* Settings */}
      <div>
        {sidebarItems5.map((item) => {
          return (
            <div className="flex items-center space-x-6 hover:bg-gray-200 cursor-pointer rounded-lg p-2">
              <div className="text-xl">{item.icon}</div>
              <span className=" text-base font-normal">{item.name}</span>
            </div>
          );
        })}
        <hr />
      </div>
      <div className="text-xs font-semibold text-gray-600 p-2 mt-2">
        <p>
          About Press Copyright <br /> Contact us Creators <br /> Advertise
          Developers
        </p>
        <br />
        <p>Terms PrivacyPolicy & Safety <br /> How YouTube works <br /> Test new features</p>
        <br />
        <p>© 2025 Google LLC</p>
      </div>
    </div>
  );
};
