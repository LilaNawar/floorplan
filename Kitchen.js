import React from "react";
import Sink from "./Sink";
import Oven from "./Oven";

function Kitchen(props) {
  return (
    <div id="kitchen">
      <Sink />
      <Oven />
    </div>
  );
}

export default Kitchen;
