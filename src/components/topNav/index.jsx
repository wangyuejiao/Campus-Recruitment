import React, { Component } from "react";
import "./index.css";
import "antd/dist/antd.css";
import { Row, Col, Menu } from "antd";
import { Link } from "react-router-dom";
import { Avatar } from "antd";
import qs from "querystring";

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
      personId: localStorage.getItem('person_id'),
      person: {},
    };
  }

  handleClick = (e) => {
    //首页，公司，职位的点击事件
    console.log("click ", e);
    this.setState({ current: e.key }); //将当前状态改为点击的东西
  };
  positionhandle = () => {
    fetch("http://restapi.amap.com/v3/ip?key=1d4c7b76e61b49cc7f8142075b84d6c9")
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          city: res.city,
          adcode: res.adcode,
        });
      });
  };
  componentDidMount() {
    console.log('999',localStorage.getItem('person'))
    fetch("http://restapi.amap.com/v3/ip?key=1d4c7b76e61b49cc7f8142075b84d6c9")
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          city: res.city,
          adcode: res.adcode,
        });
      });
    fetch("http://42.192.102.128:3000/users/showPerson", {
      method: "POST",
      headers: {
        Accept: "application/json,text/plain,*/*",
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: qs.stringify({
        person_id: this.state.personId,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          person: res.list.message,
        });
      });
  }
  render() {
    console.log("666",this.state.person);
    const { current } = this.state; //使current为状态的值
    return (
      <Row style={navigation}>
        <Col span={2}></Col>
        <Col span={2} style={navigation1}>
          <Row align="middle" justify="center" style={{ height: "100%" }}>
            校园招聘
          </Row>
        </Col>
        <Col span={1}></Col>
        <Col span={2}>
          <Row
            align="middle"
            justify="center"
            style={{ height: "100%", color: "#3061A1" }}
          >
            <i className="iconfont">&#xe606;</i>
            &nbsp;
            <span onClick={() => this.positionhandle()}>{this.state.city}</span>
          </Row>
        </Col>
        <Col span={6}>
          <Row justify="space-around" align="middle">
            <Menu
              onClick={this.handleClick}
              selectedKeys={[current]}
              mode="horizontal"
              style={{
                height: "100%",
                width: "100%",
                backgroundColor: "#79bcdc",
              }}
            >
              <Menu.Item key="home">
                <Row
                  align="middle"
                  justify="space-around"
                  style={{ height: "100%" }}
                >
                  <Link to="/" style={{ color: "white" }}>
                    <i className="iconfont">&#xe635;</i>
                    &nbsp; 首页
                  </Link>
                </Row>
              </Menu.Item>
              <Menu.Item key="position">
                <Row
                  align="middle"
                  justify="space-around"
                  style={{ height: "100%" }}
                >
                  <Link to="/position" style={{ color: "white" }}>
                    <i className="iconfont">&#xe660;</i>
                    &nbsp; 职位
                  </Link>
                </Row>
              </Menu.Item>
              <Menu.Item key="company">
                <Row
                  align="middle"
                  justify="space-around"
                  style={{ height: "100%" }}
                >
                  <Link to="/company" style={{ color: "white" }}>
                    <i className="iconfont">&#xe7ce;</i>
                    &nbsp; 公司
                  </Link>
                </Row>
              </Menu.Item>
            </Menu>
          </Row>
        </Col>
        <Col span={5}></Col>

        {/* 点击头像，进入个人中心页面 */}
        <Col span={6}>
          <Link to="/user">
            <Row align="middle" style={{ height: "100%" }}>
              <Col span={10}>
                <Row
                  justify="end"
                  align="middle"
                  style={{
                    height: "100%",
                    color: "white",
                    paddingLeft: "50px",
                  }}
                >
                  {this.state.person.username}
                </Row>
              </Col>
              <Col span={1}></Col>
              <Col span={2} style={{}}>
                <Row
                  justify="space-around"
                  align="middle"
                  style={{ height: "100%" }}
                >
                  <Avatar
                    style={{ border: "1px solid white" }} 
                    src="./images/zhuzhu.jpg"
                  />
                </Row>
              </Col>
            </Row>
          </Link>
        </Col>
      </Row>
    );
  }
}
