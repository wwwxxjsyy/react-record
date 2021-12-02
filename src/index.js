import ReactDOM from "react-dom";
import "./style/index.scss";
import reportWebVitals from "./reportWebVitals";
import { createStore } from "redux";
import { Provider } from "react-redux";
import RootReducer from "@/store";
import LayOut from "@/layout";
const store = createStore(RootReducer);

ReactDOM.render(
  <Provider store={store}>
    <LayOut />
  </Provider>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();