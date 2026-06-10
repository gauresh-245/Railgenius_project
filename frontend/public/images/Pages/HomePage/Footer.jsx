import React from 'react'
import "font-awesome/css/font-awesome.min.css";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <div className="footer-class">
        <div className="main">
          <div className="footer">
            <div className="single_footer">
              <h4>About Us</h4>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime
                possimus temporibus eligendi veniam dignissimos eius tempore
                enim perspiciatis blanditiis, ea fuga officiis cumque sapiente
                non voluptatibus quasi! Ad, dolor a.
              </p>
              <div className="footer-social">
                <a href="#">
                  <i className="fab fa-facebook-f common"></i>
                </a>
                <a href="#">
                  <i className="fab fa-instagram common"></i>
                </a>
                <a href="#">
                  <i className="fab fa-twitter common"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-linkedin common"></i>
                </a>
              </div>
            </div>

            <div className="single_footer">
              <h4>Main Menu</h4>
              <ul>
                <p>
                  <li className="Nav_link_Footer">
                    <i className="fa-solid fa-chevron-right"></i>
                    <a className="Nav_Tag_Footer" href="#">
                      Home
                    </a>
                  </li>
                </p>

                <p>
                  <li className="Nav_link_Footer">
                    <i className="fa-solid fa-chevron-right"></i>
                    <a className="Nav_Tag_Footer" href="#">
                      About Us
                    </a>
                  </li>
                </p>
                <li className="Nav_link_Footer">
                  <i className="fa-solid fa-chevron-right"></i>
                  <a className="Nav_Tag_Footer" href="#">
                    Services
                  </a>
                </li>

                <li className="Nav_link_Footer">
                  <i className="fa-solid fa-chevron-right"></i>
                  <a className="Nav_Tag_Footer" href="#">
                    Gallery
                  </a>
                </li>

                <li className="Nav_link_Footer">
                  <i className="fa-solid fa-chevron-right"></i>
                  <a className="Nav_Tag_Footer" href="#">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div className="single_footer">
              <h4>Quick Links</h4>
              <ul>
                <li className="Nav_link_Footer">
                  <i className="fa-solid fa-chevron-right"></i>
                  <a className="Nav_Tag_Footer" href="#">
                    Privacy
                  </a>
                </li>

                <li className="Nav_link_Footer">
                  <i className="fa-solid fa-chevron-right"></i>
                  <a className="Nav_Tag_Footer" href="#">
                    Terms & Conditions
                  </a>
                </li>

                <li className="Nav_link_Footer">
                  <i className="fa-solid fa-chevron-right"></i>
                  <a className="Nav_Tag_Footer" href="#">
                    Disclaimer
                  </a>
                </li>
              </ul>
            </div>

            <div className="single_footer">
              <h4>Contact Us</h4>
              <ul>
                <li className="Nav_link_Footer">
                  <i className="fa-solid fa-location-dot"></i>
                  <a className="Nav_Tag_Footer" href="#">
                    North Street, Sydney, Australia
                  </a>
                </li>

                <li className="Nav_link_Footer">
                  <i className="fa-solid fa-phone"></i>
                  <a className="Nav_Tag_Footer" href="#">
                    +88 0123 56 789
                  </a>
                </li>

                <li className="Nav_link_Footer">
                  <i className="fa-solid fa-envelope"></i>
                  <a
                    className="Nav_Tag_Footer"
                    href="mailto:gaureshpadave1811@gmail.com"
                  >
                    gaureshpadave1811@gmail.com
                  </a>
                </li>

                <li className="Nav_link_Footer">
                  <i className="fa-solid fa-globe"></i>
                  <a className="Nav_Tag_Footer" href="http://www.demo.com">
                    www.demo.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="copy">
          <p className='para56'>&copy; 2020 all right reserved</p>
        </div>
      </div>
    </div>
  );
}

export default Footer
