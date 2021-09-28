import React from "react";
import "./Header.css";

function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light header_bar">
        <div className="container-fluid">
          {/* <a className="navbar-brand" href="/">
            <strong>clearJobs</strong>
          </a> */}
          <a className="navbar-brand" href="/">
            <img id="header_logo" src="clearJob_Logo.jpeg" alt="" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul id="content-toright" className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item dropdown header_item">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Topics
                </a>
                <div
                  className="dropdown-content"
                  aria-labelledby="navbarDropdown"
                >
                  <a className="dropdown-item" href="/">
                    BUSINESS ANALYST
                  </a>
                  <a className="dropdown-item" href="/">
                    PRODUCT ANALYST
                  </a>
                  <a className="dropdown-item" href="/">
                    DATA ANALYST
                  </a>
                  <a className="dropdown-item" href="/">
                    PRODUCT MANAGER
                  </a>
                  <a className="dropdown-item" href="/">
                    CATEGORY MANAGER
                  </a>
                </div>
              </li>
              <li className="nav-item dropdown header_item">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Mocks
                </a>
                <div
                  className="dropdown-content"
                  aria-labelledby="navbarDropdown"
                >
                  <a className="dropdown-item" href="/">
                    COMPANY SPECIFIC
                  </a>
                  <a className="dropdown-item" href="/">
                    SQL QUESTIONS(MCQ)
                  </a>
                  <a className="dropdown-item" href="/">
                    SQL ADVANCE
                  </a>
                  <a className="dropdown-item" href="/">
                    EXCEL (BEGINNER)
                  </a>
                  <a className="dropdown-item" href="/">
                    EXCEL ADVANCE
                  </a>
                  <a className="dropdown-item" href="/">
                    PYTHON (BEGINNER)
                  </a>
                  <a className="dropdown-item" href="/">
                    PYTHON ADVANCE
                  </a>
                </div>
              </li>
              <li className="nav-item header_item">
                <a className="nav-link active" aria-current="page" href="/">
                  About
                </a>
              </li>
            </ul>
            <div className="mx-2">
              <button
                className="btn btn-danger mx-1"
                data-toggle="modal"
                data-target="#loginModal"
              >
                Login
              </button>
              <button
                className="btn btn-danger mx-1"
                data-toggle="modal"
                data-target="#signupModal"
              >
                SignUp
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
