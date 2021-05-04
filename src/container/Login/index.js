import React, { Component } from "react";
import "./index.css";
import "antd/dist/antd.css";
import { Row, Col, Form, Input, Button, message, Layout } from "antd";
import qs from "querystring";
import { Link } from "react-router-dom";

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      identity: 0,
      username: "",
      password: "",
    };
  }
  changeIdentity = (identity) => {
    // this.props.history.push({ pathname: "/PutForwardSubmit"});
    this.setState({
      identity: identity,
    });
  };
  info = (message) => {
    message.info("请选择身份");
  };
  render() {
    const { Header, Footer, Sider, Content } = Layout;
    const layout = {
      labelCol: {
        span: 8,
      },
      wrapperCol: {
        span: 16,
      },
    };
    const tailLayout = {
      wrapperCol: {
        offset: 8,
        span: 16,
      },
    };
    const onFinish = (values) => {
      if (this.state.identity == 0) {
        message.info("请选择身份");
      } else {
        fetch("http://42.192.102.128:3000/users/login", {
          method: "POST",
          headers: {
            Accept: "application/json,text/plain,*/*",
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: qs.stringify({
            username: values.username,
            password: values.password,
            type: this.state.identity,
          }),
        })
          .then((res) => res.json())
          .then((res) => {
            if (res.list.length != 0) {
              if (res.list[0].type == 1) {
                this.props.history.push("./");
                localStorage.setItem("person_id", res.list[0].comper_id);
              }
              if (res.list[0].type == 2) {
                this.props.history.push("./companyhome");
                localStorage.setItem("company_id", res.list[0].comper_id);
              }
            } else {
              message.error("用户名或密码不正确");
              this.setState({
                identity: 0,
                username: "",
                password: "",
              });
            }
          });
      }
    };
    const onFinishFailed = (errorInfo) => {
      console.log("Failed:", errorInfo);
    };
    const box = {
      width: "100%",
      height: "100vh",
      backgroundImage: "url(./images/login_background.jpg)",
      backgroundRepeat: "no-repeat",
      backgroundSize: "100% 100%",
    };

    return (
      <div>
        <Row style={box} justify="center" align="middle">
          <Col span={5}></Col>
          <Col span={9}>
            <div className="content">
              <Row style={{ borderRadius: "25px" }}>
                <Col
                  span={9}
                  order={1}
                  style={{
                    height: "50vh",
                    backgroundColor: "#F9FFFD",
                    borderRight: "1px solid #ccc",
                    borderRadius: "25px",
                  }}
                >
                  <Row
                    justify="start"
                    style={{
                      height: "28%",
                      borderBlock: "1px solid #BBBBBB",
                      marginTop: "5vh",
                      borderBottom: "1px solid #ccc",
                    }}
                  >
                    <Col>
                      <Row justify="space-around" align="middle">
                        <i
                          className="iconfont"
                          style={{
                            color: "#46a460",
                            fontSize: "45px",
                            marginLeft: "3vh",
                          }}
                        >
                          &#xe63a;
                        </i>
                      </Row>
                    </Col>
                    <Col>
                      <Row
                        style={{
                          fontSize: "26px",
                          marginTop: "2vh",
                          marginLeft: "2vh",
                          color: "#81838f",
                        }}
                        justify="space-around"
                        align="middle"
                      >
                        校园招聘
                      </Row>
                    </Col>
                  </Row>
                  <Row
                    justify="space-around"
                    align="middle"
                    style={{ color: "#81838f", marginTop: "3vh" }}
                  >
                    <Col span={5}>
                      <i
                        className="iconfont"
                        style={{ fontSize: "35px", marginLeft: "4vh" }}
                      >
                        &#xe6ab;
                      </i>
                    </Col>
                    <Col span={4}></Col>
                    <Col span={14}>
                      <Row
                        style={{ fontSize: "23px" }}
                        justify="start"
                        align="middle"
                      >
                        迅速
                      </Row>
                      <Row style={{ fontSize: "12px" }} justify="start">
                        能够快速的找到工作
                      </Row>
                    </Col>
                  </Row>
                  <Row
                    justify="space-around"
                    align="middle"
                    style={{ color: "#81838f", marginTop: "3vh" }}
                  >
                    <Col span={5}>
                      <i
                        className="iconfont"
                        style={{ fontSize: "45px", marginLeft: "4vh" }}
                      >
                        &#xe62b;
                      </i>
                    </Col>
                    <Col span={4}></Col>
                    <Col span={14}>
                      <Row
                        style={{ fontSize: "21px" }}
                        justify="start"
                        align="middle"
                      >
                        放心选
                      </Row>
                      <Row style={{ fontSize: "12px" }} justify="start">
                        各大职业任你选
                      </Row>
                    </Col>
                  </Row>
                </Col>
                <Col span={14} order={2} style={{ height: "50vh" }}>
                  <Layout style={{ height: "100%" }}>
                    <Header
                      style={{ backgroundColor: "white", height: "10%" }}
                    ></Header>
                    <Row style={{ backgroundColor: "white" }}>
                      <Col span={4}></Col>
                      <Col span={7}>
                        <Button
                          onClick={() => this.changeIdentity(1)}
                          htmlType="submit"
                          block="true"
                          style={{ borderRadius: "5px" }}
                        >
                          我要招聘
                        </Button>
                      </Col>
                      <Col span={3}></Col>
                      <Col span={7}>
                        <Button
                          onClick={() => this.changeIdentity(2)}
                          htmlType="submit"
                          block="true"
                          style={{ borderRadius: "5px" }}
                        >
                          我要找工作
                        </Button>
                      </Col>
                    </Row>

                    <Content
                      style={{ padding: "8%", backgroundColor: "white" }}
                    >
                      <Row>
                        <Form
                          {...layout}
                          name="basic"
                          initialValues={{
                            remember: true,
                          }}
                          onFinish={onFinish}
                          onFinishFailed={onFinishFailed}
                        >
                          <Form.Item
                            label="用户名"
                            name="username"
                            rules={[
                              {
                                required: true,
                                message: "请输入您的用户名！",
                              },
                            ]}
                          >
                            <Input />
                          </Form.Item>

                          <Form.Item
                            label="密&nbsp;&nbsp;&nbsp;&nbsp;码"
                            name="password"
                            rules={[
                              {
                                required: true,
                                message: "请输入您的密码！",
                              },
                            ]}
                          >
                            <Input.Password />
                          </Form.Item>
                          <Form.Item {...tailLayout}>
                            <Button
                              htmlType="submit"
                              block="true"
                              style={{
                                backgroundColor: "#3fb0e6",
                                color: "white",
                                fontWeight: "550",
                                borderRadius: "5px",
                              }}
                            >
                              登陆
                            </Button>
                          </Form.Item>
                        </Form>
                      </Row>
                      <Row
                        justify="space-around"
                        style={{ paddingLeft: "30%" }}
                      >
                        <Col span={4}>
                          <Row justify="center" align="middle">
                            <i
                              className="iconfont"
                              style={{ color: "#5D9CCB", fontSize: "22px" }}
                            >
                              &#xe614;
                            </i>
                          </Row>
                        </Col>
                        <Col span={2}></Col>
                        <Col span={4}>
                          <Row justify="center" align="middle">
                            <i
                              className="iconfont"
                              style={{ color: "#73D8A2", fontSize: "25px" }}
                            >
                              &#xe82c;
                            </i>
                          </Row>
                        </Col>
                        <Col span={8}>
                          <Row justify="end" align="middle">
                            <i
                              className="iconfont"
                              style={{ color: "#f56467", fontSize: "25px" }}
                            >
                              &#xe648;
                            </i>
                          </Row>
                          {/* <Row justify="end" align="middle">
                            <span style={{ fontSize: "8px" }}>手机</span>
                          </Row> */}
                        </Col>
                      </Row>
                    </Content>

                    <Row
                      style={{ backgroundColor: "white", paddingBottom: "6vh" }}
                    >
                      <Col span={2}></Col>
                      <Col span={7} style={{}}>
                        <Link to="registered">
                          <i className="iconfont" style={{ fontSize: "15px" }}>
                            &#xe647;
                          </i>
                          点击注册
                        </Link>
                      </Col>
                      <Col span={10}></Col>
                      <Col span={5}></Col>
                    </Row>
                  </Layout>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}
