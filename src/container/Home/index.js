import React, { Component } from "react";
import "./index.css";
import "antd/dist/antd.css";
import TopNav from "../../components/topNav";
import Search from "../../components/Search/Search";
import RightNav from "../../components/RightNav/RightNav.js";
import Lunbo from '../../components/LunBo'
import Position from '../../components/Position'
import { Row, Col, Divider, Image, Button } from "antd";

const style = { background: 'white', padding: '8px 0', height: '15vh' };
const a = ['互联网', '金融', '教育培训', '医疗健康', '法律咨询', '供应-物流', '采购贸易']
const b = ['互联网', '金融', '教育培训', '医疗健康', '法律咨询', '供应-物流']
export default class index extends Component {
  constructor(props){
    super(props);
    this.state={
      names:[]
    }
  }
  componentDidMount(){
    fetch("http://42.192.102.128:3000/common/positionDivide")
    .then(res=> res.json())
    .then(res=>{
        // this.setState({
        //   names:data.type_name
        // })
        console.log(res)
      })
    }
    
  render() {
    const {names}=this.state 
    return (
      <div>
        <TopNav current="home" />
        <Row>
          <Col span={23}>
            <Row justify='center' align='middle'
              style={{ height: '15%', width: '100%', backgroundColor: '#F3F3F3' }}>
              <Col span={14}>
                <Search />
              </Col>
            </Row>
            <Divider style={{ margin: 0, height: '2px', backgroundColor: '#D0DDE3' }} />
            <Row justify='space-around' align='middle'
              style={{ width: '100%', backgroundColor: '#F3F3F3' }}>
              <Col span={6} style={{ backgroundColor: 'white' }}>
                <Row justify='center' align='middle'>  {/*获取后台数据循环*/}
                  <Col span={6}>{names.type_name}</Col>
                  <Col span={4}>123</Col>
                  <Col span={4}>123</Col>
                  <Col span={4}>123</Col>
                  <Col span={4}>更多+图标</Col>
                </Row>
              </Col>
              <Col span={12}>
                <Lunbo />
              </Col>
            </Row>
            {/* 分割线颜色 */}
            <Row style={{ backgroundColor: '#F3F3F3' }} justify='center' align='middle'>
              <Col span={8}>
                <Divider style={{ border: 'grey' }}>热门岗位</Divider>
              </Col>
            </Row>
            <Row style={{ backgroundColor: '#F3F3F3', height: '10vh' }} justify='center' align='middle'>
              <Col span={2} ></Col>
              <Col span={20}>
                <Row style={{ backgroundColor: 'white', height: '8vh' }} justify='center' align='middle'>
                  {a.map((item, index) => (
                    <Col span={3}>{item}</Col>
                  )
                  )}
                </Row>
              </Col>
              <Col span={2} ></Col>
            </Row>
            <Row style={{ backgroundColor: 'red', height: '5vh' }}></Row>
            <Row style={{ backgroundColor: '#F3F3F3', height: '35vh' }} justify='center' align='middle'>
              <Col span={2} style={{ backgroundColor: 'green', height: '35vh' }}></Col>
              <Col span={20}>
                <Row align='middle'  >
                  <Col span={6} style={{ backgroundColor: 'white' }}>
                    <Row>  
                      <Col span={2}></Col>
                      <Col span={13} style={{fontWeight:'bold'}} align='left'>JAVA工程师</Col>
                      <Col span={9} style={{color:'red'}}>20k-40k</Col>
                    </Row>
                    <Row style={{color:'grey',fontSize:'10px'}}>
                      <Col span={2}></Col>厦门 | 经验不限 |本科 
                    </Row>
                    <Divider style={{ marginTop:'5px', height: '1px', backgroundColor: 'grey' }} />
                    <Row style={{marginTop:'7px',color:'grey'}}>
                      <Col span={2}></Col>
                      <Col span={4} align='left'>
                      <Image
                        width={20}
                        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                      />
                      </Col >
                      <Col span={4} style={{fontSize:'10px'}} align='left'>京东</Col>
                      <Col  span={3} style={{fontSize:'10px'}} align='left'>互联网</Col>
                      <Col span={1} style={{fontSize:'10px'}} align='left'>|</Col>
                      <Col span={3} style={{fontSize:'10px'}}>已上市</Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
              <Col span={2} style={{ backgroundColor: 'green', height: '35vh' }}></Col>
            </Row>
            <Row style={{ backgroundColor: '#F3F3F3', height: '10vh' }} justify='center' >
              <Button style={{paddingTop:'0px',width:'12%',height:'35px',backgroundColor:'#3fb0e6',color:'white',fontFamily:'lisu',fontSize:'25px',borderRadius:'6px',textAlign:'center',lineHeight:'35px'}} >查看更多</Button>
            </Row>
            <Row style={{ backgroundColor: '#F3F3F3' }} justify='center' >
              <Col span={8}>
                <Divider style={{ border: 'grey' }}>热门城市</Divider>
              </Col>
            </Row>
            <Row style={{ backgroundColor: '#F3F3F3', height: '35vh' }} justify='center' align='middle'>
              <Col span={2} style={{ backgroundColor: 'green', height: '35vh' }}></Col>
              <Col span={20}>
                <Row align='middle' justify='center'>
                  <Col span={4} style={{ backgroundColor: 'white' }}>
                    <Row>
                      <Col span={1}></Col>
                      <Col  span={22} align='center' justify='middle'>
                      <Image
                        width={150}
                        height={75}
                        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                      />
                      </Col >
                    </Row>
                    <Row>
                       <Col  span={24} align='center' style={{color:'grey',marginTop:'5px'}}>厦门</Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
              <Col span={2} style={{ backgroundColor: 'green', height: '35vh' }}></Col>
            </Row>
            <Row style={{ backgroundColor: '#F3F3F3', height: '10vh' }} justify='center' >
              <Button style={{paddingTop:'0px',width:'12%',height:'35px',backgroundColor:'#3fb0e6',color:'white',fontFamily:'lisu',fontSize:'25px',borderRadius:'6px',textAlign:'center',lineHeight:'35px'}} >查看更多</Button>
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
