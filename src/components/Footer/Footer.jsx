import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="bg-violet text-center text-white  ">
      <h2 className="text-yellow">Signup for Newsletter</h2>
      <section className>
        <form action>
          <div className="row d-flex justify-content-center">
            <div className="col-md-5 col-12">
              <div className="form-outline form-white mb-2 d-flex align-items-center justify-content-center">
                <input
                  type="email"
                  id="form5Example21"
                  className="form-control bg-violet text-white"
                  placeholder="your email address here"
                />
                <button
                  type="submit"
                  className="btn bg-yellow text-violet rounded-end-5"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </form>
      </section>
      <div className="container p-1">
        <section className="mb-2">
          <a
            className="btn  btn-outline-light  btn-floating m-1 "
            href="#!"
            role="button"
          >
            <FontAwesomeIcon icon={faFacebook} size="lg" />
          </a>
          <a
            className="btn btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
          >
            <FontAwesomeIcon icon={faTwitter} size="lg" />
          </a>
          {/* Google */}
          <a
            className="btn btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
          >
            <FontAwesomeIcon icon={faInstagram} size="lg" />
          </a>
          {/* Instagram */}
          <a
            className="btn btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
          >
            <FontAwesomeIcon icon={faLinkedin} size="lg" />
          </a>
          {/* Linkedin */}
          <a
            className="btn btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
          >
            <FontAwesomeIcon icon={faGithub} size="lg" />{" "}
          </a>
        </section>
      </div>
      {/* Copyright */}
      <div
        className="text-center p-1"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2023 Copyright
      </div>
      {/* Copyright */}
    </footer>
  );
}
