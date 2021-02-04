import React, { Component } from 'react'
import TopNav from '../../components/topNav'
import "./index.css";
import "antd/dist/antd.css";
import Search from "../../components/Search/Search";
import RightNav from "../../components/RightNav/RightNav.js";
import Lunbo from '../../components/LunBo'
import Position from '../../components/Position'
import { Row, Col, Divider, Image, Button } from "antd";

export default class index extends Component {
    render() {
        return (
            <div>
                <TopNav current='position' />
                <Row>
                   <Col span={23}>
                       <Row style={{height:'20vh',backgroundColor:'#164c7b'}}> 
                            <Col span={2}></Col>
                            <Col span={14} style={{backgroundColor:'green'}}>
                                <Row style={{height:'5vh'}}></Row>
                                <Row align='middle' >
                                    <Col span={6} style={{fontSize:'25px',color:'white',fontFamily:'lisu'}}>前端开发工程师</Col>
                                    <Col span={4} style={{fontSize:'20px',color:'#ea7840',fontFamily:'lisu'}} align='left'>20k-40k</Col>
                                </Row>
                                <Row align='middle'>
                                    <Col span={2}>杭州</Col>
                                    <Col span={2}>|</Col>
                                    <Col span={2}>本科</Col>
                                    <Col span={4}>云链招聘</Col>
                                </Row>
                            </Col>
                            <Col span={2} style={{backgroundColor:'pink'}}></Col>
                            <Col span={6}></Col>
                       </Row>
                   </Col>
                   <Col span={1}>
                    <RightNav />
                   </Col>
                </Row>
            </div>
        )
    }
}
