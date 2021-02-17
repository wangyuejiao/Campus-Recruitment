import React, { Component } from 'react'
import TopNav from '../../components/topNav'
import RightNav from "../../components/RightNav/RightNav.js";
import { Row, Col, Divider, Image, Button, Icon, Pagination } from "antd";
import { Link } from 'react-router-dom'
import qs from 'querystring'

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 1,
      num: 0,
      company: []
    }
  }
  onChange = page => {
    console.log(page);
    this.setState({
      current: page,
    });
    fetch("http://42.192.102.128:3000/company", {
      method: 'POST',
      headers: {
        'Accept': "application/json,text/plain,*/*",
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: qs.stringify({
        city: '1',
        page: page
      })

    }).then(res => res.json())
      .then(res => {
        this.setState({
         company: res.list
        })
        console.log(res)
      })
  };
  componentDidMount() {
    fetch("http://42.192.102.128:3000/company/companyNum", {
      method: 'POST',
      headers: {
        'Accept': "application/json,text/plain,*/*",
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: qs.stringify({
        city: '1',
      })

    }).then(res => res.json())
      .then(res => {
        this.setState({
          num: res.list[0].num
        })
        console.log(res)
      })
    fetch("http://42.192.102.128:3000/company", {
      method: 'POST',
      headers: {
        'Accept': "application/json,text/plain,*/*",
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: qs.stringify({
        city: '1',
        page: '1'
      })

    }).then(res => res.json())
      .then(res => {
        this.setState({
          company: res.list
        })
        console.log(res.list)
      })
  }

  render() {
    const { company } = this.state
    return (
      <div>
        <TopNav current='company' />
        <Row>
          <Col span={23}>
            <Row align='middle' style={{ backgroundColor: '#d0dde3', border: '1px solid #BBBBBB' }} >
              <Col span={2} style={{ marginLeft: '1%' }}></Col>
              <Col >
                <Row style={{ marginTop: '30%' }}>公司地点:</Row>

                <Row style={{ marginTop: '30%' }}>融资阶段：</Row>
                <Row style={{ marginTop: '30%' }}>公司规模：</Row>
                <Row style={{ marginTop: '30%', marginBottom: '30%' }}>行业领域：</Row>
              </Col>
            </Row>
            <Row style={{ backgroundColor: '#F3F3F3' }} justify='space-around' align='middle'>
              {company.map((item, index) => (
                
                
                  
                    <Col span={5} style={{ backgroundColor: 'white', border: '1px solid #BBBBBB', marginTop: '3%', marginBottom: '3%', color: 'black' }}>
                      <Row style={{ marginTop: '5%' }}>
                      <Link to={{ pathname: '/companyinfo' }}>
                        <Col span={10} >
                          <img
                            width='60%'
                            height='80%'
                            style={{ marginLeft: '10%', borderRadius: '10px' }}
                            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                          />

                        </Col>

                        <Col style={{ marginLeft: '8%', color: 'black' }}>
                          <Row justify="end" style={{ marginBottom: '10%', marginTop: '5%' }}>{item.company_name}</Row>
                          <Row justify="end" style={{ fontSize: '12px' }}> {item.financing}<Divider type='vertical' style={{ backgroundColor: '#BBBBBB', marginTop: '4%' }} />{item.industry_area}</Row>
                        </Col>
                        </Link>
                      </Row>
                      
                      <Divider type='horizontal'/>
                      <Row style={{ marginLeft: '9%', fontSize: '12px', color: 'black' }}>在招岗位：{item.position_num}</Row>
                      
                    </Col>
                  
               
              ))
              }


            </Row>
            <Row style={{ backgroundColor: '#F3F3F3' }} justify='space-around' align='middle'>
              <Pagination current={this.state.current} total={this.state.num} onChange={this.onChange} defaultPageSize={9}
                style={{ marginTop: '4%', align: 'center' }} />
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

