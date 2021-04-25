import React, { Component } from 'react'
import "antd/dist/antd.css";
import { Row, Col, Upload, Input, Radio, Select, InputNumber, Button } from "antd";


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

const { TextArea } = Input;
const onChange1 = e => {
    console.log(e);
  };




//选择融资阶段
const Option = Select.Option;
function handleChange(value) {
    console.log(`selected ${value}`);
}


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
                <Row style={{ height: 0.76 * window.screen.height, backgroundColor: '#3061a1' }}>
                    <Col span={7}></Col>
                    <Col span={17}>
                        <Row align='middle' style={{marginTop:'100px'}}>
                            <Col span={2} style={{ fontSize: '22px' }}>LOGO</Col>
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
                            <Col span={2} style={{ fontSize: '22px' }}>公司</Col>
                            <Col style={{ marginLeft: '20px', width: '180px' }}><Input /></Col>
                        </Row>
                        <Row align='middle' style={{ marginTop: '20px' }}>
                            <Col span={2} style={{ fontSize: '22px' }}>地址</Col>
                            <Col style={{ marginLeft: '20px', width: '180px' }}><Input /></Col>
                        </Row>
                        <Row align='middle' style={{ marginTop: '20px' }}>
                            <Col span={2} style={{ fontSize: '22px' }}>简介</Col>
                            <Col style={{ marginLeft: '20px'}}>
                                <Row style={{width:'300px',height:'100px'}}>
                                      <TextArea placeholder="这是一段示例文字......" allowClear onChange={onChange1} />
                                </Row>
                               
                            </Col>
                        </Row>
                        <Row align='middle' style={{ marginTop: '20px' }}>
                            <Col span={2} style={{ fontSize: '22px' }}>融资阶段</Col>
                            <Col style={{ marginLeft: '20px' }}>
                                <Select defaultValue="A轮" style={{ width: 120}} onChange={handleChange}>
                                    <Option value="A轮">A轮</Option>
                                    <Option value="B轮">B轮</Option>
                                    <Option value='C轮'>C轮</Option>
                                </Select>
                            </Col>
                        </Row>
                        <Row align='middle' style={{ marginTop: '20px' }}>
                            <Col span={2} style={{ fontSize: '22px' }}>公司规模</Col>
                            <Col style={{ marginLeft: '20px' }}>
                                <Select defaultValue="10-50人" style={{ width: 120}} onChange={handleChange}>
                                    <Option value="10-50人">10-50人</Option>
                                    <Option value="50-200人">50-200人</Option>
                                    <Option value='200+人'>200+人</Option>
                                </Select>
                            </Col>
                        </Row>
                        <Row align='middle' style={{marginTop:'20px'}}>
                            <Col span={2} style={{ fontSize: '22px' }}>公司环境</Col>
                            <Col>
                                <div style={{ width: '80px', height: '80px', marginLeft: '20px' }}>
                                    <Dragger {...props} style={{ backgroundColor: '#d0dde3'}}>
                                        <Row justify='center'>
                                            <i className="iconfont" style={{ fontSize: '20px', marginTop: "-3px" }}>&#xe61e;</i>
                                        </Row>
                                            上传图片
                                        </Dragger>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row style={{ height: 0.1 * window.screen.height, backgroundColor: '#3061a1',paddingLeft:'550PX' }} >
                       <Button style={{ paddingTop:'0px', height: '35px', width:'200px',backgroundColor: '#3fb0e6', color: 'white', fontFamily: 'lisu', fontSize: '25px', borderRadius: '6px', textAlign: 'center', lineHeight: '35px',border:'1px solid #3fb0e6'}} >提交</Button>
                </Row>
            </div>
        )
    }
}
