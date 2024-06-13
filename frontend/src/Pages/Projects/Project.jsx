import React from "react";
import "./Project.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import projectpic from "../../assets/projectpic.png";
const Project = () => {
  return (
    <>
      <Navbar />
      <div className="project">
        <div className="project_left">
          <div className="project_box">
            <div className="box_img">
              <img src={projectpic} alt="" />
            </div>
            <div className="box_bottom">
              <div className="box_text">
                <p className="title_head">WEB DESIGNING</p>
                <h3 className="title">Dynamic</h3>
              </div>
              <i className="fa-solid fa-arrow-right"></i>
            </div>
          </div>
          <div className="project_box">
            <div className="box_img">
              <img src={projectpic} alt="" />
            </div>
            <div className="box_bottom">
              <div className="box_text">
                <p className="title_head">WEB DESIGNING</p>
                <h3 className="title">Dynamic</h3>
              </div>
              <i className="fa-solid fa-arrow-right"></i>
            </div>
          </div>
        </div>
        <div className="project_right">
          <h1 className="project_right_heading">All Projects</h1>
          <div className="project_right_container">
            <div className="project_box">
              <div className="box_img">
                <img src={projectpic} alt="" />
              </div>
              <div className="box_bottom">
                <div className="box_text">
                  <p className="title_head">WEB DESIGNING</p>
                  <h3 className="title">Dynamic</h3>
                </div>
                <i className="fa-solid fa-arrow-right"></i>
              </div>
            </div>
            <div className="project_box">
              <div className="box_img">
                <img src={projectpic} alt="" />
              </div>
              <div className="box_bottom">
                <div className="box_text">
                  <p className="title_head">WEB DESIGNING</p>
                  <h3 className="title">Dynamic</h3>
                </div>
                <i className="fa-solid fa-arrow-right"></i>
              </div>
            </div>
            <div className="project_box">
              <div className="box_img">
                <img src={projectpic} alt="" />
              </div>
              <div className="box_bottom">
                <div className="box_text">
                  <p className="title_head">WEB DESIGNING</p>
                  <h3 className="title">Dynamic</h3>
                </div>
                <i className="fa-solid fa-arrow-right"></i>
              </div>
            </div>
            <div className="project_box">
              <div className="box_img">
                <img src={projectpic} alt="" />
              </div>
              <div className="box_bottom">
                <div className="box_text">
                  <p className="title_head">WEB DESIGNING</p>
                  <h3 className="title">Dynamic</h3>
                </div>
                <i className="fa-solid fa-arrow-right"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Project;
