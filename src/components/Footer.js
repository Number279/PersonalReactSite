import React from "react";
import "./style.default.css";
import "./bootstrap-grid.css";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

export default function Footer(props) {
  return (
    // <section>
    <div className="container text-center section-padding-y">
      <div className="row px-4">
        <div className="col-lg-7 mx-auto">
          <h2
            className={
              props.darkMode
                ? "dark-text text-uppercase mb-0"
                : "text-uppercase mb-0"
            }
          >
            Sawyer Carroll{" "}
          </h2>
          <h6 className="text-primary text-uppercase mb-0 letter-spacing-3">
            Software Developer
          </h6>
          <p className={props.darkMode ? "dark-text my-4" : "text-muted my-4"}>
            I look forward to helping your company achieve its goals.{" "}
          </p>
          <ul className="list-inline mb-0">
            <li className="list-inline-item">
              <a
                className="social-link"
                href="https://www.facebook.com/sawyer.carroll.7"
              >
                <FaFacebookF />
              </a>
            </li>
            <li className="list-inline-item">
              <a
                className="social-link"
                href="https://twitter.com/SawyerCarroll3"
              >
                <FaTwitter />
              </a>
            </li>
            <li className="list-inline-item">
              <a
                className="social-link"
                href="https://www.linkedin.com/in/sawyer-carroll/"
              >
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    // </section>
  );
}
