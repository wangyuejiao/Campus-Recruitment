import { Col, Row } from "antd";
import React, { Component } from "react";
import TopNav from "../../components/topNav";
import RightNav from "../../components/RightNav/RightNav.js";
import { Divider, Menu, Breadcrumb, Alert,PageHeader } from "antd";
import Recruiting from '../../components/Recruiting'
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import Introduce from "../../components/Introduce/index.jsx";
import {
  HashRouter as Router,
  Route,
  Switch,
  Link,
  withRouter,
} from "react-router-dom";
import "./index.css";
import qs from 'querystring'




export default class index extends Component {
    constructor(props){
        super(props);
        this.state={
            introduce:{
                color:'#19a8ad'
            },
            recruiting:{
                color:'white'
            },
            page:this.props.location.pathname.split('/')[2]?'recruiting':'introduce',
            num:''
        }
    }

    componentDidMount(){
      this.jump(this.state.page)
      fetch("http://42.192.102.128:3000/company/recruitmentNum",{
        method: 'POST',
        headers: {
          'Accept':"application/json,text/plain,*/*",
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body:qs.stringify({
          company_id:'1'
        })

      }).then(res=>res.json())
      .then(res=>{
       this.setState({
             num:res.list[0].num     
       })
      console.log(res.list[0].num)
      })
    }


    jump=(page)=>{
        console.log(page)
        if(page==this.state.page){
          if(page=='recruiting'){
            this.setState({
                recruiting:{
                    color:'#19a8ad'
                },
                introduce:{
                    color:'white'
                },
                page:'recruiting'
            })
        }
        else{
            this.setState({
                introduce:{
                    color:'#19a8ad'
                },
                recruiting:{
                    color:'white'
                },
                page:'introduce'
            })
        }
        }
        else{
            if(page=='recruiting'){
                this.setState({
                    recruiting:{
                        color:'#19a8ad'
                    },
                    introduce:{
                        color:'white'
                    },
                    page:'recruiting'
                })
            }
            else{
                this.setState({
                    introduce:{
                        color:'#19a8ad'
                    },
                    recruiting:{
                        color:'white'
                    },
                    page:'introduce'
                })
            }
        }
    }



  render() {
    var num={num:this.state.num}
    return (
      <div>
        <TopNav current="company" />
        <Row>
          <Col span={23}>
            <Row style={{ backgroundColor: "#164c7b" }}>
              <Col span={2}></Col>
              <Col span={2}>
                <Row
                  justify="start"
                  style={{
                    fontSize: "25px",
                    color: "white",
                    fontFamily: "lisu",
                    marginLeft: "10px",
                  }}
                >
                  美图秀秀
                </Row>
                <Row justify="start" align="middle">
                  <img
                    width="80%"
                    style={{
                      marginTop: "20px",
                      borderRadius: "5px",
                      marginLeft: "8px",
                    }}
                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                  />
                </Row>
              </Col>
              <Col span={7}>
                <Row
                  style={{ marginTop: "13%", color: "white", fontSize: "16px" }}
                >
                  北京
                  <Divider
                    type="vertical"
                    style={{ marginTop: "1.5%", backgroundColor: "white" }}
                  />
                  C轮 &nbsp; &nbsp;2000人以上
                  <Divider
                    type="vertical" 
                    style={{ marginTop: "1.5%", backgroundColor: "white" }}
                  />
                  文娱
                  <Divider
                    type="vertical"
                    style={{ marginTop: "1.5%", backgroundColor: "white" }}
                  />
                  内容
                </Row>
                <Row
                  style={{ marginTop: "2%", color: "white", fontSize: "15px" }}
                >
                  <i className="iconfont" style={{ color: "grey" }}>
                    &#xe606;
                  </i>
                  北京-北京-朝阳区-望京
                </Row>
                <Row
                  style={{ marginTop: "2%", color: "grey", fontSize: "14px" }}
                >
                  朝来科技园创远路36号院10号楼3层
                </Row>
              </Col>
              <Col span={7}></Col>
              <Col span={1}>
                <Row
                  style={{ marginTop: "65%", color: "white", fontSize: "35px" }}
                  justify="center"
                >
                {this.state.num}
                </Row>
                <Row
                  style={{ marginTop: "3%", color: "white", fontSize: "15px" }}
                >
                  在职招位
                </Row>
              </Col>
            </Row>
            <Row style={{backgroundColor:'#164c7b',paddingTop:'20px',fontSize:'15px',paddingBottom:'20px'}}>
              {/* <Introduce /> */}
                   <Col span={2} ></Col>
                   <Col><Link to="/companyinfo"  style={this.state.introduce} onClick={()=>this.jump('introduce')}>公司简介</Link></Col>
                   <Col style={{marginLeft:'60px'}}><Link to={{pathname:"/companyinfo/recruiting"}}  style={this.state.recruiting} onClick={()=>this.jump('recruiting')}>在招岗位</Link></Col>
       </Row>
       <Row>
         <Col span={2}></Col>
         <Col span={20}>
       <Switch>
                   <Route exact path="/companyinfo" component={Introduce} />
                   <Route exact path='/companyinfo/recruiting' component={Recruiting} />
            </Switch>
            </Col>
       </Row>
          </Col>
          <Col span={1}>
            <RightNav />
          </Col>
        </Row>
      </div>
    );
  }
}
