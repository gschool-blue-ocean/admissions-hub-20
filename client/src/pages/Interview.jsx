import React from "react";
import InputNotes from "../components/InputNotes";
import CodingWindow from "../components/CodingWindow";

const Interview = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        marginLeft: "auto",
        marginRight: "auto",
        position: "relative",
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      <CodingWindow
        style={{
          width: "1000px",
        }}
      />
      <InputNotes style={{ width: "500px" }} />
    </div>
  );
};

export default Interview;
