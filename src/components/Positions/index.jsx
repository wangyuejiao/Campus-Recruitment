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
    constructor(props) {
        super(props);
        this.state = {
            a: {
                color: 'white',
                fontSize: '25px',
            },
            requirement: [],
            duty: [],
            date:{},
            good:[]
        }
    }
    componentDidMount() {
        console.log(this.props.location.search)
        fetch("http://42.192.102.128:3000/common/postInfo", {
            method: 'POST',
            headers: {
                'Accept': "application/json,text/plain,*/*",
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: qs.stringify({
                post_id: this.props.location.search.split('=')[1],
            })

        }).then(res => res.json())
            .then(res => {
                console.log(res)
                this.setState({
                    requirement: res.list.requirement,
                    duty: res.list.duty,
                    date:res.list.post_info,
                    good:res.list.post_info.good
                }
                )
            })
    }

    handleColor = () => {
        this.setState({
            a: {
                color: 'red',
                fontSize: '25px',
            }
        })
    }

    render() {
        console.log(this.state.date)
        const { date } =this.state
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
                                    <Row  align='middle' justify='start'><Col span={24} style={{ fontSize: '25px', color: 'white', fontFamily: 'lisu',marginLeft:'10%' }}>{date.post_name}</Col></Row>
                                    <Col span={4} style={{ fontSize: '20px', color: '#ea7840', fontFamily: 'lisu',marginLeft:'8%' }} align='center'>{date.wages_min}k-{date.wages_max}k</Col>
                                </Row>
                                <Row align='middle' style={{ color: 'grey', paddingLeft: '2%', marginTop: '5px' }}>
                                    <>
                                        {date.city}
                                        <Divider type="vertical" style={{ backgroundColor: 'grey' }} />
                                        {date.education}
                                        <Col style={{ paddingLeft: '135px' }}>云链招聘</Col>
                                    </>
                                </Row>
                            </Col>
                            <Row align='middle'>
                                <Col span={2}>
                                    <div className="icons-list">
                                        <HeartOutlined style={this.state.a} onClick={this.handleColor} />
                                    </div>
                                </Col>

                            </Row>
                            <Row align='middle' style={{ color: 'white', fontSize: '25px', fontFamily: 'lisu', marginTop: '-4px' }}>感兴趣</Row>
                            <Button style={{ border: 'none', marginLeft: '2%', marginTop: '3.5%', width: '18%', height: '40px', backgroundColor: '#19a8ad', color: 'white', fontFamily: 'lisu', fontSize: '25px', borderRadius: '6px', textAlign: 'center', lineHeight: '35px' }} >投递简历</Button>
                        </Row>
                        <Row style={{ fontSize: '22px', paddingLeft: '1%' ,marginTop:'2%'}}>
                            <Col span={2}></Col>职位诱惑
                        </Row>
                        <Row style={{ fontSize: '15px',paddingLeft:'1%',marginTop:'1%'
                    }}>
                            <Col span={2}>
                            </Col>

                            <Col style={{ padding: '0px', margin: '0px', textAlign: 'left' }}>
                               {this.state.good}
                            </Col>
                        </Row>
    

                        <Row style={{ fontSize: '22px', paddingLeft: '1%',marginTop:'2%' }}>
                            <Col span={2}></Col>职责要求
                        </Row>
                        <Row style={{ paddingLeft: '1%', marginTop: '1%' }}>
                            <Col span={2}></Col>岗位职责：
                        </Row>
                        <Row style={{ fontSize: '15px', paddingLeft: '2%' }}><Col span={2}>
                        </Col>

                            <ol style={{ padding: '0px', margin: '0px', textAlign: 'left' }}>
                                {
                                    this.state.duty.map((item, index) => (
                                        <li >{item}</li>
                                    ))
                                }
                            </ol>
                        </Row>
                        <Row style={{ paddingLeft: '1%'}}>
                            <Col span={2}></Col>任职要求：
                        </Row>
                        <Row style={{ fontSize: '15px', paddingLeft: '2%' }}><Col span={2}>
                        </Col>

                            <ol style={{ padding: '0px', margin: '0px', textAlign: 'left' }}>
                                {
                                    this.state.requirement.map((item, index) => (
                                        <li >{item}</li>
                                    ))
                                }
                            </ol>
                        </Row>
                        <Row style={{ fontSize: '22px', paddingLeft: '1%',marginTop:'2%' }}>
                            <Col span={2}></Col>工作地址
                        </Row>
                        <Row style={{ fontSize: '15px', paddingLeft: '1%', height: '15vh' }}><Col span={2}></Col>123</Row>
                    </Col>
                    <Col span={1}>
                        <RightNav />
                    </Col>
                </Row>
            </div>
        )
    }
}
