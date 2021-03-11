import React, { Component } from "react";
import {} from "../../theme/Menu/Menu.css";
import logo from "../../assets/icon/Vector.svg";
import menubtn from "../../assets/icon/menu.svg";
import { withRouter } from "react-router-dom";
class Menu extends Component {
  toPath(path) {
    this.props.history.push(path);
  }

  handleChange() {
    document.getElementById("toggler").click();
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg nav-menu">
          <div className="container-md">
            <a className="navbar-brand" href="/">
              <img src={logo} alt="..." />
            </a>
            <span
              id="toggler"
              className="navbar-toggler"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <img className="navbar-toggler-icon" src={menubtn} alt="..." />
            </span>
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarNav"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a
                    className="nav-link link-nav"
                    aria-current="page"
                    htmlFor="toggler"
                    onClick={() => {
                      this.toPath("/#section1");
                      this.handleChange();
                    }}
                    href="/#section1"
                  >
                    หน้าหลัก
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link link-nav"
                    htmlFor="toggler"
                    onClick={() => {
                      this.toPath("/#section2");
                      this.handleChange();
                    }}
                    href="/#section2"
                    data-bs-target="#navbarNav"
                  >
                    โครงการทั้งหมด
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link link-nav"
                    htmlFor="toggler"
                    onClick={() => {
                      this.toPath("/#section3");
                      this.handleChange();
                    }}
                    href="/#section3"
                    data-bs-target="#navbarNav"
                  >
                    เกี่ยวกับเรา
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default withRouter(Menu);
