import React from "react";
import "./Footer.css";
import ReactDOM from "react-dom";

const Footer = () => {
  return (
    <div>
        <div className="footer-container d-flex justify-content-between">
            <p className="mt-5 ms-5">
                <small>Zemez © . All rights reserved.</small>
            </p>
            <div className="col-md-5">
              <div className="right-footer-container">
                <h3>Sign up for the newsletter</h3>
                <input
                  className="footer-input"
                  type="text"
                  placeholder="Enter Email"
                />
                </div>
                    
            </div>
         </div>
    </div>
  );
};

export default Footer;