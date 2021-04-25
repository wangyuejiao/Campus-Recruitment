import React, { Component } from "react";
import "./index.css";
import "antd/dist/antd.css";
import { Row, Col, Menu } from "antd";
import { Link } from "react-router-dom";
import { Input, Space, Avatar, Image } from "antd";
import { AudioOutlined } from "@ant-design/icons";
import { Map, Marker, InfoWindow, Markers } from 'react-amap';   //定位

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
  positionhandle=()=>{
    console.log('123')
    fetch("http://restapi.amap.com/v3/ip?key=1d4c7b76e61b49cc7f8142075b84d6c9")
      .then(res => res.json())
      .then(res => {
        this.setState({
          city:res.city,
          adcode:res.adcode
        })
      })

  }
  componentDidMount () {
    fetch("http://restapi.amap.com/v3/ip?key=1d4c7b76e61b49cc7f8142075b84d6c9")
    .then(res => res.json())
    .then(res => {
      this.setState({
        city:res.city,
        adcode:res.adcode
      })
  }
    )}
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
        <Col span={2}>
          <Row
            align="middle"
            justify="center"
            style={{ height: "100%", color: "#3061A1" }}
          >
            <i className="iconfont">&#xe606;</i>
            &nbsp;
            <span onClick={()=>this.positionhandle()}>{this.state.city}</span>
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
                <Link to="/" style={{color:'white'}}>
                <i className="iconfont">&#xe635;</i>
                &nbsp;
                  首页</Link>
                </Row>
              </Menu.Item>
              <Menu.Item key="position">
                <Row align="middle" justify="space-around" style={{ height: "100%" }}>
                <Link to="/position" style={{color:'white'}}>
                <i className="iconfont">&#xe660;</i>
                &nbsp;
                  职位</Link>
                </Row>
              </Menu.Item>
              <Menu.Item key="company">
                <Row align="middle" justify='space-around' style={{ height: "100%" }}>
                  <Link to="/company" style={{color:'white'}}>
                  <i className="iconfont">&#xe7ce;</i>
                  &nbsp;
                      公司
                    </Link>
                </Row>
              </Menu.Item>
            </Menu>
          </Row>
        </Col>
        <Col span={5}></Col>

        
        {/* 点击头像，进入个人中心页面 */}
        <Col span={6}>
        <Link to='/user'>
        <Row align='middle' style={{height:'100%'}}>
        <Col span={10}><Row justify='end' align='middle' style={{height: "100%",color:'white',paddingLeft:'50px'}}>张鑫涛</Row></Col>
        <Col span={1}></Col>
          <Col span={2} style={{}}>
              <Row justify='space-around' align='middle' style={{height: "100%"}}>
                <Avatar style={{border:'1px solid white'}}  src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.bqatj.com%2Fimg%2F726697295441df40.jpg&refer=http%3A%2F%2Fimg.bqatj.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1621520175&t=88416367a31f56d0fd314d7c1526e804" /> 
              </Row>
              </Col>
        </Row>
           
         
        </Link>
        </Col>
      </Row>
    );
  }
}
