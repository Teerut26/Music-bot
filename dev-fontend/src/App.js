
import { connect } from "react-redux";
import "./App.css";
import Navbar from "./components/Navbar";
import ServerLists from "./components/ServerLists";

var _ = require("lodash");

function App(props) {
  return (
    <div className="App">
      <Navbar />
      <ServerLists />
    </div>
  );
}

export default connect((state) => {
  return state;
})(App);
