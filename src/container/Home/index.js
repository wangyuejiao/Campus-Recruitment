import React, { Component } from "react";
import "./index.css";
import "antd/dist/antd.css";
import TopNav from "../../components/topNav";
import Search from "../../components/Search/Search";
import RightNav from "../../components/RightNav/RightNav.js";
import Lunbo from '../../components/LunBo'
import { Row, Col, Divider } from "antd";
export default class index extends Component {
  render() {
    return (
      <div>
        <TopNav current="home" />
        <Row>
          <Col span={23}>
              <Row justify='center' align='middle' 
              style={{height:'15%',width:'100%',backgroundColor:'#F3F3F3'}}>
                  <Col span={14}>
                    <Search />
                  </Col>
              </Row>
              <Divider style={{margin:0,height:'2px',backgroundColor:'#D0DDE3'}}/>
              <Row justify='space-around' align='middle'
              style={{width:'100%',backgroundColor:'#F3F3F3'}}>
                <Col span={6} style={{backgroundColor:'white'}}> 
                  <Row justify='center' align='middle'>  {/*获取后台数据循环*/}
                    <Col span={6}>标题</Col>
                    <Col span={4}>123</Col>
                    <Col span={4}>123</Col>
                    <Col span={4}>123</Col>
                    <Col span={4}>更多+图标</Col>
                  </Row>
                </Col>
                <Col span={12}>
                    <Lunbo />
                </Col>
              </Row>
          </Col>
          <Col span={1}>
            <RightNav />
          </Col>
        </Row>
      </div>
    );
  }
}
