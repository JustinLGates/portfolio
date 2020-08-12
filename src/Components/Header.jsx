import React, { Component } from "react";
import me from "../Assets/me.jpg";

import node from "../Assets/node.png";
import mongo from "../Assets/mongodblogo.png";
import html from "../Assets/html5logo.png";
import css from "../Assets/css3logo.png";
import csharp from "../Assets/csharplogo.png";
import bootstrap from "../Assets/bootstraplogo.png";
import javascript from "../Assets/javascriptlogo.png";
import vue from "../Assets/vuelogo.png";
import react from "../Assets/reactlogo.png";
import java from "../Assets/javalogo.png";
import redux from "../Assets/reduxlogo.png";
import sql from "../Assets/sqllogo.png";
const Header = () => {
  return (
    <div className="container-fluid text-light">
      <div className="row bg-light index-1 text-center d-flex justify-content-center ">
        <div className="col-12 p-2 m-h-30 spacer-20">
          <h1 className="text-shadow-3 text-dark p-2">
            Justin Gates Software Developer
          </h1>
        </div>

        <div className="col-12 col-lg-6 p-1 py-2  bg-light  p-lg-5 d-flex align-items-center">
          <div className="text-left p-2 p-sm-3 shadow rounded text-shadow bg-dark">
            <h4 className="d-inline p-2 text-shadow-3 px-3  text-light">
              Love for to problem solving, clean code, and learning.
            </h4>
            <p className=" p-2">
              My passion for software development started in 2017. Building
              games as a hobby. After several months i discoverd i could use my
              new skill to make things for work to impove efficientcy. A small
              android app and a bunch of side projects later, I enrolled in a
              fullstackbootcamp. To fill in some skills nessessary to build full
              stack web applications. Can't imagine doing anything other than
              software development for a living.
            </p>
            <p className=" p-2">
              “ Find a job you enjoy doing, and you will never have to work a
              day in your life. ”
            </p>
            <p className=" p-2"> ― Mark Twain</p>
            <div className="col d-flex align-items-center justify-content-center p-3">
              <div className="d-flex justify-content-center align-items-center">
                <div className="pic-container shadow ">
                  <img className="profile-pic " src={me} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-6 p-1 py-2  bg-light   justify-content-center">
          <div className="d-flex flex-column">
            <div className="py-2">
              <img className="w-custom-logo px-2" src={html} alt="" />
              <img className="w-custom-logo " src={css} alt="" />
              <img className="w-custom-logo-1" src={bootstrap} alt="" />
              <img className="w-custom-logo-1" src={javascript} alt="" />
            </div>
            <div className="py-2">
              <img className="w-custom-logo" src={react} alt="" />
              <img className="w-custom-logo" src={redux} alt="" />
              <img className="w-custom-logo" src={vue} alt="" />
              <img className="w-custom-logo" src={node} alt="" />
            </div>
            <div className="py-2">
              <img className="w-custom-logo" src={java} alt="" />
              <img className="w-custom-logo" src={mongo} alt="" />
              <img className="w-custom-logo" src={csharp} alt="" />
              <img className="w-custom-logo" src={sql} alt="" />
            </div>
          </div>
          <div className="pt-5">
            <h4>
              <a href="https://www.canva.com/design/DAEAUdBbbfc/XkFSpDoUP_LS1sOvgkDDuw/view?utm_content=DAEAUdBbbfc&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton">
                Resume
              </a>
            </h4>
          </div>
        </div>
        <div className="col-12 col-sm-6 m-auto">
          <div className="p-2 bg-light text-primary contact-bar">
            <h4 className="p-0 m-0">
              <a
                target="_blank"
                href="https://linkedin.com/in/justin-l-gates"
                className="action"
              >
                <i className="fab fa-linkedin-in py-1 action pg"></i>
              </a>
              <br />
              <a
                target="_blank"
                href="https://github.com/JustinLGates"
                className="action"
              >
                <i className="fab fa-github-square text-dark py-1 action pg"></i>
              </a>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
