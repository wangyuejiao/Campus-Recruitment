import React, { Component } from "react";
import "./index.css";
import "antd/dist/antd.css";
import TopNav from "../../components/topNav";
import Search from "../../components/Search/Search";
import RightNav from "../../components/RightNav/RightNav.js";
import Lunbo from '../../components/LunBo'
import Position from '../../components/Position'
import { Row, Col, Divider } from "antd";

const style = { background: 'white', padding: '8px 0',height:'15vh'};

export default class index extends Component {
  render() {
    return (
      <div>
        <TopNav current="home" />
        <Row>
          <Col span={23}>
            <Row justify='center' align='middle'
              style={{ height: '15%', width: '100%', backgroundColor: '#F3F3F3' }}>
              <Col span={14}>
                <Search />
              </Col>
            </Row>
            <Divider style={{ margin: 0, height: '2px', backgroundColor: '#D0DDE3' }} />
            <Row justify='space-around' align='middle'
              style={{ width: '100%', backgroundColor: '#F3F3F3' }}>
              <Col span={6} style={{ backgroundColor: 'white' }}>
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
            {/* 分割线改变长度和颜色 */}
            <Divider style={{ color: 'red', width: '50vh' }}> 热门岗位</Divider>
            <Row style={{ backgroundColor: '#F3F3F3', height: '10vh' }} justify='center' align='middle'>
              <Col span={2} ></Col>
              <Col span={20}>
                <Row style={{ backgroundColor: 'white', height: '8vh' }} justify='center' align='middle'>
                  <Col span={3}>互联网</Col>
                  <Col span={3}>金融</Col>
                  <Col span={3}> 教育培训</Col>
                  <Col span={3}> 医疗健康</Col>
                  <Col span={4}>法律咨询</Col>
                  <Col span={4}>供应-物流</Col>
                  <Col span={4}>采购贸易</Col>
                </Row>
              </Col>
              <Col span={2} ></Col>
            </Row>
            {/* <Row style={{ backgroundColor: '#F3F3F3', height: '20vh' }} gutter={16} justify='center' align='middle'>
              <Col span={2}></Col>
              <Col className="gutter-row" span={5}>
                <div style={style}>col-6</div>
              </Col>
              <Col className="gutter-row" span={5}>
                <div style={style}>col-6</div>
              </Col>
              <Col className="gutter-row" span={5}>
                <div style={style}>col-6</div>
              </Col>
              <Col className="gutter-row" span={5}>
                <div style={style}>col-6</div>
              </Col>
              <Col span={2}></Col>
            </Row> */}
           {/* <Row style={{ backgroundColor: 'g#F3F3F3', height: '3vh' }}></Row>
            <Row style={{ backgroundColor: '#F3F3F3', height: '20vh' }} gutter={16} justify='center' align='middle'> 
              <Col span={2}></Col>
              <Col className="gutter-row" span={5}>
                <div style={style}>col-6</div>
              </Col>
              <Col className="gutter-row" span={5}>
                <div style={style}>col-6</div>
              </Col>
              <Col className="gutter-row" span={5}>
                <div style={style}>col-6</div>
              </Col>
              <Col className="gutter-row" span={5}>
                <div style={style}>col-6</div>
              </Col>
              <Col span={2}></Col>
            </Row> */}
            <Row style={{ backgroundColor: '#F3F3F3',height:'35vh',paddingTop:'20px'}}>
               <Col span={2} style={{backgroundColor:'green'}}></Col>
                <Col span={20}> <Position /></Col>
                <Col span={2} style={{backgroundColor:'green'}}></Col>
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
