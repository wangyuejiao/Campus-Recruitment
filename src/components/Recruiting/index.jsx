import React, { Component } from "react";
import { Col, Row, Divider, Pagination, Empty  } from "antd";
import qs from "querystring";
import { Link } from "react-router-dom";

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 1,
      recruiting: [],
      num: 0,
    };
  }
  onChange = (page) => {
    console.log(page);
    this.setState({
      current: page,
    });
    fetch("http://42.192.102.128:3000/company/recruitmentPost", {
      method: "POST",
      headers: {
        Accept: "application/json,text/plain,*/*",
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: qs.stringify({
        company_id: this.props.location.search.split("=")[1],
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
    fetch("http://42.192.102.128:3000/company/recruitmentNum", {
      method: "POST",
      headers: {
        Accept: "application/json,text/plain,*/*",
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: qs.stringify({
        company_id: this.props.location.search.split("=")[1],
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          num: res.list[0].num,
        });
        console.log(res);
      });
    fetch("http://42.192.102.128:3000/company/recruitmentPost", {
      method: "POST",
      headers: {
        Accept: "application/json,text/plain,*/*",
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: qs.stringify({
        company_id: this.props.location.search.split("=")[1],

        page: "1",
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          recruiting: res.list,
        });
        console.log(res);
      });
  }

  render() {
    const { recruiting } = this.state;
    console.log(this.props.location.search.split("=")[1]);
    return (
      <Row align="middle" justify="start">
        {this.state.recruiting.map((item, index) => (
          <Link
            to={{
              pathname: "/position/positions",
              search: "?code=" + item.post_id,
            }}
            style={{ color: "black" }}
          >
            <Col
              span={21}
              style={{ marginTop: "2%", border: "1px solid #BBBBBB" }}
            >
              <Row>
                <Col span={8} style={{ marginTop: "2%", marginLeft: "3%" }}>
                  <Row
                    style={{
                      color: "#3c9f8a",
                      fontSize: "17px",
                      fontWeight: "bold",
                    }}
                  >
                    <Col>{item.post_name}&nbsp;&nbsp;&nbsp;&nbsp;</Col>
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
                <Col span={4} style={{ marginTop: "2%", marginLeft: "2%" }}>
                  <Row
                    style={{
                      color: "#3c9f8a",
                      fontSize: "17px",
                      fontWeight: "bold",
                    }}
                  >
                    {item.company_name}
                  </Row>
                  <Row style={{ marginTop: "2%", fontSize: "14px" }}>
                    {item.industry_area}&nbsp;/&nbsp;{item.financing}
                    &nbsp;/&nbsp;{item.scale_min}-{item.scale_max}人
                  </Row>
                </Col>
                <Col span={2}>

                  <Row>
                  <div style={{width:'800px',height:'60px'}}>
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
                style={{ backgroundColor: "#c4c0c0", padding: "1%" }}
              >
                {item.good}
              </Row>
            </Col>
          </Link>
        ))}
       

       {recruiting.length == 0 ? (
              <Row  align="middle" justify="center"style={{marginLeft:"40%",marginTop:'10%'}}><Empty /></Row>
            ) : (
                <Pagination
                  current={this.state.page}
                  total={this.state.num}
                  defaultPageSize={8}
                  onChange={this.onChange}
                  style={{
                    marginTop: "4%",
                    align: "center",
                    marginLeft: "37%",
                  }}
                />
            )}
      </Row>
    );
  }
}
