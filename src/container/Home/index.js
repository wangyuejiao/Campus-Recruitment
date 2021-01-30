import React, { Component } from 'react'
import './index.css';
import "antd/dist/antd.css";
import TopNav from '../../components/topNav'
import Search from '../../components/Search'
import { Row,Col } from 'antd';



export default class index extends Component {
    render() {
        return (
           <div>
               
               <TopNav />
               <Search />
               <Row>
               <Col span={22} style={{backgroundColor:'#F3F3F3'}}></Col>
               <Col span={2} ></Col>
               </Row>
               
           </div>
        )
    }
}
