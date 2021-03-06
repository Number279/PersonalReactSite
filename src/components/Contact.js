import React from "react";
import "./style.default.css";
import "./bootstrap-grid.css";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaPhone } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { FiLinkedin } from "react-icons/fi";
import { IconContext } from "react-icons/lib";

export default function Contact(props) {
  return (
    <section
      className={props.darkMode ? "dark-background2" : "bg-light"}
      id="contact"
    >
      <div className="container">
        <header className="mb-5 pb-4">
          <p className="font-weight-bold text-primary text-uppercase letter-spacing-3">
            Call me, maybe.
          </p>
          <h2
            className={
              props.darkMode
                ? " dark-text text-uppercase lined"
                : "text-uppercase lined"
            }
          >
            Contact
          </h2>
        </header>
        <div className="row">
          <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
            <a
              className={
                props.darkMode
                  ? "px-4 py-5 text-center contact-item-dark shadow-sm d-block reset-anchor"
                  : "px-4 py-5 text-center contact-item shadow-sm d-block reset-anchor"
              }
              href="https://www.linkedin.com/in/sawyer-carroll/"
            >
              {props.darkMode ? (
                <IconContext.Provider value={{ color: "white", size: "30px" }}>
                  <div>
                    <AiOutlineLinkedin className="fa-2x mb-4" />
                  </div>
                </IconContext.Provider>
              ) : (
                <IconContext.Provider value={{ color: "black", size: "30px" }}>
                  <div>
                    <AiOutlineLinkedin className="fa-2x mb-4" />
                  </div>
                </IconContext.Provider>
              )}
              <h4
                className={
                  props.darkMode
                    ? "dark-text contact-item-title h5 text-uppercase"
                    : "contact-item-title h5 text-uppercase"
                }
              >
                LinkedIn
              </h4>
              <p
                className={
                  props.darkMode
                    ? "dark-text text-small mb-0"
                    : "text-small mb-0"
                }
              >
                LinkedIn Profile Page
              </p>
            </a>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
            <a
              className={
                props.darkMode
                  ? "px-4 py-5 text-center contact-item-dark shadow-sm d-block reset-anchor"
                  : "px-4 py-5 text-center contact-item shadow-sm d-block reset-anchor"
              }
              href="tel:13182868589"
            >
              {props.darkMode ? (
                <IconContext.Provider value={{ color: "white", size: "30px" }}>
                  <div>
                    <FaPhone className="fa-2x mb-4" />
                  </div>
                </IconContext.Provider>
              ) : (
                <IconContext.Provider value={{ color: "black", size: "30px" }}>
                  <div>
                    <FaPhone className="fa-2x mb-4" />
                  </div>
                </IconContext.Provider>
              )}
              <h4
                className={
                  props.darkMode
                    ? "dark-text contact-item-title h5 text-uppercase"
                    : "contact-item-title h5 text-uppercase"
                }
              >
                Phone
              </h4>
              <p
                className={
                  props.darkMode
                    ? "dark-text text-small mb-0"
                    : "text-small mb-0"
                }
              >
                318-286-8589
              </p>
            </a>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
            <a
              className={
                props.darkMode
                  ? "px-4 py-5 text-center contact-item-dark shadow-sm d-block reset-anchor"
                  : "px-4 py-5 text-center contact-item shadow-sm d-block reset-anchor"
              }
              href="https://github.com/Number279/"
            >
              {props.darkMode ? (
                <IconContext.Provider value={{ color: "white", size: "30px" }}>
                  <div>
                    <AiFillGithub className="fa-2x mb-4" />
                  </div>
                </IconContext.Provider>
              ) : (
                <IconContext.Provider value={{ color: "black", size: "30px" }}>
                  <div>
                    <AiFillGithub className="fa-2x mb-4" />
                  </div>
                </IconContext.Provider>
              )}
              <h4
                className={
                  props.darkMode
                    ? "dark-text contact-item-title h5 text-uppercase"
                    : "contact-item-title h5 text-uppercase"
                }
              >
                Github
              </h4>
              <p
                className={
                  props.darkMode
                    ? "dark-text text-small mb-0"
                    : "text-small mb-0"
                }
              >
                GitHub/Number279
              </p>
            </a>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
            <a
              className={
                props.darkMode
                  ? "px-4 py-5 text-center contact-item-dark shadow-sm d-block reset-anchor"
                  : "px-4 py-5 text-center contact-item shadow-sm d-block reset-anchor"
              }
              href="mailto:sawyercarroll@gmail.com"
            >
              {props.darkMode ? (
                <IconContext.Provider value={{ color: "white", size: "30px" }}>
                  <div>
                    <AiOutlineMail className="fa-2x mb-4" />
                  </div>
                </IconContext.Provider>
              ) : (
                <IconContext.Provider value={{ color: "black", size: "30px" }}>
                  <div>
                    <AiOutlineMail className="fa-2x mb-4" />
                  </div>
                </IconContext.Provider>
              )}
              <h4
                className={
                  props.darkMode
                    ? "dark-text contact-item-title h5 text-uppercase"
                    : "contact-item-title h5 text-uppercase"
                }
              >
                Email
              </h4>
              <p
                className={
                  props.darkMode
                    ? "dark-text text-small mb-0"
                    : "text-small mb-0"
                }
              >
                sawyercarroll@gmail.com
              </p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
