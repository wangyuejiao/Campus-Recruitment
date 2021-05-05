import React, { Component } from "react";
import "antd/dist/antd.css";
import {
  Row,
  Col,
  Upload,
  Input,
  Radio,
  Select,
  InputNumber,
  Button,
  Dropdown,
  Menu,
} from "antd";
import qs from "querystring";
import { DownOutlined } from "@ant-design/icons";
const navigation = {
  backgroundColor: "#79bcdc",
};
const navigation1 = {
  fontFamily: "lisu",
  fontSize: 28,
  color: "#3061A1",
};

//文件上传
const Dragger = Upload.Dragger;
const props = {
  name: "file",
  showUploadList: false,
  action: "/upload.do",
};

//选择性别
const Option = Select.Option;


//选择学历
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
function onChange(e) {
  console.log(`radio checked:${e.target.value}`);
}
const educationitem = [
    { id: "1", education: "大专" },
    { id: "2", education: "本科" },
  ];

const { TextArea } = Input;
const onChange1 = (e) => {
  console.log(e);
};

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
        education: educationitem[0],
      college: "",
      username:"",
      sex:0,
      age:0,
      phone:'',
      email:'',
      salary:0,
      city:1,
      position:''
    };
  }
  position=(e)=>{
    this.setState({
        position: e.target.value
      });
  }
  education = (e) => {
    this.setState({
      education: educationitem[e.key - 1],
    });
  };
  submit=()=>{
    fetch("http://42.192.102.128:3000/users/registered", {
        method: "POST",
        headers: {
          Accept: "application/json,text/plain,*/*",
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: qs.stringify({
            username:this.state.username,
            phone:this.state.phone,
            email:this.state.email,
            age:this.state.age,
            sex:this.state.sex,
            salary:this.state.salary,
            education_id:this.state.education.id,
            position:this.state.position,
            college:this.state.college
        }),
      })
        .then((res) => res.json())
        .then((res) => {
          console.log(res)
        });
  }
  salary=(e)=>{
      this.setState({
        salary:e.target.value
      })
  }
  email=(e)=>{
    this.setState({
        email:e.target.value
    })
  }
  phone=(e)=>{
      this.setState({
          phone:e.target.value
      })
  }
  age=(value)=>{
      this.setState({
          age:value
      })
  }
  handleChange=(value)=>{
    if(value=="女"){
        this.setState({
            sex:0
        })
    }
    else{
        this.setState({
            sex:1
        })
    }
  }
  college=(e)=>{
    this.setState({
        college:e.target.value
    })
  }
  username=(e)=>{
      this.setState({
          username:e.target.value
      })
  }

  render() {
    return (
      <div>
        <Row style={navigation}>
          <Col span={1}></Col>
          <Col span={2} style={navigation1}>
            <Row
              align="middle"
              justify="center"
              style={{ height: 0.08 * window.screen.height }}
            >
              校园招聘
            </Row>
          </Col>
        </Row>
        <Row
          style={{
            height: 0.66 * window.screen.height,
            backgroundColor: "#3061a1",
          }}
        >
          <Col span={4}></Col>
          <Col span={8} style={{ marginTop: "100px" }}>            
            <Row align="middle" style={{ marginTop: "20px" }}>
              <Col span={2} style={{ fontSize: "18px" }}>
                学校
              </Col>
              <Col style={{ marginLeft: "20px", width: "180px" }}>
                <Input onChange={this.college} />
              </Col>
            </Row>
            <Row align="middle" style={{ marginTop: "20px" }}>
              <Col span={2} style={{ fontSize: "18px" }}>
                姓名
              </Col>
              <Col style={{ marginLeft: "20px", width: "180px" }}>
                <Input onChange={this.username} />
              </Col>
            </Row>
            <Row align="middle" style={{ marginTop: "20px" }}>
              <Col span={2} style={{ fontSize: "18px" }}>
                性别
              </Col>
              <Col style={{ marginLeft: "20px" }}>
                <Select
                  defaultValue="女"
                  style={{ width: 70 }}
                  onChange={this.handleChange}
                >
                  <Option value="女">女</Option>
                  <Option value="男">男</Option>
                </Select>
              </Col>
              <Col span={2} style={{ fontSize: "18px", marginLeft: "20px" }}>
                年龄
              </Col>
              <Col span={2} style={{ fontSize: "18px" }}>
                <InputNumber
                  size="large"
                  min={1}
                  max={100000}
                  defaultValue={22}
                  style={{ width: 70, marginLeft: "20px" }}
                  onChange={this.age}
                />
              </Col>
            </Row>

            <Row align="middle" style={{ marginTop: "20px" }}>
              <Col span={2} style={{ fontSize: "18px" }}>
                学历
              </Col>
              <Col style={{ marginLeft: "20px" }}>
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
            </Row>
            <Row align="middle" style={{ marginTop: "20px" }}>
              <Col span={3} style={{ fontSize: "18px" }}>
                手机号码
              </Col>
              <Col style={{ width: "170px" }}>
                <Input onChange={this.phone} />
              </Col>
            </Row>
            <Row align="middle" style={{ marginTop: "20px" }}>
              <Col span={2} style={{ fontSize: "18px" }}>
                邮箱
              </Col>
              <Col style={{ marginLeft: "20px", width: "180px" }}>
                <Input onChange={this.email} />
              </Col>
            </Row>
          </Col>
          <Col span={12} style={{ marginTop: "100px" }}>
            <Row align="middle" style={{ marginTop: "40px" }}>
              <Col span={4} style={{ fontSize: "18px" }}>
                我的要求：
              </Col>
            </Row>
            <Row align="middle" style={{ marginTop: "10px" }}>
              <Col span={2} style={{ fontSize: "14px" }}>
                期望薪资
              </Col>
              <Col style={{ marginLeft: "10px", width: "180px" }}>
                <Input onChange={this.salary} />
              </Col>
              <Col span={2} style={{ fontSize: "14px" }}>
                期望岗位
              </Col>
              <Col style={{ marginLeft: "10px", width: "180px" }}>
                <Input onChange={this.position} />
              </Col>
            </Row>
            <Row align="middle" style={{ marginTop: "30px" }}>
              <Col span={3} style={{ fontSize: "18px" }}>
                实习经历:
              </Col>
              <Col style={{ marginLeft: "20px" }}>
                <Row style={{ width: "200px", height: "60px" }}>
                  <TextArea
                    placeholder="请输入内容"
                    allowClear
                    onChange={onChange1}
                  />
                </Row>
              </Col>
            </Row>
            <Row align="middle" style={{ marginTop: "20px" }}>
              <Col span={3} style={{ fontSize: "18px" }}>
                个人优势
              </Col>
              <Col style={{ marginLeft: "20px" }}>
                <Row style={{ width: "200px", height: "60px" }}>
                  <TextArea
                    placeholder="请输入内容"
                    allowClear
                    onChange={onChange1}
                  />
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row
          style={{
            height: 0.1 * window.screen.height,
            backgroundColor: "#3061a1",
          }}
          justify="center"
        >
          <Button
            onClick={this.submit}
            style={{
              paddingTop: "0px",
              height: "35px",
              width: "200px",
              backgroundColor: "#3fb0e6",
              color: "white",
              fontFamily: "lisu",
              fontSize: "25px",
              borderRadius: "6px",
              textAlign: "center",
              lineHeight: "35px",
              border: "1px solid #3fb0e6",
            }}
          >
            提交
          </Button>
        </Row>
      </div>
    );
  }
}
