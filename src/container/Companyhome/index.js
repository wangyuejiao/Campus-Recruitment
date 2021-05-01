import React, { Component } from "react";
import qs from "querystring";
import "./index.css";
import "antd/dist/antd.css";
import CompanyTopNav from "../../components/CompanyTopNav";
import CompanyLeftNav from "../../components/CompanyLeftNav";
import IntroduceCom from "../../components/IntroduceCom";
import RecruitingCom from "../../components/RecruitingCom";
import OfferCom from "../../components/OfferCom";
import FabuCom from "../../components/FabuCom";
import Pass from "../../components/Pass";
import UnPass from "../../components/UnPass";
import ContentCom from "../../components/ContentCom";
import Content from "../../components/Content";
import { Row, Col, Divider, Image, Button, Popover } from "antd";
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";

export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            company: {},
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
                company_id: 1
            }),
        })
            .then((res) => res.json())
            .then((res) => {
                this.setState({
                    company: res.list.company[0],
                });
            })
    }
  render() {
    return (
      <div>
        <CompanyTopNav />
        <Row>
          <Col span={3}>
            <CompanyLeftNav company={this.state.company} />
          </Col>
          <Col span={21}>
            <Switch>
              <Route
                exact
                path="/companyhome/IntroduceCom"
                component={IntroduceCom}
              />
              <Route
                exact
                path="/companyhome/RecruitingCom"
                component={RecruitingCom}
              />
              <Route exact path="/companyhome/OfferCom" component={OfferCom} />
              <Route exact path="/companyhome/FabuCom" component={FabuCom} />
              <Route exact path="/companyhome/Pass" component={Pass} />
              <Route exact path="/companyhome/UnPass" component={UnPass} />
              <Route exact path="/companyhome/UnPass" component={UnPass} />
              <Route
                exact
                path="/companyhome/Pass/ContentCom"
                component={ContentCom}
              />
              <Route
                exact
                path="/companyhome/OfferCom/Content"
                component={Content}
              />
            </Switch>
          </Col>
        </Row>
      </div>
    );
  }
}
