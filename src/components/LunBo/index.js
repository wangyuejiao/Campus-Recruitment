import React, { Component } from "react";
import { Carousel } from "antd";
export default class index extends Component {
  render() {
    const contentStyle = {
      height: "260px",
      color: "#fff",
      lineHeight: "160px",
      textAlign: "center",
      background: "#364d79",
      margin:0
    };
    return (
      <div>
        <Carousel autoplay>
          <div>
            <h3 style={contentStyle}>1</h3>
          </div>
          <div>
            <h3 style={contentStyle}>2</h3>
          </div>
          <div>
            <h3 style={contentStyle}>3</h3>
          </div>
          <div>
            <h3 style={contentStyle}>4</h3>
          </div>
        </Carousel>
      </div>
    );
  }
}
