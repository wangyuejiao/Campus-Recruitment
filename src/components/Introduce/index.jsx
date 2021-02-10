import { Col, Row, Carousel, Divider } from 'antd'
import React, { Component } from 'react'
import Lunbo from '../../components/LunBo'


const contentStyle = {
    height: '150px',
    color: '#fff',
    lineHeight: '150px',
    textAlign: 'center',
    background: '#364d79',
    marginTop:'5px'
};



export default class index extends Component {
    render() {
        return (
            <Row align='middle' justify='start'>
                <Col>
                    <Row style={{ fontSize: '15px', fontWeight: 'bold',marginTop:'10px'}}>公司环境</Row>
                    <Row>
                        <Col span={7}>
                            <Carousel autoplay>
                                <div>
                                    <h3 style={contentStyle}>1</h3>
                                </div>
                                <div>
                                    <h3 style={contentStyle}>2</h3>
                                </div>
                                <div>
                                    <h3 style={contentStyle}>3</h3>
                                </div>
                                <div>
                                    <h3 style={contentStyle}>4</h3>
                                </div>
                            </Carousel>,
                         </Col>
                    </Row>
                     <Row justify='start'>
                         <Col style={{ fontSize: '15px', fontWeight: 'bold'}}>公司简介</Col>
                         <Col  span={20}>
                             <Divider style={{backgroundColor:'#BBBBBB',marginTop:'13px',marginLeft:'15px',height:'1.5px'}}></Divider>
                         </Col>
                     </Row>
                     <Row style={{marginTop:'5px'}}>
                         腾讯公司成立于
                     </Row>
                     <Row justify='start'>
                         <Col style={{ fontSize: '15px', fontWeight: 'bold',marginTop:'40px'}}>公司标签</Col>
                    </Row>
                    <Row>
                        
                    </Row>
                </Col>

            </Row>
        )
    }
}
