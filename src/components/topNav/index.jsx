import React, { Component } from 'react'
import './index.css';
import "antd/dist/antd.css";
import { Row, Col } from 'antd';
import {Link} from 'react-router-dom'
import { Input, Space } from 'antd';
import { AudioOutlined } from '@ant-design/icons';

const navigation = {
    backgroundColor: '#79bcdc',
    height: '10vh'
}
const navigation1 = {
    fontFamily: "lisu",
    fontSize: 28,
    color: '#3061A1',

}

export default class index extends Component {
    constructor(props){
        super(props);
        this.state={
             color:'white'
        }
    }
    render() {
        return (
            <Row style={navigation}>
                <Col span={2} ></Col>
                <Col span={2} style={navigation1}>
                    <Row align="middle" justify='center' style={{ height: '100%' }}>校园招聘</Row>
                </Col>
                <Col span={1}></Col>
                <Col span={2}>
                    <Row align="middle" justify='center' style={{ height: '100%',color:'#3061A1'}}>
                        <i className="iconfont" >&#xe606;</i>
                        <span >北京</span>
                    </Row>
                </Col>
                <Col span={2} style={{color:'white'}}>
                    <Row align="middle" justify='center' style={{ height: '100%' }}>
                        <Link to='/' style={{color:'white'}}>首页</Link>
                     </Row>
                </Col>
                <Col span={2} style={{color:'white' }}>
                    <Row align="middle" justify='center' style={{ height: '100%' }}>
                        <Link to='/position' style={{color:'white'}}>职位</Link>
                     </Row>
                </Col>
                <Col span={2} style={{color:'white' }}>
                    <Row align="middle" justify='center' style={{ height: '100%' }}>
                        <Link to='/company' style={{color:'white'}}>公司</Link>
                     </Row>
                </Col>
                <Col span={9}></Col>
                <Col span={2}></Col>
            </Row>
            
        )
    }
}
