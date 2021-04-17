import React, { Component } from 'react'
import "./index.css";
import "antd/dist/antd.css";
import CompanyTopNav from "../../components/CompanyTopNav";
import CompanyLeftNav from "../../components/CompanyLeftNav";
import { Row, Col, Divider,Image, Button,Popover } from "antd";

export default class index extends Component {
    render() {
        return (
            <div>
               <CompanyTopNav />
               <Row>
                   <Col span={3}>
                       <CompanyLeftNav />
                   </Col>
               </Row>
            </div>
        )
    }
}
