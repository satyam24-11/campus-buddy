import React from "react";
import '../css&js/footer.css'

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="footer-col">
              <h1>Campus Buddy</h1>
              <ul></ul>
            </div>
            <div className="footer-col">
              <h4>About Us</h4>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">How it works</a>
                </li>
                <li>
                  <a href="#">Terms and Conditions</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Contact Us</h4>
              <div className="social-links">
                <ul>
                  <a href="#">
                    <i className="fas fa-envelope"></i>
                  </a>
                  <a href="#">
                    <i className=" fas fa-regular fa-phone"></i>
                  </a>
                </ul>
              </div>
            </div>
            <div className="footer-col">
              <h4>follow us</h4>
              <div className="social-links">
                <a href="#">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-github"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
            <br />
            <hr  />
            <div>
              <h5 className="text-white mt-[10px]">
                © 2023 Axios, Inc. All rights reserved.
              </h5>
            </div>
          </div>
        </div>
        <div className="created-by mb-[31px]">
          <div >
            <h5 className="text-center">Created by Debsourya, Mrittik and Soumargha</h5>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
