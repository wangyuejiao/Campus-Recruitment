import React, { Component } from "react";
import { Row, Col, Divider, Image, Button, Icon, Pagination } from "antd";
import Recruiting from "../../components/Recruiting";
import { Link } from "react-router-dom";
import qs from "querystring";

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 1,
      recruiting: [],
      num: 0,
      financing: [],
      scale: [],
      industry_area: [],
      citys: [],
    };
  }
  onChange = (page) => {
    console.log(page);
    this.setState({
      current: page,
    });
    fetch("http://42.192.102.128:3000/users/postCollection", {
      method: "POST",
      headers: {
        Accept: "application/json,text/plain,*/*",
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: qs.stringify({
        post_id: localStorage.getItem("person_id"),
        page: page,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          recruiting: res.list,
        });
        console.log(res);
      });
  };
  componentDidMount() {
    fetch("http://42.192.102.128:3000/users/collectionNum", {
      method: "POST",
      headers: {
        Accept: "application/json,text/plain,*/*",
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: qs.stringify({
        person_id:localStorage.getItem("person_id"),
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          num: res.list[0].count,
        });
        console.log('collectionNum',res);
      });
    fetch("http://42.192.102.128:3000/users/postCollection", {
      method: "POST",
      headers: {
        Accept: "application/json,text/plain,*/*",
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: qs.stringify({
        post_id:localStorage.getItem("person_id"),
        page:this.state.current
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          recruiting: res.list,
        });
      });

    //数据库返回三个数组，所以为了使每个数组都可以显示，应该设置三个变量
    fetch("http://42.192.102.128:3000/common/searchMenu")
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          industry_area: res.list.industry_area,
          scale: res.list.scale,
          financing: res.list.financing,
        });
        console.log(res.list.industry_area, res.list.scale, res.list.financing);
      });
    //公司地点的接口
    fetch("http://42.192.102.128:3000/common/cityAll")
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          citys: res.list,
        });
        console.log(res.list);
      });
  }
  render() {
    return (
      <div>
        <Row>
          <Col span={24}>
            <Row>
              <Col span={24} style={{ marginLeft: "6%" }}>
                <Row align="middle" justify="start">
                  {this.state.recruiting.map((item, index) => (
                    // <Redirect to={{pathname:'/position',state:item}}>
                    <Link
                      to={{
                        pathname: "/position/positions",
                        search: "?code=" + item.post_id,
                      }}
                    >
                      <Col
                        span={24}
                        style={{ marginTop: "2%", border: "1px solid #BBBBBB" }}
                      >
                        <Row>
                          <Col
                            span={8}
                            style={{ marginTop: "2%", marginLeft: "3%" }}
                          >
                            <Row
                              style={{
                                color: "#3c9f8a",
                                fontSize: "17px",
                                fontWeight: "bold",
                              }}
                            >
                              <Col>
                                {item.post_name}&nbsp;&nbsp;&nbsp;&nbsp;
                              </Col>
                              <Col>[{item.city}]</Col>
                            </Row>
                            <Row style={{ marginTop: "1%" }}>
                              <p style={{ color: "#f4953f", fontSize: "17px" }}>
                                {item.wages_min}k-{item.wages_max}k
                              </p>

                              <Divider
                                type="vertical"
                                style={{
                                  marginTop: "2%",
                                  backgroundColor: "#BBBBBB",
                                  height: "17px",
                                }}
                              />
                              <span
                                style={{
                                  color: "#BBBBBB",
                                  fontSize: "14px",
                                  marginTop: "1%",
                                }}
                              >
                                {item.education}
                              </span>
                            </Row>
                          </Col>
                          <Col span={8}></Col>
                          <Col
                            span={4}
                            style={{ marginTop: "2%", marginLeft: "2%" }}
                          >
                            <Row
                              style={{
                                color: "#3c9f8a",
                                fontSize: "17px",
                                fontWeight: "bold",
                              }}
                            >
                              {item.company_name}
                            </Row>
                            <Row
                            justify='start'
                              style={{
                                marginTop: "2%",
                                fontSize: "14px",
                                color: "black",
                              }}
                            >
                              {item.industry_area}&nbsp;/&nbsp;{item.financing}
                              &nbsp;/&nbsp;
                            </Row>
                          </Col>
                          <Col span={2}>
                            <Row>
                            <div style={{width:'600px',height:'50px'}}>
                            <img
                                style={{
                                height:'100%',
                                width:'100%'
                               }}
                                src={item.logo}
                              />
                              </div>
                            </Row>
                          </Col>
                        </Row>
                        <Row
                          align="middle"
                          justify="center"
                          style={{
                            backgroundColor: "#c4c0c0",
                            padding: "1%",
                            color: "black",
                          }}
                        >
                          {item.good}
                        </Row>
                      </Col>
                    </Link>
                  ))}
                </Row>

                <Row>
                  <Pagination
                    current={this.state.current}
                    total={this.state.num}
                    onChange={this.onChange}
                    defaultPageSize={8}
                    style={{
                      marginTop: "4%",
                      align: "center",
                      marginLeft: "37%",
                      marginBottom: "20px",
                    }}
                  />
                </Row>
              </Col>
              <Col span={1}> </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}
