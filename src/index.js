import React from "react";
import ReactDOM from "react-dom";
import { connect, Provider } from "react-redux";
import CommentsColumn from "./CommentsColumn/CommentsColumn";
import DrawOver from "./DrawOver/DrawOver";
import Header from "./Header/Header";
import "./index.css";
import ModelRenderer from "./ModelRenderer";
import store from "./redux/store";

function MainPage({ cursor }) {
  return (
    <div id="app-container" className={cursor}>
      <Header />
      <div id="main-area">
        {/* <div id="variations-column"></div> */}
        <DrawOver className="draw-over">
          <ModelRenderer className="renderer" />
        </DrawOver>
        <CommentsColumn />
      </div>
    </div>
  );
}

const WrappedMainPage = connect(({ cursor }) => ({ cursor }))(MainPage);

ReactDOM.render(
  <Provider store={store}>
    <WrappedMainPage />
  </Provider>,
  document.getElementById("root")
);
