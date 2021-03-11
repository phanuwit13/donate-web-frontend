import React, { Component, Fragment } from "react";
import footericon from "../../assets/icon/footericon.svg";
import {} from '../../theme/Footer/Footer.css'
export default class Footer extends Component {
  render() {
    return (
      <Fragment>
        <nav className="footer-content">
          <div className="container-fluid box-footer">
            <a className=".footer-brand" href="/">
              <img className="footer-img" src={footericon} alt="..." />
            </a>
            <div className="copy-rights" href="#">
              <div className="nav justify-content-end">
                © 2021 Digio Thailand All Rights Reserved
              </div>
            </div>
          </div>
        </nav>
      </Fragment>
    );
  }
}
