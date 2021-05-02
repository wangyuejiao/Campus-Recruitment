import React, { Component } from "react";
import { Row, Col, Divider, Image, Button, Popover, Pagination } from "antd";
import { Link } from "react-router-dom";
import qs from "querystring";
import CompanyNav from "../../components/CompanyNav";

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resume: [],
      num: 9,
      page: 1,
      company_id: this.props.location.search.split("=")[1],
      total:9,
      status:0
    };
  }
  onChange = (page) => {
    this.setState({
      page: page,
    });

    fetch("http://42.192.102.128:3000/users/resumeBox", {
      method: "POST",
      headers: {
        Accept: "application/json,text/plain,*/*",
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: qs.stringify({
        company_id: this.state.company_id,
        status: this.state.status,
        page: page,
        num: this.state.num,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          resume: res.list,
        });
      });
  };

  componentDidMount() {
    fetch("http://42.192.102.128:3000/users/resumeBox", {
      method: "POST",
      headers: {
        Accept: "application/json,text/plain,*/*",
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: qs.stringify({
        company_id: this.state.company_id,
        status: this.state.status,
        page: this.state.page,
        num: this.state.num,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          resume: res.list,
        });
        console.log(res);
      });

      fetch("http://42.192.102.128:3000/users/resumeBoxNum", {
      method: "POST",
      headers: {
        Accept: "application/json,text/plain,*/*",
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: qs.stringify({
        company_id: this.state.company_id,
        status:this.state.status
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        this.setState({
            total:res.list[0].count
        })
      });
  }

  render() {
    const { resume } = this.state;
    return (
      <div>
        <CompanyNav />
        <Row style={{ paddingTop: "2%" }} justify="center" align="middle">
          <Col span={1}></Col>
          <Col span={20}>
            <Row justify="start" align="middle">
              {/* 判断公司是否发布了招聘信息  */}
              {resume.length == 0 ? (
                <div
                  style={{ width: "400px", height: "150px", marginTop: "80px" }}
                >
                  <i
                    className="iconfont"
                    style={{ fontSize: "80px", color: "#BBBBBB" }}
                  >
                    &#xe891;
                  </i>
                  <p style={{ fontSize: "15px", color: "#BBBBBB" }}>
                    {" "}
                    该公司暂未收到简历投递
                  </p>
                </div>
              ) : ( 
                resume.map((item, index) => (
                  <Col span={7} style={{marginLeft:'3%'}}>
                    <Link
                      to={{
                        pathname: "/companyhome/offerCom/content",
                        search: `?post=${item.post_id}&&company=${this.state.company_id}&&status=${this.state.status}`,
                      }}
                      display="none"
                    >
                      <Col
                        span={24}
                        style={{
                          marginBottom: "7%",
                          backgroundColor: "#79bcdc",
                          padding: "5%",
                          border: "1px solid #BBBBBB",
                          borderRadius: "10px",
                        }}
                      >
                        <Row>
                          <Col span={18}>
                            <Row
                              justify="space-between"
                              align="middle"
                              style={{
                                fontWeight: "bold",
                                fontSize: "16px",
                                color: "black",
                              }}
                            >
                              {item.post_name}
                            </Row>
                            <Row
                              justify="start"
                              align="middle"
                              style={{
                                paddingTop: "15px",
                                fontSize: "13px",
                                color: "grey",
                              }}
                            >
                              <Col>{item.city}</Col>
                              <Divider
                                type="vertical"
                                style={{ backgroundColor: "#BBBBBB" }}
                              />
                              <Col>{item.financing}</Col>
                              <Divider
                                type="vertical"
                                style={{ backgroundColor: "#BBBBBB" }}
                              />
                              <Col>{item.industry_area}</Col>
                              <Divider
                                type="vertical"
                                style={{ backgroundColor: "#BBBBBB" }}
                              />
                              <Col>{item.education}</Col>
                            </Row>
                            <Row
                              justify="space-between"
                              align="middle"
                              style={{
                                fontSize: "16px",
                                color: "#e54d42",
                                paddingTop: "5px",
                              }}
                            >
                              {item.wages_min}k-{item.wages_max}k
                            </Row>
                          </Col>
                          <Col span={4} style={{ marginLeft: "10px" }}>
                            <i
                              className="iconfont"
                              style={{
                                color: "#19a8ad",
                                fontSize: "45px",
                                marginRight: "45px",
                              }}
                            >
                              &#xea0b;
                            </i>
                          </Col>
                          <Col span={1}>
                            <Row
                              justify="center"
                              align="middle"
                              style={{
                                width: "22px",
                                height: "18px",
                                backgroundColor: "#e54d42",
                                borderRadius: "10px",
                                color: "white",
                                border: "1px solid white",
                              }}
                            >
                              {item.candidateNum}
                            </Row>
                          </Col>
                        </Row>
                      </Col>
                    </Link>
                  </Col>
                ))
              )}
            </Row>
            {resume.length == 0 ? (
              <div></div>
            ) : (
              <Row>
                <Pagination
                  current={this.state.page}
                  total={this.state.total}
                  defaultPageSize={this.state.num}
                  onChange={this.onChange}
                  style={{
                    marginTop: "4%",
                    align: "center",
                    marginLeft: "37%",
                  }}
                />
              </Row>
            )}
          </Col>
          <Col span={2}></Col>
        </Row>
      </div>
    );
  }
}
