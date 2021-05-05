import React, { Component } from "react";
import TopNav from "../../components/topNav";
import RightNav from "../../components/RightNav/RightNav.js";
import { Row, Col, Divider, Image, Button, Icon, Pagination } from "antd";
import Search from "../../components/Search/Search";
import Recruiting from "../../components/Recruiting";
import { Link } from "react-router-dom";
import qs from "querystring";
import CompanyNav from "../../components/CompanyNav";

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      company_id: this.props.location.search.split("=")[1],
      current: 1,
      recruiting: ["1", "2"],
      num: 0,
      financing: [],
      scale: [],
      industry_area: [],
      citys: [],
    };
  }
  onChange = (page) => {
    console.log(page);
    this.setState({
      current: page,
    });
    fetch("http://42.192.102.128:3000/company/recruitmentPost", {
      method: "POST",
      headers: {
        Accept: "application/json,text/plain,*/*",
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: qs.stringify({
        company_id: this.state.company_id,
        page: page,
        num: 3,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          recruiting: res.list,
        });
      });
  };
  componentDidMount() {
    fetch("http://42.192.102.128:3000/company/recruitmentNum", {
      method: "POST",
      headers: {
        Accept: "application/json,text/plain,*/*",
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: qs.stringify({
        company_id: this.state.company_id,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          num: res.list[0].num,
        });
      });
    fetch("http://42.192.102.128:3000/company/recruitmentPost", {
      method: "POST",
      headers: {
        Accept: "application/json,text/plain,*/*",
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: qs.stringify({
        company_id: this.state.company_id,
        page: "1",
        num: 3,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          recruiting: res.list,
        });
        console.log(res);
      });

    //数据库返回三个数组，所以为了使每个数组都可以显示，应该设置三个变量
    fetch("http://42.192.102.128:3000/common/searchMenu")
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          industry_area: res.list.industry_area,
          scale: res.list.scale,
          financing: res.list.financing,
        });
        console.log(res.list.industry_area, res.list.scale, res.list.financing);
      });
    //公司地点的接口
    fetch("http://42.192.102.128:3000/common/cityAll")
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          citys: res.list,
        });
        console.log(res.list);
      });
  }

  render() {
    const { recruiting } = this.state;
    return (
      <div>
        <CompanyNav />
        <Row>
          <Col span={23}>
            <Row>
              <Col span={2}></Col>
              <Col span={21}>
                <Row align="middle" justify="start">
                  {this.state.recruiting.map((item, index) => (
                    // <Redirect to={{pathname:'/position',state:item}}>
                    <Link
                      to={{
                        pathname: "/position/positions",
                        search: "?code=" + item.post_id,
                      }}
                    >
                      <Col
                        span={24}
                        style={{ marginTop: "2%", border: "1px solid #BBBBBB" }}
                      >
                        <Row>
                          <Col
                            span={8}
                            style={{ marginTop: "2%", marginLeft: "3%" }}
                          >
                            <Row
                              style={{
                                color: "#3c9f8a",
                                fontSize: "17px",
                                fontWeight: "bold",
                              }}
                            >
                              <Col>
                                {item.post_name}&nbsp;&nbsp;&nbsp;&nbsp;
                              </Col>
                              <Col>[{item.city}]</Col>
                            </Row>
                            <Row style={{ marginTop: "1%" }}>
                              <p style={{ color: "#f4953f", fontSize: "17px" }}>
                                {item.wages_min}k-{item.wages_max}k
                              </p>

                              <Divider
                                type="vertical"
                                style={{
                                  marginTop: "2%",
                                  backgroundColor: "#BBBBBB",
                                  height: "17px",
                                }}
                              />
                              <span
                                style={{
                                  color: "#BBBBBB",
                                  fontSize: "14px",
                                  marginTop: "1%",
                                }}
                              >
                                {item.education}
                              </span>
                            </Row>
                          </Col>
                          <Col span={8}></Col>
                          <Col
                            span={4}
                            style={{ marginTop: "2%", marginLeft: "2%" }}
                          >
                            <Row
                              style={{
                                color: "#3c9f8a",
                                fontSize: "17px",
                                fontWeight: "bold",
                              }}
                            >
                              {item.company_name}
                            </Row>
                            <Row
                              style={{
                                marginTop: "2%",
                                fontSize: "14px",
                                color: "black",
                              }}
                            >
                              {item.industry_area}&nbsp;/&nbsp;{item.financing}
                              &nbsp;/&nbsp;{item.scale_min}-{item.scale_max}人
                            </Row>
                          </Col>
                          <Col span={2}>
                            <Row>
                              <div style={{width:"600px",height:'40px'}}>
                              <img
                                width="100%"
                                height="100%"
                                style={{ marginTop: "15%" }}
                                src={item.logo}
                              />
                              </div>
                            </Row>
                          </Col>
                        </Row>
                        <Row
                          align="middle"
                          justify="center"
                          style={{
                            backgroundColor: "#c4c0c0",
                            padding: "1%",
                            color: "black",
                          }}
                        >
                          {item.good}
                        </Row>
                      </Col>
                    </Link>
                  ))}
                </Row>

                <Row>
                  <Pagination
                    current={this.state.current}
                    total={this.state.num}
                    onChange={this.onChange}
                    defaultPageSize={3}
                    style={{
                      marginTop: "4%",
                      align: "center",
                      marginLeft: "37%",
                    }}
                  />
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}
