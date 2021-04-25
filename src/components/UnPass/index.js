import React, { Component } from 'react'
import { Col, Row } from "antd";
import { Divider,Pagination } from "antd";
import Recruiting from '../Recruiting'
import {
    HashRouter as Router,
    Route,
    Switch,
    Link,
    withRouter,
} from "react-router-dom";
import qs from 'querystring'


export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num: '',
            company: {},   //company对象
            environment: [],
            lable: [],
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
                page: page,
                num: 3
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
        //   this.jump(this.state.page)
        fetch("http://42.192.102.128:3000/company/recruitmentNum", {
            method: 'POST',
            headers: {
                'Accept': "application/json,text/plain,*/*",
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: qs.stringify({
                company_id: '1'
            })

        }).then(res => res.json())
            .then(res => {
                this.setState({
                    num: res.list[0].num
                })
                console.log(res.list[0].num)
            })


        //公司页面的logo
        fetch("http://42.192.102.128:3000/company/companyInfo", {
            method: "POST",
            headers: {
                Accept: "application/json,text/plain,*/*",
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: qs.stringify({
                // company_id: this.props.location.search.split('=')[1],
                company_id: 1
            }),
        })
            .then((res) => res.json())
            .then((res) => {
                this.setState({
                    company: res.list.company[0],
                    environment: res.list.environment,
                    lable: res.list.lable
                });
                console.log(res.list.company);
            })

        //查看详情接口
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
                page: '1',
                num: 3
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
        var num = { num: this.state.num }
        console.log(this.state.company)
        return (
            <div>
                <Row >
                   
                        <Col span={24} >
                            <Row style={{ backgroundColor: "#07ccbe" }}>
                                <Col span={2}></Col>
                                <Col span={3}>
                                    <Row
                                        // justify="start"
                                        style={{
                                            fontSize: "25px",
                                            color: "white",
                                            fontFamily: "lisu",
                                            marginLeft: "10px",
                                            paddingTop: '10px'
                                        }}
                                    >
                                        {this.state.company.company_name}
                                    </Row>
                                    <Row justify="start" align="middle">
                                        {
                                            this.state.company.logo == '' ? (
                                                <i className="iconfont" style={{ fontSize: '50px', marginTop: '7%', marginLeft: '5%', color: '#BBBBBB' }}>&#xe613;</i>
                                            ) : (<img
                                                width="70%"
                                                style={{
                                                    marginTop: "20px",
                                                    borderRadius: "5px",
                                                    marginLeft: "8px",
                                                    marginBottom: '20%'
                                                }}
                                                height='90vh'
                                                src={this.state.company.logo}
                                            />)
                                        }
                                        {/* ()循环，判断是否添加图片，用三元组 */}

                                    </Row>
                                </Col>
                                <Col span={7}>
                                    <Row
                                        style={{ marginTop: "17%", color: "white", fontSize: "16px" }}
                                    >
                                        {this.state.company.city}
                                        <Divider
                                            type="vertical"
                                            style={{ marginTop: "1.5%", backgroundColor: "white" }}
                                        />
                                        {this.state.company.financing}
                                        <Divider
                                            type="vertical"
                                            style={{ marginTop: "1.5%", backgroundColor: "white" }}
                                        />
                                        {this.state.company.scale_min}-{this.state.company.scale_max}人
                  <Divider
                                            type="vertical"
                                            style={{ marginTop: "1.5%", backgroundColor: "white" }}
                                        />
                                        {this.state.company.industry_area}
                                    </Row>
                                    <Row
                                        style={{ marginTop: "2%", color: "white", fontSize: "15px" }}
                                    >
                                        <i className="iconfont" style={{ color: "grey" }}>
                                            &#xe606;
                  </i>
                  北京-北京-朝阳区-望京
                </Row>
                                    <Row
                                        style={{ marginTop: "2%", color: "grey", fontSize: "14px" }}
                                    >
                                        朝来科技园创远路36号院10号楼3层
                </Row>
                                </Col>
                                <Col span={5}></Col>
                                <Col span={4}>
                                    <Row
                                        style={{ marginTop: "32%", color: "white", fontSize: "20px" }}
                                        justify="center"
                                    >
                                        前端开发工程师
                                    </Row>
                                    <Row
                                        style={{ marginTop: "3%", color: "#ea7873", fontSize: "17px", marginLeft: '40px' }}
                                    >
                                        20k-40k
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                   
                    <Row>
                        <Col span={23}>

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
                                        <Pagination current={this.state.current} total={this.state.num} onChange={this.onChange} defaultPageSize={4}
                                            style={{ marginTop: '4%', align: 'center', marginLeft: '37%' }} />
                                    </Row>

                                </Col>
                            </Row>

                        </Col>

                    </Row>
                </Row>
            </div>
        )
    }
}
