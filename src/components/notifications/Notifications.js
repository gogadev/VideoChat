import React, { useContext } from "react";

import { Button } from "@material-ui/core";

import { SocketContext } from "../../context/SocketContext";

const Notifications = () => {
  const { answerCall, call, callAccepted } = useContext(SocketContext);
  return (
    <div className="notifications">
      {call.isReceivedCall && !callAccepted && (
        <div className="answer2">
          <h3><span>{call.name}</span> is calling: </h3>
          <Button variant="contained" color="secondary" onClick={answerCall} className="btn">
            Answer
          </Button>
        </div>

      )}
    </div>
  );
};

export default Notifications;
