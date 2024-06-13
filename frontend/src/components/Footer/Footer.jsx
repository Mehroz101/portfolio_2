import React from "react";
import "./Footer.css"
const Footer = () => {
  return (
    <>
      <footer>
          <h1 className="logo">MOJI</h1>
        <div className="footer_nav">
            <ul>
                <li>
                    <a href="">Home</a>
                </li>
                <li>
                    <a href="">About</a>
                </li>
                <li>
                    <a href="">Work</a>
                </li>
                <li>
                    <a href="">Contact</a>
                </li>
            </ul>
        </div>
        <p className="copyright">copyright reserved by <span>MOJI</span> </p>
      </footer>
    </>
  );
};

export default Footer;
