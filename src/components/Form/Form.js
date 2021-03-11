import React, { Component, Fragment } from "react";
import {} from "../../theme/Form/Form.css";
import full from "../../assets/button/full.svg";
import qr from "../../assets/button/qr.svg";
import axios from "axios";
import Swal from "sweetalert2";
import { withRouter } from "react-router-dom";
class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      merchant_id: "",
      order_id: "",
      amount: "",
      url_redirect: "",
      url_notify: "",
      payment_description: "",
      currency: "",
      promotion: "",
      reference_1: "",
      reference_2: "",
      reference_3: "",
      reference_4: "",
      reference_5: "",
      payment_type: "",
      customer_email: "",
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
    // this.setValue();
  }
  onSiteChanged(e) {
    console.log(this.state);
    var merchant_id = "";
    if (e.target.value === "QR_PP_TAG30") {
      merchant_id = this.state.data.merchant_id_qr;
    } else {
      merchant_id = this.state.data.merchant_id_full;
    }
    this.setState({
      payment_type: e.target.value,
      merchant_id: merchant_id,
    });
  }
  setValue = (value) => {
    this.setState({
      data: value,
    });
  };
  onSubmit = (e) => {
    e.preventDefault();
    var results = e.target;
    let order_id = Math.floor(Math.random() * 1e16);
    this.setState(
      {
        order_id: order_id,
      },
      () => {
        console.log(results.amount.value);
        axios({
          method: "POST",
          url: "/api/senddonation",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          data: {
            merchant_id: this.state.merchant_id,
            order_id: Math.floor(Math.random() * 1e16).toString(),
            amount: results.amount.value,
            payment_description: "",
            currency: "THB",
            promotion: "",
            reference_1: "",
            reference_2: "",
            reference_3: "",
            reference_4: "",
            reference_5: "",
            payment_type: results.payment_type.value,
            customer_email: results.customer_email.value,
          },
          maxRedirects: 0,
          validateStatus: (status) => status >= 200 && status <= 302,
        })
          .then((response) => {
            console.log(response);
            if (response.data.res_code) {
              window.location.href = response.data.redirectUrl;
            } else {
              Swal.fire("Error", "request failed !", "error");
            }
          })
          .catch((err) => console.error(err));
      }
    );
  };
  render() {
    return (
      <Fragment>
        <div className="form-main">
          <div className="form-content" id="donate">
            <div className="form-box1">
              <div className="detail-form-content">
                <div>
                  <div className="donate-title-form">
                    บริจาคให้ {this.state.data?.title}
                  </div>
                  <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                      <label className="group-label">
                        ระบุจำนวนเงินที่บริจาค (บาท)
                      </label>
                      <input
                        type="text"
                        name="amount"
                        className="form-control"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label className="group-label">
                        เลือกช่องทางบริจาคเงิน
                      </label>
                    </div>
                    <div className="row">
                      <div className="col-lg-6 box-left">
                        <input
                          type="radio"
                          className="btn-check"
                          name="payment_type"
                          id="success-outlined"
                          value="QR_PP_TAG30"
                          checked={this.state.payment_type === "QR_PP_TAG30"}
                          onChange={this.onSiteChanged.bind(this)}
                          autoComplete="off"
                          required
                        />
                        <label htmlFor="success-outlined">
                          <img
                            className={
                              this.state.payment_type === "QR_PP_TAG30"
                                ? "imgactive img-btn"
                                : "img-btn"
                            }
                            htmlFor="success-outlined"
                            src={qr}
                            alt=""
                          />
                        </label>
                      </div>
                      <div className="col-lg-6 box-right">
                        <input
                          type="radio"
                          className="btn-check"
                          name="payment_type"
                          id="danger-outlined"
                          value="FULL"
                          checked={this.state.payment_type === "FULL"}
                          onChange={this.onSiteChanged.bind(this)}
                          autoComplete="off"
                          required
                        />
                        <label htmlFor="danger-outlined">
                          <img
                            className={
                              this.state.payment_type === "FULL"
                                ? "imgactive img-btn"
                                : "img-btn"
                            }
                            htmlFor="danger-outlined"
                            src={full}
                            alt=""
                          />
                        </label>
                      </div>
                    </div>
                    <div className="form-group">
                      <h3 className="group-label mb-5">
                        ระบุข้อมูลผู้บริจาคเงิน
                      </h3>
                      <label className="sub-label">ชื่อ - นามสกุล</label>
                      <input
                        type="text"
                        name="customer_name"
                        className="form-control"
                      />
                      <label className="sub-label">อีเมล</label>
                      <input
                        type="text"
                        name="customer_email"
                        className="form-control"
                      />
                      <label
                        type="text"
                        name="customer_phone"
                        className="sub-label"
                      >
                        เบอร์โทรศัพท์มือถือ
                      </label>
                      <input className="form-control" />
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault"
                      >
                        ต้องการใบกำกับภาษี
                      </label>
                    </div>
                    <button
                      className="btn btn-light btn-lg btn-block btn-donate mx-auto  mt-5"
                      type="submit"
                    >
                      ร่วมบริจาค
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="form-box2" />
            <div className="form-box3" />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default withRouter(Form);
