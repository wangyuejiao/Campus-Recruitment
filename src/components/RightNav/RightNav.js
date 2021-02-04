import React, { useState } from "react";
import { Menu, Affix, Drawer, Row, Col } from "antd";
const { SubMenu } = Menu;
export default function RightNav(props) {
  const [top, setTop] = useState(0);
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  const box={
    height:'100vh',
    width:'100%',
  }
  return (
    <Affix offsetTop={top}>
      <div style={box}>
      <Row justify="end" style={{ height: "100%" ,width:'100%'}}>
        <Col span={24}>
          <Menu
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            mode="inline"
            theme="dark"
            inlineCollapsed="true"
            style={{ height: "100%", width: "100%" }}
          >
            <Menu.Item key="1" icon={<i className="iconfont">&#xe620;</i>} onClick={showDrawer}>
              我的收藏
            </Menu.Item>
            <Menu.Item key="2" icon={<i className="iconfont">&#xe661;</i>} onClick={showDrawer}>
              简历投递
            </Menu.Item>
            <Menu.Item key="3" icon={<i className="iconfont">&#xeaa2;</i>} onClick={showDrawer}>
              我的面试
            </Menu.Item>
          </Menu>
        </Col>
        <Drawer
            title="待填"
            placement="right"
            closable={false}
            onClose={onClose}
            visible={visible}
          >
          </Drawer>
      </Row>
    </div>
    </Affix>
  );
}
