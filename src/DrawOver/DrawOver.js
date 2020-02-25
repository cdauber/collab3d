import React from "react";
import "./DrawOver.css";
import { DrawCanvas } from "../DrawCanvas/DrawCanvas";

export function DrawOver({ active, drawing, onChange, children, ...props }) {
  return (
    <div id="sketch-container" {...props}>
      {children}
      <div id="sketch-canvas" className={onChange ? "" : "static"}>
        <DrawCanvas lineWidth={2} lineColor="#ff0035" value={drawing} onChange={onChange} />
      </div>
    </div>
  );
}
