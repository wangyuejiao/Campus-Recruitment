import React, { Component } from 'react'
import TopNav from "../../components/topNav";
import RightNav from "../../components/RightNav/RightNav.js";
import { Row, Col, Divider, Image, Button, Icon, Pagination, Menu } from "antd";
import Like from '../Like'
import Toudi from '../Toudi'
import Connect from  '../Connect'
import {
    HashRouter as Router,
    Route,
    Switch,
    Link,
    withRouter,
  } from "react-router-dom";

export default class index extends Component {
    state = {
        current: 'hobby',
      };
    
      handleClick = e => {
        console.log('click ', e);
        this.setState({ current: e.key,
         });
      };
    
    render() {
        const { current } = this.state;
        return (
            <div>
                <TopNav />
                <Row>
                    <Col span={23}>
                        <Row style={{ marginTop: '5%' }}>
                            <Col span={2}></Col>
                            <Col style={{ border: '1px solid #BBBBBB', width: '100%',height:'550px' }} span={19}>
                                <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal" style={{fontSize:'20px',fontFamily:'cursive'}} >
                                    <Menu.Item key="hobby">
                                          <Link to="/hobby/like" >
                                                感兴趣
                                          </Link>
                                    </Menu.Item>
                                    <Menu.Item key="toudi">
                                       <Link to="/hobby/toudi">
                                          已投递
                                        </Link>
                                    </Menu.Item>
                                    <Menu.Item key="connect">
                                          <Link to="/hobby/connect" >
                                          已沟通
                                          </Link>
                                    </Menu.Item>
                                </Menu>
                                 {/* switch是在本页面显示组件内容，所以跳转的内容是本页面下的啥啥啥 */}
                                <Switch>
                                   <Route path='/hobby/like' component={Like} />
                                   <Route path='/hobby/toudi' component={Toudi} />
                                    <Route path='/hobby/connect' component={Connect} />
                               </Switch>
                            
                            </Col>
                           
                            <Col span={2}> </Col>
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
