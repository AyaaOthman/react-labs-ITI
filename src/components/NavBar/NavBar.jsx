import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import logo from "../../images/logo.png";

export default function NavBar() {
  return (
    <>
      <nav className=" navbar navbar-expand-lg bg-violet fixed top-0 left-0">
        <div className="container">
          <Link className="navbar-brand" to={"home"}>
            <img src={logo} alt="" className="logo w-75" />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse d-flex justify-content-center align-items-center"
            id="navbarTogglerDemo02"
          >
            <ul className="navbar-nav mr-auto gap-4 mx-4 text-white">
              <li className="nav-item py-3  px-1  ">
                <Link className="nav-link text-white " to={"home"}>
                  Home
                </Link>
              </li>
              <li className="nav-item py-3 " px-1>
                <Link className="nav-link text-white" to={"about"}>
                  About Party
                </Link>
              </li>
              <li className="nav-item py-3 " px-1>
                <Link className="nav-link text-white" to={"artist"}>
                  Artist
                </Link>
              </li>
              <li className="nav-item py-3 " px-1>
                <Link className="nav-link text-white" to={"gallery"}>
                  Gallery
                </Link>
              </li>
              <li className="nav-item py-3 " px-1>
                <Link className="nav-link text-white" to={"testimonial"}>
                  Testimonial
                </Link>
              </li>
              <li className="nav-item py-3 " px-1>
                <Link className="nav-link text-white" to={"contact"}>
                  Contact
                </Link>
              </li>
            </ul>
            <div className="d-flex justify-content-between align-items-center">
              <FontAwesomeIcon
                icon={faCirclePlay}
                style={{ color: "#f7ea66" }}
                size="2xl"
              />
              <button className="btn bg-yellow text-violet rounded-5 ms-5  px-4 py-2  ">
                <span className="h4"> Get a Ticket</span>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
