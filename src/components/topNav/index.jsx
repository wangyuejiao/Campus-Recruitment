import React, { Component } from "react";
import "./index.css";
import "antd/dist/antd.css";
import { Row, Col, Menu } from "antd";
import { Link } from "react-router-dom";
import { Input, Space } from "antd";
import { AudioOutlined } from "@ant-design/icons";

const navigation = {
  backgroundColor: "#79bcdc",
};
const navigation1 = {
  fontFamily: "lisu",
  fontSize: 28,
  color: "#3061A1",
};

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: this.props.current, //从父组件获取current值，current为当前为首页，公司，职位
    };
  }

  handleClick = (e) => { //首页，公司，职位的点击事件
    console.log("click ", e);
    this.setState({ current: e.key }); //将当前状态改为点击的东西
  };
  render() {
    const { current } = this.state;  //使current为状态的值
    return (
      <Row style={navigation}>
        <Col span={2}></Col>
        <Col span={2} style={navigation1}>
          <Row align="middle" justify="center" style={{ height: "100%" }}>
            校园招聘
          </Row>
        </Col>
        <Col span={1}></Col>
        <Col span={1}>
          <Row
            align="middle"
            justify="center"
            style={{ height: "100%", color: "#3061A1" }}
          >
            <i className="iconfont">&#xe606;</i>
            &nbsp;
            <span>北京</span>
          </Row>
        </Col>
        <Col span={6}>
          <Row justify="space-around" align="middle">
            <Menu
              onClick={this.handleClick}
              selectedKeys={[current]}
              mode="horizontal"
              style={{ height: "100%", width:'100%',backgroundColor:'#79bcdc' }}
            >
              <Menu.Item key="home">
                <Row align="middle" justify="space-around" style={{ height: "100%" }}>
                <Link to="/">
                <i className="iconfont">&#xe635;</i>
                &nbsp;
                  首页</Link>
                </Row>
              </Menu.Item>
              <Menu.Item key="position">
                <Row align="middle" justify="space-around" style={{ height: "100%" }}>
                <Link to="/position">
                <i className="iconfont">&#xe660;</i>
                &nbsp;
                  职位</Link>
                </Row>
              </Menu.Item>
              <Menu.Item key="company">
                <Row align="middle" justify='space-around' style={{ height: "100%" }}>
                  <Link to="/company">
                  <i className="iconfont">&#xe7ce;</i>
                  &nbsp;
                      公司
                    </Link>
                </Row>
              </Menu.Item>
            </Menu>
          </Row>
        </Col>
        <Col span={9}></Col>
        <Col span={2}></Col>
      </Row>
    );
  }
}
