import { Col, Row } from "antd";
import React, { Component } from "react";
import { Divider, Menu, Breadcrumb, Alert,PageHeader } from "antd";
import Recruiting from '../../components/Recruiting'
import {
  HashRouter as Router,
  Route,
  Switch,
  Link,
  withRouter,
} from "react-router-dom";
import qs from 'querystring'




export default class index extends Component {
    constructor(props){
        super(props);
        this.state={
            num:'',
            company:{},   //company对象
            environment:[],
            lable:[]
        }
    }

    componentDidMount(){
    //   this.jump(this.state.page)
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


   //公司页面的logo
    fetch("http://42.192.102.128:3000/company/companyInfo", {
      method: "POST",
      headers: {
        Accept: "application/json,text/plain,*/*",
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: qs.stringify({
        // company_id: this.props.location.search.split('=')[1],
        company_id:1
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          company: res.list.company[0],
          environment:res.list.environment,
          lable:res.list.lable
        });
        console.log( res.list.company);
      })
    }


    // jump=(page)=>{
    //     console.log(page)
    //     if(page==this.state.page){
    //       if(page=='recruiting'){
    //         this.setState({
    //             recruiting:{
    //                 color:'#19a8ad'
    //             },
    //             introduce:{
    //                 color:'white'
    //             },
    //             page:'recruiting'
    //         })
    //     }
    //     else{
    //         this.setState({
    //             introduce:{
    //                 color:'#19a8ad'
    //             },
    //             recruiting:{
    //                 color:'white'
    //             },
    //             page:'introduce'
    //         })
    //     }
    //     }
    //     else{
    //         if(page=='recruiting'){
    //             this.setState({
    //                 recruiting:{
    //                     color:'#19a8ad'
    //                 },
    //                 introduce:{
    //                     color:'white'
    //                 },
    //                 page:'recruiting'
    //             })
    //         }
    //         else{
    //             this.setState({
    //                 introduce:{
    //                     color:'#19a8ad'
    //                 },
    //                 recruiting:{
    //                     color:'white'
    //                 },
    //                 page:'introduce'
    //             })
    //         }
    //     }
    // }



  render() {
    var num={num:this.state.num}
    console.log(this.state.company)
    return (
      <div>
        <Row >
          <Col span={24} >
            <Row style={{ backgroundColor: "#07ccbe" }}>
              <Col span={2}></Col>
              <Col span={3}>
                <Row
                  // justify="start"
                  style={{
                    fontSize: "25px",
                    color: "white",
                    fontFamily: "lisu",
                    marginLeft: "10px",
                    paddingTop:'10px'
                  }}
                >
                  {this.state.company.company_name}
                </Row>
                <Row justify="start" align="middle">
                  {
                    this.state.company.logo==''?(
                        <i className="iconfont" style={{fontSize:'50px',marginTop:'7%',marginLeft:'5%',color:'#BBBBBB'}}>&#xe613;</i>
                    ):(<img
                    width="70%"
                    style={{
                      marginTop: "20px",
                      borderRadius: "5px",
                      marginLeft: "8px",
                      marginBottom:'20%'
                    }}
                    height='90vh'
                    src={this.state.company.logo}
                  />)
                  }
                  {/* ()循环，判断是否添加图片，用三元组 */}
               
                </Row>
              </Col>
              <Col span={7}>
                <Row
                  style={{ marginTop: "17%", color: "white", fontSize: "16px" }}
                >
                  {this.state.company.city}
                  <Divider
                    type="vertical"
                    style={{ marginTop: "1.5%", backgroundColor: "white" }}
                  />
                  {this.state.company.financing}
                  <Divider
                    type="vertical" 
                    style={{ marginTop: "1.5%", backgroundColor: "white" }}
                  />
                  {this.state.company.scale_min}-{this.state.company.scale_max}人
                  <Divider
                    type="vertical"
                    style={{ marginTop: "1.5%", backgroundColor: "white" }}
                  />
                 {this.state.company.industry_area} 
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
              <Col span={2}>
                <Row
                  style={{ marginTop: "65%", color: "white", fontSize: "35px" }}
                  justify="center"
                >
                {this.state.num}
                </Row>
                <Row
                  style={{ marginTop: "3%", color: "white", fontSize: "15px",marginLeft:'25px' }}
                >
                  在职招位
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}
