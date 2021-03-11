import React, { Component, Fragment } from "react";
import Menu from "./container/Menu/index";
import Footer from "./container/Footer/index";
import Header from "./container/Header/index";
import Content from "./container/Content/index";
import About from "./container/about/index";
import Detail from "./container/Detail/index";
import Form from "./container/Form/index";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DetailForm from './pages/form'
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detail: [],
    };
    this.handleSetDetail = this.handleSetDetail.bind(this);
  }
  handleSetDetail(value) {
    this.setState({ detail: value });
    localStorage.setItem("detail", JSON.stringify(value));
  }
  render() {
    return (
      <Fragment>
        <Router>
          <Menu />
          <Switch>
            <Route path="/about">{/* <About /> */}</Route>
            <Route path="/form/:id" component={DetailForm}>
              {/* <Detail {...this.state} />
              <Form {...this.state} /> */}
            </Route>
            <Route path="/">
              <Header />
              <Content {...this.state} action={this.handleSetDetail} />
              <About />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </Fragment>
    );
  }
}
