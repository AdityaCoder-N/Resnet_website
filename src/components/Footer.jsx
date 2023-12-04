import React from "react";
import logo from "../assets/Resnet Logo White.png";

import fb from "../assets/facebook-f.svg";
import insta from "../assets/insta.png";
import twitter from '../assets/twitter.png'
import "../static/Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer font-Sg mt-8">
        <div className="footer-section">
          <img src={logo} alt="" className="footer-logo h-[50px]" />
          <div className="footer-description pr-16">
          Elevate your operations, boost efficiency, and embrace the future of technology with AI Consulting Services.
          </div>
        </div>

        <div className="footer-section courses">
          <div className="section-heading">Quick Links</div>
          <div className="footer-item-container">
            <a className="footer-item" href="/">
              Home
            </a>
            <a className="footer-item" href="/about">
              About
            </a>
            <a className="footer-item" href="/caseStudies">
              Case Studies
            </a>
            <a className="footer-item" href="/contact">
              Contact Us
            </a>
          </div>
        </div>

        <div className="footer-section courses">
          <div className="section-heading">Case Studies</div>
          <div className="footer-item-container ">
            <a className="footer-item" href="/caseStudy/documentation">
              Documentation Generation
            </a>
            <a className="footer-item" href="/caseStudy/dataAnalytics">
              Customer Integration
            </a>
            <a className="footer-item" href="/caseStudy/healthcare">
              AI in Healthcare
            </a>
          </div>
        </div>

        <div className="footer-section ">
          {/* <p></p> */}
          <div className="mb-8">To get Frequent Updates on the Company's Vision and Products Dont Forget to Follow us on</div>
          <div className="footer-item-container socials">
            
            <a className="footer-item" href="">
              <img src={insta}></img>
              <div className="social-name">Instagram</div>
            </a>
            
          </div>
        </div>
      </footer>

      <div className="footer-bottom flex flex-col md:flex-row text-[14px]">
        <p> © 2023 Resnet Solutions Private Limited. </p>
        <p> All rights reserved.</p>
      </div>
    </>
  );
};

export default Footer