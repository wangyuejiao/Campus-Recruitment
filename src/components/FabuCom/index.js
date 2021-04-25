import React, { Component } from 'react'
import { Row, Col, Divider, Image, Button, Icon, Pagination,Input,Slider  } from "antd";
import $ from 'jquery';

const { TextArea } = Input;
const onChange = e => {
    console.log(e);
  };
  
export default class index extends Component {
    componentDidMount() {
        this.adaptiveHeight()
    }
    componentDidUpdate() {
        this.adaptiveHeight()
    }
    adaptiveHeight = () => {
        $('textarea').height(0)//先初始化一下，避免记录上一下的高度
        $('textarea').each(function () {
        	//this指向textarea本身
            this.setAttribute('style', 'height:' + (this.scrollHeight*4) + 'px;overflow-y:hidden;');
        })
    }
    render() {
        return (
            <div>
                   <Row style={{backgroundColor:'#d0dde3'}}> 
                       <Col span={1}></Col>
                       <Col span={18}style={{marginTop:'20px'}}>
                           <Row style={{fontFamily:'cursive',fontSize:'20px',fontWeight:'bold'}}>发布岗位</Row>
                            <Divider type='horizontal' style={{backgroundColor:'#bbbbbb',height:'2px',marginTop:'10px'}}></Divider>
                            <Row align='middle'>
                                <Col>岗位名称：</Col>
                                <Col><Input placeholder="请输入内容" style={{fontSize:'15px'}}/></Col>
                            </Row>
                            <Row align='middle' style={{marginTop:'20px'}}>
                                <Col>薪资：</Col>
                                <Col span={4} style={{marginLeft:'30px'}}><Slider range min={200} max={400} /></Col>
                            </Row>
                            <Row align='middle' style={{marginTop:'20px'}}>
                                <Col>职位诱惑：</Col>
                                <Col span={15} > <TextArea placeholder="请输入内容" allowClear onChange={onChange}  /></Col>
                            </Row>
                            <Row align='middle' style={{marginTop:'20px'}}>
                                <Col>岗位要求：</Col>
                                <Col span={15} > <TextArea placeholder="请输入内容" allowClear onChange={onChange}  /></Col>
                            </Row>
                            <Row align='middle' style={{marginTop:'20px'}}>
                                <Col>地址：</Col>
                                <Col style={{marginLeft:'30px'}}><Input placeholder="请输入内容" style={{fontSize:'15px'}}/></Col>
                            </Row>
                            <Row align='middle' justify='center' style={{marginTop:'50px'}}>
                                <i className="iconfont" style={{fontSize:'45px'}}>&#xea0b;</i>
                            </Row>
                            <Row align='middle' justify='center' style={{fontSize:'15px'}} >
                               发布
                            </Row>
                           
                        </Col>
                   </Row>
            </div>
        )
    }
}
