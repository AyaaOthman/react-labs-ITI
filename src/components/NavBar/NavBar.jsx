import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import style from "./NavBar.module.css";

export default function NavBar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Navbar
        expand="lg"
        className=" navbar navbar-expand-lg bg-violet  top-0 left-0 z-1"
      >
        <Container>
          <Link className="navbar-brand" to={""}>
            <img src={"images/logo.png"} alt="" className="logo w-75" />
          </Link>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="bg-yellow"
          />
          <Navbar.Collapse id="basic-navbar-nav" className="text-white">
            <Nav className=" d-flex justify-content-center align-items-center ms-auto">
              <ul className="navbar-nav mr-auto gap-4 mx-4 text-white">
                <li className="nav-item py-3  px-1  ">
                  <Link className="nav-link text-white " to={""}>
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
              </ul>
              <div className="d-flex justify-content-between align-items-center">
                <FontAwesomeIcon
                  icon={faCirclePlay}
                  style={{ color: "#f7ea66" }}
                  size="2xl"
                />
                <button
                  onClick={handleShow}
                  className="btn bg-yellow text-violet rounded-5 ms-5  px-4 py-2  "
                >
                  <span className="h4"> Get a Ticket</span>
                </button>
              </div>
            </Nav>
          </Navbar.Collapse>
          <Modal show={show} onHide={handleClose}>
            <Modal.Body className={[style.bgImage]}>
              <img src="./images/popup-ticket.png" className="w-100" alt="" />{" "}
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Body>
          </Modal>
        </Container>
      </Navbar>
    </>
  );
}
