/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component, Fragment } from "react";
import {} from "../../theme/Content/Content.css";
import { withRouter } from "react-router-dom";
class Content extends Component {
  toPath(path) {
    this.props.history.push(path);
  }
  render() {
    return (
      <Fragment>
        <div className="container box-content" id="section2">
          <div className="box-head-title" >
            <span className="head-title">โครงการทั้งหมด</span>
          </div>
          
        </div>
      </Fragment>
    );
  }
}

export default withRouter(Content);
