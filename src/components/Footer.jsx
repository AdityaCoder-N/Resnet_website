import React from "react";
import logo from "../assets/Resnet Logo White.png";

import fb from "../assets/fb.png";
import insta from "../assets/insta.png";
import twitter from '../assets/twitter.png'
import "../static/Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer font-Sg mt-8">
        <div className="footer-section">
          <img src={logo} alt="" className="footer-logo h-[50px]" />
          <div className="footer-description md:w-[250px]">
          Elevate your operations, boost efficiency, and embrace the future of technology with AI Consulting Services.
          </div>
        </div>

        <div className="footer-section courses">
          <div className="section-heading">Quick Links</div>
          <div className="footer-item-container">
            <a className="footer-item" href="/">
              Home
            </a>
            <a className="footer-item" href="/">
              Services
            </a>
            <a className="footer-item" href="/">
              About
            </a>
            <a className="footer-item" href="/">
              Case Studies
            </a>
            <a className="footer-item" href="/">
              Contact Us
            </a>
          </div>
        </div>

        <div className="footer-section courses">
          <div className="section-heading">Case Studies</div>
          <div className="footer-item-container ">
            <a className="footer-item" href="/">
              Effects of AI
            </a>
            <a className="footer-item" href="/about">
              AI Integration
            </a>
            <a className="footer-item" href="/contact">
              Document Automation
            </a>
            <a className="footer-item" href="/">
              AI Scheduler
            </a>
          </div>
        </div>

        <div className="footer-section ">
          <div className="section-heading">Follow us on</div>
          <div className="footer-item-container socials">
            <a className="footer-item" href="/">
              <img src={fb}></img>
              <div className="social-name">Facebook</div>
            </a>
            <a className="footer-item" href="">
              <img src={insta}></img>
              <div className="social-name">Instagram</div>
            </a>
            <a className="footer-item" href="">
              <img src={twitter}></img>
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