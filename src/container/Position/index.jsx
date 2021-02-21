import React, { Component } from 'react'
import TopNav from '../../components/topNav'
import RightNav from "../../components/RightNav/RightNav.js";
import { Row, Col, Divider, Image, Button, Icon, Pagination } from "antd";
import Search from "../../components/Search/Search";
import Recruiting from '../../components/Recruiting'
import { Link } from "react-router-dom"
import qs from 'querystring'

export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 1,
            recruiting: ['1', '2'],
            num: 0,
            financing: [],
            scale: [],
            industry_area: [],
            citys: []
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
        fetch("http://42.192.102.128:3000/company/recruitmentNum", {
            method: 'POST',
            headers: {
                'Accept': "application/json,text/plain,*/*",
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: qs.stringify({
                company_id: '1',
            })

        }).then(res => res.json())
            .then(res => {
                this.setState({
                    num: res.list[0].num
                })
                console.log(res)
            })
        fetch("http://42.192.102.128:3000/company/recruitmentPost", {
            method: 'POST',
            headers: {
                'Accept': "application/json,text/plain,*/*",
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: qs.stringify({
                company_id: '1',
                page: '1'
            })

        }).then(res => res.json())
            .then(res => {
                this.setState({
                    recruiting: res.list
                })
                console.log(res)
            })


        //数据库返回三个数组，所以为了使每个数组都可以显示，应该设置三个变量
        fetch("http://42.192.102.128:3000/common/searchMenu")
            .then(res => res.json())
            .then(res => {
                this.setState({
                    industry_area: res.list.industry_area,
                    scale: res.list.scale,
                    financing: res.list.financing
                })
                console.log(res.list.industry_area, res.list.scale, res.list.financing)

            })
        //公司地点的接口
        fetch("http://42.192.102.128:3000/common/cityAll")
            .then(res => res.json())
            .then(res => {
                this.setState({
                    citys: res.list
                })
                console.log(res.list)
            })
    }

    render() {
        const { recruiting } = this.state
        return (
            <div>
                <TopNav current='position' />
                <Row>
                    <Col span={23}>
                        <Row justify='center' align='middle'
                            style={{ height: '200px', width: '100%', backgroundColor: '#F3F3F3' }}>
                            <Col span={14}>
                                <Search />
                            </Col>
                        </Row>
                        <Row align='middle' style={{ backgroundColor: '#d0dde3', border: '1px solid #BBBBBB' }} >
                            <Col span={2} style={{ marginLeft: '1%' }}></Col>
                            <Col >
                                <Row style={{ marginTop: '7%' }}>公司地点：
                                {
                                        this.state.citys.map((item, index) => (
                                            index < 15 ? <Col style={{ marginRight: '10px' }}>{item.city}</Col> : <Col></Col>   //设置所能显示的最大数量，用三元组
                                        ))
                                    }
                                </Row>
                                <Row style={{ marginTop: '7%' }}>融资阶段：
                                  {this.state.financing.map((item, index) => (
                                    <Col style={{ marginRight: '10px' }}>{item.financing}</Col>
                                ))}
                                </Row>
                                <Row style={{ marginTop: '7%' }}>公司规模：
                                {this.state.scale.map((item, index) => (
                                    <Col style={{ marginRight: '10px' }}>{item.scale_min}-{item.scale_max}人</Col>
                                ))}
                                </Row>
                                <Row style={{ marginTop: '7%', marginBottom: '7%' }}>行业领域：
                                {this.state.industry_area.map((item, index) => (
                                    <Col style={{ marginRight: '10px' }}>{item.industry_area}</Col>
                                ))}
                                </Row>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={2}></Col>
                            <Col span={21}>

                                <Row align='middle' justify='start'>
                                    {this.state.recruiting.map((item, index) => (
                                        // <Redirect to={{pathname:'/position',state:item}}>
                                        <Link to={{ pathname: '/position/positions', search: '?code=' + item.post_id, }}>
                                            <Col span={21} style={{ marginTop: '2%', border: '1px solid #BBBBBB' }} >
                                                <Row>
                                                    <Col span={8} style={{ marginTop: '2%', marginLeft: '3%' }}>
                                                        <Row style={{ color: '#3c9f8a', fontSize: '17px', fontWeight: 'bold' }}>
                                                            <Col>{item.post_name}&nbsp;&nbsp;&nbsp;&nbsp;</Col>
                                                            <Col>[{item.city}]</Col>
                                                        </Row>
                                                        <Row style={{ marginTop: '1%' }}>
                                                            <p style={{ color: '#f4953f', fontSize: '17px' }}>{item.wages_min}k-{item.wages_max}k</p>

                                                            <Divider type="vertical" style={{ marginTop: '2%', backgroundColor: '#BBBBBB', height: '17px' }} />
                                                            <span style={{ color: '#BBBBBB', fontSize: '14px', marginTop: '1%' }}>{item.education}</span>
                                                        </Row>
                                                    </Col>
                                                    <Col span={8}></Col>
                                                    <Col span={4} style={{ marginTop: '2%', marginLeft: '2%' }}>
                                                        <Row style={{ color: '#3c9f8a', fontSize: '17px', fontWeight: 'bold' }}>{item.company_name}</Row>
                                                        <Row style={{ marginTop: '2%', fontSize: '14px', color: 'black' }}>{item.industry_area}&nbsp;/&nbsp;{item.financing}&nbsp;/&nbsp;{item.scale_min}-{item.scale_max}人</Row>
                                                    </Col>
                                                    <Col span={2}>
                                                        <Row >
                                                            <img
                                                                width='80%'
                                                                height='80%'
                                                                style={{ marginTop: '15%' }}
                                                                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                                                            />
                                                        </Row>

                                                    </Col>
                                                </Row>
                                                <Row align='middle' justify='center' style={{ backgroundColor: '#c4c0c0', padding: '1%', color: 'black' }}>{item.good}</Row>
                                            </Col>
                                        </Link>

                                    ))

                                    }

                                </Row>

                                <Row>
                                    <Pagination current={this.state.current} total={this.state.num} onChange={this.onChange} defaultPageSize={8}
                                        style={{ marginTop: '4%', align: 'center', marginLeft: '37%' }} />
                                </Row>

                            </Col>
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
