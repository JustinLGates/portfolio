import React, { Component } from "react";
import trackABugImg from "../Assets/bugtracker.png";
import homeScholarImg from "../Assets/homescholarlogo.png";
import kabanaImg from "../Assets/kanbanpic.png";
import taskmasterImg from "../Assets/taskmasterimg.png";
import mrsmithImg from "../Assets/mrsmith.png";
import inspireImg from "../Assets/inspireimg.png";
const Projects = () => {
  return (
    <div className="container-fluid px-custom px-lg-5 bg-light">
      <div className="row bg-dark d-flex justify-content-around ">
        <div className="col-12 bg-light p-0 bg-dark">
          <h4 className=" m-0 p-2 px-3 text-dark shadow bg-light rounded-bottom">
            Projects
          </h4>
        </div>
      </div>

      <div className="row bg-dark d-flex justify-content-around bp">
        <div className="col-12 col-lg-5 bg-dark col-sm-6 text-light text-shadow d-flex px-0 p-2 justify-content-start align-items-center flex-column  ">
          <h4 className="p-2 pt-md-3">HomeScholar</h4>
          <p className="p-2 ">
            As a home school teacher create lesson plans, grade students
            assignments and generate printable transcripts with ease . Share
            events or tips and tricks with other users.
          </p>
          <div className="d-flex align-items-space-around justify-content-around flex-column">
            <div className="d-flex">
              <div className="px-3">
                <h6 className="pl-3">Client:</h6>
                <ul>
                  <li>VueJs</li>
                  <li>Bootstrap</li>
                  <li>CSS</li>
                  <li>socket.io</li>
                  <li>Auth0</li>
                </ul>
              </div>
              <div className="px-3">
                <h6 className="pl-3">Server</h6>
                <ul>
                  <li>NodeJs</li>
                  <li>MongoDb</li>
                  <li>Mongoose</li>
                  <li>socket.io</li>
                </ul>
              </div>
            </div>
            <div className=" d-flex justify-content-around">
              <a
                className="p-2 mx-2"
                target="_blank"
                href="https://homescholar.herokuapp.com"
              >
                homescholar.com
              </a>
              <a
                className="p-2 mx-2"
                target="_blank"
                href="https://github.com/StevenPackard/HomeScholar"
              >
                source code
              </a>
            </div>
          </div>
        </div>

        <div className="col-12 col-lg-5 bg-dark col-sm-6 p-4 d-flex justify-content-around align-items-center flex-column text-light bg-dark animOn">
          <div className="card">
            <div>
              <img
                className="card-img-top mh-200"
                src={homeScholarImg}
                width="100"
              />
            </div>
            <div className="slide swing-in-top-fwd p-2">
              <div className="p-relative-30 bright">
                <div className="d-flex justify-content-around w-100">
                  <h5 className="bg-dark text-shadow p-2 shadow rounded">
                    <a target="_blank" href="https://homescholar.herokuapp.com">
                      <i
                        title="View site"
                        className="fas fa-link p-1 action text-light"
                      ></i>
                    </a>
                    <a
                      target="_blank"
                      href="https://github.com/StevenPackard/HomeScholar"
                    >
                      <i
                        title="View code"
                        className="fas fa-code p-1 action text-light"
                      ></i>
                    </a>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row d-flex justify-content-around bg-dark bp p-2">
        <div className="col-12 p-0 p-sm-2 col-lg-5 bg-dark col-sm-6 text-light text-shadow d-flex justify-content-start align-items-center flex-column ">
          <h4 className="p-sm-2 pt-md-4">Bug tracker</h4>
          <p className="p-sm-2 pt-md-4">
            Report and track bugs in your application. Update the status or make
            notes for other developers as needed.
          </p>
          <div className="d-flex flex-column align-items-center">
            <div className="d-flex justify-content-center">
              <div className="px-sm-3">
                <h6 className="pl-sm-3">Client:</h6>
                <ul>
                  <li>VueJs</li>
                  <li>Bootstrap</li>
                  <li>CSS</li>
                </ul>
              </div>
              <div className="px-3">
                <h6 className="pl-3">Server</h6>
                <ul>
                  <li>NodeJs</li>
                  <li>MongoDb</li>
                </ul>
              </div>
            </div>
            <div className=" d-flex justify-content-around">
              <a
                className="p-2 mx-2"
                target="_blank"
                href="https://track-a-bug.herokuapp.com/"
              >
                trackabug.com
              </a>
              <a
                className="p-2 mx-2"
                target="_blank"
                href="https://github.com/JustinLGates/bugtracker"
              >
                source code
              </a>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-5 bg-dark col-sm-6 p-4 d-flex justify-content-around align-items-center flex-column text-light bg-dark animOn">
          <div className="card">
            <div>
              <img
                className="card-img-top mh-200"
                src={trackABugImg}
                width="100"
              />
            </div>
            <div className="slide swing-in-top-fwd p-2">
              <div className="p-relative-30 bright">
                <div className="d-flex justify-content-around w-100">
                  <h5 className="bg-dark text-shadow p-2 shadow rounded">
                    <a
                      target="_blank"
                      href="https://track-a-bug.herokuapp.com/"
                    >
                      <i
                        title="View Site"
                        className="fas fa-link p-1 action text-light"
                      ></i>
                    </a>
                    <a
                      target="_blank"
                      href="https://github.com/JustinLGates/bugtracker"
                    >
                      <i
                        title="View code"
                        className="fas fa-code p-1 action text-light"
                      ></i>
                    </a>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row d-flex justify-content-around bg-dark bp p-2">
        <div className="col-12 p-0 p-sm-2 col-lg-5 bg-dark col-sm-6 text-light text-shadow d-flex justify-content-start align-items-center flex-column ">
          <h4 className="p-sm-2 pt-md-4">Kanban</h4>
          <p className="p-sm-2 pt-md-4">
            Inspired by Trello make boards and create tasks for each board.
            collaborate with others and leave notes for other collaborators.
          </p>
          <div className="d-flex align-items-space-around justify-content-around flex-column">
            <div className="d-flex">
              <div className="px-sm-3">
                <h6 className="pl-sm-3">Client:</h6>
                <ul>
                  <li>VueJs</li>
                  <li>Bootstrap</li>
                  <li>V-tour</li>
                  <li>CSS</li>
                </ul>
              </div>
              <div className="px-3">
                <h6 className="pl-3">Server</h6>
                <ul>
                  <li>NodeJs</li>
                  <li>MongoDb</li>
                </ul>
              </div>
            </div>
            <div className=" d-flex justify-content-around">
              <a
                className="p-2 mx-2"
                target="_blank"
                href="https://kanbankabana1.herokuapp.com"
              >
                kanbankabana.com
              </a>
              <a
                className="p-2 mx-2"
                target="_blank"
                href="https://github.com/christopherfelt/kanban"
              >
                source code
              </a>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-5 bg-dark col-sm-6 p-4 d-flex justify-content-around align-items-center flex-column text-light bg-dark animOn">
          <div className="card">
            <div>
              <img
                className="card-img-top mh-200"
                src={kabanaImg}
                width="100"
              />
            </div>
            <div className="slide swing-in-top-fwd p-2">
              <div className="p-relative-30 bright">
                <div className="d-flex justify-content-around w-100">
                  <h5 className="bg-dark text-shadow p-2 shadow rounded">
                    <a
                      target="_blank"
                      href="https://kanbankabana1.herokuapp.com"
                    >
                      <i
                        title="View Site"
                        className="fas fa-link p-1 action text-light"
                      ></i>
                    </a>
                    <a
                      target="_blank"
                      href="https://github.com/christopherfelt/kanban"
                    >
                      <i
                        title="View code"
                        className="fas fa-code p-1 action text-light"
                      ></i>
                    </a>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row d-flex justify-content-around bg-dark bp p-2">
        <div className="col-12 p-0 p-sm-2 col-lg-5 bg-dark col-sm-6 text-light text-shadow d-flex justify-content-start align-items-center flex-column ">
          <h4 className="p-sm-2 pt-md-4">Inspire</h4>
          <p className="p-sm-2 pt-md-4">
            Get inspired with a quote of the day and keep track of all or your
            taskes and there status.
          </p>
          <div className="d-flex align-items-space-around justify-content-around flex-column">
            <div className="d-flex">
              <div className="px-sm-3">
                <h6 className="pl-sm-3">Client:</h6>
                <ul>
                  <li>Vanilla javascript</li>
                  <li>Bootstrap</li>
                  <li>CSS</li>
                </ul>
              </div>
            </div>
            <div className=" d-flex justify-content-around">
              <a
                className="p-2 mx-2"
                target="_blank"
                href="https://justinlgates.github.io/inspireapi "
              >
                Inspire.com
              </a>
              <a
                className="p-2 mx-2"
                target="_blank"
                href="https://github.com/JustinLGates/inspireapi"
              >
                source code
              </a>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-5 bg-dark col-sm-6 p-4 d-flex justify-content-around align-items-center flex-column text-light bg-dark animOn">
          <div className="card">
            <div>
              <img
                className="card-img-top mh-200"
                src={inspireImg}
                width="100"
              />
            </div>
            <div className="slide swing-in-top-fwd p-2">
              <div className="p-relative-30 bright">
                <div className="d-flex justify-content-around w-100">
                  <h5 className="bg-dark text-shadow p-2 shadow rounded">
                    <a
                      target="_blank"
                      href="https://justinlgates.github.io/inspireapi "
                    >
                      <i
                        title="View Site"
                        className="fas fa-link p-1 action text-light"
                      ></i>
                    </a>
                    <a
                      target="_blank"
                      href="https://github.com/JustinLGates/inspireapi"
                    >
                      <i
                        title="View code"
                        className="fas fa-code p-1 action text-light"
                      ></i>
                    </a>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row d-flex justify-content-around bg-dark bp p-2">
        <div className="col-12 p-0 p-sm-2 col-lg-5 bg-dark col-sm-6 text-light text-shadow d-flex justify-content-start align-items-center flex-column ">
          <h4 className="p-sm-2 pt-md-4">Task Master</h4>
          <p className="p-sm-2 pt-md-4">
            Just a basic todo list nothing to fancy here.Using axios for calls
            to an external public web api to store and update todos.
          </p>
          <div className="d-flex align-items-space-around justify-content-around flex-column">
            <div className="d-flex">
              <div className="px-sm-3">
                <h6 className="pl-sm-3">Client:</h6>
                <ul>
                  <li>Vanilla javascript</li>
                  <li>Bootstrap</li>
                  <li>Axios</li>
                  <li>CSS</li>
                </ul>
              </div>
            </div>
            <div className=" d-flex justify-content-around">
              <a
                className="p-2 mx-2"
                target="_blank"
                href="https://justinlgates.github.io/TaskMaster"
              >
                Taskmaster.com
              </a>
              <a
                className="p-2 mx-2"
                target="_blank"
                href="https://github.com/JustinLGates/TaskMaster"
              >
                source code
              </a>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-5 bg-dark col-sm-6 p-4 d-flex justify-content-around align-items-center flex-column text-light bg-dark animOn">
          <div className="card">
            <div>
              <img
                className="card-img-top mh-200"
                src={taskmasterImg}
                width="100"
              />
            </div>
            <div className="slide swing-in-top-fwd p-2">
              <div className="p-relative-30 bright">
                <div className="d-flex justify-content-around w-100">
                  <h5 className="bg-dark text-shadow p-2 shadow rounded">
                    <a
                      target="_blank"
                      href="https://justinlgates.github.io/TaskMaster"
                    >
                      <i
                        title="View Site"
                        className="fas fa-link p-1 action text-light"
                      ></i>
                    </a>
                    <a
                      target="_blank"
                      href="https://github.com/JustinLGates/TaskMaster"
                    >
                      <i
                        title="View code"
                        className="fas fa-code p-1 action text-light"
                      ></i>
                    </a>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row d-flex justify-content-around bg-dark bp p-2">
        {/* 
https://justinlgates.github.io/mrsmith/
 git hub

*/}
        <div className="col-12 p-0 p-sm-2 col-lg-5 bg-dark col-sm-6 text-light text-shadow d-flex justify-content-start align-items-center flex-column ">
          <h4 className="p-sm-2 pt-md-4">Mr Smith</h4>
          <p className="p-sm-2 pt-md-4">
            An idle clicker game that takes you on an adventure as a blacksmith.
            After your first few click get some help by purchasing upgrades.
          </p>
          <div className="d-flex align-items-space-around justify-content-around flex-column">
            <div className="d-flex">
              <div className="px-sm-3">
                <h6 className="pl-sm-3">Client:</h6>
                <ul>
                  <li>Vanilla javascript</li>
                  <li>Bootstrap</li>
                  <li>V-tour</li>
                  <li>CSS</li>
                </ul>
              </div>
            </div>
            <div className=" d-flex justify-content-around">
              <a
                className="p-2 mx-2"
                target="_blank"
                href="https://justinlgates.github.io/mrsmith"
              >
                Mrsmith.com
              </a>
              <a
                className="p-2 mx-2"
                target="_blank"
                href="https://github.com/JustinLGates/mrsmith"
              >
                source code
              </a>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-5 bg-dark col-sm-6 p-4 d-flex justify-content-around align-items-center flex-column text-light bg-dark animOn">
          <div className="card">
            <div>
              <img
                className="card-img-top mh-200"
                src={mrsmithImg}
                width="100"
              />
            </div>
            <div className="slide swing-in-top-fwd p-2">
              <div className="p-relative-30 bright">
                <div className="d-flex justify-content-around w-100">
                  <h5 className="bg-dark text-shadow p-2 shadow rounded">
                    <a
                      target="_blank"
                      href="https://justinlgates.github.io/mrsmith"
                    >
                      <i
                        title="View Site"
                        className="fas fa-link p-1 action text-light"
                      ></i>
                    </a>
                    <a
                      target="_blank"
                      href="https://github.com/JustinLGates/mrsmith"
                    >
                      <i
                        title="View code"
                        className="fas fa-code p-1 action text-light"
                      ></i>
                    </a>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
