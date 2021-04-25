import React, { useContext } from "react";

import { FullScreen, useFullScreenHandle } from "react-full-screen";

import { SocketContext } from "../../context/SocketContext";

const VideoPlayer = () => {
  const handle = useFullScreenHandle();

  const {
    name,
    callAccepted,
    myVideo,
    userVideo,
    callEnded,
    stream,
    call,
  } = useContext(SocketContext);
  return (
    <div className="videoPlayer">
      <FullScreen handle={handle}>
        <div className="videoPlayer__container">
          {stream && (
            <div className="videoPlayer__me">
              <h4>{name ?? "Name"}</h4>
              <video playsInline muted ref={myVideo} autoPlay />
            </div>
          )}
          {callAccepted && !callEnded && (
            <div className="videoPlayer__they">
              <h4>{call.name ?? "Name"}</h4>
              <video playsInline ref={userVideo} autoPlay />
            </div>
          )}
        </div>
        <button onClick={handle.enter} className="videoPlayer__fullscreen">
          Enter fullscreen
        </button>
      </FullScreen>
    </div>
  );
};

export default VideoPlayer;
