import React from "react";
import ReactDOM from "react-dom";
import { connect, Provider } from "react-redux";
import CommentsColumn from "./CommentsColumn/CommentsColumn";
import DrawOver from "./DrawOver/DrawOver";
import Header from "./Header/Header";
import "./index.css";
import ModelRenderer from "./ModelRenderer";
import store from "./redux/store";
import {
  deselectComment,
  moveCamera,
  showPins,
  hidePins
} from "./redux/actions";
import VariationsColumn from "./VariationsColumn/VariationsColumn";

function MainPage({
  cursor,
  showPins,
  activeVariations,
  onClickEye,
  onClickTopCamera,
  onClickFrontCamera,
  onClickSideCamera
}) {
  return (
    <div id="app-container" className={cursor}>
      <Header eyeOpen={showPins} onClickEye={onClickEye} />
      <div id="main-area">
        <VariationsColumn />
        <DrawOver className="draw-over">
          <div className="renderer-row">
            {activeVariations.map(variation => (
              <div
                key={variation.id}
                className="renderer"
                style={{
                  width: `calc(100%/${activeVariations.length})`
                }}
              >
                <ModelRenderer modelPath={variation.model} />
              </div>
            ))}
          </div>
          <div className="camera-button-row">
            <button
              className="camera-button top-camera-button"
              onClick={onClickTopCamera}
            >
              <div className="camera-button-icon-container">
                <img src="assets/top-icon.svg" alt="Top camera view icon" />
              </div>
              Top
            </button>
            <button
              className="camera-button front-camera-button"
              onClick={onClickFrontCamera}
            >
              <div className="camera-button-icon-container">
                <img src="assets/front-icon.svg" alt="Top camera view icon" />
              </div>
              Front
            </button>
            <button
              className="camera-button side-camera-button"
              onClick={onClickSideCamera}
            >
              <div className="camera-button-icon-container">
                <img src="assets/side-icon.svg" alt="Top camera view icon" />
              </div>
              Side
            </button>
          </div>
        </DrawOver>
        <CommentsColumn />
      </div>
    </div>
  );
}

const WrappedMainPage = connect(
  ({ cursor, activeVariationIds, variations, showPins }) => ({
    cursor,
    activeVariations: Object.keys(activeVariationIds)
      .filter(id => activeVariationIds[id])
      .map(variationId => variations.find(({ id }) => `${id}` === variationId)),
    showPins
  }),
  dispatch => ({
    onClickTopCamera: () => {
      dispatch(deselectComment());
      dispatch(moveCamera({ position: [0, 4, 0], focus: [0, 0, 0] }));
    },
    onClickFrontCamera: () => {
      dispatch(deselectComment());
      dispatch(moveCamera({ position: [0, 0, 4], focus: [0, 0, 0] }));
    },
    onClickSideCamera: () => {
      dispatch(deselectComment());
      dispatch(moveCamera({ position: [-4, 0, 0], focus: [0, 0, 0] }));
    },
    showPins: () => dispatch(showPins()),
    hidePins: () => dispatch(hidePins())
  }),
  (stateProps, { showPins, hidePins, ...dispatchProps }, ownProps) => ({
    ...ownProps,
    ...stateProps,
    ...dispatchProps,
    onClickEye: () => {
      if (stateProps.showPins) {
        hidePins();
      } else {
        showPins();
      }
    }
  })
)(MainPage);

ReactDOM.render(
  <Provider store={store}>
    <WrappedMainPage />
  </Provider>,
  document.getElementById("root")
);
