import React, { Component } from "react";
import "antd/dist/antd.css";
import { Row, Col, Upload, Input, Radio, Select,InputNumber,Button } from "antd";


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
    name: 'file',
    showUploadList: false,
    action: '/upload.do',
};

//选择性别
const Option = Select.Option;
function handleChange(value) {
    console.log(`selected ${value}`);
}


//选择学历
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
function onChange(e) {
    console.log(`radio checked:${e.target.value}`);
}


const { TextArea } = Input;
const onChange1 = e => {
    console.log(e);
  };


//改变年龄
//   function onChange(value) {
//     console.log('changed', value);
//   }

export default class index extends Component {
    render() {
        return (
            <div>
                <Row style={navigation}>
                    <Col span={1}></Col>
                    <Col span={2} style={navigation1}>
                        <Row align="middle" justify="center" style={{ height: 0.08 * window.screen.height }}>
                            校园招聘
                        </Row>
                    </Col>
                </Row>
                <Row style={{ height: 0.66 * window.screen.height, backgroundColor: '#3061a1' }}>
                    <Col span={4}></Col>
                    <Col span={8} style={{ marginTop: '100px'}}>
                        <Row align='middle' >
                            <Col span={2} style={{ fontSize: '18px' }}>头像</Col>
                            <Col>
                                <div style={{ width: '80px', height: '80px', marginLeft: '20px' }}>
                                    <Dragger {...props} style={{ backgroundColor: '#d0dde3', borderRadius: '50px' }}>
                                        <Row justify='center'>
                                            <i className="iconfont" style={{ fontSize: '20px', marginTop: "-3px" }}>&#xe61e;</i>
                                        </Row>
                                            上传图片
                                        </Dragger>
                                </div>
                            </Col>
                        </Row>
                        <Row align='middle' style={{ marginTop: '20px' }}>
                            <Col span={2} style={{ fontSize: '18px' }}>学校</Col>
                            <Col style={{ marginLeft: '20px', width: '180px' }}><Input /></Col>
                        </Row>
                        <Row align='middle' style={{ marginTop: '20px' }}>
                            <Col span={2} style={{ fontSize: '18px' }}>姓名</Col>
                            <Col style={{ marginLeft: '20px', width: '180px' }}><Input /></Col>
                        </Row>
                        <Row align='middle' style={{ marginTop: '20px' }}>
                            <Col span={2} style={{ fontSize: '18px' }}>性别</Col>
                            <Col style={{ marginLeft: '20px' }}>
                                <Select defaultValue="女" style={{ width: 70 }} onChange={handleChange}>
                                    <Option value="女">女</Option>
                                    <Option value="男">男</Option>
                                </Select>
                            </Col>
                            <Col span={2} style={{ fontSize: '18px' ,marginLeft:'20px'}}>年龄</Col>
                            <Col span={2} style={{ fontSize: '18px' }}>
                                    <InputNumber size="large" min={1} max={100000} defaultValue={3} style={{ width: 70,marginLeft:'20px'}}/>
                            </Col>
                        </Row>

                        <Row align='middle' style={{ marginTop: '20px' }}>
                            <Col span={2} style={{ fontSize: '18px' }}>学历</Col>
                            <Col style={{ marginLeft: '20px', width: '180px' }}>
                                <RadioGroup onChange={onChange} defaultValue="a">
                                    <RadioButton value="a">大专</RadioButton>
                                    <RadioButton value="b">本科</RadioButton>
                                    <RadioButton value="c">硕士</RadioButton>
                                </RadioGroup>
                            </Col>
                        </Row>
                        <Row align='middle' style={{ marginTop: '20px' }}>
                            <Col span={3} style={{ fontSize: '18px' }}>手机号码</Col>
                            <Col style={{ width: '170px' }}><Input /></Col>
                        </Row>
                        <Row align='middle' style={{ marginTop: '20px' }}>
                            <Col span={2} style={{ fontSize: '18px' }}>邮箱</Col>
                            <Col style={{ marginLeft: '20px', width: '180px' }}><Input /></Col>
                        </Row>

                    </Col>
                    <Col span={12} style={{ marginTop: '100px'}}>
                        <Row align='middle' style={{ marginTop: '40px' }}>
                            <Col span={3} style={{ fontSize: '18px' }}>我的要求：</Col>
                        </Row>
                        <Row align='middle' style={{ marginTop: '10px' }}>
                            <Col span={2} style={{ fontSize: '14px' }}>期望薪资</Col>
                            <Col style={{ marginLeft: '10px', width: '180px' }}><Input /></Col>
                            <Col span={2} style={{ fontSize: '14px',marginLeft: '10px' }}>期望城市</Col>
                            <Col style={{ marginLeft: '10px', width: '180px' }}><Input /></Col>
                        </Row>
                        <Row align='middle' style={{ marginTop: '10px' }}>
                            <Col span={2} style={{ fontSize: '14px' }}>期望岗位</Col>
                            <Col style={{ marginLeft: '10px', width: '180px' }}><Input /></Col>
                        </Row>
                        <Row align='middle' style={{ marginTop: '30px' }}>
                            <Col span={3} style={{ fontSize: '18px' }}>工作内容:</Col>
                            <Col style={{ marginLeft: '20px'}}>
                                <Row style={{width:'200px',height:'60px'}}>
                                      <TextArea placeholder="请输入内容" allowClear onChange={onChange1} />
                                </Row>
                            </Col>
                        </Row>
                        <Row align='middle' style={{ marginTop: '20px' }}>
                            <Col span={3} style={{ fontSize: '18px' }}>个人优势</Col>
                            <Col style={{ marginLeft: '20px'}}>
                                <Row style={{width:'200px',height:'60px'}}>
                                      <TextArea placeholder="请输入内容" allowClear onChange={onChange1} />
                                </Row>
                            </Col>
                        </Row>

                    </Col>

                </Row>
                <Row style={{ height: 0.1 * window.screen.height, backgroundColor: '#3061a1' }} justify='center'>
                       <Button style={{ paddingTop:'0px', height: '35px', width:'200px',backgroundColor: '#3fb0e6', color: 'white', fontFamily: 'lisu', fontSize: '25px', borderRadius: '6px', textAlign: 'center', lineHeight: '35px',border:'1px solid #3fb0e6'}} >提交</Button>
                </Row>
            </div>

        );
    }
}
