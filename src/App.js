import React from "react";

import Navbar from "./components/navbar/Navbar";
import VideoPlayer from "./components/video-player/VideoPlayer";
import Options from "./components/options/Options";
import Notifications from "./components/notifications/Notifications";

import "./App.css";

const App = () => {
  return (
    <>
      <Navbar />
      <VideoPlayer />
      <Options>
        <Notifications />
      </Options>
    </>
  );
};

export default App;
