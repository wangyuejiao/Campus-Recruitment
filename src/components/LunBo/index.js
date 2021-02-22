import React, { Component } from "react";
import { Carousel } from "antd";
export default class index extends Component {
  render() {
    const contentStyle = {
      height: "260px",
      color: "#fff",
      lineHeight: "160px",
      textAlign: "center",
      // background: "#364d79",
      marginTop:'40px'
    };
    return (
      <div>
        <Carousel autoplay style={{marginTop:'40px'}}>
          <div style={{height:'160px',width:'200px'}}>
                  <img src='./images/lunbo_jingdong.jpg' style={{
                                                    width: '100%',
                                                    height: '40vh'}} />
          </div>
          <div style={{height:'160px',width:'200px'}}>
                   <img src='./images/lun_bojinritoutiao.jpg'  style={{
                                                    width: '100%',
                                                    height: '40vh'}}/>
          </div>
          <div style={{height:'160px',width:'200px'}}>
                  <img src='./images/lunbo_zijietiaodongjpg.jpg'  style={{
                                                    width: '100%',
                                                    height: '40vh'}}/>
          </div>
          <div style={{height:'160px',width:'200px'}}>
                   <img src='./images/lunbo_huawei.jpg'  style={{
                                                    width: '100%',
                                                    height: '40vh'}}/>
          </div>
        </Carousel>
      </div>
    );
  }
}
