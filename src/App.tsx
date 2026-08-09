import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Search from "./components/Search";
import PlayingVideo from "./components/PlayingVideo";
import { AppBar } from "./components/AppBar";
import Authcontextprovider from "./context/AuthProvider";
import { useState } from "react";
function App() {
  const [sidebar, setSidebar] = useState(false);
  return (
    <>
      <div>
        <AppBar setSidebar={setSidebar} />
        <Authcontextprovider>
          <Routes>
            <Route path="/" element={<Home sidebar={sidebar} />} />
            <Route path="/search/:searchQuery" element={<Search />} />
            <Route path="/video/:id" element={<PlayingVideo />} />
          </Routes>
        </Authcontextprovider>
      </div>
    </>
  );
}

export default App;
