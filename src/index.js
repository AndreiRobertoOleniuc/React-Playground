import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./Navbar";
import "bootstrap/dist/css/bootstrap.css";

ReactDOM.render(<Navbar />, document.getElementById("root"));

/*<React.StrictMode>
    <App />
  </React.StrictMode>,*/

/*
class Car extends React.Component {
  constructor() {
    super();
    this.state = { color: "red" };
  }
  render() {
    return <h2>Hi, I am a {this.props.color} Car!</h2>;
  }
}

class Garage extends React.Component {
  render() {
    return (
      <div>
        <h1>Who lives in my Garage</h1>
        <Car color="red" />
      </div>
    );
  }
}
*/
