import React from "react";
import "./Contact.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="contact">
        <div className="contact_left">
          <div className="contact_left_top">
            <p className="info_heading">CONTACT INFO</p>
            <div className="contact_info">
              <div className="contact_email">
                <i class="fa-solid fa-envelope"></i>
                <div className="email_info">
                  <p className="title">MAIL INFO</p>
                  <p className="text">mehrozfarooq127@gmail.com</p>
                  <p className="text">mehrozfarooq128@gmail.com</p>
                </div>
              </div>
              <div className="contact_number">
                <i class="fa-solid fa-phone"></i>
                <div className="number_info">
                  <p className="title">CONTACT US</p>
                  <p className="text">+923061756719</p>
                  <p className="text">+923489056719</p>
                </div>
              </div>
              <div className="contact_address">
                <i class="fa-solid fa-location-dot"></i>
                <div className="address_info">
                  <p className="title">Location</p>
                  <p className="text">Chungi No. 06, Gulgusht Colony, Multan</p>
                </div>
              </div>
            </div>
          </div>
          <div className="contact_left_bottom">
            <p className="info_heading">SOCIAL INFO</p>
            <div className="contact_social_icon">
              <i class="fa-brands fa-instagram"></i>
              <i class="fa-brands fa-github"></i>
              <i class="fa-brands fa-whatsapp"></i>
            </div>
          </div>
        </div>
        <div className="contact_right">
          <h1 className="contact_head">
            Let's work <span>together</span>
          </h1>
          <div className="contact_form">
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Subject" />
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Message"
            ></textarea>
            <input type="submit" className="btn" value="Send" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
