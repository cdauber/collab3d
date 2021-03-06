import React from "react";
import ReactDOM from "react-dom";
import { connect, Provider } from "react-redux";
import CommentsColumn from "./CommentsColumn/CommentsColumn";
import DrawOver from "./DrawOver/DrawOver";
import Header from "./Header/Header";
import "./index.css";
import ModelRenderer from "./ModelRenderer";
import store from "./redux/store";
import { deselectComment, moveCamera } from "./redux/actions";

function MainPage({
  cursor,
  onClickTopCamera,
  onClickFrontCamera,
  onClickSideCamera
}) {
  return (
    <div id="app-container" className={cursor}>
      <Header />
      <div id="main-area">
        {/* <div id="variations-column"></div> */}
        <DrawOver className="draw-over">
          <ModelRenderer className="renderer" />
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
  ({ cursor }) => ({ cursor }),
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
    }
  })
)(MainPage);

ReactDOM.render(
  <Provider store={store}>
    <WrappedMainPage />
  </Provider>,
  document.getElementById("root")
);
