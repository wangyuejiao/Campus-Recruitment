import React, { Component } from 'react'
import TopNav from '../../components/topNav'
import RightNav from "../../components/RightNav/RightNav.js";
import { Row, Col, Divider, Image, Button, Icon, Pagination,Avatar } from "antd";
import qs from 'querystring'
import Item from 'antd/lib/list/Item';

const sex=0
export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message:{},
            advantage:[],
            experience:[]
        }
    }
    componentDidMount(){
        fetch("http://42.192.102.128:3000/users/showPerson", {
            method: 'POST',
            headers: {
                'Accept': "application/json,text/plain,*/*",
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: qs.stringify({
                person_id: '1',
            })

        }).then(res => res.json())
            .then(res => {
                this.setState({
                     message:res.list.message,
                    advantage:res.list.advantage,
                    experience:res.list.experience[0]
                })
                // console.log(res.list)
            })

    }

    render() {
        console.log(this.state.experience)
        return (
            <div>
                <TopNav />
                <Row>
                    <Col span={23}>
                         <Row>
                             <Col span={2}></Col>
                             <Col style={{border:'1px solid #BBBBBB',height:'100%',marginTop:'3%',backgroundColor:'#F5F7F7'}} span={20}>
                                 <Row style={{marginTop:'3%'}}>
                                    <Col span={3}>
                                           <Avatar style={{border:'1px solid white',marginBottom:'40%'}} size={{xl:80}}  src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" /> 
                                    </Col>
                                    <Col> 
                                          <Row style={{fontWeight:'bold',fontSize:'18px',marginBottom:'10px'}}>{this.state.message.username}
                                              {
                                                  sex==0?(
                                                    <i className="iconfont" style={{marginLeft:'5px',marginTop:'3px'}}>&#xe665;</i>
                                                  ):1
                                              }
                                         </Row>
                                          <Row style={{marginBottom:'10px'}}>{this.state.message.college}<Divider type='vertical' style={{marginTop:'6px',backgroundColor:'#BBBBBB'}} />{this.state.message.education}.统招<Divider type='vertical' style={{marginTop:'6px',backgroundColor:'#BBBBBB'}}/>应届毕业生<Divider type='vertical' style={{marginTop:'6px',backgroundColor:'#BBBBBB'}}/>{this.state.message.age}岁</Row>
                                          <Row>
                                            <i className="iconfont" style={{fontSize:'20px',marginTop:"-2px"}}>&#xe634;</i>{this.state.message.phone}
                                            <i className="iconfont" style={{marginLeft:'20px' ,fontSize:'30px',marginTop:"-10px"}}>&#xe649;</i>{this.state.message.email}
                                          </Row>
                                    </Col>
                                </Row>
                             </Col>
                             <Col span={2}></Col>
                         </Row>
                         <Row style={{marginTop:'3%'}}>
                                 <Col span={2}></Col>
                                 <Divider type='vertical' style={{backgroundColor:'#0ae6de',width:'5px',height:'4vh'}}/>
                                 <Col style={{fontSize:'18px'}}>个人优势</Col> 
                         </Row>
                         <Row style={{marginTop:'1%'}} >
                                 <Col span={2}></Col>
                                 <Col>
                                 <ul>
                                 {
                                     this.state.advantage.map((item,index)=>(
                                        <li align='left'>{item.advantage}</li>
                                     ))
                                 }
                                 </ul>
                                 </Col>
                         </Row>
                         <Row style={{marginTop:'3%'}}>
                                 <Col span={2}></Col>
                                 <Divider type='vertical' style={{backgroundColor:'#0ae6de',width:'5px',height:'4vh'}}/>
                                 <Col style={{fontSize:'18px'}}>实习经历</Col> 
                         </Row>
                         <Row style={{marginTop:'1%'}} >
                                 <Col span={2}></Col>
                                 <Col style={{marginLeft:'20px'}} span={12} align='left'>
                                       {this.state.experience.experience}
                                 </Col>
                         </Row>
                         <Row style={{marginTop:'3%'}}>
                                 <Col span={2}></Col>
                                 <Divider type='vertical' style={{backgroundColor:'#0ae6de',width:'5px',height:'4vh'}}/>
                                 <Col style={{fontSize:'18px'}}>期望职位</Col> 
                         </Row>
                         <Row style={{marginTop:'1%'}} >
                                 <Col span={2}></Col>
                                 <Col style={{marginLeft:'20px'}}>
                                 {this.state.message.position}<Divider type='vertical' style={{backgroundColor:'#BBBBBB'}}/>{this.state.message.city}<Divider type='vertical' style={{backgroundColor:'#BBBBBB'}}/>{this.state.message.salary}
                                 </Col>
                         </Row>
                    </Col>
                    <Col span={1}>
                        <RightNav />
                    </Col>
                </Row>
            </div>
        )
    }
}
