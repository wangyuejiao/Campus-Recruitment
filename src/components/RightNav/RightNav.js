import React, { useState } from "react";
import { Menu, Affix, Drawer, Row, Col, Divider } from "antd";
import { Link } from "react-router-dom";

const { SubMenu } = Menu;
export default function RightNav(props) {
  const [top, setTop] = useState(0);

  //设置三个点击函数，点击showDrawer1，让setVisible1为true，表示抽屉可见，visible1, setVisible1变量
  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [visible3, setVisible3] = useState(false);
  const showDrawer1 = () => {
    setVisible1(true);
  };
  const showDrawer2 = () => {
    setVisible2(true);
  };
  const showDrawer3 = () => {
    setVisible3(true);
  };

//设置三个关闭函数，点击某个时抽屉不可见
  const onClose1 = () => {
    setVisible1(false);
  };
  const onClose2 = () => {
    setVisible2(false);
  };
  const onClose3 = () => {
    setVisible3(false);
  };



  const box = {
    height: '100vh',
    width: '100%',
  }
  return (
    <Affix offsetTop={top}>
      <div style={box}>
        <Row justify="end" style={{ height: "100%", width: '100%' }}>
          <Col span={24}>
            <Menu
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              mode="inline"
              theme="dark"
              inlineCollapsed="true"
              style={{ height: "100%", width: "100%", paddingTop: '40px' }}
            >
              <Menu.Item key="1" icon={<i className="iconfont" >&#xe620;</i>} onClick={showDrawer1} >
                我的收藏
            </Menu.Item>

              <Menu.Item key="2" icon={<i className="iconfont" >&#xe661;</i>} onClick={showDrawer2}>
                简历投递
            </Menu.Item>
              <Menu.Item key="3" icon={<i className="iconfont" >&#xeaa2;</i>} onClick={showDrawer3}>
                我的面试
            </Menu.Item>
            </Menu>
          </Col>
          <Drawer
            placement="right"
            closable={false}
            onClose={onClose1}
            visible={visible1}
            style={{
              // marginTop: '3%',
            }}
            width='20%'
          >
            <Row align='middle'>
              <Row>
                <Col style={{ fontWeight: 'bold', fontSize: '16px' }}>收藏的职位</Col>
                <Link to={{pathname:'/hobby'}}><Col style={{ marginLeft: '120px', fontSize: '13px', marginTop: '5px',color:'black' }}>查看全部</Col></Link>
              </Row>
              <Row style={{ paddingTop: '2%',marginTop:'5%' }} justify='start' align='middle'>
                <Col span={24}>
                  <Row  justify='space-around' align='middle'>
                      {/* <Link to={{pathname:'/position/positions',search: '?code='+item.post_id,}} display='none'> */}
                      <Col span={24} style={{ marginBottom: '7%', backgroundColor: 'white', padding: '5%', border: '1px solid #BBBBBB' }}>
                        <Row justify='space-between' align='middle' >
                          <Col style={{ fontWeight: 'bold', fontSize: '16px', color: 'black' }}>java工程师</Col>
                          <Col style={{ color: '#EA7835' }}>20k-40k</Col>
                        </Row>
                        <Row justify='start' align='middle' style={{ paddingTop: '5px', fontSize: '13px', color: 'black' }}>
                          <Col>厦门</Col>
                          <Divider type="vertical" style={{ backgroundColor: '#BBBBBB' }} />
                          <Col>1年-3年</Col>
                          <Divider type="vertical" style={{ backgroundColor: '#BBBBBB' }} />
                          <Col>本科</Col>

                        </Row>
                        <Divider style={{ marginTop: '10px', height: '2px', backgroundColor: '#F3F3F3' }} />
                        <Row justify='start' align='middle' style={{ marginTop: '-15px', fontSize: '13px', color: 'black' }}>
                          <img
                            width='15%'
                            style={{ marginBottom: '5px' }}
                            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                          />
                          <Col style={{ marginLeft: '5px' }}>字节跳动</Col>

                          <Col style={{ marginLeft: '20px' }}>互联网</Col>
                          <Divider type="vertical" style={{ backgroundColor: '#BBBBBB' }} />
                          <Col>D轮及以上</Col>
                        </Row>
                      </Col>
                  </Row>
                </Col>
                {/* <Col span={2} ></Col> */}
              </Row>
            </Row>
          </Drawer>
          <Drawer
            placement="right"
            closable={false}
            onClose={onClose2}
            visible={visible2}
            style={{
              // marginTop: '3%',
            }}
            width='20%'
          >
            <Row align='middle'>
              <Row>
                <Col style={{ fontWeight: 'bold', fontSize: '16px' }}>投递简历的职位</Col>
                <Link to={{pathname:'/hobby'}}><Col style={{ marginLeft: '85px', fontSize: '13px', marginTop: '5px',color:'black' }}>查看全部</Col></Link>
              </Row>
              <Row style={{ paddingTop: '2%',marginTop:'5%' }} justify='start' align='middle'>
                <Col span={24}>
                  <Row  justify='space-around' align='middle'>
                      {/* <Link to={{pathname:'/position/positions',search: '?code='+item.post_id,}} display='none'> */}
                      <Col span={24} style={{ marginBottom: '7%', backgroundColor: 'white', padding: '5%', border: '1px solid #BBBBBB' }}>
                        <Row justify='space-between' align='middle' >
                          <Col style={{ fontWeight: 'bold', fontSize: '16px', color: 'black' }}>java工程师</Col>
                          <Col style={{ color: '#EA7835' }}>20k-40k</Col>
                        </Row>
                        <Row justify='start' align='middle' style={{ paddingTop: '5px', fontSize: '13px', color: 'black' }}>
                          <Col>厦门</Col>
                          <Divider type="vertical" style={{ backgroundColor: '#BBBBBB' }} />
                          <Col>1年-3年</Col>
                          <Divider type="vertical" style={{ backgroundColor: '#BBBBBB' }} />
                          <Col>本科</Col>

                        </Row>
                        <Divider style={{ marginTop: '10px', height: '2px', backgroundColor: '#F3F3F3' }} />
                        <Row justify='start' align='middle' style={{ marginTop: '-15px', fontSize: '13px', color: 'black' }}>
                          <img
                            width='15%'
                            style={{ marginBottom: '5px' }}
                            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                          />
                          <Col style={{ marginLeft: '5px' }}>字节跳动</Col>

                          <Col style={{ marginLeft: '20px' }}>互联网</Col>
                          <Divider type="vertical" style={{ backgroundColor: '#BBBBBB' }} />
                          <Col>D轮及以上</Col>
                        </Row>
                      </Col>
                  </Row>
                </Col>
                {/* <Col span={2} ></Col> */}
              </Row>
            </Row>
          </Drawer>
          <Drawer
            placement="right"
            closable={false}
            onClose={onClose3}
            visible={visible3}
            style={{
              // marginTop: '3%',
            }}
            width='20%'
          >
            <Row align='middle'>
              <Row>
                <Col style={{ fontWeight: 'bold', fontSize: '16px' }}>沟通过的职位</Col>
                <Link to={{pathname:'/hobby'}}><Col style={{ marginLeft: '95px', fontSize: '13px', marginTop: '5px',color:'black' }}>查看全部</Col></Link>
              </Row>
              <Row style={{ paddingTop: '2%',marginTop:'5%' }} justify='start' align='middle'>
                <Col span={24}>
                  <Row  justify='space-around' align='middle'>
                      {/* <Link to={{pathname:'/position/positions',search: '?code='+item.post_id,}} display='none'> */}
                      <Col span={24} style={{ marginBottom: '7%', backgroundColor: 'white', padding: '5%', border: '1px solid #BBBBBB' }}>
                        <Row justify='space-between' align='middle' >
                          <Col style={{ fontWeight: 'bold', fontSize: '16px', color: 'black' }}>java工程师</Col>
                          <Col style={{ color: '#EA7835' }}>20k-40k</Col>
                        </Row>
                        <Row justify='start' align='middle' style={{ paddingTop: '5px', fontSize: '13px', color: 'black' }}>
                          <Col>厦门</Col>
                          <Divider type="vertical" style={{ backgroundColor: '#BBBBBB' }} />
                          <Col>1年-3年</Col>
                          <Divider type="vertical" style={{ backgroundColor: '#BBBBBB' }} />
                          <Col>本科</Col>

                        </Row>
                        <Divider style={{ marginTop: '10px', height: '2px', backgroundColor: '#F3F3F3' }} />
                        <Row justify='start' align='middle' style={{ marginTop: '-15px', fontSize: '13px', color: 'black' }}>
                          <img
                            width='15%'
                            style={{ marginBottom: '5px' }}
                            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                          />
                          <Col style={{ marginLeft: '5px' }}>字节跳动</Col>

                          <Col style={{ marginLeft: '20px' }}>互联网</Col>
                          <Divider type="vertical" style={{ backgroundColor: '#BBBBBB' }} />
                          <Col>D轮及以上</Col>
                        </Row>
                      </Col>
                  </Row>
                </Col>
                {/* <Col span={2} ></Col> */}
              </Row>
            </Row>
          </Drawer>
        </Row>
      </div>
    </Affix>
  );
}
