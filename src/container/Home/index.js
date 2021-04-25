import React, { Component } from "react";
import "./index.css";
import "antd/dist/antd.css";
import TopNav from "../../components/topNav";
import Search from "../../components/Search/Search";
import RightNav from "../../components/RightNav/RightNav.js";
import Lunbo from '../../components/LunBo'
import Position from '../../components/Position'
import { Row, Col, Divider,Image, Button,Popover } from "antd";
import Card from '../../components/Card'
import {Link} from "react-router-dom"

const style = { background: 'white', padding: '8px 0', height: '15vh' };
const a = ['互联网', '金融', '教育培训', '医疗健康', '法律咨询', '供应-物流', '采购贸易']
const b = ['互联网', '金融', '教育培训', '医疗健康', '法律咨询', '供应-物流']
const content=(date)=>{
  // console.log(date)
  <Card date={date} />
}
export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      names: [],
      citys: [],
      position: [],
      divide: [] //职业分类
    }
  }

  componentDidMount() {
    fetch("http://42.192.102.128:3000/common/positionDivide")
      .then(res => res.json())
      .then(res => {
        this.setState({
          divide: res.list
        })
        console.log(res.list[0].type_name)
        console.log(res.list[0].direction[0].direction_name)
      })


    fetch("http://42.192.102.128:3000/common/city")
      .then(res => res.json())
      .then(res => {
        this.setState({
          citys: res.list
        })
        // console.log(res.list)
      })


    fetch("http://42.192.102.128:3000/common/postHot")
      .then(res => res.json())
      .then(res => {
        this.setState({
          position: res.list
        })
        console.log('hot',res.list)
      })
  }

  render() {
    const { names } = this.state
    const { citys } = this.state
    const { position } = this.state
    return (
      <div>
        <TopNav current="home" />
        <Row>
          <Col span={23}>
            <Row justify='center' align='middle'
              style={{ height: '12%', width: '100%', backgroundColor: '#F3F3F3' }}>
              <Col span={14}>
                <Search />
              </Col>
            </Row>
            <Divider style={{ margin: 0, height: '2px', backgroundColor: '#D0DDE3' }} />
            <Row justify='start' align='middle'
              style={{ width: '100%', backgroundColor: '#F3F3F3' }}>
              <Col span={2}></Col>
              <Col span={7} style={{ backgroundColor: 'white',border:'1px solid #BBBBBB',marginLeft:'2%',padding:'1%',paddingRight:'0'}}>
                {this.state.divide.map((item,index)=>(
                  <Row justify='space-around' align='middle' style={{marginBottom:'1%'}}>  {/*获取后台数据循环*/}
                  <Col span={4} style={{fontWeight:'bold',fontSize:'18px'}}>{item.type_name}</Col>
                  <Col span={5} >{item.direction[0].direction_name}</Col>
                  <Col span={5} >{item.direction[1].direction_name}</Col>
                  <Col span={1}>
                  <Popover placement="right" content={<Card date={item.direction}  />} trigger="hover">
                    {/* <Button>
                    更多 */}
                    <i className="iconfont">&#xe860;</i>
                    {/* </Button> */}
                  </Popover>
                  
                    </Col>
                </Row>
                ))}
              </Col>
              <Col span={2}></Col>
              <Col span={10}>
                <Lunbo />
              </Col>
            </Row>
            {/* 分割线颜色 */}
            <Row style={{ backgroundColor: '#F3F3F3' }} justify='center' align='middle'>
              <Col span={8}>
                <Divider style={{ border: 'grey' ,fontSize:'25px' }}>热门岗位</Divider>
              </Col>
            </Row>
            <Row style={{ backgroundColor: '#F3F3F3',paddingTop:'2%' }} justify='center' align='middle'>
              <Col span={2} ></Col>
              <Col span={20}>
                <Row style={{ backgroundColor: '#F3F3F3'}} justify='space-around' align='middle'>
                  {position.map((item, index) => (
                    <Col span={7}>
                    <Link to={{pathname:'/position/positions',search: '?code='+item.post_id,}} display='none'>
                    <Col span={24} style={{ marginBottom: '7%', backgroundColor: 'white',padding:'5%',border:'1px solid #BBBBBB' }}>
                      <Row justify='space-between' align='middle' >
                        <Col style={{ fontWeight: 'bold',fontSize:'16px',color:'black' }}>{item.post_name}</Col>
                        <Col style={{ color: '#EA7835' }}>{item.wages_min}k-{item.wages_max}k</Col>
                      </Row>
                      <Row justify='start' align='middle' style={{paddingTop:'5px',fontSize:'13px',color:'black'}}>
                        <Col>{item.city}</Col>
                        <Divider type="vertical" style={{backgroundColor:'#BBBBBB'}}/>
                       {
                       (item.experience_min==item.experience_max)?  <Col>经验不限</Col>: <Col>{item.experience_min}年-{item.experience_max}年</Col>
                
                       }
                       <Divider type="vertical"  style={{backgroundColor: '#BBBBBB'}}/>
                       <Col>{item.education}</Col>
                        
                      </Row>
                      <Divider style={{ marginTop: '10px', height: '2px', backgroundColor: '#F3F3F3' }} />
                      <Row justify='start' align='middle' style={{marginTop:'-15px',fontSize:'13px',color:'black'}}>
                        <img
                          width='15%'
                          style={{marginBottom: '5px' }}
                          src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                        />
                        <Col  style={{marginLeft:'5px'}}>{item.company_name}</Col>
                        
                        <Col style={{marginLeft:'30px'}}>{item.industry_area}</Col>
                        <Divider type="vertical"  style={{backgroundColor: '#BBBBBB'}}/>
                        <Col>{item.financing}</Col>
                      </Row>
                    </Col>
                    </Link> 
                    </Col>
                 ))}
                </Row>
              </Col>
              <Col span={2} ></Col>
            </Row>
            <Row style={{ backgroundColor: '#F3F3F3', height: '10vh',paddingTop:'2%',paddingBottom:'5%' }} justify='center' >
               
               <Link to={{pathname:'/position'}}>
            
                       <Button style={{ paddingTop:'0px', height: '35px', width:'180px',backgroundColor: '#3fb0e6', color: 'white', fontFamily: 'lisu', fontSize: '25px', borderRadius: '6px', textAlign: 'center', lineHeight: '35px' }} >查看更多</Button>
                       
              </Link>
             
            </Row>
            <Row style={{ backgroundColor: '#F3F3F3' }} justify='center' >
              <Col span={8}>
                <Divider style={{ border: 'grey' ,fontSize:'25px'}}>热门城市</Divider>
              </Col>
            </Row>
            <Row style={{ backgroundColor: '#F3F3F3',paddingLeft:'3%',paddingRight:'3%',paddingTop:'2%'}} justify='space-around' align='middle'>
              {citys.map((item, index) => (
                <Col span={5} style={{ marginBottom: '3%' }}>
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
            <Row style={{ backgroundColor: '#F3F3F3', height: '10vh' }} justify='center' >
              <Link to={{pathname:'/city'}}>
              <Button style={{ paddingTop:'0px', height: '35px', width:'180px',backgroundColor: '#3fb0e6', color: 'white', fontFamily: 'lisu', fontSize: '25px', borderRadius: '6px', textAlign: 'center', lineHeight: '35px' }} >查看更多</Button>
              </Link>
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
