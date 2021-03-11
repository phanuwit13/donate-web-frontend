import React, { Component, Fragment } from "react";
import Detail from "../../components/Detail/Detail";
export default class DetailPage extends Component {

  render() {
    return (
      <Fragment>
        <Detail {...this.props} />
      </Fragment>
    );
  }
}
