import React, { Component } from "react";
import { Row, Col } from "antd";
import qs from "querystring";

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      delivery: [],
    };
  }
  timeFormatter = (value) => {
    var da = new Date(
      value.replace("/Date(", "").replace(")/", "").split("+")[0]
    );
    return (
      da.getFullYear() +
      "-" +
      (da.getMonth() + 1 < 10 ? "0" + (da.getMonth() + 1) : da.getMonth() + 1) +
      "-" +
      (da.getDate() < 10 ? "0" + da.getDate() : da.getDate()) +
      " " +
      (da.getHours() < 10 ? "0" + da.getHours() : da.getHours()) +
      ":" +
      (da.getMinutes() < 10 ? "0" + da.getMinutes() : da.getMinutes()) +
      ":" +
      (da.getSeconds() < 10 ? "0" + da.getSeconds() : da.getSeconds())
    );
  };
  componentDidMount() {
    fetch("http://42.192.102.128:3000/users/delivery", {
      method: "POST",
      headers: {
        Accept: "application/json,text/plain,*/*",
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: qs.stringify({
        user_id: "1",
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res.list);
        for (var i = 0; i < res.list.length; i++) {
          console.log(res.list[i].date);
          res.list[i].date = this.timeFormatter(res.list[i].date);
        }
        this.setState({
          delivery: res.list,
        });
      });
  }

  render() {
    console.log(this.state.delivery);

    return (
      <div>
        {this.state.delivery.map((item, index) => (
          <Row
            style={{
              border: "1px solid #BBBBBB",
              marginLeft: "5%",
              marginRight: "5%",
              marginTop: "30px",
            }}
            align="middle"
            justify="start"
          >
            <Col span={2} style={{ marginLeft: "2%" }}>
              <img
                width="80%"
                height="80%"
                style={{
                  marginTop: "15%",
                  borderRadius: "15px",
                  marginBottom: "15%",
                }}
                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
              />
            </Col>
            <Col
              span={2}
              style={{ fontWeight: "bold", fontSize: "16px", color: "#3c9f8a" }}
            >
              {item.company_name}
            </Col>
            <Col span={2}></Col>
            <Col span={4}>{item.post_name}</Col>
            <Col span={4} style={{ marginLeft: "4%" }}>
              {item.date}
            </Col>
            <Col span={4} style={{ marginLeft: "3%", marginRight: "2%" }}>
              {item.wages_min}k-{item.wages_max}k
            </Col>
            {item.status == 1 ? (
              <Col
                style={{
                  backgroundColor: "#fdf3ef",
                  height: "30px",
                  borderRadius: "10px",
                  marginTop: "1%",
                  lineHeight: "30px",
                  marginRight: "40px",
                  color: "#ef8969",
                }}
                span={2}
              >
                待通过
              </Col>
            ) : (
              <Col
                style={{
                  backgroundColor: "#f4faed",
                  height: "30px",
                  borderRadius: "10px",
                  marginTop: "1%",
                  lineHeight: "30px",
                  marginRight: "40px",
                  color: "#a6d772",
                }}
                span={2}
              >
                已通过
              </Col>
            )}
          </Row>
        ))}
        {/* <Row style={{border:'1px solid #BBBBBB',marginLeft:'5%',marginRight:'5%',marginTop:'30px'}} align='middle' justify='start'>
                   <Col span={2} style={{marginLeft:'2%'}}><img
                              
                              width='80%'
                              height='80%'
                              style={{ marginTop: '15%',borderRadius:'15px',marginBottom:'15%' }}
                              src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                    /></Col>
                   <Col span={2} style={{fontWeight:'bold',fontSize:'16px',color:'#3c9f8a'}}>{this.state.delivery.company_name}</Col>
                   <Col span={2}></Col>
                   <Col span={4}>{this.state.delivery.post_name}</Col>
                   <Col span={4} style={{marginLeft:'4%'}}>{this.state.delivery.date}</Col>
                   <Col span={4} style={{marginLeft:'3%',marginRight:'2%'}}>{this.state.delivery.wages_min}k-{this.state.delivery.wages_max}k</Col>
                   {
                       this.state.delivery.status==1?(
                        <Col style={{ backgroundColor: '#fdf3ef', height: '30px', borderRadius: '10px', marginTop: '1%', lineHeight: '30px', marginRight: '40px',color:'#ef8969' }} span={2}>待通过</Col>
                       ):
                       (
                        <Col style={{ backgroundColor: '#f4faed', height: '30px', borderRadius: '10px', marginTop: '1%', lineHeight: '30px', marginRight: '40px',color:'#a6d772' }} span={2}>已通过</Col>
                       )
                   }
                
               </Row> */}
      </div>
    );
  }
}
