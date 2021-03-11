import React, { Component, Fragment } from "react";
import {} from "../../theme/Detail/Detail.css";
import { withRouter } from "react-router-dom";
import axios from "axios";
class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  componentDidMount() {
    let { match } = this.props;
    axios({
      method: "GET",
      url: "/api/getdataproject/" + match.params.id,
    })
      .then((response) => {
        console.log(response);
        this.setValue(response.data[0]);
      })
      .catch((err) => console.error(err));
  }

  setValue = (value) => {
    this.setState({
      data: value,
    });
  };
  render() {
    return (
      <Fragment>
        <div className="detail-box">
          <div className="detail-content">
            <div className="detail-head">
              <div className="detail-title2">
                <span>ชื่อโครงการ</span>
              </div>
              <div className="detail-name2">
                <span>{this.state.data.title}</span>
              </div>
            </div>
            <div className="detail-left">
              <img
                className="img-detail"
                src={
                  "https://service-donate.herokuapp.com/images/project-img/sub-img/" +
                  this.state.data["sub-img1"]
                }
                alt="..."
              />
              <img
                className="img-detail"
                src={
                  "https://service-donate.herokuapp.com/images/project-img/sub-img/" +
                  this.state.data["sub-img2"]
                }
                alt="..."
              />
            </div>
            <div className="detail-right">
              <div className="detail-title">
                <span>ชื่อโครงการ</span>
              </div>
              <div className="detail-name">
                <span>{this.state.data.title}</span>
              </div>
              <div className="detail-detail">
                <pre>{this.state.data.detail}</pre>
              </div>
              <div>
                <a
                  href="#donate"
                  type="button"
                  className="btn btn-light detail-button"
                >
                  ร่วมบริจาค
                </a>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default withRouter(Detail);
