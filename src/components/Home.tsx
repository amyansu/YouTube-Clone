import { SideBar } from "./SideBar";
import { Sidebar2 } from "./Sidebar2";
import { VideoGrid } from "./VideoGrid";

function Home({ sidebar }: { sidebar: boolean }) {
  return (
    <div className="flex">
      <div className="hidden md:block">
        {sidebar ? <SideBar /> : <Sidebar2 />}
      </div>
      <div className="block md:hidden absolute bg-white z-10">
        {sidebar && <Sidebar2 />}
      </div>
      <div className="w-full">
        <VideoGrid />
      </div>
    </div>
  );
}

export default Home;
