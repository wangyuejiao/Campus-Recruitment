import React, { Component } from "react";
import TopNav from "../../components/topNav";
import RightNav from "../../components/RightNav/RightNav.js";
import { Row, Col, Divider, Image, Button, Icon, Pagination } from "antd";
import { Link } from "react-router-dom";
import qs from "querystring";

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 1,
      num: 0,
      company: [],
      financing:[],
      scale:[],
      industry_area:[],
      citys:[],
    };
  }
  onChange = (page) => {
    console.log(page);
    this.setState({
      current: page,
    });
    fetch("http://42.192.102.128:3000/company", {
      method: "POST",
      headers: {
        Accept: "application/json,text/plain,*/*",
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: qs.stringify({
        city: "1",
        page: page,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          company: res.list,
        });
        console.log(res);
      });
  };
  componentDidMount() {
    fetch("http://42.192.102.128:3000/company/companyNum", {
      method: "POST",
      headers: {
        Accept: "application/json,text/plain,*/*",
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: qs.stringify({
        city: "1",
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          num: res.list[0].num,
        });
        console.log(res);
      });
    fetch("http://42.192.102.128:3000/company", {
      method: "POST",
      headers: {
        Accept: "application/json,text/plain,*/*",
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: qs.stringify({
        city: "1",
        page: "1",
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          company: res.list,
        });
        console.log(res.list);
      });

     //数据库返回三个数组，所以为了使每个数组都可以显示，应该设置三个变量
     fetch("http://42.192.102.128:3000/common/searchMenu")
     .then(res => res.json())
     .then(res => {
       this.setState({
         industry_area: res.list.industry_area,
         scale:res.list.scale,
         financing:res.list.financing
       })
       console.log(res.list.industry_area,res.list.scale,res.list.financing)
      
     })


     //公司地点的接口
      fetch("http://42.192.102.128:3000/common/cityAll")
      .then(res => res.json())
      .then(res => {
        this.setState({
          citys: res.list
        })
        console.log(res.list)
      })

}


  render() {
    const { company } = this.state;
    console.log(this.state.company);
    return (
      <div>
        <TopNav current="company" />
        <Row>
          <Col span={23}>
            <Row
              align="middle"
              style={{
                backgroundColor: "#d0dde3",
                border: "1px solid #BBBBBB",
              }}
            >
              <Col span={2} style={{ marginLeft: "1%" }}></Col>
              <Col>
                <Row style={{ marginTop: "7%" }}>公司地点：
                 {
                   this.state.citys.map((item,index)=>(
                      index<15? <Col style={{marginRight:'10px'}}>{item.city}</Col>:<Col></Col>
                   ))
                 }
                </Row>

                <Row style={{ marginTop: "7%" }}>融资阶段：
                {this.state.financing.map((item,index)=>(
                                               <Col style={{marginRight:'10px'}}>{item.financing}</Col>
                                   ))}
                </Row>
                <Row style={{ marginTop: "7%" }}>公司规模：
                {this.state.scale.map((item,index)=>(
                                               <Col  style={{marginRight:'10px'}}>{item.scale_min}-{item.scale_max}人</Col>
                                   ))}
                </Row>
                <Row style={{ marginTop: "7%", marginBottom: "7%" }}>
                  行业领域：
                  {this.state.industry_area.map((item,index)=>(
                                               <Col  style={{marginRight:'10px'}}>{item.industry_area}</Col>
                                   ))}
                </Row>
              </Col>
            </Row>
            <Row
              style={{ backgroundColor: "#F3F3F3", padding: "5% 10% 5% 10%" }}
              justify="space-around"
              align="middle"
            >
              {company.map((item,index)=>(
                  
                   <Col span={7} style={{ backgroundColor: "white" ,border:'1px solid #B0E2FF',margin:'1% 0 1% 0'}}>
                     
                <Link to={{pathname:'companyinfo',search:'?code='+item.id}} style={{color:'black',display:'block'}}>
                  <Row
                    justify="space-between"
                    align="center"
                    style={{ margin: "10px" }}
                  >
                    <Col span={5}>
                      <img
                        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                        style={{
                          margin: "0 auto",
                          width: "100%",
                          height: "100%",
                          borderRadius:'10px'
                        }}
                      />
                    </Col>
                    <Col span={16}>
                      <Row justify="end" align="center">
                        <h3>{item.company_name}</h3>
                      </Row>
                      <Row justify="end" align="center">
                        <span>{item.financing}</span>
                        <span>
                          <Divider
                            type="vertical"
                            style={{ backgroundColor: "#BBBBBB" }}
                          />
                        </span>
  
                        <span>{item.industry_area}</span>
                      </Row>
                    </Col>
                  </Row>
                  <Row justify='center' align='center'>
                    <Col span={22}>
                    <Divider
                    style={{
                      backgroundColor: "#BBBBBB",
                      height: "2px",
                      margin: "0",
                      width:'60%'
                    }}
                  />
                    </Col>
                 
                  </Row>
                  
                  <Row justify="start">
                    <Col span={1}></Col>
                    在招岗位：{item.position_num}
                  </Row>
                  </Link>
                </Col>
               
              ))}
            </Row>
            <Row
              style={{ backgroundColor: "#F3F3F3" }}
              justify="space-around"
              align="middle"
            >
              <Pagination
                current={this.state.current}
                total={this.state.num}
                onChange={this.onChange}
                defaultPageSize={9}
                style={{ marginTop: "1%", align: "center" }}
              />
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
