import React, { Component } from "react";
import "./index.css";
import "antd/dist/antd.css";
import { Row, Col, Form, Input, Button, message, Layout } from "antd";
import { HashRouter as Router, Route, Link, Redirect } from "react-router-dom";
export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      identity: 0,
      username: "",
      password: "",
      againpassword: "",
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
        if (values.password !== values.againpassword) {
          message.info("用户名与密码不一致");
        }
        else{
            this.props.history.push('/tianxie')
        }
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
                <Col
                  span={14}
                  order={2}
                  style={{ height: "50vh", backgroundColor: "white" }}
                >
                  <Row
                    style={{ height: "5vh", marginTop: "2vh" }}
                    justify="end"
                  >
                    <Col>
                      <Link to="login">
                        返回登陆{" "}
                        <i className="iconfont" style={{ fontSize: "15px" }}>
                          &#xe860;
                        </i>
                      </Link>
                    </Col>
                  </Row>
                  <Row style={{ marginTop: "2vh" }}>
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
                  <Row style={{ marginTop: "15px" }}>
                    <Col span={2}></Col>
                    <Col>
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
                          label="账&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;号"
                          name="username"
                          rules={[
                            {
                              required: true,
                              message: "请输入您的用户名！",
                            },
                          ]}
                        >
                          <Input style={{ width: "90%" }} />
                        </Form.Item>

                        <Form.Item
                          label="密&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;码"
                          name="password"
                          rules={[
                            {
                              required: true,
                              message: "请输入您的密码！",
                            },
                          ]}
                        >
                          <Input.Password style={{ width: "90%" }} />
                        </Form.Item>
                        <Form.Item
                          label="确认密码"
                          name="againpassword"
                          rules={[
                            {
                              required: true,
                              message: "请输入您的密码！",
                            },
                          ]}
                        >
                          <Input.Password style={{ width: "90%" }} />
                        </Form.Item>

                        <Button
                          htmlType="submit"
                          block="true"
                          style={{
                            backgroundColor: "#3fb0e6",
                            color: "white",
                            fontWeight: "550",
                            borderRadius: "5px",
                            width: "80%",
                          }}
                        >
                          注册
                        </Button>
                      </Form>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}
