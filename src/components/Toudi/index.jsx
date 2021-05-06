import React, { Component } from "react";
import { Row, Col, Button, Empty } from "antd";
import qs from "querystring";
import { Link } from "react-router-dom";

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      delivery: [],
    };
  }
  componentDidMount() {
    fetch("http://42.192.102.128:3000/users/delivery", {
      method: "POST",
      headers: {
        Accept: "application/json,text/plain,*/*",
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: qs.stringify({
        user_id: localStorage.getItem("person_id"),
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res.list);
        this.setState({
          delivery: res.list,
        });
      });
  }

  render() {
    return (
      <div>
        {this.state.delivery.length !== 0 ? (
          <div>
            {this.state.delivery.map((item, index) => (
              <Row
                style={{
                  border: "1px solid #BBBBBB",
                  marginLeft: "5%",
                  marginRight: "5%",
                  marginBottom: "30px",
                  marginTop: "10px",
                }}
                align="middle"
                justify="start"
              >
                <Col
                  span={4}
                  style={{
                    fontWeight: "bold",
                    fontSize: "16px",
                    color: "#3c9f8a",
                  }}
                >
                  {item.post_name}
                </Col>
                <Col span={3}>{item.industry_area}</Col>
                <Col span={3} style={{ marginLeft: "4%" }}>
                  {item.education}
                </Col>
                <Col span={3} style={{ marginLeft: "3%", marginRight: "2%" }}>
                  {item.wages_min}k-{item.wages_max}k
                </Col>
                {item.pass == 0 ? (
                  <Col
                    style={{
                      backgroundColor: "#fdf3ef",
                      height: "30px",
                      borderRadius: "10px",
                      marginTop: "1%",
                      marginBottom: "1%",
                      lineHeight: "30px",
                      marginRight: "40px",
                      color: "#ef8969",
                    }}
                    span={2}
                  >
                    待通过
                  </Col>
                ) : item.pass == 1 ? (
                  <Col
                    style={{
                      marginBottom: "1%",
                      backgroundColor: "#f4faed",
                      height: "30px",
                      borderRadius: "10px",
                      lineHeight: "30px",
                      marginRight: "40px",
                      color: "#a6d772",
                    }}
                    span={2}
                  >
                    已通过
                  </Col>
                ) : (
                  <Col
                    style={{
                      marginBottom: "1%",
                      backgroundColor: "#f4faed",
                      height: "30px",
                      borderRadius: "10px",
                      lineHeight: "30px",
                      marginRight: "40px",
                      color: "#ef8969",
                    }}
                    span={2}
                  >
                    未通过
                  </Col>
                )}
                <Col span={3} style={{ marginLeft: "3%", marginRight: "2%" }}>
                  <Button type="primary">
                    <Link
                      to={{
                        pathname: "/position/positions",
                        search: "?code=" + item.post_id,
                      }}
                    >
                      查看详情
                    </Link>
                  </Button>
                </Col>
              </Row>
            ))}
          </div>
        ) : (
          <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
        )}
      </div>
    );
  }
}
