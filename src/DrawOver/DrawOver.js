import React from "react";
import { DrawCanvas } from "../DrawCanvas/DrawCanvas";
import "./DrawOver.css";
import { connect } from "react-redux";
import { CURSOR } from "../redux/store";
import { updateDrawing } from "../redux/actions";

function DrawOver({ interactive, drawing, onChange, children, ...props }) {
  return (
    <div id="sketch-container" {...props}>
      {children}
      <div id="sketch-canvas" className={!interactive ? "static" : ""}>
        <DrawCanvas
          lineWidth={2}
          lineColor="#ff0035"
          value={drawing}
          onChange={onChange}
        />
      </div>
    </div>
  );
}

export default connect(
  ({ cursor, drawing }) => ({
    interactive: cursor === CURSOR.DRAWOVER,
    drawing
  }),
  dispatch => ({ onChange: drawing => dispatch(updateDrawing(drawing)) })
)(DrawOver);
