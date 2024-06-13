import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import mypic from "../../assets/mypic.png";
import signature from "../../assets/signature.png";
import "./About.css";
const About = () => {
  return (
    <>
      <Navbar />
      <div className="about">
        <div className="about_top">
          <div className="about_top_left">
            <img src={mypic} alt="" />
          </div>
          <div className="about_top_right">
            <h1 className="summary_title">My Summary</h1>
            <div className="top_right_text">
              <h1>Mehroz Farooq</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
                impedit, iure error architecto magni accusantium facilis a
                excepturi aliquam nihil repudiandae cupiditate voluptatibus, hic
                molestiae assumenda vitae fugiat! Magni, nemo!
              </p>
            </div>
          </div>
        </div>
        <div className="about_middle">
          <div className="about_middle_left">
            <h1 className="box_heading">EXPERIENCE</h1>
            <div className="text_box">
              <p className="year">2020 - 2021</p>
              <h2 className="skill">Full Stack Web Developer</h2>
              <p className="skill_name">Mux Institute</p>
            </div>
            <div className="text_box">
              <p className="year">2023 - 2024</p>
              <h2 className="skill">MERN Stack Developer</h2>
              <p className="skill_name">Emerson University Projects </p>
            </div>
          </div>
          <div className="about_middle_right">
            <h1 className="box_heading">EXPERIENCE</h1>
            <div className="text_box">
              <p className="year">2020 - 2021</p>
              <h2 className="skill">Full Stack Web Developer</h2>
              <p className="skill_name">Mux Institute</p>
            </div>
            <div className="text_box">
              <p className="year">2023 - 2024</p>
              <h2 className="skill">MERN Stack Developer</h2>
              <p className="skill_name">Emerson University Projects </p>
            </div>
          </div>
        </div>
        <div className="about_bottom">
          <div className="about_bottom_left">
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
          <div className="about_bottom_middle">
            <h1>
              Let's <br /> work <span>together</span>
            </h1>
            <i className="fa-solid fa-arrow-right"></i>
          </div>
          <div className="about_bottom_right">
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
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
