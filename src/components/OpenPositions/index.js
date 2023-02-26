import React, { useState } from "react";
import * as Scroll from "react-scroll";
import Button from "../Button";
import Container from "../Container";
import SectionHeader from "../SectionHeader";
import SlickSlider from "../SlickSlider";

import styles from "./OpenPositions.module.scss";

let ScrollLink = Scroll.Link;

let Element = Scroll.Element;

export default function OpenPositions() {
  const [openContact, setOpenContact] = useState(false);
  function handleOpenContact() {
    setOpenContact(!openContact);
  }
  return (
    <>
      <section className={styles.open}>
        <Container>
          <SectionHeader
            sectionClassName={`text-center ${styles.header}`}
            title={"Open <span class='text-purple'>Position</span>"}
          ></SectionHeader>
          <SlickSlider
            arrows={"true"}
            slidesToShow={1}
            slidesToShowLaptop={1}
            slidesToShowTablet={1}
            slidesToShowMobile={1}
            slidesToScroll={1}
            slidesToScrollLaptop={1}
            slidesToScrollTablet={1}
            slidesToScrollMobile={1}
          >
            <div className="job-item">
              <div className="job-item__avatar"></div>
              <div className="job-item__info">
                <div className="job-item__header">
                  FULL STACK DEVELOPER{" "}
                  <span className="text-purple">(Full-time job, hybrid)</span>
                </div>
                <div className="job-item__body">
                  We are in the process of launching a web platform that can
                  also be used by mobile apps and that has social networking,
                  e-learning, video conferencing and recruiting capabilities. A
                  high-level platform that is more complex than Facebook, Udemy
                  or similar platforms. We already have several teams but we are
                  now building others to complete the structure. If you have
                  excellent programming skills and if you have the ambition to
                  work in a complex and advanced project like ours, we would
                  like to meet you. As a back-end developer, you will work
                  closely with our engineers and will be placed in
                  organisational structures we call squads that interact
                  directly with the growth area.
                </div>
                <div className="job-item__desc">
                  <div className="text-purple job-title">Job Description</div>
                  The selected candidate should:
                  <ul>
                    <li>Have at least five years of experience;</li>
                    <li>
                      {" "}
                      Have a good understanding of the Typescript type system;
                    </li>
                    <li> Be familiar with Git concepts; </li>{" "}
                    <li>
                      {" "}
                      Know how to create clear code and be able to comment on
                      critical code blocks;
                    </li>{" "}
                    <li>
                      {" "}
                      Respect workflows and help improve them where possible;{" "}
                    </li>{" "}
                    <li>
                      {" "}
                      Have a good understanding of OOP and functional
                      programming, composition on inheritance, immutable data
                      structure, SOLID principles, one-way data flow;{" "}
                    </li>{" "}
                    <li> Have analytical skills; </li> <li> PostgreSQL* </li>{" "}
                    <li> GitLab CI/CD* </li> <li> GitLab CI/CD* </li>{" "}
                    <li> Mongo DB* </li>
                  </ul>
                  (*knowledge considered positive)
                </div>
                <div className="job-item__skill">
                  <div className="d-flex gap-20">
                    <div className="">
                      <div className="text-purple job-title">Soft skill</div>
                      Effective communication
                      <br /> Teamwork <br /> Problem solving <br />
                      Organisational skills <br /> Goal orientation <br />{" "}
                      Critical thinking <br />
                      Lateral thinking <br /> Time management
                    </div>
                    <div className="">
                      <div className="text-purple job-title">Hard skill</div>
                      <div className="d-flex gap-20">
                        <div className="d-flex">
                          AWS <br /> Typescript <br /> Storybook <br /> Next.js{" "}
                          <br /> Redux
                          <br /> RESTful <br /> API <br /> Jest <br />
                          Cypress <br /> Nodejs
                        </div>
                        <div className="d-flex">
                          Express.js
                          <br /> TypeORM
                          <br /> Docker <br /> Microservices <br /> Clean
                          Architecture <br /> Redis <br /> Knowledge of
                          Scrum/Agile <br /> methodologies English
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="job-item__button">
                <ScrollLink
                  to="jobform"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  <Button
                    className={"button--purple"}
                    onClick={handleOpenContact}
                  >
                    APPLY
                  </Button>
                </ScrollLink>
              </div>
            </div>
            <div className="job-item">
              <div className="job-item__avatar"></div>
              <div className="job-item__info">
                <div className="job-item__header">
                  BACKEND DEVELOPER{" "}
                  <span className="text-purple">(AWS, hybrid)</span>
                </div>
                <div className="job-item__body">
                  We are in the process of launching a web platform that can
                  also be used by mobile apps and that has social networking,
                  e-learning, video conferencing and recruiting capabilities. A
                  high-level platform that is more complex than Facebook, Udemy
                  or similar platforms. We already have several teams but we are
                  now building others to complete the structure. If you have
                  excellent programming skills and if you have the ambition to
                  work in a complex and advanced project like ours, we would
                  like to meet you. As a back-end developer, you will work
                  closely with our engineers and will be placed in
                  organisational structures we call squads that interact
                  directly with the growth area.
                </div>
                <div className="job-item__desc">
                  <div className="text-purple job-title">Job Description</div>
                  The selected candidate should:
                  <ul>
                    <li>Have at least five years of experience;</li>
                    <li>
                      {" "}
                      Have a good understanding of the Typescript type system;
                    </li>
                    <li> Be familiar with Git concepts; </li>{" "}
                    <li>
                      {" "}
                      Know how to create clear code and be able to comment on
                      critical code blocks;
                    </li>{" "}
                    <li>
                      {" "}
                      Respect workflows and help improve them where possible;{" "}
                    </li>{" "}
                    <li>
                      {" "}
                      Have a good understanding of OOP and functional
                      programming, composition on inheritance, immutable data
                      structure, SOLID principles, one-way data flow;{" "}
                    </li>{" "}
                    <li> Have analytical skills; </li> <li> PostgreSQL* </li>{" "}
                    <li> GitLab CI/CD* </li> <li> GitLab CI/CD* </li>{" "}
                    <li> Mongo DB* </li>
                  </ul>
                  (*knowledge considered positive)
                </div>
                <div className="job-item__skill">
                  <div className="d-flex gap-20">
                    <div className="">
                      <div className="text-purple job-title">Soft skill</div>
                      Effective communication
                      <br /> Teamwork <br /> Problem solving <br />
                      Organisational skills <br /> Goal orientation <br />{" "}
                      Critical thinking <br />
                      Lateral thinking <br /> Time management
                    </div>
                    <div className="">
                      <div className="text-purple job-title">Hard skill</div>
                      <div className="d-flex gap-20">
                        <div className="d-flex">
                          AWS <br /> Typescript <br /> Storybook <br /> Next.js{" "}
                          <br /> Redux
                          <br /> RESTful <br /> API <br /> Jest <br />
                          Cypress <br /> Nodejs
                        </div>
                        <div className="d-flex">
                          Express.js
                          <br /> TypeORM
                          <br /> Docker <br /> Microservices <br /> Clean
                          Architecture <br /> Redis <br /> Knowledge of
                          Scrum/Agile <br /> methodologies English
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="job-item__button">
                <ScrollLink
                  to="jobform"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  <Button
                    className={"button--purple"}
                    onClick={handleOpenContact}
                  >
                    APPLY
                  </Button>
                </ScrollLink>
              </div>
            </div>
          </SlickSlider>
        </Container>
      </section>

      <Element name="jobform">
        <section className={`contact ${openContact ? "is-show" : ""}`}>
          <Container>
            <SectionHeader
              subText={"CONTACT"}
              title={"Get In <span class='text-purple d-block'>Touch</span>"}
            ></SectionHeader>
            <div className="contact-wrap">
              <div className="row">
                <div className="col-12 col-xl-2 col-md-4">
                  <div className="contact__item">
                    <div className="contact__icon"></div>
                    <div className="contact__name">Office</div>
                    <div className="contact__info">
                      YLIWAY <br /> Via Cassia, <br /> 1081 00189 Rome (Italy)
                    </div>
                  </div>
                  <div className="contact__item">
                    <div className="contact__icon"></div>
                    <div className="contact__name">Email</div>
                    <div className="contact__info">meera@yliway.com</div>
                  </div>
                </div>
                <div className="col-12 col-xl-8 col-md-8 ms-auto">
                  <form className="contact-form">
                    <div className="form-group">
                      <input
                        className="form-control"
                        placeholder="Name"
                        type="text"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        className="form-control"
                        placeholder="Email"
                        type="email"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        className="form-control"
                        placeholder="Name"
                        type="text"
                      />
                    </div>
                    <div className="form-group">
                      <textarea
                        className="form-control"
                        placeholder="Message"
                      ></textarea>
                    </div>
                    <div className="text-center">
                      <Button className={"button--purple"}>
                        SUBMIT MESSAGE
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </Element>
    </>
  );
}
