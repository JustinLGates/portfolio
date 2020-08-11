import React, { Component } from "react";
import me from "../Assets/me.jpg";

import node from "../Assets/node.png";
import mongo from "../Assets/mongodblogo.png";
import html from "../Assets/html5logo.png";
import css from "../Assets/css3logo.png";
import csharp from "../Assets/csharplogo.png";
import bootstrap from "../Assets/bootstraplogo.png";
const Header = () => {
  return (
    <div className="container-fluid text-light">
      <div className="row bg-light index-1 text-center d-flex justify-content-center ">
        <div className="col-12 p-2 m-h-30 spacer-20">
          <h1 className="text-shadow-3 text-dark p-2">
            Justin Gates Software Developer
          </h1>
        </div>

        <div className="col-12 col-sm-6 p-1 py-2 px-sm-3 bg-light  p-lg-5 d-flex align-items-center">
          <div className="text-left p-2 p-sm-3 shadow rounded text-shadow bg-dark">
            <h4 className="d-inline p-2 text-shadow-3 px-3  text-light">
              Profile
            </h4>
            <p className=" p-2">
              Addicted to solving problems and writing clean code. A few years
              ago i set out to build my first game.A few small games i switched
              to building software to make processes at work more efficient . A
              small android app and a bunch of full stack web applications later
              i can't imagine doing anything else with my life.
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
        <div className="col-12 col-sm-6 p-1 py-2 px-sm-3 bg-light  p-lg-5 d-flex justify-content-center">
          <div className="d-flex ">
            <img className="w-custom-logo" src={html} alt="" />
            <img className="w-custom-logo" src={css} alt="" />
            <img className="w-custom-logo" src={csharp} alt="" />
            <img className="w-custom-logo" src={node} alt="" />
            <img className="w-custom-logo" src={mongo} alt="" />
          </div>

          <h4>
            <a href="https://www.canva.com/design/DAEAUdBbbfc/XkFSpDoUP_LS1sOvgkDDuw/view?utm_content=DAEAUdBbbfc&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton">
              Resume
            </a>
          </h4>
        </div>
        <div className="col-12 col-sm-6 m-auto">
          <div className="p-2 bg-light text-primary contact-bar">
            <h4 className="p-0 m-0">
              <a
                target="_blank"
                href="www.linkedin.com/in/justin-l-gates"
                className="action"
              ></a>
              <i className="fab fa-linkedin-in py-1 action pg"></i>
              <br />
              <a
                target="_blank"
                href="https://github.com/JustinLGates"
                className="action"
              ></a>
              <i className="fab fa-github-square text-dark py-1 action pg"></i>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
