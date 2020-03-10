import React, { useState } from "react";
import { connect } from "react-redux";
import CommentsColumnHeader from "../CommentsColumn/CommentsColumnHeader/CommentsColumnHeader";
import {
  deselectComment,
  deselectVariation,
  selectVariation
} from "../redux/actions";
import Variation from "./Variation/Variation";
import "./VariationsColumn.css";

function VariationsColumn({ variations, onClickVariation, ...props }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div id="variations-column" className={isOpen ? "" : "closed"} {...props}>
      <CommentsColumnHeader
        headerText="Show Variations"
        className={"variations-column-closed-label" + (isOpen ? "" : " closed")}
        onClick={() => setIsOpen(true)}
      />
      <div className={"variations-column-inside" + (isOpen ? "" : " closed")}>
        <CommentsColumnHeader
          className="variations-header"
          headerText="Variations"
        />
        <div className="variations-scroll-column">
          {variations.map(variation => (
            <Variation
              key={variation.id}
              onClick={() => onClickVariation(variation)}
              {...variation}
            />
          ))}
        </div>
      </div>
      <button
        className={"variations-column-close-button" + (isOpen ? "" : " closed")}
        onClick={() => setIsOpen(!isOpen)}
      >
        <img src="assets/right-arrow.svg" alt="Close sidebar icon" />
      </button>
    </div>
  );
}

export default connect(
  ({ activeVariationIds, variations }) => ({ activeVariationIds, variations }),
  dispatch => ({
    selectVariation: variation => dispatch(selectVariation(variation)),
    deselectVariation: variation => dispatch(deselectVariation(variation)),
    deselectComment: () => dispatch(deselectComment())
  }),
  (
    { activeVariationIds, ...stateProps },
    { selectVariation, deselectVariation, deselectComment },
    ownProps
  ) => ({
    ...ownProps,
    ...stateProps,
    onClickVariation: variation => {
      deselectComment();
      if (activeVariationIds[variation.id]) {
        deselectVariation(variation);
      } else {
        selectVariation(variation);
      }
    }
  })
)(VariationsColumn);
