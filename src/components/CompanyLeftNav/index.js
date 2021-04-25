import React, { Component } from "react";
import "./index.css";
import "antd/dist/antd.css";
import { Row, Col, Menu } from "antd";
import {Link} from "react-router-dom"

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
               <li style={{marginTop:'130%'}} ><Link to='/companyhome/IntroduceCom'>公司简介</Link></li>
               <li style={navigation2}><Link to='/companyhome/RecruitingCom'>在招岗位</Link></li>
               <li style={navigation2}><Link to='/companyhome/OfferCom'>简历盒子</Link></li>
               <li style={navigation2}><Link to='/companyhome/FabuCom'>发布招聘</Link></li>
               <li style={navigation2}><Link to='/companyhome/Unpass'>未通过</Link></li>
               <li style={navigation2}><Link to='/companyhome/Pass'>通过</Link></li>
           </ul>
      </Col>
   </Row>
    );
  }
}
