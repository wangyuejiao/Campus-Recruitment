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

const sex = 0;
export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 1,
      message: {},
      advantage: [],
      experience: [],
      status: 0,
      person_id:this.props.location.search.split("&&")[1].split("=")[1],
      post_id:this.props.location.search.split("&&")[0].split("=")[1]
    };
  }
  filter = (ispass) => {
    fetch("http://42.192.102.128:3000/users/filterCandidate", {
      method: "POST",
      headers: {
        Accept: "application/json,text/plain,*/*",
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: qs.stringify({
        person_id: this.state.person_id,
        post_id: this.state.post_id,
        status: ispass,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res.list);
      });
  };

  componentDidMount() {
    //简历详情接口
    fetch("http://42.192.102.128:3000/users/candidateInfo", {
      method: "POST",
      headers: {
        Accept: "application/json,text/plain,*/*",
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: qs.stringify({
        person_id: this.state.person_id,
        post_id: this.state.post_id,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        this.setState({
          message: res.list.message,
          advantage: res.list.advantage,
          experience: res.list.experience[0],
        });
        // console.log(res.list)
      });

    //点击通过不通过调用接
  }
  render() {
    return (
      <div>
        {/* 个人简介列表 */}
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
                      <Col span={3} style={{ marginTop: "4%" }}>
                        <Avatar
                          style={{ border: "1px solid white" }}
                          size={{ xl: 80 }}
                          src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.bqatj.com%2Fimg%2F726697295441df40.jpg&refer=http%3A%2F%2Fimg.bqatj.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1621520175&t=88416367a31f56d0fd314d7c1526e804"
                        />
                      </Col>
                      <Col
                        span={13}
                        style={{ marginTop: "4%", marginLeft: "1%" }}
                      >
                        <Row
                          style={{
                            fontWeight: "bold",
                            fontSize: "18px",
                            marginBottom: "10px",
                            fontFamily: "fantasy",
                          }}
                        >
                          {this.state.message.username}
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
                          {this.state.message.college}
                          <Divider
                            type="vertical"
                            style={{
                              marginTop: "6px",
                              backgroundColor: "#BBBBBB",
                            }}
                          />
                          &nbsp;{this.state.message.education}.&nbsp;统招
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
                          {this.state.message.age}岁
                        </Row>
                        <Row style={{ marginBottom: "30px" }}>
                          <i
                            className="iconfont"
                            style={{ fontSize: "20px", marginTop: "-3px" }}
                          >
                            &#xe634;
                          </i>
                          {this.state.message.phone}
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
                          {this.state.message.email}
                        </Row>
                      </Col>
                      {this.state.message.pass ? (
                        <>
                          <Col>
                            {/* <Link to={{pathname:'/companyhome/unpass'}}> */}
                            <Button
                              onClick={() => this.filter(2)}
                              style={{
                                paddingTop: "0px",
                                height: "40px",
                                width: "100px",
                                backgroundColor: "#e6d463",
                                color: "white",
                                fontSize: "17px",
                                borderRadius: "6px",
                                textAlign: "center",
                                lineHeight: "40px",
                                marginTop: "60%",
                              }}
                            >
                              OUT
                            </Button>
                            {/* </Link> */}
                          </Col>
                          <Col style={{ marginLeft: "30px" }}>
                            {/* <Link to={{pathname:'/companyhome/pass'}}> */}
                            <Button
                              onClick={() => this.filter(1)}
                              style={{
                                paddingTop: "0px",
                                height: "40px",
                                width: "100px",
                                backgroundColor: "#19a8ad",
                                color: "white",
                                fontSize: "17px",
                                borderRadius: "6px",
                                textAlign: "center",
                                lineHeight: "40px",
                                marginTop: "60%",
                              }}
                            >
                              PASS
                            </Button>
                            {/* </Link> */}
                          </Col>
                        </>
                      ) : null}
                    </Row>
                  </Col>
                </Row>
                <Row style={{ marginTop: "3%" }}>
                  <Divider
                    type="vertical"
                    style={{
                      backgroundColor: "#0ae6de",
                      width: "5px",
                      height: "4vh",
                    }}
                  />
                  <Col style={{ fontSize: "18px" }}>个人优势</Col>
                </Row>
                <Row style={{ marginTop: "1%" }}>
                  <Col>
                    <ul>
                      {this.state.advantage.map((item, index) => (
                        <li align="left" style={{ marginTop: "10px" }}>
                          {item.advantage}
                        </li>
                      ))}
                    </ul>
                  </Col>
                </Row>
                <Row style={{ marginTop: "3%" }}>
                  <Divider
                    type="vertical"
                    style={{
                      backgroundColor: "#0ae6de",
                      width: "5px",
                      height: "4vh",
                    }}
                  />
                  <Col style={{ fontSize: "18px" }}>实习经历</Col>
                </Row>
                <Row style={{ marginTop: "1%" }}>
                  <Col style={{ marginLeft: "20px" }} span={15} align="left">
                    {this.state.experience.experience}
                  </Col>
                </Row>
                <Row style={{ marginTop: "3%" }}>
                  <Divider
                    type="vertical"
                    style={{
                      backgroundColor: "#0ae6de",
                      width: "5px",
                      height: "4vh",
                    }}
                  />
                  <Col style={{ fontSize: "18px" }}>期望职位</Col>
                </Row>
                <Row style={{ marginTop: "1%" }}>
                  <Col style={{ marginLeft: "20px" }}>
                    {this.state.message.position}&nbsp;
                    <Divider
                      type="vertical"
                      style={{ backgroundColor: "#BBBBBB" }}
                    />
                    &nbsp;{this.state.message.city}&nbsp;
                    <Divider
                      type="vertical"
                      style={{ backgroundColor: "#BBBBBB" }}
                    />
                    &nbsp;{this.state.message.salary}
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}
