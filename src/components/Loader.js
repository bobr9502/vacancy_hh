import React from "react";
import Loader from "react-loader-spinner";

const MainLoader = () => {
    const divStyle = {
      position: "fixed",
      top: "0",
      left: "0",
      right: "0",
      bottom: "0",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center"
    };
    return (
      <div style={divStyle}>
        <Loader type="Oval" color="#4183c4" height="50" width="50" />
      </div>
    );
}

export default MainLoader
