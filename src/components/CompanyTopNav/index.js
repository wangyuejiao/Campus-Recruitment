import React, { Component } from "react";
import "./index.css";
import "antd/dist/antd.css";
import { Row, Col, Menu } from "antd";
import {Redirect,Route} from "react-router-dom"

const navigation = {
  backgroundColor: "#79bcdc",
};
const navigation1 = {
  fontFamily: "lisu",
  fontSize: 28,
  color: "#3061A1",
};


export default class index extends Component {
  render() {
    return ( 
      <Row style={navigation}>
        <Col span={1}></Col>
        <Col span={2} style={navigation1}>
          <Row align="middle" justify="center" style={{ height: 0.1*window.screen.height }}>
            校园招聘
          </Row>
      </Col>
    </Row>
  
    );
  }
}
