import { Col, Row, Carousel, Divider,Typography } from 'antd'
import React, { Component } from 'react'
import Lunbo from '../../components/LunBo'
import qs from "querystring";
import CompanyNav from "../../components/CompanyNav";

const contentStyle = {
    height: '150px',
    color: '#fff',
    lineHeight: '150px',
    textAlign: 'center',
    background: '#364d79',
    marginTop: '5px'
};

//公司简介文本显示
const { Title, Paragraph, Text, Link } = Typography;

export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            company: {},
            environment: [],
            lable: []
        }
    }
    componentDidMount() {
        fetch("http://42.192.102.128:3000/company/companyInfo", {
            method: "POST",
            headers: {
                Accept: "application/json,text/plain,*/*",
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: qs.stringify({
                company_id: 1 //父传子·属性。用的是props，穿的是id，采用字符串分割成数组获取id
            }),
        })
            .then((res) => res.json())
            .then((res) => {
                this.setState({
                    company: res.list.company[0],
                    environment: res.list.environment,
                    lable: res.list.lable
                });
                console.log(res.list.environment);
            })
    }
    render() {
        // console.log(this.state.company.environment)
        // console.log(this.props.location.search.split('=')[1])
        return (
            <div>
              <CompanyNav />
            <Row align='middle' justify='start'>
                <Col span={22}>
                          <Divider orientation="left"  style={{ fontSize: '15px', fontWeight: 'bold',border:'#BBBBBB',paddingLeft:'4%' }}> 公司环境</Divider>
                    <Row>
                        <Col span={10}>
                            {
                                    // environment是个数组，如果里面没有图片，数组长度是0
                                 this.state.environment.length==0?(
                                     <div style={{width:'400px',height:'150px'}}>
                                          <i className="iconfont" style={{fontSize:'80px',marginTop:'5%',color:'#BBBBBB'}}>&#xe891;</i>
                                          <p style={{fontSize:'13px',color:'#BBBBBB'}}> 该公司有点懒，未上传公司环境图片</p>
                                     </div>
                                     
                                 ):(
                                    <Carousel autoplay>
                                    {this.state.environment.map((item, index) => (
                                        <Row justify='center' align='center'>
                                            <img src={item.image}
                                                style={{
                                                    width: '100%',
                                                    height: '35vh',
                                                    paddingLeft:'10%'
                                                }}
                                            />
                                        </Row>
    
                                    ))}
    
                                </Carousel>
                                 )
                            }
                         </Col>
                    </Row>
                  
                    
                  {/* return后面只能返回一个标签，判断是否上传了公司简介 */}
                           {this.state.company.company_profile==''?(<div></div>):(
                                 <Row>
                                      <Divider orientation="left"  style={{ fontSize: '15px', fontWeight: 'bold',border:'#BBBBBB',paddingLeft:'4%' }}> 公司简介</Divider> 
                                       <Typography>
                                           <Paragraph align='left' style={{width:'90%',paddingLeft:'4%'}}>
                                                     {this.state.company.company_profile}
                                        </Paragraph>
                                      </Typography>
                                </Row>
                           )
                       }


                    {/* 判断是否上传了公司标签 */}
                       {
                           this.state.lable.length==0?(<div></div>):(
                               <Row>
                                    <Divider orientation="left"  style={{ fontSize: '15px', fontWeight: 'bold',border:'#BBBBBB',paddingLeft:'4%' }}> 公司标签</Divider>
                                   <Row>
                                       {
                                            this.state.lable.map((item, index) => (
                                                <Row>
                                               <Col style={{ backgroundColor: '#75ead1', height: '30px', borderRadius: '10px', marginTop: '5%', lineHeight: '30px', marginRight: '40px',marginLeft:'50%' }} span={15}>{item.label}</Col>
                                               </Row>
                                     ))
                                        }
                                 </Row>
                         </Row>
                           )
                       }
                   
                </Col>

            </Row>
            </div>
        )
    }
}
