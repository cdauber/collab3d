import React, { useState } from "react";
import "./Variation.css";
import { connect } from "react-redux";

function Variation({ id, name, thumbnail, selected, ...props }) {
  const [mouseHover, setMouseHover] = useState(false);

  return (
    <div
      className="variation"
      onMouseEnter={() => setMouseHover(true)}
      onMouseLeave={() => setMouseHover(false)}
      {...props}
    >
      <span className="variation-name">{name}</span>
      <img
        className="variation-thumbnail-image"
        src={thumbnail}
        alt={`${name} thumbnail`}
      />
      {(selected || mouseHover) && (
        <div
          className={"variation-checked-circle" + (selected ? " selected" : "")}
        >
          {selected && (
            <img
              src="assets/variation-check.svg"
              alt="Variation checked icon"
            />
          )}
        </div>
      )}
    </div>
  );
}

export default connect(
  ({ activeVariationIds }, ownProps) => ({
    selected: activeVariationIds[ownProps.id]
  }),
  () => ({})
)(Variation);
