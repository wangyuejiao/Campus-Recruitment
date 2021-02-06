import { Col, Row } from 'antd'
import React, { Component } from 'react'
import TopNav from '../../components/topNav'
import RightNav from "../../components/RightNav/RightNav.js";
import { Divider ,Menu,Breadcrumb, Alert } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import Introduce from '../../components/Introduce/index.jsx'
import { HashRouter as Router, Route, Switch, Link, withRouter } from 'react-router-dom';
import './index.css';



//   const breadcrumbNameMap = {
//     '/apps': 'Application List',
//     '/apps/1': 'Application1',
//     '/apps/2': 'Application2',
//     '/apps/1/detail': 'Detail',
//     '/apps/2/detail': 'Detail',
//   };
//   const Home = withRouter(props => {
//     const { location } = props;
//     const pathSnippets = location.pathname.split('/').filter(i => i);
//     const extraBreadcrumbItems = pathSnippets.map((_, index) => {
//       const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
//       return (
//         <Breadcrumb.Item key={url}>
//           <Link to={url}>{breadcrumbNameMap[url]}</Link>
//         </Breadcrumb.Item>
//       );
//     });
//     const breadcrumbItems = [
//       <Breadcrumb.Item key="home">
//         <Link to="/">公司简介</Link>
//       </Breadcrumb.Item>,
//     ].concat(extraBreadcrumbItems);
//     return (
//       <div className="demo">
//         <div className="demo-nav">
//           <Link to="/">公司简介</Link>
//           <Link to="/apps">在招岗位</Link>
//         </div>
//       </div>
//     );
//   });
  
export default class index extends Component {

    
    
    render() {
        return (
            <div>
                <TopNav current='company' />
                <Row>
                    <Col span={23}>
                        <Row style={{ backgroundColor: '#164c7b' }} >
                            <Col span={2}></Col>
                            <Col span={2} >

                                <Row justify='start' style={{ fontSize: '25px', color: 'white', fontFamily: 'lisu', marginLeft: '10px' }}>美图秀秀</Row>
                                <Row justify='start' align='middle' >
                                    <img
                                        width='80%'
                                        style={{ marginTop: '20px', borderRadius: '5px', marginLeft: '8px' }}
                                        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                                    />
                                </Row>
                            </Col>
                            <Col span={7} >
                                
                                <Row style={{marginTop:'13%',color:'white',fontSize:'16px'}}> 
                                   
                                        北京
                                        <Divider type="vertical" style={{marginTop:'1.5%',backgroundColor:'white'}}/>
                                         C轮 &nbsp; &nbsp;2000人以上
                                        <Divider type="vertical" style={{marginTop:'1.5%',backgroundColor:'white'}}/>
                                        文娱
                                        <Divider type="vertical" style={{marginTop:'1.5%',backgroundColor:'white'}}/>内容
                                   
                                </Row>
                                <Row style={{marginTop:'2%',color:'white',fontSize:'15px'}}>
                                   <i className="iconfont" style={{color:'grey'}}>&#xe606;</i>
                                    北京-北京-朝阳区-望京
                                </Row>
                                <Row style={{marginTop:'2%',color:'grey',fontSize:'14px'}}>朝来科技园创远路36号院10号楼3层</Row>
                                
                            </Col>
                            <Col span={7} ></Col>
                            <Col span={1}>
                               <Row style={{marginTop:'65%',color:'white',fontSize:'35px'}} justify='center'>2</Row>
                               <Row style={{marginTop:'3%',color:'white',fontSize:'15px'}}>在职招位</Row>
                            </Col>
                        </Row>
                        <Row>
                            {/* <Introduce /> */}
                            <Link to="/introduce">公司简介</Link>
          <Link to="/apps">在招岗位</Link>
                           
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
