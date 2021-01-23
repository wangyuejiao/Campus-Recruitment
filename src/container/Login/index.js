import React, { Component } from "react";
import "./index.css";
import { Button, DatePicker, version } from "antd";
import "antd/dist/antd.css";
import "./index.css";

export default class index extends Component {
  render() {
    const box = {
      width: "100%",
      height: "100vh",
      backgroundImage: "url(./images/login_background.jpg)",
      backgroundRepeat: "no-repeat",
      backgroundSize: "100% 100%",
    };
    return (
      <div style={box}>
        <div className="App">
    <h1>antd version: {version}</h1>
    <DatePicker />
    <Button type="primary" style={{ marginLeft: 8 }}>
      Primary Button
    </Button>
  </div>,
      </div>
    );
  }
}
