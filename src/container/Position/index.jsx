import React, { Component } from 'react'
import TopNav from '../../components/topNav'
import "./index.css";
import "antd/dist/antd.css";
import RightNav from "../../components/RightNav/RightNav.js";
import { Row, Col, Divider, Image, Button, Icon } from "antd";
import {
    HeartOutlined,
} from '@ant-design/icons';
import qs from 'querystring'
export default class index extends Component {
    constructor(props){
        super(props);
        this.state={
            a:{
                color:'white',
                fontSize: '25px',
            },

        }
    }
    componentDidMount(){
    fetch("http://42.192.102.128:3000/common/postInfo",{
        method: 'POST',
        headers: {
          'Accept':"application/json,text/plain,*/*",
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body:qs.stringify({
            post_id:'0',
          })

      }).then(res=>res.json())
      .then(data=>{
        console.log(data)
      })
}

    handleColor=()=>{
        this.setState({
            a:{
                color:'red',
                fontSize: '25px',
            }
        })
    }
    render() {
        return (
            <div>
                <TopNav current='position' />
                <Row>
                    <Col span={23}>
                        <Row style={{ height: '20vh', backgroundColor: '#164c7b' }}>
                            <Col span={2}></Col>
                            <Col span={14} style={{}}>
                                <Row style={{ height: '5vh' }}></Row>
                                <Row align='middle' >
                                    <Col span={6} style={{ fontSize: '25px', color: 'white', fontFamily: 'lisu' }}>前端开发工程师</Col>
                                    <Col span={4} style={{ fontSize: '20px', color: '#ea7840', fontFamily: 'lisu' }} align='left'>20k-40k</Col>
                                </Row>
                                <Row align='middle' style={{ color: 'grey', paddingLeft: '2%', marginTop: '5px' }}>
                                    <>
                                        杭州
                                        <Divider type="vertical" style={{ backgroundColor: 'grey' }} />
                                        本科
                                        <Col style={{ paddingLeft: '135px' }}>云链招聘</Col>
                                    </>
                                </Row>
                            </Col>
                            <Row align='middle'>
                                <Col span={2}>
                                    <div className="icons-list">
                                        <HeartOutlined style={this.state.a}onClick={this.handleColor}/>
                                    </div>
                                </Col>

                            </Row>
                            <Row align='middle' style={{ color: 'white', fontSize: '25px', fontFamily: 'lisu', marginTop: '-4px' }}>感兴趣</Row>
                            <Button style={{ border:'none',marginLeft:'2%',marginTop:'3.5%', width: '18%', height: '40px', backgroundColor: '#19a8ad', color: 'white', fontFamily: 'lisu', fontSize: '25px', borderRadius: '6px', textAlign: 'center', lineHeight: '35px' }} >投递简历</Button>
                        </Row>
                        <Row style={{fontSize:'22px',paddingLeft:'1%'}}>
                            <Col span={2}></Col>职位诱惑
                        </Row>
                        <Row style={{fontSize:'15px',paddingLeft:'1%',height:'15vh'}}><Col span={2}></Col>123</Row>
                        <Row style={{fontSize:'22px',paddingLeft:'1%'}}>
                            <Col span={2}></Col>职位诱惑
                        </Row>
                        <Row style={{fontSize:'15px',paddingLeft:'1%',height:'15vh'}}><Col span={2}></Col>123</Row>
                        <Row style={{fontSize:'22px',paddingLeft:'1%'}}>
                            <Col span={2}></Col>工作地址
                        </Row>
                        <Row style={{fontSize:'15px',paddingLeft:'1%',height:'15vh'}}><Col span={2}></Col>123</Row>
                    </Col>
                    <Col span={1}>
                        <RightNav />
                    </Col>
                </Row>
            </div>
        )
    }
}
