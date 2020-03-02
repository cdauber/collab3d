import React from "react";
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
  return (
    <div id="variations-column" {...props}>
      <CommentsColumnHeader
        className="variations-header"
        headerText="Iterations"
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
