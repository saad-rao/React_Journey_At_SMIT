import React from "react"
import "./Footer.css"
import { FaFacebookF, FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

const Footer = () => {

    return (
        <div>
<footer className="site-footer">
      <div className="container">
        <div className="footer-row">
          <div className="footer-col about-col">
            <h6>About</h6>
            <p className="text-justify">
              ShopEasy <i>SHOPING WANTS TO BE SIMPLE </i> is an initiative to help the upcoming E-commerce with the code. ShopEasy focuses on providing the most efficient products or stuff. We will help customers build up concepts in different products that include T-Shirts, Mens Cotton Jacket, laptop, Mens Casual Slim Fit, Rain Jacket Women, Opna Women's Short Sleeve Moisture, and DANVOUY Womens T Shirt Casual Cotton Short.
            </p>
          </div>

          <div className="footer-col">
            <h6>Categories</h6>
            <ul className="footer-links">
              <li><a href="#">Men’s Fashion</a></li>
              <li><a href="#">Women’s Fashion</a></li>
              <li><a href="#">Electronics</a></li>
              <li><a href="#">Beauty & Personal Care</a></li>
              <li><a href="#">Home & Living</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h6>Quick Links</h6>
            <ul className="footer-links">
              <li><a href="http://scanfcode.com/about/">About Us</a></li>
              <li><a href="http://scanfcode.com/contact/">Contact Us</a></li>
              <li><a href="http://scanfcode.com/contribute-at-scanfcode/">Contribute</a></li>
              <li><a href="http://scanfcode.com/privacy-policy/">Privacy Policy</a></li>
              <li><a href="http://scanfcode.com/sitemap/">Sitemap</a></li>
            </ul>
          </div>
        </div>
        <hr />
      </div>
      <div className="container">
        <div className="footer-row">
          <div className="footer-col copyright-col">
            <p className="copyright-text">
              Copyright © 2017 All Rights Reserved.<br /><br />
              <a href="https://github.com/saad-rao">
                Made with <FaHeart className="heart-icon" /> by Saad Naseem
              </a>.
            </p>
          </div>

          <div className="footer-col social-col">
            <ul className="social-icons">
              <li>
                <a className="facebook" href="#"><FaFacebookF /></a>
              </li>
              <li>
                <a className="twitter" href="https://x.com/Saad_X_0_0"><FaTwitter /></a>
              </li>
              <li>
                <a className="github" href="https://github.com/saad-rao"><FaGithub /></a>
              </li>
              <li>
                <a className="linkedin" href="https://www.linkedin.com/in/saad-naseem-99651a2b4/"><FaLinkedin /></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
        </div>
    )
}

export default Footer;