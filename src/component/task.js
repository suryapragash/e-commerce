import React from "react";
import { Link } from "react-router-dom";
function Task() {
  return (
    <section>
      <nav class="navbar navbar-expand-lg navbar-light bg-light container">
        <div class="container-fluid ">
          <div className=" w-25 text-start">
            <a class="navbar-brand" href="#">
              Login
            </a>
          </div>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div className="text-center w-50 ">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <Link to="/">
                  <a class="nav-link " href="#">
                    HOME
                  </a>
                </Link>
              </li>
              <li class="nav-item active">
                <a class="nav-link" href="#">
                  SHOP
                </a>
              </li>
              <li class="nav-item active">
                <a class="nav-link" href="#">
                  PAGES
                </a>
              </li>
              <li class="nav-item active">
                <Link to="/cart">
                  <a class="nav-link active text-decoration-none" href="#">
                    <h4>Onii</h4>
                  </a>
                </Link>
              </li>
              <li class="nav-item active">
                <a class="nav-link" href="#">
                  Blog
                </a>
              </li>
              <li class="nav-item active">
                <a class="nav-link" href="#">
                  LOOKBOOK
                </a>
              </li>
              <li class="nav-item active">
                <a class="nav-link" href="#">
                  CONTACT
                </a>
              </li>
            </ul>
          </div>
          <div className="justify-content-end w-25">
            <ul class="navbar-nav">
              <li className="nav-item active p-2">
                <a className="nav-link" href="#">
                  <i class="fa-regular fa-circle-user"></i>
                </a>
              </li>
              <li className="nav-item active p-2">
                <a className="nav-link " href="#">
                  <i class="fa-brands fa-searchengin"></i>
                </a>
              </li>
              <li className="nav-item active p-2">
                <a className="nav-link " href="#">
                  <i class="fa-regular fa-heart"></i>
                </a>
              </li>
              <li className="nav-item active p-2">
                <Link to="/out">
                  <a className="nav-link" href="#">
                    <i class="fa-regular fa-bag-shopping"></i>
                    <span></span>
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <br />
      <br />
    </section>
  );
}
export default Task;
