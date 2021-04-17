import React, { Component } from "react";
import "./index.css";
import "antd/dist/antd.css";
import { Row, Col, Menu } from "antd";

const navigation = {
  backgroundColor: "#164c7b",
};
const navigation1 = {
//   fontFamily: "lisu",
  fontSize: 18,
  color: "white",
  height:'100%'
};
const navigation2 = {
      fontSize: 18,
      color: "white",
      marginTop:'30%'
    };

console.log(window.screen.height);
export default class index extends Component {
  render() {
    return (
      <Row style={navigation}>
        <Col span={3}></Col>
        <Col span={15} style={navigation1}>
           <ul  style={{listStyle:'none',height:0.9*window.screen.height}}>
               <li style={{marginTop:'130%'}}>公司简介</li>
               <li style={navigation2}>在招岗位</li>
               <li style={navigation2}>简历盒子</li>
               <li style={navigation2}>发布招聘</li>
               <li style={navigation2}>未通过</li>
               <li style={navigation2}>通过</li>
           </ul>
      </Col>
   </Row>
    );
  }
}
