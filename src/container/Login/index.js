import React, { Component } from "react";
import "./index.css";
import "antd/dist/antd.css";
import { Row, Col, Form, Input, Button, Checkbox, Layout } from "antd";
import { HashRouter as Router, Route, Link, Redirect } from "react-router-dom";
export default class index extends Component {
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
      console.log("Success:", values);
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
          <Col span={2}></Col>
          <Col span={10}>
            <div className="content">
              <Row>
                <Col
                  span={8}
                  order={1}
                  style={{ height: "50vh",backgroundColor:'#F9FFFD' }}
                >
                  <Row justify='space-around' style={{height:'35%',borderBlock:'1px solid #BBBBBB'}}>
                    <Row justify="space-around" align="middle">
                    <i className="iconfont" style={{color:'#73D8A2',fontSize:'50px'}}>&#xe63a;</i>
                    </Row>
                  <Row style={{fontSize:'26px'}} justify="space-around" align="middle">校园招聘</Row>
                  </Row>
                  <Row justify="space-around" align="middle">
                    <i className="iconfont" style={{color:'#73D8A2',fontSize:'50px'}}>&#xe63a;</i>
                    
                  <Row style={{fontSize:'26px',fontFamily:'LiSu'}} justify="space-around" align="middle">校园招聘</Row>
                  </Row>
                  <Row>123</Row>
                </Col>
                <Col span={16} order={2} style={{ height: "50vh" }}>
                  <Layout style={{ height: "100%" }}>
                    <Header
                      style={{ backgroundColor: "white", height: "10%" }}
                    ></Header>
                    <Content
                      style={{ padding: "15%", backgroundColor: "white" }}
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
                            label="密码"
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
                              type="primary"
                              htmlType="submit"
                              block="true"
                            >
                              登陆
                            </Button>
                          </Form.Item>
                        </Form>
                      </Row>
                      <Row
                        justify="space-around"
                        style={{ paddingLeft: "15%", paddingRight: "15%" }}
                      >
                        <Col span={6}>
                          <Row justify="center" align="middle">
                          <i className="iconfont" style={{color:'#5D9CCB'}}>&#xe614;</i>
                          </Row>
                          <Row justify="center" align="middle">
                          <span style={{ fontSize: "8px" }}>QQ</span>
                          </Row>
                        </Col>
                        <Col span={6}>
                          <Row justify="center" align="middle">
                          <i className="iconfont" style={{color:'#73D8A2'}}>&#xe82c;</i>
                          </Row>
                          <Row justify="center" align="middle">
                          <span style={{ fontSize: "8px" }}>微信</span>
                          </Row>
                        </Col>
                        <Col span={6}>
                          <Row justify="center" align="middle">
                            <i className="iconfont">&#xe634;</i>
                          </Row>
                          <Row justify="center" align="middle">
                            <span style={{ fontSize: "8px" }}>手机</span>
                          </Row>
                        </Col>
                      </Row>
                    </Content>
                    <Footer style={{ backgroundColor: "white" }}>
                      <Row justify="space-between" align="bottom">
                        <Col span={4}>点击注册 </Col>
                        <Col span={4}>返回首页 </Col>
                      </Row>
                    </Footer>
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
