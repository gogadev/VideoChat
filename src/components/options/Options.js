import React, { useContext, useState } from "react";

import { Button } from "@material-ui/core";

import { CopyToClipboard } from "react-copy-to-clipboard";

import { Assignment, Phone, PhoneDisabled } from "@material-ui/icons";

import { SocketContext } from "../../context/SocketContext";


const Options = ({ children }) => {
  const {
    me,
    callAccepted,
    name,
    setName,
    leaveCall,
    callEnded,
    callUser,
  } = useContext(SocketContext);

  const [idToCall, setIdToCall] = useState("");


  return (
    <>
      <div className="options__container">
        <form noValidate autoComplete="off">
          <div className="options__containerInput">
            <h5>Account Info</h5>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <CopyToClipboard text={me}>
              <Button
                variant="contained"
                color="primary"
                startIcon={<Assignment />}
              >
                Copy Your ID
              </Button>
            </CopyToClipboard>
          </div>
          <div className="options__containerInput">
            <h5>Make a call</h5>
            <input
              type="text"
              placeholder="ID"
              value={idToCall}
              onChange={(e) => setIdToCall(e.target.value)}
            />
            {callAccepted && !callEnded ? (
              <Button
                variant="contained"
                color="secondary"
                startIcon={<PhoneDisabled />}
                onClick={leaveCall}
              >
                Hang Up
              </Button>
            ) : (
              <Button
                variant="contained"
                color="primary"
                startIcon={<Phone />}
                onClick={() => callUser(idToCall)}
              >
                Call
              </Button>
            )}
          </div>
        </form>
        {children}
      </div>
    </>
  );
};

export default Options;
