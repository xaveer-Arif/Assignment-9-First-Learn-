import React from "react";
import "./Footer.css";


const Footer = () => {
  return (
    <div>
        <div className="footer-container d-flex justify-content-between">
            <p className="mt-5 ms-5">
                <small>© . All rights reserved.</small>
            </p>
            <div className="col-md-5">
              <div className="right-footer-container ms-5">
                <h3>Sign Up</h3>
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