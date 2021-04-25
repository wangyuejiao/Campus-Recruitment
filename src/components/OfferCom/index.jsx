import React, { Component } from 'react'
import { Row, Col, Divider, Image, Button, Popover, Pagination  } from "antd";
import { Link } from "react-router-dom"
import qs from 'querystring'
import CompanyNav from "../../components/CompanyNav";

export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            position: [],
            current: 1,
        }
    }
    onChange = page => {
        console.log(page);
        this.setState({
            current: page,
        });
        fetch("http://42.192.102.128:3000/company/recruitmentPost", {
            method: 'POST',
            headers: {
                'Accept': "application/json,text/plain,*/*",
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: qs.stringify({
                company_id: '1',
                page: page
            })

        }).then(res => res.json())
            .then(res => {
                this.setState({
                    recruiting: res.list
                })
                console.log(res)
            })
    };

    componentDidMount() {
        fetch("http://42.192.102.128:3000/common/postHot")
            .then(res => res.json())
            .then(res => {
                this.setState({
                    position: res.list
                })
                console.log('hot', res.list)
            })
    }

    render() {
        const { position } = this.state
        return (
            <div>
                <CompanyNav />
                <Row style={{ paddingTop: '2%' }} justify='center' align='middle'>
                    <Col span={1} ></Col>
                    <Col span={20}>
                        <Row justify='space-around' align='middle'>
                            {position.map((item, index) => (
                                <Col span={7}>
                                    {/* , search: '?code=' + item.post_id, */}
                                    
                                    <Link to={{ pathname: '/companyhome/offerCom/content' }} display='none'>
                                        <Col span={24} style={{ marginBottom: '7%', backgroundColor: '#79bcdc', padding: '5%', border: '1px solid #BBBBBB', borderRadius: '10px' }}>
                                            <Row>
                                                <Col span={18} style={{}}>
                                                    <Row justify='space-between' align='middle' style={{ fontWeight: 'bold', fontSize: '16px', color: 'black' }} >{item.post_name}</Row>
                                                    <Row justify='start' align='middle' style={{ paddingTop: '15px', fontSize: '13px', color: 'grey' }}>
                                                        <Col>{item.city}</Col>
                                                        <Divider type="vertical" style={{ backgroundColor: '#BBBBBB' }} />
                                                        <Col>{item.experience_min}年-{item.experience_max}年</Col>
                                                        <Divider type="vertical" style={{ backgroundColor: '#BBBBBB' }} />
                                                        <Col>{item.education}</Col>
                                                    </Row>
                                                    <Row justify='space-between' align='middle' style={{ fontSize: '16px', color: '#e54d42', paddingTop: '5px' }}  >{item.wages_min}k-{item.wages_max}k</Row>
                                                </Col>
                                                <Col span={4} style={{}}>
                                                    <i className="iconfont" style={{ color: '#19a8ad', fontSize: '45px', marginRight: '45px' }}>&#xea0b;</i>
                                                </Col>
                                                <Col span={2} style={{ }}>
                                                    <Row justify='center' align="middle" style={{width:'22px',height:'18px',backgroundColor: '#e54d42', borderRadius: '10px', color: 'white',border:'1px solid white'}}>2</Row>
                                                </Col>

                                            </Row>
                                        </Col>
                                    </Link>
                                </Col>
                            ))}
                        </Row>
                        <Row>
                             <Pagination current={this.state.current} total={this.state.num} onChange={this.onChange} defaultPageSize={4}
                                                    style={{ marginTop: '4%', align: 'center', marginLeft: '37%' }} />
                       </Row>
                    </Col>
                    <Col span={2} ></Col>
                </Row>
            </div>
        )
    }
}
