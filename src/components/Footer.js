import React from "react";

function Footer(props) {
  const footerStyle = {
    color: "green",
    fontSize: 16,

    fontStyle: "italic",
  };
  return (
    <div style={footerStyle}>
      <br />
      <em>Phone app , Nickson Kipkorir 2021</em>
    </div>
  );
}

export default Footer;
