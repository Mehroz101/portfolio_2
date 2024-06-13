import React from "react";
import Navbar from "../components/Navbar/Navbar";
import "./Home.css";
import img from "../assets/mypic.png";
import signature from "../assets/signature.png";
import project from "../assets/project.png";
import blog from "../assets/blog.png";
import services from "../assets/services.png";
import Footer from "../components/Footer/Footer";
const Home = () => {
  return (
    <>
      <Navbar />
      <div className="main_container">
        <div className="container">
          <div className="top">
            <div className="top_left box">
              <div className="top_left_img">
                <img src={img} alt="" />
              </div>
              <div className="top_left_text">
                <h3 className="skill title_head">A WEB DEVELOPER</h3>
                <h1 className="name">Mehroz Farooq</h1>
                <p>I am a MERN STACK developer based in Mian Channu</p>
                <i className="fa-solid fa-arrow-right"></i>
              </div>
            </div>
            <div className="top_right">
              <div className="top_right_feed box">
                <marquee width="100%" direction="left">
                  This is a sample scrolling text that has scrolls texts to the
                  left.
                </marquee>
              </div>
              <div className="top_right_feed_bottom">
                <div className="right_about top_right_bottom box">
                  <div className="img">
                    <img src={signature} alt="" />
                  </div>
                  <div className="bottom_text">
                    <div className="text">
                      <p className="title_head">MORE ABOUT ME</p>
                      <h3 className="title">Credentials</h3>
                    </div>
                    <i className="fa-solid fa-arrow-right"></i>
                  </div>
                </div>
                <div className="right_project top_right_bottom box">
                  <div className="img">
                    <img src={project} alt="" />
                  </div>
                  <div className="bottom_text">
                    <div className="text">
                      <p className="title_head">SHOWCASE</p>
                      <h3 className="title">Projects</h3>
                    </div>
                    <i className="fa-solid fa-arrow-right"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="middle">
            <div className="middle_left box">
              <div className="right_project top_right_bottom">
                <div className="img">
                  <img src={blog} alt="" />
                </div>
                <div className="bottom_text">
                  <div className="text">
                    <p className="title_head">BLOG</p>
                    <h3 className="title">Check this</h3>
                  </div>
                  <i className="fa-solid fa-arrow-right"></i>
                </div>
              </div>
            </div>
            <div className="middle_center box">
              <div className="right_project top_right_bottom">
                <div className="img">
                  <img src={services} alt="" />
                </div>
                <div className="bottom_text">
                  <div className="text">
                    <p className="title_head">SPECIALLIZATION</p>
                    <h3 className="title">Services Offering </h3>
                  </div>
                  <i className="fa-solid fa-arrow-right"></i>
                </div>
              </div>
            </div>
            <div className="middle_right box">
              <div className="right_project top_right_bottom">
                <div className="icons">
                  <i className="fa-brands fa-instagram"></i>
                  <i className="fa-brands fa-github"></i>
                </div>
                <div className="bottom_text">
                  <div className="text">
                    <p className="title_head">STAY WITH ME</p>
                    <h3 className="title">Profile</h3>
                  </div>
                  <i className="fa-solid fa-arrow-right"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom">
            <div className="bottom_left box">
              <div className="bottom_left_1">
                <h1>07</h1>
                <p>Years of Experience</p>
              </div>
              <div className="bottom_left_2">
                <h1>+15</h1>
                <p>Projects Completed</p>
              </div>
              <div className="bottom_left_3">
                <h1>4</h1>
                <p>Clients</p>
              </div>
            </div>
            <div className="bottom_right box">
              <h1>
                Let's <br /> work <span>together</span>
              </h1>
              <i className="fa-solid fa-arrow-right"></i>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
