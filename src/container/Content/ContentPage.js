import React, { Component, Fragment } from "react";
import Content from "../../components/Contents/Content";
import axios from "axios";
export default class ContentPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  componentDidMount() {
    axios({
      method: "GET",
      url: "https://service-donate.herokuapp.com/api/getdataproject",
    }).then((response) => {
      console.log(response);
      this.setValue(response.data);
    });
  }

  setValue = (data) => {
    this.setState({
      data: data,
    });
  };
  render() {
    return (
      <Fragment>
        <Content {...this.state} {...this.props} />
      </Fragment>
    );
  }
}
