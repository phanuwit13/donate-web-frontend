import React, { Component, Fragment } from "react";
import {} from "../../theme/Header/Header.css";
import headerimage from "../../assets/images/img-cover.svg";
export default class Header extends Component {
  render() {
    return (
      <Fragment>
        <div className="container-fulid box-header">
          <div className="container">
            <div className="row">
              <div className="box-one col-12 col-sm-12 col-md-12 col-lg-7">
                <div className="title">
                  <span>
                    คุณสามารถช่วยคนจำนวนมากได้ เพียงแค่ร่วมบริจาคเงิน
                    เพียงเล็กน้อย
                  </span>
                </div>
              </div>
              <div className="box-mid col-12 col-sm-12 col-md-12 col-lg-7">
                <div className="title">
                  <span>
                    คุณสามารถช่วยคนจำนวนมากได้ เพียงแค่ร่วมบริจาคเงิน
                    เพียงเล็กน้อย
                  </span>
                </div>
                <div className="sub-title">
                  ทุกการบริจาค
                  เราตระหนักว่าการให้เพื่อช่วยเหลือไม่ใช่คำตอบที่ดีที่สุด
                  แต่คำตอบที่ดีสุดคือการพัฒนาคุณภาพชีวิตให้สามารถยืนได้ด้วยตนเอง
                  อย่างมั่นคงและยั่งยืนถาวร
                </div>
                <div>
                  <a
                    href="#section2"
                    type="button"
                    className="btn btn-light head-button"
                  >
                    ร่วมบริจาค
                  </a>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-5">
                <img className="img-head" src={headerimage} alt="..." />
              </div>
              <div className="box-last col-12">
                <div className="sub-title2">
                  ทุกการบริจาค
                  เราตระหนักว่าการให้เพื่อช่วยเหลือไม่ใช่คำตอบที่ดีที่สุด
                  แต่คำตอบที่ดีสุดคือการพัฒนาคุณภาพชีวิตให้สามารถยืนได้ด้วยตนเอง
                  อย่างมั่นคงและยั่งยืนถาวร
                </div>
                <div>
                  <a
                    href="#section2"
                    type="button"
                    className="btn btn-light head-button2"
                  >
                    ร่วมบริจาค
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
