import React, { Component } from "react";
import { Card,Row,Col } from "antd";
import Item from "antd/lib/list/Item";
export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
      }
      
  render() {
      console.log(this.props.date)
    return (
        <div className="site-card-border-less-wrapper">
        {this.props.date.map((item,index)=>(
            <Card title={item.direction_name} bordered={false} style={{ width: 600 }}>
                <Row justify='space-around' align='middle'>
                    {item.post.map((item,index)=>(
                        <Col span={4} >
                            {item.post_name}
                        </Col>
                    ))}
                </Row>
          </Card>
        ))}
      </div>
    );
  }
}
