import React, { Component } from "react";
import { Card,Row,Col, Divider } from "antd";
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
            <Card  bordered={false} style={{ width: 500,fontSize:'13px'}}>
              <h3 style={{fontWeight:'bold'}}>{item.direction_name}</h3>
              <Divider style={{marginTop:'1%'}}></Divider>
                <Row justify='start' align='middle'>
                    {item.post.map((item,index)=>(
                        <Col style={{marginRight:'30px'}}>
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
