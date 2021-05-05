import React, { Component } from "react";
import {
  Row,
  Col,
  Divider,
  Input,
  Slider,
  Select,
  Menu,
  Dropdown,
  Button,
  Form,
} from "antd";
import { DownOutlined } from "@ant-design/icons";
import $ from "jquery";
import qs from "querystring";
const { TextArea } = Input;
const positionitem = [
  { id: "1", position: "互联网" },
  { id: "2", position: "电商" },
];
const educationitem = [
  { id: "1", education: "大专" },
  { id: "2", education: "本科" },
];
const cityitem = [{ id: "1", city: "厦门" }];
export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      education: educationitem[0],
      position: positionitem[0],
      city: cityitem[0],
      wage: [],
      experience: [],
      postname: "",
      address: "",
      good: "",
    };
  }
  componentDidMount() {
    this.adaptiveHeight();
  }
  componentDidUpdate() {
    this.adaptiveHeight();
  }
  adaptiveHeight = () => {
    $("textarea").height(0); //先初始化一下，避免记录上一下的高度
    $("textarea").each(function () {
      //this指向textarea本身
      this.setAttribute(
        "style",
        "height:" + this.scrollHeight * 4 + "px;overflow-y:hidden;"
      );
    });
  };
  experience = (e) => {
    this.setState({
      experience: e,
    });
  };
  wage = (e) => {
    this.setState({
      wage: e,
    });
  };
  education = (e) => {
    this.setState({
      education: educationitem[e.key - 1],
    });
  };
  position = (e) => {
    this.setState({
      position: positionitem[e.key - 1],
    });
  };
  city = (e) => {
    this.setState({
      city: cityitem[e.key - 1],
    });
  };
  submit = () => {
      var data={
        post_name:this.state.postname,
        city_id:this.state.city,
        wages_min:this.state.wage[0],
        wages_max:this.state.wage[1],
        company_id:localStorage.getItem("company_id"),
        position_id:this.state.position,
        educational_id:this.state.education,
        experience_min:this.state.experience[0],
        experience_max:this.state.experience[1],
        good:this.state.good

      }
    fetch("http://42.192.102.128:3000/company/releasePost", {
        method: "POST",
        headers: {
          Accept: "application/json,text/plain,*/*",
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: qs.stringify({
            post_name:this.state.postname,
            city_id:this.state.city.id,
            wages_min:this.state.wage[0],
            wages_max:this.state.wage[1],
            company_id:localStorage.getItem("company_id"),
            position_id:this.state.position.id,
            educational_id:this.state.education.id,
            experience_min:this.state.experience[0],
            experience_max:this.state.experience[1],
            good:this.state.good
        }),
      })
        .then((res) => res.json())
        .then((res) => {
          console.log(res)
        });
  };
  postname = (e) => {
    this.setState({
      postname: e.target.value,
    });
  };
  address = (e) => {
    this.setState({
      address: e.target.value,
    });
  };
  good = (e) => {
    this.setState({
      good: e.target.value,
    });
  };
  render() {
    const { Option } = Select;

    const city = [{ id: "1", city: "厦门" }];
    return (
      <div>
        <Row style={{ backgroundColor: "#d0dde3" }}>
          <Col span={1}></Col>
          <Col span={18} style={{ marginTop: "20px" }}>
            <Row
              style={{
                fontFamily: "cursive",
                fontSize: "20px",
                fontWeight: "bold",
              }}
            >
              发布岗位
            </Row>
            <Divider
              type="horizontal"
              style={{
                backgroundColor: "#bbbbbb",
                height: "2px",
                marginTop: "10px",
              }}
            ></Divider>
            <Row align="middle">
              <Col>岗位名称：</Col>
              <Col>
                <Input
                  style={{ fontSize: "15px", width: "150px" }}
                  onChange={(e) => this.postname(e)}
                />
              </Col>
              <Col style={{ marginLeft: "30px" }}>地址：</Col>
              <Col>
                <Input
                  style={{ fontSize: "15px", width: "150px" }}
                  onChange={(e) => this.address(e)}
                />
              </Col>
            </Row>
            <Row align="middle" style={{ marginTop: "20px" }}>
              <Col>学历</Col>
              <Col style={{ marginLeft: "30px" }}>
                <Dropdown
                  overlay={
                    <Menu onClick={this.education}>
                      {educationitem.map((item, index) => (
                        <Menu.Item key={item.id}>{item.education}</Menu.Item>
                      ))}
                    </Menu>
                  }
                >
                  <Button>
                    {this.state.education.education} <DownOutlined />
                  </Button>
                </Dropdown>
              </Col>
              <Col style={{ marginLeft: "30px" }}>职位方向：</Col>
              <Col>
                <Dropdown
                  overlay={
                    <Menu onClick={this.position}>
                      {positionitem.map((item, index) => (
                        <Menu.Item key={item.id}>{item.position}</Menu.Item>
                      ))}
                    </Menu>
                  }
                >
                  <Button>
                    {this.state.position.position} <DownOutlined />
                  </Button>
                </Dropdown>
              </Col>
              <Col style={{ marginLeft: "30px" }}>城市：</Col>
              <Col>
                <Dropdown
                  overlay={
                    <Menu onClick={this.city}>
                      {cityitem.map((item, index) => (
                        <Menu.Item key={item.id}>{item.city}</Menu.Item>
                      ))}
                    </Menu>
                  }
                >
                  <Button>
                    {this.state.city.city} <DownOutlined />
                  </Button>
                </Dropdown>
              </Col>
            </Row>
            <Row align="middle" style={{ marginTop: "20px" }}>
              <Col>经验：</Col>
              <Col span={4} style={{ marginLeft: "20px" }}>
                <Slider range min={0} max={30} onChange={this.experience} />
              </Col>
            </Row>
            <Row align="middle" style={{ marginTop: "20px" }}>
              <Col>薪资：</Col>
              <Col span={4} style={{ marginLeft: "20px" }}>
                <Slider range min={20} max={40} onChange={this.wage} />
              </Col>
            </Row>
            <Row align="middle" style={{ marginTop: "20px" }}>
              <Col>职位诱惑：</Col>
              <Col span={15}>
                {" "}
                <TextArea placeholder="请输入内容" allowClear />
              </Col>
            </Row>
            <Row align="middle" style={{ marginTop: "20px" }}>
              <Col>岗位要求：</Col>
              <Col span={15}>
                {" "}
                <TextArea placeholder="请输入内容" allowClear />
              </Col>
            </Row>
            <Row align="middle" style={{ marginTop: "20px" }}>
              <Col>岗位职责：</Col>
              <Col span={15}>
                {" "}
                <TextArea
                  placeholder="请输入内容"
                  allowClear
                  onChange={this.good}
                />
              </Col>
            </Row>

            <Row align="middle" justify="center" style={{ marginTop: "50px" }}>
              <i
                className="iconfont"
                style={{ fontSize: "45px" }}
                onClick={this.submit}
              >
                &#xea0b;
              </i>
            </Row>
            <Row align="middle" justify="center" style={{ fontSize: "15px" }}>
              发布
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}
