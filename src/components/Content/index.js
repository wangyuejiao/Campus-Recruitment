import React, { Component } from "react";
import { Col, Row, Divider, Pagination, Avatar, Button } from "antd";

import {
  HashRouter as Router,
  Route,
  Switch,
  Link,
  withRouter,
} from "react-router-dom";
import qs from "querystring";
import ContentCom from "../ContentCom";
import MenuItem from "antd/lib/menu/MenuItem";

const sex = 0;
export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      company: {}, //company对象
      environment: [],
      lable: [],
      current: 1,
      candidateList: [],
      company_id: this.props.location.search.split("&&")[1].split("=")[1],
      post_id: this.props.location.search.split("&&")[0].split("=")[1],
      status:this.props.location.search.split("&&")[2].split("=")[1]
    };
  }

  componentDidMount() {
    const { company_id, post_id } = this.state;
    //公司页面的logo
    fetch("http://42.192.102.128:3000/company/companyInfo", {
      method: "POST",
      headers: {
        Accept: "application/json,text/plain,*/*",
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: qs.stringify({
        // company_id: this.props.location.search.split('=')[1],
        company_id: company_id,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          company: res.list.company[0],
          environment: res.list.environment,
          lable: res.list.lable,
        });
      });

    //投递者信息接口
    fetch("http://42.192.102.128:3000/users/candidateList", {
      method: "POST",
      headers: {
        Accept: "application/json,text/plain,*/*",
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: qs.stringify({
        post_id: post_id,
        status: this.state.status,
        page: "1",
        num: "2",
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          candidateList: res.list,
        });
      });
  }
  render() {
    var num = { num: this.state.num };
    return (
      <div>
        <Row>
          <Col span={24}>
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
                    paddingTop: "10px",
                  }}
                >
                  {this.state.company.company_name}
                </Row>
                <Row justify="start" align="middle">
                  {this.state.company.logo == "" ? (
                    <i
                      className="iconfont"
                      style={{
                        fontSize: "50px",
                        marginTop: "7%",
                        marginLeft: "5%",
                        color: "#BBBBBB",
                      }}
                    >
                      &#xe613;
                    </i>
                  ) : (
                    <img
                      width="70%"
                      style={{
                        marginTop: "20px",
                        borderRadius: "5px",
                        marginLeft: "8px",
                        marginBottom: "20%",
                      }}
                      height="90vh"
                      src={this.state.company.logo}
                    />
                  )}
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
                  {this.state.company.scale_min}-{this.state.company.scale_max}
                  人
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
                  style={{
                    marginTop: "3%",
                    color: "#ea7873",
                    fontSize: "17px",
                    marginLeft: "40px",
                  }}
                >
                  20k-40k
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
        {/* 个人简介列表 */}
        {this.state.candidateList.map((item, index) => (
          <Row>
            <Col span={23}>
              <Row>
                <Col span={2}></Col>
                <Col span={21}>
                  <Row align="middle" justify="start">
                    <Col
                      span={21}
                      style={{
                        marginTop: "2%",
                        border: "1px solid #BBBBBB",
                        backgroundColor: "#f5f7f7",
                      }}
                    >
                      <Row>
                        <Col span={3} style={{ marginTop: "2%" }}>
                          <Avatar
                            style={{ border: "1px solid white" }}
                            size={{ xl: 80 }}
                            src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.bqatj.com%2Fimg%2F726697295441df40.jpg&refer=http%3A%2F%2Fimg.bqatj.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1621520175&t=88416367a31f56d0fd314d7c1526e804"
                          />
                        </Col>
                        <Col
                          span={15}
                          style={{ marginTop: "2%", marginLeft: "1%" }}
                        >
                          <Row
                            style={{
                              fontWeight: "bold",
                              fontSize: "18px",
                              marginBottom: "10px",
                              fontFamily: "fantasy",
                            }}
                          >
                            {item.username}
                            {sex == 0 ? (
                              <i
                                className="iconfont"
                                style={{ marginLeft: "5px", marginTop: "3px" }}
                              >
                                &#xe665;
                              </i>
                            ) : (
                              1
                            )}
                          </Row>
                          <Row style={{ marginBottom: "10px" }}>
                            {item.college}
                            <Divider
                              type="vertical"
                              style={{
                                marginTop: "6px",
                                backgroundColor: "#BBBBBB",
                              }}
                            />
                            &nbsp;{item.education}.&nbsp;统招
                            <Divider
                              type="vertical"
                              style={{
                                marginTop: "6px",
                                backgroundColor: "#BBBBBB",
                              }}
                            />
                            应届毕业生
                            <Divider
                              type="vertical"
                              style={{
                                marginTop: "6px",
                                backgroundColor: "#BBBBBB",
                              }}
                            />
                            {MenuItem.age}岁
                          </Row>
                          <Row style={{ marginBottom: "15px" }}>
                            <i
                              className="iconfont"
                              style={{ fontSize: "20px", marginTop: "-3px" }}
                            >
                              &#xe634;
                            </i>
                            {item.phone}
                            <i
                              className="iconfont"
                              style={{
                                marginLeft: "30px",
                                fontSize: "30px",
                                marginTop: "-11px",
                              }}
                            >
                              &#xe649;
                            </i>
                            {item.email}
                          </Row>
                        </Col>
                        <Col>
                          <Link
                            to={{
                              pathname: "/companyhome/pass/ContentCom",
                              search: `?post=${this.state.post_id}&&person=${item.person_id}`,
                            }}
                          >
                            <Button
                              style={{
                                paddingTop: "0px",
                                height: "40px",
                                width: "130px",
                                backgroundColor: "#2582d6",
                                color: "white",
                                fontFamily: "lisu",
                                fontSize: "25px",
                                borderRadius: "6px",
                                textAlign: "center",
                                lineHeight: "40px",
                                marginTop: "35%",
                              }}
                            >
                              查看详情
                            </Button>
                          </Link>
                        </Col>
                      </Row>
                    </Col>
                    {/* </Link> */}

                    {/* )) */}

                    {/* } */}
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        ))}
      </div>
    );
  }
}
