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
          <div className="row">
            {this.props.data?.map((value, index) => {
              return (
                <div key={index} className="col-12 col-sm-12 col-lg-6 col-xl-4">
                  <div className="card">
                    <img
                      src={
                        "https://service-donate.herokuapp.com/images/project-img/" + value.img
                      }
                      className="card-img-top img-content rounded-bottom"
                      alt=""
                    />
                    <div className="card-body">
                      <h5 className="card-title">{value.title}</h5>
                      <p className="card-text">{value.detail}</p>
                      {/* <div className='card-footer bg-transparent border-success'>Footer</div> */}
                    </div>
                    <div className="footer-card nav justify-content-center">
                      <a
                        type="button"
                        className="btn btn-light donate-btn"
                        onClick={() => {
                          this.toPath("form/"+index);
                          this.props.action(value)
                        }}
                      >
                        ร่วมบริจาค
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Fragment>
    );
  }
}

export default withRouter(Content);
