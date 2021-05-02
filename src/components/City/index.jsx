import React, { Component } from 'react'
import TopNav from '../../components/topNav'
import RightNav from "../../components/RightNav/RightNav.js";
import { Row, Col, Divider, Image, Button, Icon, Pagination } from "antd";


//获取城市接口
export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          citys: [],
        }
      }
    componentDidMount(){
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
        return (
            <div>
                <TopNav />
                <Row>
                    <Col span={23}>
                        <Row style={{ paddingLeft: '2%', paddingRight: '3%', paddingTop: '4%' }} justify='space-around' align='middle'>
                            {this.state.citys.map((item, index) => (
                                <Col span={6} style={{ marginBottom: '3%' }}>
                                    <Row justify='space-around' align='middle' >
                                        <img
                                            width='100vh'
                                            height='100vh'
                                            style={{ borderRadius: '50%', marginBottom: '10px' }}
                                            src={item.image}
                                        />
                                    </Row>
                                    <Row justify='space-around' align='middle'>
                                        {item.city}
                                    </Row>
                                </Col>
                            ))}

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
