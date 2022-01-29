import React from "react";

function Notification({ message }) {
  if (message === null) {
    return null;
  } else {
    return <div className="success">{message}</div>;
  }
}

export default Notification;
