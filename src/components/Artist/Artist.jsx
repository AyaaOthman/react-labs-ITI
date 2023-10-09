import React from "react";
import style from "./Artist.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

export default function Artist() {
  return (
    <div className="bg-violet  d-flex justify-content-center vh-100">
      <div class="container d-flex  flex-column align-items-center ">
        <h2 className="text-yellow my-4">Our Halloween's Artist</h2>
        <div className="row mt-5 ">
          <div class="col-lg-6 col-md-12 ">
            <div className="container d-flex justify-content-center align-items-center ">
              <div
                className={[style.card, style.bgNone].join(" ")}
                style={{ width: 500 }}
              >
                <div className="row ">
                  <div className="col-sm-5">
                    <img
                      className="card-img"
                      src={"images/artist-image.png"}
                      alt="Suresh Dasari Card"
                    />
                  </div>
                  <div className="col-sm-7">
                    <div className="card-body">
                      <h5 className="card-title">DJ Remerson Huke</h5>
                      <h6>Lead DJ On Deadpoll</h6>
                      <p className="card-text">
                        Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing
                        Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore.
                      </p>
                    </div>
                    <section className="mb-4">
                      <a
                        className="btn   btn-floating m-1 "
                        href="#!"
                        role="button"
                      >
                        <FontAwesomeIcon
                          icon={faFacebook}
                          size="lg"
                          style={{ color: "#f7ea66" }}
                        />
                      </a>
                      <a
                        className="btn btn-floating m-1"
                        href="#!"
                        role="button"
                      >
                        <FontAwesomeIcon
                          icon={faTwitter}
                          size="lg"
                          style={{ color: "#f7ea66" }}
                        />
                      </a>
                      {/* Google */}
                      <a
                        className="btn btn-floating m-1"
                        href="#!"
                        role="button"
                      >
                        <FontAwesomeIcon
                          icon={faInstagram}
                          size="lg"
                          style={{ color: "#f7ea66" }}
                        />
                      </a>
                      {/* Instagram */}
                      <a
                        className="btn btn-floating m-1"
                        href="#!"
                        role="button"
                      >
                        <FontAwesomeIcon
                          icon={faLinkedin}
                          size="lg"
                          style={{ color: "#f7ea66" }}
                        />
                      </a>
                      {/* Linkedin */}
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-md-12 ">
            <div className="container d-flex justify-content-center align-items-center ">
              <div
                className={[style.card, style.bgNone].join(" ")}
                style={{ width: 500 }}
              >
                <div className="row ">
                  <div className="col-sm-5">
                    <img
                      className="card-img"
                      src={"images/artist-image.png"}
                      alt="Suresh Dasari Card"
                    />
                  </div>
                  <div className="col-sm-7">
                    <div className="card-body">
                      <h5 className="card-title">DJ Remerson Huke</h5>
                      <h6>Lead DJ On Deadpoll</h6>
                      <p className="card-text">
                        Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing
                        Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore.
                      </p>
                    </div>
                    <section className="mb-4">
                      <a
                        className="btn   btn-floating m-1 "
                        href="#!"
                        role="button"
                      >
                        <FontAwesomeIcon
                          icon={faFacebook}
                          size="lg"
                          style={{ color: "#f7ea66" }}
                        />
                      </a>
                      <a
                        className="btn btn-floating m-1"
                        href="#!"
                        role="button"
                      >
                        <FontAwesomeIcon
                          icon={faTwitter}
                          size="lg"
                          style={{ color: "#f7ea66" }}
                        />
                      </a>
                      {/* Google */}
                      <a
                        className="btn btn-floating m-1"
                        href="#!"
                        role="button"
                      >
                        <FontAwesomeIcon
                          icon={faInstagram}
                          size="lg"
                          style={{ color: "#f7ea66" }}
                        />
                      </a>
                      {/* Instagram */}
                      <a
                        className="btn btn-floating m-1"
                        href="#!"
                        role="button"
                      >
                        <FontAwesomeIcon
                          icon={faLinkedin}
                          size="lg"
                          style={{ color: "#f7ea66" }}
                        />
                      </a>
                      {/* Linkedin */}
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
